import { getChallengesByIds } from "@/services/challenge";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  ctx: RouteContext<"/api/like/[[...slug]]">,
): Promise<NextResponse<MinimalChallenge["id"][] | MinimalChallenge[]>> {
  const { slug } = await ctx.params;
  // if (!slug) return NextResponse.json([]);
  // return NextResponse.json(slug);

  // const cookieStore = await cookies();
  // const data = cookieStore.get("liked");

  const data = req.cookies.get("liked");
  if (!data) return NextResponse.json([]);

  const ids = JSON.parse(data.value) as MinimalChallenge["id"][];

  if (slug?.[0] === "challenges") {
    return NextResponse.json(await getChallengesByIds(ids));
  }

  return NextResponse.json(ids);
}

export async function POST(req: NextRequest) {
  const { challenge } = await req.json();
  if (!challenge || !challenge.id) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "El objeto challenge y su ID son obligatorios.",
      },
      { status: 400 },
    );
  }

  const data = req.cookies.get("liked");
  const prevIds: MinimalChallenge["id"][] = data ? JSON.parse(data.value) : [];

  const idSet = new Set(prevIds);
  idSet.add(challenge.id);
  const ids = Array.from(idSet);

  const res = NextResponse.json(ids);
  res.cookies.set("liked", JSON.stringify(ids), {
    path: "/",
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies#block_access_to_your_cookies
    // secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  });
  return res;
}

export async function DELETE(
  req: NextRequest,
): Promise<NextResponse<{ count: number }>> {
  const data = req.cookies.get("liked");
  if (!data) return NextResponse.json({ count: 0 });

  const ids = JSON.parse(data.value) as MinimalChallenge["id"][];

  const res = NextResponse.json({ count: ids.length });
  res.cookies.delete({
    name: "liked",
    path: "/",
  });
  return res;
}

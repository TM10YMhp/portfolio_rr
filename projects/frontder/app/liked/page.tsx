// import Link from "next/link";
// import Image from "next/image";
// import { getBase64 } from "@/util/base64";
// import { getChallengesByIds } from "@/services/challenge";
// import { cookies } from "next/headers";
import { Metadata } from "next";
import LikedClient from "./client";

// async function getSavedChallenges(): Promise<MinimalChallenge[]> {
//   // await new Promise((resolve) => setTimeout(resolve, 1000));
//   const cookieStore = await cookies();
//   const data = cookieStore.get("liked");
//   if (!data) return [];

//   const ids = JSON.parse(data.value);
//   return getChallengesByIds(ids);
// }

export const metadata: Metadata = {
  title: "Frontder | Retos guardados",
  description: "Visualiza y gestiona tus retos guardados.",
};

export default async function LikedPage() {
  return <LikedClient />;
}

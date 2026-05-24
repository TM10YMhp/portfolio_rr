import { data } from "react-router";
import type { Route } from "./+types/resources.theme";
import { themeCookie } from "~/utils/theme.server";

// https://reactrouter.com/explanation/sessions-and-cookies#user-preferences-example
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const theme = formData.get("theme");

  if (typeof theme !== "string") return data({ success: false });

  return data(
    { success: true },
    {
      headers: {
        "Set-Cookie": await themeCookie.serialize(theme),
      },
    },
  );
}

// https://github.com/remix-run/react-router/discussions/11660
export function loader() {
  return new Response(null, {
    status: 204, // "No Content"
  });
}

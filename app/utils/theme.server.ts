import { createCookie } from "react-router";

// https://reactrouter.com/explanation/sessions-and-cookies#using-cookies
export const themeCookie = createCookie("theme", {
  maxAge: 60 * 60 * 24 * 28, // 28 días
});

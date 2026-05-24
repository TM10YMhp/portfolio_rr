export function loader() {
  return new Response(null, {
    status: 204, // "No Content"
    headers: {
      "Content-Type": "application/json",
    },
  });
}

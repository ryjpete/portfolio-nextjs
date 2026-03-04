export async function GET() {
  const res = await fetch("https://esahubble.org/images/feed/category/nebulae/");
  const xml = await res.text();
  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}

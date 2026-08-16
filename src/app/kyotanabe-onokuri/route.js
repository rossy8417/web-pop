const SOURCE_URL =
  "https://raw.githubusercontent.com/rossy8417/web-pop/main/shares/kyotanabe-onokuri/index.html";

export const dynamic = "force-dynamic";

export async function GET() {
  const response = await fetch(SOURCE_URL, { cache: "no-store" });

  if (!response.ok) {
    return new Response("ページを読み込めませんでした。", {
      status: 502,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const html = await response.text();

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

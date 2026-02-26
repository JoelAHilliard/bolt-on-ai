const server = Bun.serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const html = await Bun.file("index.html").text();
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`Server running on port ${server.port}`);
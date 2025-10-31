export default {
  async fetch(_req: Request) {
    return new Response("Worker is alive ✅", { status: 200 });
  }
};

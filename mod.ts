import { Hono } from "@hono/hono";
import embed from "./embed/mod.ts";

export class Heynote {
    constructor() {}

    fetch = (req: Request): Response | Promise<Response> => {
        const app = new Hono();

        app.get("/api/buffer", () => {
            const text = localStorage.getItem("note") || "";
            return new Response(text, {
                headers: {
                    "content-type": "text/plain",
                },
            });
        });

        app.post("/api/buffer", async (c) => {
            const text = await c.req.text();
            localStorage.setItem("note", text);
            return new Response(null, { status: 204 });
        });

        app.get(
            "*",
            (c) => {
                return embed.serve(c.req.raw);
            },
        );

        return app.fetch(req);
    };
}

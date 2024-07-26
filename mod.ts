import { Hono } from "./deps.ts";
import embed from "./embed/mod.ts";

export type HeynoteOptions = {
    filepath?: string;
};

export class Heynote {
    constructor(public options: HeynoteOptions = {}) {}

    get filepath() {
        return this.options.filepath || "heynote.txt";
    }

    fetch = (req: Request): Response | Promise<Response> => {
        const app = new Hono();

        app.get("/api/load", async () => {
            try {
                const text = await Deno.readTextFile(this.filepath);
                return new Response(text, {
                    headers: {
                        "Content-Type": "text/plain",
                    },
                });
            } catch (_) {
                return new Response(null, { status: 204 });
            }
        });

        app.get("/api/save", async (c) => {
            const text = await c.req.text();
            await Deno.writeTextFile(this.filepath, text);
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

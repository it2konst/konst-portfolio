import { readFileSync } from "fs";
import { join } from "path";

export default defineEventHandler((event) => {
    const jsonPath = join(process.cwd(), "static", "options.json");
    const jsonData = JSON.parse(readFileSync(jsonPath, "utf-8"));

    const { limit } = getQuery(event);
    const cards = jsonData.cards.slice(
        0,
        limit ? parseInt(limit, 10) : jsonData.cards.length
    );

    return cards;
});

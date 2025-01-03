import { readFile } from "fs/promises";
import { join } from "path";
import { defineEventHandler } from "h3";

interface Card {
    id: number;
    title: string;
}

interface JsonData {
    cards: Card[];
}

export default defineEventHandler(async (event) => {
    const jsonPath = join(process.cwd(), "public", "project-cards.json");

    // Асинхронное чтение файла
    const fileContent = await readFile(jsonPath, "utf-8");
    const jsonData: JsonData = JSON.parse(fileContent);

    return jsonData.cards;
});

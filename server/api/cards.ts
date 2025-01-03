import { readFile } from "fs/promises";
import { join } from "path";
import { defineEventHandler } from "h3";

// Путь к JSON-файлу
const projectCardsPath = "/server/project-cards.json";

interface Card {
    id: number;
    title: string;
}

interface JsonData {
    cards: Card[];
}

export default defineEventHandler(async (event) => {
    // Формируем полный путь к файлу
    const jsonPath = join(process.cwd(), projectCardsPath);

    // Асинхронное чтение файла
    const fileContent = await readFile(jsonPath, "utf-8");
    const jsonData: JsonData = JSON.parse(fileContent);

    return jsonData.cards;
});

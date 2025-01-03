import fetch from "node-fetch";

export default defineEventHandler(async (event) => {
    const baseUrl = process.env.BASE_URL || "https://konst-portfolio.vercel.app"; // Заменить на свой домен
    const response = await fetch(`${baseUrl}/card-data.json`);
    const jsonData = await response.json();

    const { limit } = getQuery(event);
    const cards = jsonData.cards.slice(0, limit ? parseInt(limit, 10) : jsonData.cards.length);

    return cards;
});

import { defineEventHandler, createError } from "h3";
import { jsonData } from "../../data";

export default defineEventHandler(async (event) => {
    // Получаем ID из параметров маршрута
    const cardId = event.context.params?.id;

    if (!cardId) {
        throw createError({
            statusCode: 400,
            statusMessage: "Card ID is required",
        });
    }

    // Преобразуем ID в число
    const id = Number(cardId);

    if (isNaN(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid Card ID",
        });
    }

    // Ищем карточку по ID
    const card = jsonData.cards.find((card) => card.id === id);

    if (!card) {
        throw createError({
            statusCode: 404,
            statusMessage: "Card not found",
        });
    }

    // Возвращаем найденную карточку
    return card;
});

import { defineEventHandler, createError } from "h3";
import { jsonData } from "../../data";

export default defineEventHandler(async (event) => {
    const cardIdParam = event.context.params?.id;

    if (!cardIdParam) {
        throw createError({
            statusCode: 400,
            statusMessage: "Card ID is required",
        });
    }

    const cardId = Number(cardIdParam);

    if (isNaN(cardId)) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid Card ID",
        });
    }

    const card = jsonData.cards.find((card) => card.id === cardId);

    if (!card) {
        throw createError({
            statusCode: 404,
            statusMessage: "Card not found",
        });
    }

    return card;
});

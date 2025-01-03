import { defineEventHandler } from "h3";
import { jsonData } from "../data";

export default defineEventHandler(async (event) => {
    return jsonData.cards;
});

import { defineEventHandler, createError } from "h3";

interface Card {
    id: number;
    title: string;
    desc: string;
    dataDesc: string;
    dataLang?: string;
    img: string;
    imgAlt: string;
    svgIcon: string;
    gitHub: string;
    liveSite: string;
}

interface JsonData {
    cards: Card[];
}

// Встроенные JSON-данные
const jsonData: JsonData = {
    cards: [
        {
            id: 1,
            title: "Lingua Boost",
            desc: "<i>Stack</i>: <b>Vue 3 / Tailwind / Vite &#10155;</b>",
            dataDesc: "Проект в разработке.",
            dataLang: "ru-Ru",
            img: "/images/card/vue-es-lp.png",
            imgAlt: "Lingua Boost",
            svgIcon: "icon-vue",
            gitHub: "https://github.com/it2konst/es-lp",
            liveSite: "https://es-lp.vercel.app",
        },
        {
            id: 2,
            title: "Vue Sneakers",
            desc: "<i>Stack</i>: <b>Vue 3 / Tailwind / Vite &#10155;</b>",
            dataDesc: "Development of the Vue Sneakers online store (fetches data from server).",
            img: "/images/card/vue-sneakers.png",
            imgAlt: "Sneakers",
            svgIcon: "icon-vue",
            gitHub: "https://github.com/it2konst/vue-sneakers",
            liveSite: "https://vue-sneakers-rho-brown.vercel.app",
        },
        {
            id: 3,
            title: "Технопрофи",
            desc: "<i>Stack</i>: <b>HTML / SCSS / JavaScript &#10024;</b>",
            dataDesc: "Часть коммерческого проекта выложенного в репозитории для портфолио.",
            dataLang: "ru-Ru",
            img: "/images/card/html5-technoprofi.png",
            imgAlt: "Технопрофи",
            svgIcon: "icon-html5",
            gitHub: "https://github.com/it2konst/technoprofi",
            liveSite: "https://it2konst.github.io/technoprofi",
        },
        {
            id: 4,
            title: "Portfolio Website",
            desc: "<i>Stack</i>: <b>HTML / SCSS / JavaScript &#10024;</b>",
            dataDesc: "Адаптивный веб-сайт, разработанный с использованием SCSS и JavaScript.",
            dataLang: "ru-Ru",
            img: "/images/card/html5-portfolio-website.png",
            imgAlt: "Portfolio Website",
            svgIcon: "icon-html5",
            gitHub: "https://github.com/it2konst/site-portfolio",
            liveSite: "https://it2konst.github.io/site-portfolio",
        },
    ],
};

// Обработчик для получения всех карточек
export default defineEventHandler(async (event) => {
    return jsonData.cards;
});

// Обработчик для получения конкретной карточки по ID
export const getCardById = defineEventHandler(async (event) => {
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

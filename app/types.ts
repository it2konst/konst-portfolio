export interface ProCardResponse {
    cards: ProCard[];
    total: number;
    skip: number;
    limit: number;
    success: boolean;
    error: string;
}

export interface ProCard {
    id: number;
    title: string;
    desc: string;
    descLang: string;
    dataDesc: string;
    dataLang: string;
    liveSite: string;
    gitHub: string;
    img: string;
    imgAlt: string;
    svgIcon: string;
}

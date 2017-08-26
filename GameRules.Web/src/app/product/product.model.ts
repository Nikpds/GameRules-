export class Product {
    id: string;
    availability: number;
    siteStock: SiteAvailablity
    siteId: string
    echoStock: string;
    kaissaStock: number;
    kaissaId: string;
    blackfireId: string;
    title: string;
    quantity: number;
    initialPrice: number;
    discountPrice: number;
    updated: Date;
    registered: Date;
    photoLink: string;
}
export enum SiteAvailablity {
    Available,
    Unavalaible,
    Coming_Soon,
    WeekAway,
    Unknown
}

export interface RootObject {
    originalRequest: OriginalRequest;
    totalResultSize: number;
    products: ProductsItem[];
}
interface OriginalRequest {
    category: Category;
    refinementGroups: RefinementGroupsItem[];
}
interface Category {
}
interface RefinementGroupsItem {
    id: string;
    name: string;
    multiSelect: boolean;
    refinements: RefinementsItem[];
}
interface RefinementsItem {
    id: string;
    name: string;
}
export interface ProductsItem {
    id: string;
    ean: string;
    gpc: string;
    title: string;
    specsTag: string;
    summary: string;
    rating: number;
    shortDescription: string;
    longDescription: string;
    urls: UrlsItem[];
    images: ImagesItem[];
    media: MediaItem[];
    offerData: OfferData;
    parentCategoryPaths: ParentCategoryPathsItem[];
}
interface UrlsItem {
    key: string;
    value: string;
}
interface ImagesItem {
    type: string;
    key: string;
    url: string;
}
interface MediaItem {
    type: string;
    key: string;
    url: string;
}
interface OfferData {
    bolCom: number;
    nonProfessionalSellers: number;
    professionalSellers: number;
    offers: OffersItem[];
}
interface OffersItem {
    id: string;
    condition: string;
    price: number;
    availabilityCode: string;
    availabilityDescription: string;
    comment: string;
    seller: Seller;
    bestOffer: boolean;
}
interface Seller {
    id: string;
    sellerType: string;
    displayName: string;
    topSeller: boolean;
    logo: string;
    sellerInformation: string;
    useWarrantyRepairConditions: boolean;
    registrationDate: string;
}
interface ParentCategoryPathsItem {
    parentCategories: ParentCategoriesItem[];
}
interface ParentCategoriesItem {
    id: string;
    name: string;
}

export type Option = {
    label: string;
    value: string;
};

export type SortOption = {
    label: string;
    value: "addedDate" | "releaseDate" | "finishedDate" | "imdbRating" | "personalRating";
};

export type OrderOption = {
    label: string;
    value: "desc" | "asc"
};

export type RatingKey = "min" | "max";

export type FilterOptions = {
    category: Option[];
    status: Option[];
    sort: {
        by: SortOption[];
        order: OrderOption[];
    };
    watchedDate: Option[];
    rating: {
        personal: { label: string; type: RatingKey }[];
        imdb: { label: string; type: RatingKey }[];
    }
}
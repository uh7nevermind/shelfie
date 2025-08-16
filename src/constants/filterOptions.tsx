import type { FilterOptions } from "../types/filters"

export const filterOptions: FilterOptions = {
    category: [
        { label: "Все", value: "all" },
        { label: "Фильмы", value: "films" },
        { label: "Сериалы", value: "series" },
    ],
    status: [
        { label: "Все", value: "all" },
        { label: "Запланированно", value: "planned" },
        { label: "Смотрю", value: "watching" },
        { label: "Просмотрено", value: "finished" },
        { label: "Брошено", value: "dropped" },
    ],
    sort: {
        by: [ 
            { label: "Дата добавления", value: "addedDate" },
            { label: "Дата релиза", value: "releaseDate" },
            { label: "Дата просмотра", value: "finishedDate" },
            { label: "IMDB рейтинг", value: "imdbRating" },
            { label: "Мой рейтинг", value: "personalRating" },
        ],
        order: [
            { label: "↓ Убывание", value: "desc" },
            { label: "↑ Возрастание", value: "asc" },
        ]
    },
    watchedDate: [ 
        { label: "Любая", value: "any" },
        { label: "До", value: "before" },
        { label: "После", value: "after" },
        { label: "В этот день", value: "on" },
    ],
    rating: {
        personal: [
            { label: "от", type: "min" },
            { label: "до", type: "max" },
        ],
        imdb: [
            { label: "от", type: "min" },
            { label: "до", type: "max" },
        ],
    }
}

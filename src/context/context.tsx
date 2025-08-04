import { createContext, useContext, useState } from "react";

const MediaContext = createContext(null);

export const MediaProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [filters, setFilters] = useState({
        category: 'all',
        status: 'all',
        sort: {
            by: 'releaseDate', // 'releaseDate' | 'imdbRating' | 'personalRating' | 'watchedDate'
            order: 'desc' // 'asc' | 'desc'
        },
        watchedDate: {
            mode: 'any', // 'any' | 'before' | 'after' | 'on'
            value: null // ISO строка даты | null
        },
        rating: {
            personal: null, // Число от 0 до 10 | null
            imdb: null // Число от 0 до 10 | null
        }
    });
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <MediaContext.Provider value={{
            items,
            setItems,
            filters,
            setFilters,
            searchQuery,
            setSearchQuery
        }}>
            {children}
        </MediaContext.Provider>
    );
}

export const useMedia = () => useContext(MediaContext);
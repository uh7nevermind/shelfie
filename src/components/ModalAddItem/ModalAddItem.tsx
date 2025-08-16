import { useState } from "react"
import { filterOptions } from "../../constants/filterOptions";
import "./ModalAddItem.css"

export default function ModalAddItem () {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchCategory, setSearchCategory] = useState("movie");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const toggleCategory = () => {
        const newCategory = searchCategory === "movie" ? "tv" : "movie";
        setSearchCategory(newCategory);
        onChange?.(newCategory);
    };


    return (
        <div className="modal-overlay">
            <form className="add-item">
                <fieldset className="flex center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Найти фильм или сериал..."
                    />
                    <button 
                        type="button"
                        className="category-toggle" 
                        onClick={toggleCategory}
                    >
                        {searchCategory === "movie" ? "Фильмы" : "Сериалы"}
                    </button>
                </fieldset>

                <fieldset className="modal-item-container">
                    {/*{searchResults.length} > 0 && (
                        <ul className="search-results">
                            {searchResults.map(movie => (
                                <li key={movie.id} onClick={() => setSelectedMovie(movie)}
                                    {movie.title} ({movie.year})
                                </li>
                            ))}
                        </ul>
                    ) */}
                </fieldset>
            </form>
        </div>
    )
}   
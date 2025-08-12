import "./ModalAddItem.css"

export default function ModalAddItem () {
    return (
        <div className="modal-overlay">
            <form className="add-item">
                <fieldset className="flex center">
                    <input
                        type="text"
                        value="{searchQuery}"
                        onChange="{handleSeacrh}"
                        placeholder="Найти фильм или сериал..."
                    />

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

                <fieldset className="modal-item-container">
                    
                </fieldset>
            </form>
        </div>
    )
}   
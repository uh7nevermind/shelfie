import { filterOptions } from "../../constants/filterOptions"
import "./FilterPanel.css"

export default function FilterPanel() {
    return (
        <form className="filter-panel-container">

            <div className="flex filter-panel-title">
                <h3>Поиск</h3>
            </div>

            <div className="search-input flex center">
                <input placeholder="Введите название..." className="search-bar"></input>
            </div>

            <div className="flex filter-panel-title">
                <h3>Фильтры</h3>
            </div>
            <div className="filter-panel-inner">
                <fieldset className="filter-panel-group">
                    <legend className="sr-only">Фильтры по категории и статусу</legend>

                    <div className="flex between">
                        <label htmlFor="category" className="sr-only">Категория</label>
                        <select name="category">
                            <option value="" selected hidden>Категория</option>
                            {filterOptions.category.map(({ label, value }) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>

                        <label htmlFor="status" className="sr-only">Статус</label>
                        <select name="status">
                            <option value="" selected hidden>Статус</option>
                            {filterOptions.status.map(({ label, value }) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                    </div>
                </fieldset>

                <fieldset className="filter-panel-group">
                    <legend className="sr-only">Тип сортировки и порядок</legend>
                    
                    <div className="flex between group-margin">
                        <label htmlFor="sortBy">Сортировать по:</label>
                        <select name="sortBy">
                            {filterOptions.sort.by.map(({ label, value }) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="flex between">
                        <label htmlFor="sortOrder">Порядок: </label>
                        <select name="sortOrder">
                            {filterOptions.sort.order.map(({ label, value }) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                    </div>
                </fieldset>

                <fieldset className="filter-panel-group">
                    <legend className="sr-only">Фильтры по дате просмотра</legend>

                    <label htmlFor="watchedDateType" className="block-label">Дата просмотра:</label>
                    <div className="flex between">
                        <select name="watchedDateType">
                            {filterOptions.watchedDate.map(({ label, value }) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                        <input type="date" name="watchedDateInput"></input>
                    </div>
                </fieldset>

                <fieldset className="filter-panel-group">
                    <legend className="sr-only">Фильтры по рейтингу</legend>
                    
                    <label className="block-label">Личный рейтинг:</label>
                        <div className="flex between">
                            {filterOptions.rating.personal.map(({ label, type }) => (
                                <input 
                                    name={`${type}PersonalRating`} 
                                    key={type} 
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    placeholder={label} 
                                />
                            ))}
                        </div>
                    
                    <label className="block-label margin-label">IMDB рейтинг:</label>
                        <div className="flex between">
                            {filterOptions.rating.imdb.map(({ label, type }) => (
                                <input 
                                    name={`${type}ImdbRating`} 
                                    key={type} 
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    placeholder={label} 
                                />
                            ))}
                        </div>
                </fieldset>

                <fieldset className="filter-panel-group">
                    <legend className="sr-only">Сбросить или применить фильтры</legend>
                    <div className="flex between">
                        <button type="reset">Сбросить</button>
                        <button type="submit">Применить</button>
                    </div>
                </fieldset>
            </div>
        </form>
    )
}
import { Rating } from "@mui/material" 
import { useState, useEffect } from "react";
import { filterOptions } from "../../constants/filterOptions";
import { useParams } from "react-router-dom";
import { useMedia } from "../../context/context";
import { useNavigate } from "react-router-dom";
import "./ModalCardItem.css"
import ModalConfirmation from "../ModalConfirmation/ModalConfirmation";

export default function ModalCardItem() {
    const { items, setItems } = useMedia();
    const { id } = useParams();
    const [tempItem, setTempItem] = useState(null);
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (items.length > 0) {
        const found = items.find(item => String(item.id) === id);
        setTempItem(found || null);
        }
    }, [items, id]);

    if (!tempItem) return <div>Загрузка...</div>;
    return (
    <div className="modal-overlay">
        <div className="modal-card-item">
            <div className="modal-card-img-status-container">
                <img src={tempItem.image} />
                <select 
                    name="status"
                    value={tempItem.status}
                    onChange={(e) => setTempItem(prev => ({ ...prev, status: e.target.value}))}
                >
                    <option value="" selected hidden>Статус</option>
                    {filterOptions.status.slice(1).map(({ label, value }) => (
                        <option value={value}>{label}</option>
                    ))}
                </select>
            </div>

            <div className="modal-card-item-info">
                <div className="title-genre-container">
                    <h2>{tempItem.title} <span className="movie-year">({tempItem.releaseDate})</span></h2>
                    <ul className="genres">
                        {tempItem.genres.map((genre, index) => (
                            <li key={genre.id} className="genre">
                                {genre.name.toLowerCase()}{index < tempItem.genres.length - 1 && ','}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="item-overview">{tempItem.overview}</p>

                <div>
                    
                    <div className="modal-card-rating-container">
                        <label htmlFor="imdb-rating" className="rating-label">Рейтинг</label>
                        <Rating 
                            name="imdb-rating"
                            max={10}
                            value={tempItem.personalRating ? tempItem.personalRating : tempItem.voteAverage}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setTempItem(prev => ({
                                    ...prev,
                                    personalRating: newValue ?? 0,
                                }));
                            }}
                            
                            sx={{
                                fontSize: 26,
                                "& .MuiRating-iconEmpty": {
                                    color: "#3A3F4A",
                                },
                                "& .MuiRating-iconFilled": {
                                    color: (tempItem.personalRating ? "#FFD369" : "#3C7DD9"),
                                },
                                "& .MuiRating-iconHover": {
                                    color: "#FFD369",
                                }
                            }}
                        />
                        <div className="modal-card-rating-values-container">
                            <span className="rating-value average">{tempItem.voteAverage}</span>
                            <span className="rating-value personal">{tempItem.personalRating}</span>
                        </div>
                    </div>
                </div>

                <div className="modal-buttons-item-card-container flex-end">
                    <button 
                        className="modal-button apply" 
                        onClick={() => tempItem === items.find(item => String(item.id) === id) ? navigate(-1) : setIsConfirmationVisible(true)}
                    >
                        Сохранить
                    </button>
                    <button 
                        className="modal-button cancel-sqr" 
                        onClick={() => navigate(-1)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {isConfirmationVisible && (
                    <ModalConfirmation 
                        text={"Вы действительно хотите сохранить изменения?"}
                        onConfirmation={() => {
                            setItems(prevItems => prevItems.map(item =>
                                item.id === tempItem.id ? tempItem : item
                            ));
                            navigate(-1);
                        }}
                        onCancel={() => {
                            setIsConfirmationVisible(false);
                        }}
                    />
                )}
            </div>
        </div>
    </div>
   )
}
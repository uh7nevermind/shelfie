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
    const [isSaveConfirmationVisible, setIsSaveConfirmationVisible] = useState(false);
    const [isDelConfirmationVisible, setIsDelConfirmationVisible] = useState(false);
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
                        <option key={value} value={value}>{label}</option>
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
                        className="modal-button delete"
                        onClick={() => setIsDelConfirmationVisible(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="delete-svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                    <button 
                        className="modal-button apply" 
                        onClick={() => tempItem === items.find(item => String(item.id) === id) ? navigate(-1) : setIsSaveConfirmationVisible(true)}
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

                {isSaveConfirmationVisible && (
                    <ModalConfirmation 
                        text={"Вы действительно хотите сохранить изменения?"}
                        onConfirmation={() => {
                            setItems(prevItems => prevItems.map(item =>
                                item.id === tempItem.id ? tempItem : item
                            ));
                            navigate(-1);
                        }}
                        onCancel={() => {
                            setIsSaveConfirmationVisible(false);
                        }}
                    />
                )}
                {isDelConfirmationVisible && (
                    <ModalConfirmation 
                        text={"Вы действительно хотите удалить этот элемент из коллекции?"}
                        onConfirmation={() => {
                            setItems(prevItems => prevItems.filter(item => item.id !== tempItem.id));
                            navigate(-1);
                        }}
                        onCancel={() => {
                            setIsDelConfirmationVisible(false);
                        }}
                    />
                )}
            </div>
        </div>
    </div>
   )
}
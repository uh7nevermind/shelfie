import './Item.css'
import statusLabels from '../../constants/statusLabels'
import { Link, useLocation } from 'react-router-dom'

export default function Item ({ item = null, type = false, className }) {
    const location = useLocation();

    return type ? (
         <Link
            to={`/add`}
            state={{ background: location }}
            className='add-card'
         >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="plus-svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>Добавить в коллекцию</p>
         </Link>
    ) : (
        <Link
            to={`/library/${item.id}`}
            state={{ background: location }}
            className={`item-card ${className}`}
        >
                <img src={item.image} />
                <div className='item-card-desc'>
                    <h3 className='item-card-title'>{item.title}</h3>
                    <p className='item-card-status'>{statusLabels[item.status]}</p>
                </div>
        </Link>

    )
}
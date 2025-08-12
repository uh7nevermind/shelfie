import { useMedia } from "../../context/context";
import statusLabels from "../../constants/statusLabels";
import Item from "../Item/Item";
import './ItemLibrary.css'

export default function ItemLibrary () {
    const { items, setItems } = useMedia();

    return (
        <section className="layout-container library-section">
            {items.map(item => (
                <Item key={item.id} item={item} className={"item-card--fluid"}/> 
            ))}
        </section>
    )
}
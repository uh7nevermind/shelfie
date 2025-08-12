import { useRef } from "react";
import { useMedia } from "../../context/context";
import { filterByStatus } from "../../features/filters";
import statusLabels from "../../constants/statusLabels";
import Item from "../Item/Item";
import './ScrollableRow.css'

export default function ScrollableRow ({ status, title }) {
    const { items, setItems } = useMedia();
    const scrollRef = useRef(null);
    const filteredItems = filterByStatus(items, status);
    function scrollLeft() {
        scrollRef.current?.scrollBy({ left: -1084, behavior: 'smooth' })
    }

    function scrollRight() {
        scrollRef.current?.scrollBy({ left: 1084, behavior: 'smooth' })
    }

    return (
        <section className="scrollable-section layout-container">
            <div className="section-header">
                <h2 className="section-title">{statusLabels[status]}</h2>
                {filteredItems.length > 4 && (
                    <>
                        <button className="left scroll-btn" onClick={scrollLeft}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <button className="right scroll-btn" onClick={scrollRight}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
            <div className="scroll-container" ref={scrollRef}>
                {filteredItems.map(item => (
                    <Item key={item.id} item={item} className={"item-card--fixed"}/>
                ))}
                {filteredItems.length < 4 && (
                    <Item type={"add-card"} />
                )}
            </div>
        </section>
    )
}
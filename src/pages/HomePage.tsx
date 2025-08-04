import Navbar from "../components/Navbar/Navbar";

export default function HomePage() {
    return (
        <>
            <main>
                <div className="scrollable-containers">
                    <ItemContainer category={"currently watching"} viewMode={"scroll"} />
                    <ItemContainer category={"want to watch"} viewMode={"scroll"} />
                    <ItemContainer category={"watched"} viewMode={"scroll"} />
                </div>
                <FilterPanel className="filter-panel" />
            </main>
        </>
    )
}
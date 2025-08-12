import ItemLibrary from "../components/ItemLibrary/ItemLibrary";
import FilterPanel from "../components/FilterPanel/FilterPanel";

export default function LibraryPage() {
    return (
        <div className="flex-lib-container layout-container">
            <ItemLibrary />
            <FilterPanel />
        </div>
    )
}
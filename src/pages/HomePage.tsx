import ScrollableRow from "../components/ScrollableRow/ScrollableRow"
import ModalAddItem from "../components/ModalAddItem/modalAddItem"

export default function HomePage() {
    return (
        <>
            <ScrollableRow status={"watching"} />
            <ScrollableRow status={"planned"} />
            <ScrollableRow status={"finished"} />
        </>
    )
}
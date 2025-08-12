import ModalCardItem from "../components/ModalCardItem/ModalCardItem"
import { useMedia } from "../context/context";

export default function TestPage() {
    const { items, setItems } = useMedia();

    console.log('items:', items);

    return (
        <ModalCardItem item={items[0]} />
    )
}
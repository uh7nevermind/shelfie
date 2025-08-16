import ModalAddItem from "../components/ModalAddItem/modalAddItem";
import { useMedia } from "../context/context";

export default function TestPage() {
    const { items, setItems } = useMedia();

    console.log('items:', items);

    return (
        <ModalAddItem/>
    )
}
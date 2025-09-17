import {ItemList} from "../ItemList/ItemList";

export const ItemListContainer = ({titulo, producto}) => {
    
    return (
        <div>
            <h2>Listado de productos</h2>
            <ItemList lista={producto} />
        </div>
    );
}
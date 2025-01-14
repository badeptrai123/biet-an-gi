import React from 'react';
import './Item.scss';
import { Link } from 'react-router-dom';
import P1 from "../../assets//p1.png";
import P2 from "../../assets//p2.png";
import P3 from "../../assets//p3.png";

const Item = (props) => {
    return (
        <div className="item">
            <div className="image-container">
                <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
                    <img src={props.image} alt={props.name} />
                </Link>
                <div className="action-buttons">
                    <button className="add-to-wheel-btn" onClick={props.onAddToWheel}>
                        Thêm vào vòng quay
                    </button>
                    <button className="delete-item-btn" onClick={props.onDeleteItem}>
                        Xóa khỏi danh sách
                    </button>
                </div>
            </div>
            <p>{props.name}</p>
        </div>
    );
};

const StaticItemList = [
    {
        id: 1,
        name: 'Pizza Margherita',
        image: P1,
    },
    {
        id: 2,
        name: 'Spaghetti Carbonara',
        image: P2,
    },
    {
        id: 3,
        name: 'Caesar Salad',
        image: P3,
    },
    {
        id: 4,
        name: 'Caesar Salad 2',
        image: P3,
    },
    {
        id: 5,
        name: 'Caesar Salad 3',
        image: P3,
    },
];

export { Item, StaticItemList };
export default Item;

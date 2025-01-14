import React, { useState } from 'react';
import './QuanLyMonAn.scss';
import Item, { StaticItemList } from '../../components/Item/Item';
import Navbar from '../../components/Navbar/Navbar';

const QuanLyMonAn = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
    });
    const [imagePreview, setImagePreview] = useState(null);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    const handleInputChange = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProductDetails({ ...productDetails, image: file });
        setImagePreview(URL.createObjectURL(file));
    };

    const handleAddProduct = () => {
        console.log(productDetails);
        alert('Thêm món ăn thành công!');
        togglePopup();
    };

    return (
        <div className='shop-category'>
            <Navbar />
            <div className="shopcategory-header">
                <p>
                    <span>Danh sách món ăn: {StaticItemList.length} món</span>
                </p>
                <div className="action-buttons">
                    <button className="edit-button">Chỉnh sửa món ăn</button>
                    <button className="add-button" onClick={togglePopup}>Thêm món ăn</button>
                </div>
            </div>
            <div className="shopcategory-products">
                {StaticItemList.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                    />
                ))}
            </div>

            {/* Popup thêm sản phẩm */}
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-popup" onClick={togglePopup}>X</button>
                        <div className="add-product-popup">
                            <h2>Thêm món ăn</h2>
                            <div className="add-product-field">
                                <label>Tên món ăn</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nhập tên món ăn"
                                    value={productDetails.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="add-product-field">
                                <label>Hình ảnh món ăn</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                {imagePreview && (
                                    <img src={imagePreview} alt="Preview" className="image-preview" />
                                )}
                            </div>
                            <button className="add-product-button" onClick={handleAddProduct}>
                                Thêm món ăn
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuanLyMonAn;

import React from 'react';
import styles from "../styles/cbprice.module.scss";

const ComboboxPrice = () => {
    return (
        <div className={styles.comboboxPrice}>
            <label>Khoảng giá</label>
            <select>
                <option value="Chọn mức giá">Chọn mức giá</option>
                <option>Dưới 1 triệu</option>
                <option value="1 triệu - 2 triệu">1 triệu - 2 triệu</option>
                <option value="2 triệu - 3 triệu">2 triệu - 3 triệu</option>
                <option value="3 triệu - 5 triệu">3 triệu - 5 triệu</option>
                <option value="5 triệu - 7 triệu">5 triệu - 7 triệu</option>
                <option value="7 triệu - 10 triệu">7 triệu - 10 triệu</option>
            </select>
        </div>
    );
};

export default ComboboxPrice;
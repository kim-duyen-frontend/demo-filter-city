import React from 'react';
import styles from "../styles/cbprice.module.scss";

const ComboboxPrice = ({ price, setPrice }) => {
    return (
        <div className={styles.comboboxPrice}>
            <label className={styles.label}>Khoảng giá</label>
            <select className={styles.cb} value={price} onChange={(event) => setPrice(event.target.value)}>
                <option value="Chọn mức giá">Chọn mức giá</option>
                <option value="800000">Dưới 1 triệu</option>
                <option value="2000000">1 triệu - 2 triệu</option>
                <option value="3000000">2 triệu - 3 triệu</option>
                <option value="5000000">3 triệu - 5 triệu</option>
                <option value="7000000">5 triệu - 7 triệu</option>
                <option value="10000000">7 triệu - 10 triệu</option>
            </select>
        </div>
    );
};

export default ComboboxPrice;
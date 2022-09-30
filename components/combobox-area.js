import React from 'react';
import styles from "../styles/cbarea.module.scss";

const ComboboxArea = () => {
    return (
        <div className={styles.comboboxArea}>
            <label>Diện tích</label>
            <select>
                <option value="Chọn diện tích">Chọn diện tích</option>
                <option>Dưới 20m2</option>
                <option value="20m2 - 30m2">20m2 - 30m2</option>
                <option value="30m2 - 50m2">30m2 - 50m2</option>
                <option value="50m2 - 60m2">50m2 - 60m2</option>
                <option value="60m2 - 70m2">60m2 - 70m2</option>
                <option value="70m2 - 80m2">70m2 - 80m2</option>
            </select>
        </div>
    );
};

export default ComboboxArea;
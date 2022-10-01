import React from 'react';
import styles from "../styles/cbarea.module.scss";

const ComboboxArea = ({ area, setArea }) => {
    return (
        <div className={styles.comboboxArea}>
            <label className={styles.label}>Diện tích</label>
            <select className={styles.cb} value={area} onChange={(event) => setArea(event.target.value)}>
                <option value="Chọn diện tích">Chọn diện tích</option>
                <option value="15">Dưới 20m2</option>
                <option value="30">20m2 - 30m2</option>
                <option value="50">30m2 - 50m2</option>
                <option value="60">50m2 - 60m2</option>
                <option value="70">60m2 - 70m2</option>
                <option value="80">70m2 - 80m2</option>
            </select>
        </div>
    );
};

export default ComboboxArea;
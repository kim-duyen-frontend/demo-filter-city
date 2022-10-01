import React from 'react';
import styles from "../styles/btnfilter.module.scss";

const ButtonFilter = ({ handleChangeFilter }) => {
    return (
        <div className={styles.buttonFilter}>
            <button className={styles.btn} onClick={handleChangeFilter}>Lọc tin</button>
        </div>
    );
};

export default ButtonFilter;
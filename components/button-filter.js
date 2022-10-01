import React from 'react';
import styles from "../styles/btnfilter.module.scss";

const ButtonFilter = ({ handleGetData }) => {
    return (
        <div className={styles.buttonFilter}>
            <button className={styles.btn} onClick={handleGetData}>Lọc tin</button>
        </div>
    );
};

export default ButtonFilter;
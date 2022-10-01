import React from 'react';
import styles from "../styles/btnfilter.module.scss";

const ButtonFilter = () => {
    return (
        <div className={styles.buttonFilter}>
            <button className={styles.btn}>Lọc tin</button>
        </div>
    );
};

export default ButtonFilter;
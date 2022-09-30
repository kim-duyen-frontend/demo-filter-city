import React, { useState } from 'react';
import data from "../data.json";
import { v4 as uuidv4 } from 'uuid';
import styles from "../styles/list.module.scss";

const List = () => {
    const [dataHouse] = useState(data);

    return (
        <div className={styles.list}>
            {dataHouse.map((item) => (
                <div key={uuidv4()}>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default List;
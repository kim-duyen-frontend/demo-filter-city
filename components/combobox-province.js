import React, { useEffect, useState } from 'react';
import data from "../tinh_tp.json";
import { v4 as uuidv4 } from 'uuid';
import styles from "../styles/cbprovince.module.scss";

const ComboboxProvince = ({ province, setProvince }) => {
    const [listProvince, setListProvince] = useState(data);
    useEffect(() => {
        let values = Object.values(listProvince);
        setListProvince(values);
    }, [])
    return (
        <div className={styles.comboboxProvince}>
            <label className={styles.label}>Tỉnh thành:</label>
            <select className={styles.cb} value={province} onChange={(event) => setProvince(event.target.value)}>
                {listProvince && listProvince.length > 0 && listProvince.map((item) => (
                    <option key={uuidv4()} value={item.name}>{item.name}</option>
                ))}
            </select>
        </div>
    );
};

export default ComboboxProvince;
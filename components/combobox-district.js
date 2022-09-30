import React, { useEffect, useState } from 'react';
import data from "../quan_huyen.json";
import { v4 as uuidv4 } from 'uuid';
import styles from "../styles/cbdistrict.module.scss";

const ComboboxDistrict = () => {
    const [listDistrict, setListDistrict] = useState(data);
    useEffect(() => {
        let values = Object.values(listDistrict);
        setListDistrict(values)
    }, [])
    return (
        <div className={styles.comboboxDistrict}>
            <label>Quận huyện:</label>
            <select>
                {listDistrict && listDistrict.length > 0 && listDistrict.map((item) => (
                    <option key={uuidv4()} value={item.name}>{item.name}</option>
                ))}
            </select>
        </div>
    );
};

export default ComboboxDistrict;
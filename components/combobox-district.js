import React, { useEffect, useState } from 'react';
import data from "../quan_huyen.json";
import { v4 as uuidv4 } from 'uuid';

const ComboboxDistrict = () => {
    const [listDistrict, setListDistrict] = useState(data);
    useEffect(() => {
        let values = Object.values(listDistrict);
        setListDistrict(values)
    }, [])
    // console.log(listDistrict);
    return (
        <div className="comboboxDistrict">
            <label>Quận huyện:</label>
            <select>
                {listDistrict.map((item) => (
                    <option key={uuidv4()} value={item.name}>{item.name}</option>
                ))}
            </select>
        </div>
    );
};

export default ComboboxDistrict;
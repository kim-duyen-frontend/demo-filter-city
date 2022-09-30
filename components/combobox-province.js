import React, { useEffect, useState } from 'react';
import data from "../tinh_tp.json";
import { v4 as uuidv4 } from 'uuid';

const ComboboxProvince = () => {
    const [listProvince, setListProvince] = useState(data);
    useEffect(() => {
        let values = Object.values(listProvince);
        setListProvince(values);
    }, [])
    return (
        <div className="comboboxProvince">
            <label>Tỉnh thành:</label>
            <select>
                {listProvince && listProvince.length > 0 && listProvince.map((item) => (
                    <option key={uuidv4()} value={item.name}>{item.name}</option>
                ))}
            </select>
        </div>
    );
};

export default ComboboxProvince;
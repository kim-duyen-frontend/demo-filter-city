import React, { useState } from 'react';
import ButtonFilter from '../components/button-filter';
import ComboboxArea from '../components/combobox-area';
import ComboboxDistrict from '../components/combobox-district';
import ComboboxPrice from '../components/combobox-price';
import ComboboxProvince from '../components/combobox-province';
import styles from "../styles/filtercity.module.scss";

const FilterCity = () => {
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [price, setPrice] = useState(0);
    const [area, setArea] = useState(0);

    const handleChangeFilter = () => {
        console.log(province, district, price, area);
    }
    return (
        <div className={styles.filterCity}>
            <div className="container">
                <div className={styles.container}>
                    <ComboboxProvince province={province} setProvince={setProvince} />
                    <ComboboxDistrict district={district} setDistrict={setDistrict} />
                    <ComboboxPrice price={price} setPrice={setPrice} />
                    <ComboboxArea area={area} setArea={setArea} />
                    <ButtonFilter handleChangeFilter={handleChangeFilter} />
                </div>
            </div>
        </div>
    );
};

export default FilterCity;
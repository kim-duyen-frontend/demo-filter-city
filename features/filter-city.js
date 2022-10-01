import React, { useState } from 'react';
import ButtonFilter from '../components/button-filter';
import ComboboxArea from '../components/combobox-area';
import ComboboxDistrict from '../components/combobox-district';
import ComboboxPrice from '../components/combobox-price';
import ComboboxProvince from '../components/combobox-province';
import styles from "../styles/filtercity.module.scss";
import List from './list';

const FilterCity = () => {
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [price, setPrice] = useState(0);
    const [area, setArea] = useState(0);
    const [filterData, setFilterData] = useState([]);

    const handleGetData = () => {
        // console.log(province, district, price, area);
        let temp = filterData;
        temp = temp.filter((item) => {
            if (item.city === province) {
                return item;
            }
            if (item.district === district) {
                return item;
            }
        })
        setFilterData(temp)
    }
    return (
        <React.Fragment>
            <div className={styles.filterCity}>
                <div className="container">
                    <div className={styles.container}>
                        <ComboboxProvince province={province} setProvince={setProvince} />
                        <ComboboxDistrict district={district} setDistrict={setDistrict} />
                        <ComboboxPrice price={price} setPrice={setPrice} />
                        <ComboboxArea area={area} setArea={setArea} />
                        <ButtonFilter handleGetData={handleGetData} />
                    </div>
                </div>
            </div>
            <List filterData={filterData} setFilterData={setFilterData} />
        </React.Fragment>
    );
};

export default FilterCity;
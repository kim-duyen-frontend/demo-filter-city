import React from 'react';
import ButtonFilter from '../components/button-filter';
import ComboboxArea from '../components/combobox-area';
import ComboboxDistrict from '../components/combobox-district';
import ComboboxPrice from '../components/combobox-price';
import ComboboxProvince from '../components/combobox-province';
import styles from "../styles/filtercity.module.scss";

const FilterCity = () => {
    return (
        <div className={styles.filterCity}>
            <div className="container">
                <div className={styles.container}>
                    <ComboboxProvince />
                    <ComboboxDistrict />
                    <ComboboxPrice />
                    <ComboboxArea />
                    <ButtonFilter />
                </div>
            </div>
        </div>
    );
};

export default FilterCity;
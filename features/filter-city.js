import React from 'react';
import ComboboxDistrict from '../components/combobox-district';
import ComboboxProvince from '../components/combobox-province';

const FilterCity = () => {
    return (
        <div className="filterCity">
            <ComboboxProvince />
            <ComboboxDistrict />
        </div>
    );
};

export default FilterCity;
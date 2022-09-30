import React, { useState } from 'react';
import data from "../data.json";
import { v4 as uuidv4 } from 'uuid';

const List = () => {
    const [dataHouse] = useState(data);

    return (
        <div className="list">
            {dataHouse.map((item) => (
                <div key={uuidv4()}>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default List;
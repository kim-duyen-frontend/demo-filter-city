import React, { useState } from 'react';
import data from "../data.json";
import { v4 as uuidv4 } from 'uuid';
import styles from "../styles/list.module.scss";
import Image from 'next/image';

const List = () => {
    const [dataHouse] = useState(data);

    return (
        <div className={styles.list}>
            <div className="container">
                <div className={styles.container}>
                    {dataHouse.map((item) => (
                        <div className={styles.box} key={uuidv4()}>
                            <div className={styles.left}>
                                <div className={styles.image}>
                                    <Image priority src={item.thumbnail} layout="fill" objectFit="cover" alt={item.name} />
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.text}>
                                    <h3 className={styles.title}>{item.title}</h3>
                                    <p className={styles.price}>{item.price}/tháng</p>
                                    <div className={styles.info}>
                                        Diện tích:&nbsp;
                                        <span className={styles.area}> {item.area}m2</span>
                                        &nbsp; &nbsp; Khu vực:
                                        <span className={styles.place}>&nbsp; Quận {item.district}, {item.city}</span>
                                    </div>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List;
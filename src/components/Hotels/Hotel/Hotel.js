import React from 'react';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel1.jpg';
const Hotel = () => {
    return (
        <div className={`${styles.hotel} col-md-6`}>
            <img className="img-fluid" src={hotelImg} alt="" />
            <div className={styles.rating}>
                <p>Ocena: 8.3</p>
                <p>Opinie: 322</p>
            </div>
            <p>Tytuł</p>
            <p>Miasto</p>
            <p>Opis</p>
            <a className="btn btn-primary" href="#">pokaż</a>
        </div>
    )
}

export default Hotel;
import React from "react"
import Header from "../../componets/Header/Header"
import Footer from "../../componets/Footer/Footer"
import styles from "./servicesPage.module.css"
import ServicesTypes from "./ServicesTypes/ServicesTypes"

const ServicesPage = () => {
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.wrapper}>
                <p className={styles.title}>price list</p>
                <div className={styles.servicesItem}>
                    <ServicesTypes />
                    <div className={styles.lines}>
                        <span className={styles.lineActive}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.servicesPrices}>
                        <div className={styles.servicesPrice}>
                            <p>Коррекция воск/пинцет</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Окрашивание бровей</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Коррекция + Окрашивание</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Коррекция + Долговременная укладка</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Коррекция + Окрашивание + Долговременная укладка</p>
                            <p>500 ₽</p>
                        </div>
                    </div>
                </div>
                <div className={styles.servicesItem}>
                    <ServicesTypes />
                    <div className={styles.lines}>
                        <span className={styles.line}></span>
                        <span className={styles.lineActive}></span>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.servicesPrices}>
                        <div className={styles.servicesPrice}>
                            <p>Маникюр без покрытия</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Маникюр с покрытием (1-2 тона)</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Наращивание (1 ед.)</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Френч</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Стемпинг (на все)</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Дизайн (в зависимости от сложности)</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Снятие (без последующего покрытия)</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Снятие моей работы</p>
                            <p>500 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Снятие чужой работы</p>
                            <p>500 ₽</p>
                        </div>
                    </div>
                </div>
                <div className={styles.servicesItem}>
                    <ServicesTypes />
                    <div className={styles.lines}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.lineActive}></span>
                    </div>
                    <div className={styles.servicesPrices}>
                        <div className={styles.servicesPrice}>
                            <p>Классика (1D)</p>
                            <p>1100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>1,5D</p>
                            <p>1100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>2D</p>
                            <p>1100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>2,5D</p>
                            <p>1100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>3D</p>
                            <p>1100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Наращивание внешних уголков</p>
                            <p>1100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Мокрый эффект/эффект маскара</p>
                            <p>1100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Лучики</p>
                            <p>1100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>Коричневые, цветные ресницы</p>
                            <p>1100 ₽</p>
                        </div>
                        <div className={styles.servicesPrice}>
                            <p>КСнятие с последующим наращиванием</p>
                            <p>1100 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ServicesPage

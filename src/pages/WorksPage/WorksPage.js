import React, { lazy, Suspense } from "react"
import Header from "../../componets/Header/Header"
import styles from "./worksPage.module.css"
import Footer from "../../componets/Footer/Footer"
import WorksImages from "./UI/WorksImages/WorksImages"

const WorksPage = () => {
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.textWrapper}>
                <p className={styles.text}>
                    Здравствуйте, я Суворова Наталья. Мастер по маникюру, бровям и ресницам из Стерлитамака.
                </p>
            </div>
            <WorksImages />
            <Footer />
        </div>
    )
}

export default WorksPage

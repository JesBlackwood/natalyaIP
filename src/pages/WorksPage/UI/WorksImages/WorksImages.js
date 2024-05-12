import React, { lazy, Suspense, useState } from "react"
import styles from "./worksImages.module.css"
import WorksLoading from "./UI/WorksLoading/WorksLoading"
import WorksGallery from "./UI/WorksGallery/WorksGallery"

const WorksImage = lazy(() => import("./UI/WorksImage/WorksImage"))

const ImageList = [
    { src: "/img/work1.jpg" },
    { src: "/img/work2.jpg" },
    { src: "/img/work3.jpg" },
    { src: "/img/work4.jpg" },
    { src: "/img/work5.jpg" },
    { src: "/img/work6.jpg" },
    { src: "/img/work7.jpg" },
    { src: "/img/work8.jpg" },
    { src: "/img/work9.jpg" },
    { src: "/img/work10.jpg" },
]

const WorksImages = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Suspense fallback={<WorksLoading />}>
                <div className={styles.images}>
                    {ImageList.map((image, index) => (
                        <WorksImage pathUrl={image.src} onClick={() => setIsOpen(!isOpen)} />
                    ))}
                </div>
            </Suspense>
            <WorksGallery active={isOpen} />
        </div>
    )
}

export default WorksImages

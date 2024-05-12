import React from "react"
import styles from "./worksGallery.module.css"
import { FC } from "react"

interface galleryProps {
    active:false
}

const ImagesGallery = [
    { src: "img/gallery/galleryImage2.jpg", alt: "galleryImage" },
    { src: "img/gallery/galleryImage1.jpg", alt: "galleryImage" },
]

const WorksGallery: FC<galleryProps> = ({active}) => {
    return (
        <div className={`${styles.main} ${active && styles.active}`}>
            {ImagesGallery.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
            ))}
        </div>
    )
}

export default WorksGallery

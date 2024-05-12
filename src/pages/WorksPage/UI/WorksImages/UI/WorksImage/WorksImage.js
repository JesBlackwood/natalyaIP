import React, { FC } from "react";
import styles from "./worksImage.module.css"

interface ImageProps {
    pathUrl:string
}

const WorksImage: FC<ImageProps> = ({ pathUrl }) => {
    return <img className={styles.imgItem} src={pathUrl} alt="" />;
};

export default WorksImage;

import styles from "./Header.module.scss"
import React from "react"

export default function Header(){
    return(
        <div className={styles.header}>
            <h1>Get your daily fox dosage!</h1>
        </div>
    )
}
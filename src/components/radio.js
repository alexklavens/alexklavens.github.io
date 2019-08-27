import React from "react"
import styles from "../styles/radioPiece.module.css"

export default props => (
  <div className={styles.radioPiece}>
    <div className={styles.nonIframeRadioContent}>
      <p className={styles.airedPiece}>{props.date}</p>
      <p className={styles.description}>{props.description}</p>
    </div>

    <iframe className={styles.radioIframe} scrolling="no" frameborder="no" src={props.iframe_link}></iframe>
  </div>
)

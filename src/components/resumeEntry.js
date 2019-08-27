import React from "react"
import styles from "../styles/resumeEntry.module.css"



function getDescription(inString){
  if (inString) {
    const thisArray = inString.split("##");
    const descriptionItemsArray = [];

    thisArray.forEach (
      item =>
        descriptionItemsArray.push(
          <li className={styles.descriptionItem}><div dangerouslySetInnerHTML={{__html: item}}></div></li>
        )
    )

    return descriptionItemsArray;
  } else {
    return ""
  }

}



export default props => (

  <div>
    <div className={styles.resumeEntryHeader}>
      <div className={styles.entryHeader}>
        <h3 className={styles.resumeEntryTitle}>{props.companyName}</h3>
      </div>
      <div className={styles.subHeader}>
        <span className={styles.jobTitle}>{props.jobTitle}</span>
        <span className={styles.bullet}>&nbsp;•&nbsp;</span>
        <span className={styles.dates}>{props.dates}</span>
      </div>
    </div>

    <ul>{getDescription(props.description)}</ul>
    <p className={styles.linesplit}>____________________________________</p>
  </div>
)

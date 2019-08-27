import React from "react"
import { Link } from "gatsby"
import styles from "../styles/mainLayout.module.css"


const ListLink = props => (
  <li className={styles.navLink}>
    <Link to={props.to}
      style={{
        // color: `rgb(128,128,128)`,
        textDecoration: `none`,
      }}>{props.children}</Link>
  </li>
)

const Header = props => (
  <div id="siteHeader" style={{
    // height: `40px`,
    lineHeight: `40px`,
    paddingTop: `10px`,
    // borderBottom: `1px solid black`
    }}>
    <Link to="/">
      <h1 className={styles.siteHeaderAlexKlavens}
        style={{
        display: `inline-block`,
        color: `black`
      }}
      >

      Alex Klavens </h1>

    </Link>
    <ul id="myLinks">



      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/journalism/">Journalism</ListLink>
      <ListLink to="/resume/">Resume</ListLink>
      <ListLink to="/contact/">Contact</ListLink>

    </ul>


    <div id="burger">
      <a href="javascript:void(0);" id="showMenu" class="icon" onClick={myFunction}>
        <div class="burger"></div>
        <div class="burger"></div>
        <div class="burger"></div>
      </a>
    </div>

  </div>
)

const Footer = props => (
  <div className={styles.footer}>
   {/* <p className={styles.linesplit}>____________________</p> */}
    <ul className={styles.footerList}>
      <li><a href="https://github.com/alexklavens" target="_blank"><img className={styles.iconLink} src="/icons/github.png"/></a></li>
      <li><a href="https://twitter.com/alexklavens" target="_blank"><img className={styles.iconLink} src="/icons/twitter.png"/></a></li>
      <li><a href="https://linkedin.com/in/alexklavens" target="_blank"><img className={styles.iconLink} src="/icons/linkedin.png"/></a></li>
      <li><a href="mailto:aklavens@gmail.com" target="_blank"><img className={styles.iconLink} src="/icons/email.png"/></a></li>

    </ul>
    <p className={styles.designedDeveloped}>Designed and developed by Alex Klavens</p>

  </div>
)


function myFunction() {
  var x = document.getElementById("myLinks");
  var border = document.getElementById("siteHeader");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

export default ({ children }) => (
  <div id="header"
      style= {{ margin: `2rem auto`, maxWidth: 850, padding: `0 1rem` }}>

    <Header />

      {children}

    <Footer />


  </div>
)

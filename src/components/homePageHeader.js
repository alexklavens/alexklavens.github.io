import React from "react"
import { Link } from "gatsby"
import styles from "../styles/home.module.css"


const ListLink = props => (
  <li>
    <Link to={props.to}
      style={{
        // color: `rgb(128,128,128)`,
        textDecoration: `none`
      }}>{props.children}</Link>
  </li>
)

const MainHeader = props => (
  <div style={{
    // height: `40px`,
    lineHeight: `40px`,
    paddingTop: `10px`,
    // borderBottom: `1px solid black`
    }}>
    <Link to="/">
      <h1 className={styles.alexKlavens}
        style={{
        display: `inline-block`,
        color: `black`
      }}
      >

      Alex Klavens </h1>

    </Link>
    <ul className={styles.linkList}>



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

    <MainHeader />

      {children}


  </div>
)

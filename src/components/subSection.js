import React from "react"


function changeSectionState() {
  var x  = document.getElementById("subSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

export default ({ children }) => (
  <div>
    <h1>{this.props.title}</h1>
    <div id="subSection" style={{
      display:`block`
    }}>
      {children}
    </div>


  </div>
)

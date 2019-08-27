import React from "react"
import Layout from "../components/layout"


function increaseUntil404(){

var num,first_two_digits;
for (var i = 1; i <= 40400; i ++){
  (function(i){
    setTimeout(function(){
      num = Math.round(i/100);
      if (num < 10) {
        first_two_digits = "&nbsp&nbsp";
      }
      else if (num < 100) {
        first_two_digits = "&nbsp";
      }
      else {
        first_two_digits = "";
      }
      document.getElementById("error-num").innerHTML = first_two_digits+num.toString();
    },500);
  })(i);
};

  }

export default () => (
  <Layout>
    <div style={{
      textAlign:`center`,
      marginBottom:`295px`,
      marginTop: '100px'
    }}>
    <h1 style={{fontSize:`4rem`,lineHeight:'60px'}}>Nothing here!</h1>
    <h3>Calculating error type.......... </h3>
    <h2 style={{fontSize:`3rem`}}id="error-num">0</h2>
  </div>
    {increaseUntil404()}



  </Layout>
)

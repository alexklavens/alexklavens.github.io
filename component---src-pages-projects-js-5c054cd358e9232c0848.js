(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(e,t,a){"use strict";a.r(t);var n=a(215),l=a(0),i=a.n(l),s=a(209),r=(a(38),a(207)),o=a(199),c=a.n(o);function u(e){return e.project_link?e.project_link:e.github_link}var m=function(e){return i.a.createElement("div",{className:c.a.wholeDamnThing},i.a.createElement("h2",{className:c.a.projectTitle},e.title),i.a.createElement("p",{className:c.a.description},e.description),function(e){return e.img_url?i.a.createElement("a",{className:c.a.imageLink,href:u(e),target:"_blank"},i.a.createElement("img",{className:c.a.image,src:e.img_url,alt:e.alt_text})):null}(e),function(e){return e.img_url?i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.details},className:c.a.details}):i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.details},className:c.a.details_noImage})}(e),i.a.createElement("div",{className:c.a.techUsed},i.a.createElement("ul",{className:c.a.items},function(e){if(e){var t=e.split("##"),a=[];return t.forEach(function(e){return a.push(i.a.createElement("li",{className:c.a.listItem},e))}),a}return""}(e.languages))),i.a.createElement("p",null,function(e){return e.project_link?i.a.createElement("p",null,"See ",i.a.createElement("a",{className:c.a.projectLink,href:e.project_link,target:"__blank"},e.title)," live, or check it out on ",i.a.createElement("a",{target:"__blank",className:c.a.projectLink,href:e.github_link}," Github "),"."):i.a.createElement("p",null,"Learn more about ",e.title," on ",i.a.createElement("a",{className:c.a.projectLink,href:e.github_link,target:"__blank"}," GitHub"),".")}(e)))};var d=function(e){e.chidlren;return i.a.createElement(r.b,{query:"2183998790",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"0px"}},function(e){var t=[];return e.allProjectsJson.edges.forEach(function(e){return t.push(i.a.createElement("li",{key:e.node.title},i.a.createElement(m,{title:e.node.title,description:e.node.description,details:e.node.details,img_url:e.node.img_url,alt_text:e.node.alt_text,project_link:e.node.project_link,github_link:e.node.github_link,custom_link:e.node.custom_link,languages:e.node.languages})))}),t}(e)))},data:n})};t.default=function(){return i.a.createElement(s.a,null,i.a.createElement("h1",{style:{textAlign:"center"}},"Projects"),i.a.createElement(d,null))}},207:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),l=a.n(n),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(208),a(9).default.enqueue;var r=l.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,s=a?a.data:t[n]&&t[n].data;return l.a.createElement(l.a.Fragment,null,s&&i(s),!s&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return l.a.createElement(r.Consumer,null,function(e){return l.a.createElement(o,{data:t,query:a,render:n||i,staticQueryData:e})})}},208:function(e,t,a){var n;e.exports=(n=a(210))&&n.default||n},209:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(207),s=a(190),r=a.n(s),o=function(e){return l.a.createElement("li",{className:r.a.navLink},l.a.createElement(i.a,{to:e.to,style:{textDecoration:"none"}},e.children))},c=function(e){return l.a.createElement("div",{id:"siteHeader",style:{lineHeight:"40px",paddingTop:"10px"}},l.a.createElement(i.a,{to:"/"},l.a.createElement("h1",{className:r.a.siteHeaderAlexKlavens,style:{display:"inline-block",color:"black"}},"Alex Klavens ")),l.a.createElement("ul",{id:"myLinks"},l.a.createElement(o,{to:"/projects/"},"Projects"),l.a.createElement(o,{to:"/journalism/"},"Journalism"),l.a.createElement(o,{to:"/resume/"},"Resume"),l.a.createElement(o,{to:"/contact/"},"Contact")),l.a.createElement("div",{id:"burger"},l.a.createElement("a",{href:"javascript:void(0);",id:"showMenu",class:"icon",onClick:m},l.a.createElement("div",{class:"burger"}),l.a.createElement("div",{class:"burger"}),l.a.createElement("div",{class:"burger"}))))},u=function(e){return l.a.createElement("div",{className:r.a.footer},l.a.createElement("ul",{className:r.a.footerList},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/alexklavens",target:"_blank"},l.a.createElement("img",{className:r.a.iconLink,src:"/icons/github.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/alexklavens",target:"_blank"},l.a.createElement("img",{className:r.a.iconLink,src:"/icons/twitter.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://linkedin.com/in/alexklavens",target:"_blank"},l.a.createElement("img",{className:r.a.iconLink,src:"/icons/linkedin.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:aklavens@gmail.com",target:"_blank"},l.a.createElement("img",{className:r.a.iconLink,src:"/icons/email.png"})))),l.a.createElement("p",{className:r.a.designedDeveloped},"Designed and developed by Alex Klavens"))};function m(){var e=document.getElementById("myLinks");document.getElementById("siteHeader");"block"===e.style.display?e.style.display="none":e.style.display="block"}t.a=function(e){var t=e.children;return l.a.createElement("div",{id:"header",style:{margin:"2rem auto",maxWidth:850,padding:"0 1rem"}},l.a.createElement(c,null),t,l.a.createElement(u,null))}},210:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),l=a.n(n),i=a(90);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},215:function(e){e.exports={data:{allProjectsJson:{edges:[{node:{title:"TripAdvisor Magazine",description:"A Natural Language Processing-informed magazine of the highest quality travel reviews",details:"For TripAdvisor's summer intern hackathon, I took TripAdvisor Magazine from concept to product. TripAdvisor Magazine is a web-based magazine-style publication that identifies high quality travel reviews with natural language processing and features them as articles. There are millions of reviews on TripAdvisor, often containing a few sentences of praise or frustration. But among those millions, there are some beautiful, compelling, and lengthy travel essays!",img_url:"/images/tamag.jpg",alt_text:"A storefront featured in TripAdvisor Magazine",project_link:"https://tripadvisor-magazine.herokuapp.com",github_link:"https://github.com/alexklavens/tripadvisor-magazine",custom_link:null,languages:"Python##Flask##Contentful API##Heroku##Pandas##HTML/CSS##NLP##CMS##Design"}},{node:{title:"Hospital Closure Map",description:"A web-scraping effort and data visualization focusing on rural hospital closures",details:"This is a data analysis, and visualization project focused on rural hospital closures in the United States. During my internship at WBUR, I reported on a decision by the Massachusetts Attorney General to not prosecute the former leaders of a Western Massachusetts hospital that closed in 2014 with less than a week’s notice to employees. The experience inspired me to learn more about rural hospital closures. This project was also my first foray into web-based data visualizations using D3.js.",img_url:"/images/hospital_preview.png",alt_text:"Screenshot of the map in this project.",project_link:"https://alexklavens.github.io/hospital-closure-map/",github_link:"https://github.com/alexklavens/hospital-closure-map",custom_link:null,languages:"D3.js##GeoJSON##HTML/CSS##Python##RegEx"}},{node:{title:"alexklavens.github.io",description:"A personal portfolio site.",details:"You’re looking at it! This is a personal website that I built with Gatsby.js, a static site generator based on React. This is my first project with Gatsby, and my first significant project using React. Most of the site is built with modular React components that pull in data from JSON files using GraphQL.",img_url:null,alt_text:null,project_link:null,github_link:"https://github.com/alexklavens/alexklavens.github.io",custom_link:null,languages:"Gatsby##React##GraphQL##HTML/CSS##GitHub Pages"}},{node:{title:"Presidential Speech Scraper & NLP",description:"A computer science project focusing on web scraping and natural language processing of presidential documents",details:"A web scraper for the American Presidency Project, a massive online repository of presidential documents that has no programmatic accessibility. I created this for the purpose of accessing documents for a natural language processing research project.",img_url:"/images/jfk.jpg",alt_text:"Screen shot of the home page of the American Presidency Project's website.",project_link:null,github_link:"https://github.com/alexklavens/presidential-speech-scraper",custom_link:null,languages:"Python##BeautifulSoup##JSON"}},{node:{title:"Google Sheets + Slack Schedule Checker",description:null,details:"During my senior year, I was a head teaching assistant for the Computer Science department. I transitioned our team’s communication from email messaging to a Slack workspace. I built a Slack bot with Python that used Slack’s Real Time Messaging API and Google’s Sheets API. Professors and student department employees could request copies of their schedules from the bot.",img_url:null,alt_text:"Slack and Google Sheets Logo. Source: BetterCloud.",project_link:null,github_link:"https://github.com/alexklavens/conncoll-cs-ta-slackbot",custom_link:null,languages:"Python##Slack API##Google Sheets API##Heroku"}},{node:{title:"Skunkpocalypse",description:"A Unity-powered video game simulating a two-dimensional skunk apocoplypse",details:"For a video game development course, my partner and I built Skunkpocalypse, a agme created with Unity for a massive touchscreen in our school’s library. In Skunkpocalypse, Connecticut College has been overrun by Skunks (this is an actual problem at Conn). The user plays as Gustavo Ryan, a student who is charged with defeating these skunks, and eventually a boss skunk, by collecting and spraying perfume. <i>Please contact me if you'd like to get a playable copy of <a href='/skunk/Skunkpocalypse.app.zip' download>Skunkpocalypse.</i></a>",img_url:"https://skunkpocalypse.weebly.com/uploads/4/4/0/3/44033907/capture_1_orig.png",alt_text:null,project_link:null,github_link:"https://github.com/alexklavens/skunkpocalypse",custom_link:"Check out a <a href='https://skunkpocalypse.weebly.com' target='_blank'>class project site</a> for Skunkpocalypse, ",languages:"C# ##Unity"}},{node:{title:"Original Dutch Folk Music",description:null,details:"This was a final project for my Digital Sound Processing course. A MATLAB program analyzes a database of monophonic Dutch folk melodies to create intelligent original melodies. The main goal of the program is to create an interval-based (instead of pitch-based) symbolic representation of the music, and to generate original music based on likely interval changes derived from the database of music.",img_url:null,alt_text:null,project_link:null,github_link:"https://github.com/alexklavens/smart-melody-generator/",custom_link:null,languages:"MATLAB"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-projects-js-5c054cd358e9232c0848.js.map
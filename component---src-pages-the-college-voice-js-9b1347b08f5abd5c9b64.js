(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{203:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(210),o=n(213);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement("h2",{style:{textAlign:"center",fontSize:"1.7rem"}},"Clips From ",i.a.createElement("i",null,"The College Voice")," "),i.a.createElement(o.a,null))}},208:function(e,t,n){var a;e.exports=(a=n(211))&&a.default||a},209:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(0),i=n.n(a),r=n(66),o=n.n(r);n.d(t,"a",function(){return o.a});n(208),n(8).default.enqueue;var l=i.a.createContext({});function s(e){var t=e.staticQueryData,n=e.data,a=e.query,r=e.render,o=n?n.data:t[a]&&t[a].data;return i.a.createElement(i.a.Fragment,null,o&&r(o),!o&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,n=e.query,a=e.render,r=e.children;return i.a.createElement(l.Consumer,null,function(e){return i.a.createElement(s,{data:t,query:n,render:a||r,staticQueryData:e})})}},210:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(209),o=n(190),l=n.n(o),s=function(e){return i.a.createElement("li",{className:l.a.navLink},i.a.createElement(r.a,{to:e.to,style:{textDecoration:"none"}},e.children))},c=function(e){return i.a.createElement("div",{id:"siteHeader",style:{lineHeight:"40px",paddingTop:"10px"}},i.a.createElement(r.a,{to:"/"},i.a.createElement("h1",{className:l.a.siteHeaderAlexKlavens,style:{display:"inline-block",color:"black"}},"Alex Klavens ")),i.a.createElement("ul",{id:"myLinks"},i.a.createElement(s,{to:"/projects/"},"Projects"),i.a.createElement(s,{to:"/journalism/"},"Journalism"),i.a.createElement(s,{to:"/resume/"},"Resume"),i.a.createElement(s,{to:"/contact/"},"Contact")),i.a.createElement("div",{id:"burger"},i.a.createElement("a",{href:"javascript:void(0);",id:"showMenu",class:"icon",onClick:u},i.a.createElement("div",{class:"burger"}),i.a.createElement("div",{class:"burger"}),i.a.createElement("div",{class:"burger"}))))},d=function(e){return i.a.createElement("div",{className:l.a.footer},i.a.createElement("ul",{className:l.a.footerList},i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/alexklavens",target:"_blank"},i.a.createElement("img",{className:l.a.iconLink,src:"/icons/github.png"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/alexklavens",target:"_blank"},i.a.createElement("img",{className:l.a.iconLink,src:"/icons/twitter.png"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://linkedin.com/in/alexklavens",target:"_blank"},i.a.createElement("img",{className:l.a.iconLink,src:"/icons/linkedin.png"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:aklavens@gmail.com",target:"_blank"},i.a.createElement("img",{className:l.a.iconLink,src:"/icons/email.png"})))),i.a.createElement("p",{className:l.a.designedDeveloped},"Designed and developed by Alex Klavens"))};function u(){var e=document.getElementById("myLinks");document.getElementById("siteHeader");"block"===e.style.display?e.style.display="none":e.style.display="block"}t.a=function(e){var t=e.children;return i.a.createElement("div",{id:"header",style:{margin:"2rem auto",maxWidth:850,padding:"0 1rem"}},i.a.createElement(c,null),t,i.a.createElement(d,null))}},211:function(e,t,n){"use strict";n.r(t);n(22);var a=n(0),i=n.n(a),r=n(90);t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json)):null}},212:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(192),o=n.n(r);t.a=function(e){return i.a.createElement("div",{className:o.a.newsHighlightDiv},i.a.createElement("a",{className:o.a.titleLink,href:e.link1,target:"__blank"},i.a.createElement("h2",{className:o.a.tcvHeadline},e.headline)),function(e){return e.dates?i.a.createElement("p",{className:o.a.tcvDates},e.dates," —"):null}(e),i.a.createElement("p",{className:o.a.tcvDescription},e.description),i.a.createElement("p",null,i.a.createElement("a",{className:o.a.tcvLink,href:e.link1},"Read more")))}},213:function(e,t,n){"use strict";var a=n(214),i=n(0),r=n.n(i),o=n(209),l=n(212),s=function(e){e.children;return r.a.createElement(o.b,{query:"3441526197",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"0px"}},function(e){var t=[];return e.allTcvAllJson.edges.forEach(function(e){return t.push(r.a.createElement("li",{key:e.node.date},r.a.createElement("div",{style:{borderBottom:"1px dashed gray"}},r.a.createElement(l.a,{headline:e.node.headline,description:e.node.description,dates:e.node.dates,link1:e.node.link1}))))}),t}(e)))},data:a})};t.a=function(){return r.a.createElement(s,null)}},214:function(e){e.exports={data:{allTcvAllJson:{edges:[{node:{headline:"College Administrators Missed Key Digital Evidence in Months-Long Voyeurism Investigation",description:"Connecticut College administrators responsible for investigating multiple reports of voyeurism occurring in residence hall bathrooms between October 2018 and January 2019 overlooked key digital evidence […]",dates:"May 17, 2019",link1:"/investigation"}},{node:{headline:"Elections Decide 2019-2020 SGA Executive Board",description:"After 5 days of SGA elections, Chief of Communications Nadia Bednarczuk ‘19 announced on Sunday night the winners of nine races for positions on next […]",dates:"April 22, 2019",link1:"/tcv/2019-04-22"}},{node:{headline:"SGA Election Results",description:"Results from the spring 2019 student government elections.",dates:"April 16, 2019",link1:"http://thecollegevoice.org/2019/04/16/sga-election-results/"}},{node:{headline:"Mike Kmec Sentenced to 18 Months Prison Time For Embezzling From College",description:"A former Connecticut College employee charged with embezzling $170,000 from the College will serve 18 months in prison and three years of supervised release, according […]",dates:"April 24, 2019",link1:"/tcv/2019-04-24"}},{node:{headline:"Kmec’s Lawyers Say Mental Health Issues Warrant Lighter Sentence",description:"Lawyers for Michael Kmec, a former Connecticut College employee who pleaded guilty last November to embezzling over $170,000 from the College, are asking a federal […]",dates:"April 1, 2019",link1:"/tcv/2019-04-01"}},{node:{headline:"Editorial, 3-5-19",description:"This issue of The College Voice includes after-the-fact SGA and Honor Council election coverage.  In the future, the News section will be covering SGA, Honor Council, […]",dates:"March 5, 2019",link1:"/tcv/2019-03-05"}},{node:{headline:"Police Arrest Conn College Sophomore For Voyeurism, Alleging He Photographed Dozens Of Women At Conn And On NYC Subways",description:"New London Police say they have arrested a Connecticut College sophomore in relation to multiple reports of voyeurism incidents that occurred at the College throughout this academic year. Carlos Antonio Alberti ‘21 was charged with seven felony counts of voyeurism for allegedly photographing dozens of female students in shower changing areas without their consent.",dates:"March 2, 2019",link1:"/tcv/2019-03-02"}},{node:{headline:"Police Identify Voyeurism Suspect, Say There Were More Incidents Than Previously Reported",description:"New London Police say they have identified and made contact with a 20 year-old male suspect in a months-long voyeurism investigation at the College surrounding […]",dates:"February 18, 2019",link1:"/tcv/2019-02-18/voyeurism"}},{node:{headline:"Mike Kmec’s Lawyers Get Court Deadlines Postponed, Claiming Medication May Have Influenced Embezzlement",description:"Lawyers for Michael Kmec, the former Connecticut College Director of Auxiliary Services who pleaded guilty last November to embezzling money from the College–a charge that […]",dates:"February 18, 2019",link1:"/tcv/2019-02-18/kmec"}},{node:{headline:"New Lo. Police Identify Suspect In 'Shower Incident' Case; Individual Removed From Campus",description:"For months, the “shower incidents” have stumped College and police investigators. Four incidents occurred last semester — three in Plant House, and one in Morrison. A fifth incident was reported as having occurred in Plant on the second day of classes this semester.",dates:"February 7, 2019",link1:"/tcv/2019-02-07"}},{node:{headline:"In Confusing Election, Student Body Approves Constitution and Sustainability Measures",description:"Two referendums held in November regarding SGA’s constitution and Sustainable Projects Fund have passed successfully, according to SGA communications chief Nadia Bednarczuk ‘19. The constitutional […]",dates:"December 11, 2018",link1:"/tcv/2018-12-11"}},{node:{headline:"Former College Employee Pleads Guilty To Stealing $173K From College; Faces Up To 20 Years In Prison",description:"Michael Kmec, the former director of Auxiliary Services at Connecticut College, pleaded guilty Wednesday to one count of wire fraud relating to an embezzlement scheme […]",dates:"November 15, 2018",link1:"/tcv/2018-11-15"}},{node:{headline:"Health Center Still Without Permanent Director",description:"A failed search for a new director of Student Health Services and the resignation of a part-time nurse practitioner has forced the College’s primary medical […]",dates:"September 24, 2018",link1:"/tcv/2018-09-24"}},{node:{headline:"Chaos At The Counter",description:"The Connecticut College Post Office operated in crisis mode at the beginning of this semester. After a decrease in staff that came with no technological […]",dates:"October 10, 2018",link1:"/tcv/2018-10-10"}},{node:{headline:"Where Do You Fit? Understanding Demographic Categories",description:"The federal government requires colleges and universities to report their race, ethnicity, and gender demographics as a set of fixed categories.",dates:"May 3, 2018",link1:"/tcv/2018-05-03"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-the-college-voice-js-9b1347b08f5abd5c9b64.js.map
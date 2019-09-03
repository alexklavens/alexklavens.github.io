(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(e,t,a){"use strict";a.r(t);var n=a(217),r=a(0),i=a.n(r),o=a(210),s=a(198),l=a.n(s),c=function(e){return i.a.createElement("div",{className:l.a.radioPiece},i.a.createElement("div",{className:l.a.nonIframeRadioContent},i.a.createElement("p",{className:l.a.airedPiece},e.date),i.a.createElement("p",{className:l.a.description},e.description)),i.a.createElement("iframe",{className:l.a.radioIframe,scrolling:"no",frameborder:"no",src:e.iframe_link}))},d=a(212),u=function(e){var t=e.children;return i.a.createElement("div",null,t)};var m=a(209),h=(a(213),a(199)),p=a.n(h),f=function(e){e.children;return i.a.createElement(m.b,{query:"4152511020",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"0px"}},function(e){var t=[];return e.allWburClipsJson.edges.forEach(function(e){return t.push(i.a.createElement("li",{key:e.node.date},i.a.createElement(c,{date:e.node.date,description:e.node.description,iframe_link:e.node.iframe_link})))}),t}(e)))},data:n})};t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(u,null,i.a.createElement("h2",{className:p.a.journalismTitle},"WBUR 90.9 FM"),i.a.createElement("p",{className:p.a.jDescription},"I spent the Summer of 2017 working as a Newscast Intern at WBUR, one of the NPR stations in Boston. Here are a few recordings of aired pieces that I worked on and wrote. Pieces are labeled by when they aired."),i.a.createElement("div",{id:"radioWBURsection"},i.a.createElement(f,{id:"wburSection"}))),i.a.createElement(u,null,i.a.createElement("h2",{className:p.a.journalismTitle},"The College Voice"),i.a.createElement("p",{className:p.a.jDescription},"I was a editor and reporter for Connecticut College's newspaper",i.a.createElement("i",null,"The College Voice"),". As editor, I pitched stories, advised reporters and edited content."),i.a.createElement(d.a,{headline:"Investigative Reporting: Voyeurism Incidents at Connecticut College",description:"I reported on the College's handling of a series of voyeurism incidents that occurred in campus dorms. My investigation found that an internal Title IX investigation into the matter was prolonged for months before appropriate data was used.",link1:"/investigation"}),i.a.createElement(d.a,{headline:"Utilizing Court Records: Embezzlement at Connecticut College",description:"In a series of articles, I reported on legal proceedings involving a former Connecticut College employee who pleaded guilty in November 2018 to embezzling nearly $200K from the College. I used federal court records and Freedom of Information Act requests in my reporting.",link1:"http://thecollegevoice.org/2019/02/18/mike-kmecs-lawyers-get-court-deadlines-postponed-claiming-medication-may-have-influenced-embezzlement/",borderBottomm:"none"}),i.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},i.a.createElement("a",{className:p.a.tcvButton,href:"/theCollegeVoice"},"More from ",i.a.createElement("i",null,"The College Voice")))))}},208:function(e,t,a){var n;e.exports=(n=a(211))&&n.default||n},209:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(208),a(8).default.enqueue;var s=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:n||i,staticQueryData:e})})}},210:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(209),o=a(190),s=a.n(o),l=function(e){return r.a.createElement("li",{className:s.a.navLink},r.a.createElement(i.a,{to:e.to,style:{textDecoration:"none"}},e.children))},c=function(e){return r.a.createElement("div",{id:"siteHeader",style:{lineHeight:"40px",paddingTop:"10px"}},r.a.createElement(i.a,{to:"/"},r.a.createElement("h1",{className:s.a.siteHeaderAlexKlavens,style:{display:"inline-block",color:"black"}},"Alex Klavens ")),r.a.createElement("ul",{id:"myLinks"},r.a.createElement(l,{to:"/projects/"},"Projects"),r.a.createElement(l,{to:"/journalism/"},"Journalism"),r.a.createElement(l,{to:"/resume/"},"Resume"),r.a.createElement(l,{to:"/contact/"},"Contact")),r.a.createElement("div",{id:"burger"},r.a.createElement("a",{href:"javascript:void(0);",id:"showMenu",class:"icon",onClick:u},r.a.createElement("div",{class:"burger"}),r.a.createElement("div",{class:"burger"}),r.a.createElement("div",{class:"burger"}))))},d=function(e){return r.a.createElement("div",{className:s.a.footer},r.a.createElement("ul",{className:s.a.footerList},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/alexklavens",target:"_blank"},r.a.createElement("img",{className:s.a.iconLink,src:"/icons/github.png"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/alexklavens",target:"_blank"},r.a.createElement("img",{className:s.a.iconLink,src:"/icons/twitter.png"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://linkedin.com/in/alexklavens",target:"_blank"},r.a.createElement("img",{className:s.a.iconLink,src:"/icons/linkedin.png"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:aklavens@gmail.com",target:"_blank"},r.a.createElement("img",{className:s.a.iconLink,src:"/icons/email.png"})))),r.a.createElement("p",{className:s.a.designedDeveloped},"Designed and developed by Alex Klavens"))};function u(){var e=document.getElementById("myLinks");document.getElementById("siteHeader");"block"===e.style.display?e.style.display="none":e.style.display="block"}t.a=function(e){var t=e.children;return r.a.createElement("div",{id:"header",style:{margin:"2rem auto",maxWidth:850,padding:"0 1rem"}},r.a.createElement(c,null),t,r.a.createElement(d,null))}},211:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),i=a(90);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},212:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(192),o=a.n(i);t.a=function(e){return r.a.createElement("div",{className:o.a.newsHighlightDiv},r.a.createElement("a",{className:o.a.titleLink,href:e.link1,target:"__blank"},r.a.createElement("h2",{className:o.a.tcvHeadline},e.headline)),function(e){return e.dates?r.a.createElement("p",{className:o.a.tcvDates},e.dates," —"):null}(e),r.a.createElement("p",{className:o.a.tcvDescription},e.description),r.a.createElement("p",null,r.a.createElement("a",{className:o.a.tcvLink,href:e.link1,target:"__blank"},"Read more")))}},213:function(e,t,a){"use strict";var n=a(214),r=a(0),i=a.n(r),o=a(209),s=a(212),l=function(e){e.children;return i.a.createElement(o.b,{query:"3441526197",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"0px"}},function(e){var t=[];return e.allTcvAllJson.edges.forEach(function(e){return t.push(i.a.createElement("li",{key:e.node.date},i.a.createElement("div",{style:{borderBottom:"1px dashed gray"}},i.a.createElement(s.a,{headline:e.node.headline,description:e.node.description,dates:e.node.dates,link1:e.node.link1}))))}),t}(e)))},data:n})};t.a=function(){return i.a.createElement(l,null)}},214:function(e){e.exports={data:{allTcvAllJson:{edges:[{node:{headline:"College Administrators Missed Key Digital Evidence in Months-Long Voyeurism Investigation",description:"Connecticut College administrators responsible for investigating multiple reports of voyeurism occurring in residence hall bathrooms between October 2018 and January 2019 overlooked key digital evidence […]",dates:"May 17, 2019",link1:"/investigation"}},{node:{headline:"Elections Decide 2019-2020 SGA Executive Board",description:"After 5 days of SGA elections, Chief of Communications Nadia Bednarczuk ‘19 announced on Sunday night the winners of nine races for positions on next […]",dates:"April 22, 2019",link1:"/tcv/2019-04-22"}},{node:{headline:"SGA Election Results",description:"Results from the spring 2019 student government elections.",dates:"April 16, 2019",link1:"http://thecollegevoice.org/2019/04/16/sga-election-results/"}},{node:{headline:"Mike Kmec Sentenced to 18 Months Prison Time For Embezzling From College",description:"A former Connecticut College employee charged with embezzling $170,000 from the College will serve 18 months in prison and three years of supervised release, according […]",dates:"April 24, 2019",link1:"/tcv/2019-04-24"}},{node:{headline:"Kmec’s Lawyers Say Mental Health Issues Warrant Lighter Sentence",description:"Lawyers for Michael Kmec, a former Connecticut College employee who pleaded guilty last November to embezzling over $170,000 from the College, are asking a federal […]",dates:"April 1, 2019",link1:"/tcv/2019-04-01"}},{node:{headline:"Editorial, 3-5-19",description:"This issue of The College Voice includes after-the-fact SGA and Honor Council election coverage.  In the future, the News section will be covering SGA, Honor Council, […]",dates:"March 5, 2019",link1:"/tcv/2019-03-05"}},{node:{headline:"Police Arrest Conn College Sophomore For Voyeurism, Alleging He Photographed Dozens Of Women At Conn And On NYC Subways",description:"New London Police say they have arrested a Connecticut College sophomore in relation to multiple reports of voyeurism incidents that occurred at the College throughout this academic year. Carlos Antonio Alberti ‘21 was charged with seven felony counts of voyeurism for allegedly photographing dozens of female students in shower changing areas without their consent.",dates:"March 2, 2019",link1:"/tcv/2019-03-02"}},{node:{headline:"Police Identify Voyeurism Suspect, Say There Were More Incidents Than Previously Reported",description:"New London Police say they have identified and made contact with a 20 year-old male suspect in a months-long voyeurism investigation at the College surrounding […]",dates:"February 18, 2019",link1:"/tcv/2019-02-18/voyeurism"}},{node:{headline:"Mike Kmec’s Lawyers Get Court Deadlines Postponed, Claiming Medication May Have Influenced Embezzlement",description:"Lawyers for Michael Kmec, the former Connecticut College Director of Auxiliary Services who pleaded guilty last November to embezzling money from the College–a charge that […]",dates:"February 18, 2019",link1:"/tcv/2019-02-18/kmec"}},{node:{headline:"New Lo. Police Identify Suspect In 'Shower Incident' Case; Individual Removed From Campus",description:"For months, the “shower incidents” have stumped College and police investigators. Four incidents occurred last semester — three in Plant House, and one in Morrison. A fifth incident was reported as having occurred in Plant on the second day of classes this semester.",dates:"February 7, 2019",link1:"/tcv/2019-02-07"}},{node:{headline:"In Confusing Election, Student Body Approves Constitution and Sustainability Measures",description:"Two referendums held in November regarding SGA’s constitution and Sustainable Projects Fund have passed successfully, according to SGA communications chief Nadia Bednarczuk ‘19. The constitutional […]",dates:"December 11, 2018",link1:"/tcv/2018-12-11"}},{node:{headline:"Former College Employee Pleads Guilty To Stealing $173K From College; Faces Up To 20 Years In Prison",description:"Michael Kmec, the former director of Auxiliary Services at Connecticut College, pleaded guilty Wednesday to one count of wire fraud relating to an embezzlement scheme […]",dates:"November 15, 2018",link1:"/tcv/2018-11-15"}},{node:{headline:"Health Center Still Without Permanent Director",description:"A failed search for a new director of Student Health Services and the resignation of a part-time nurse practitioner has forced the College’s primary medical […]",dates:"September 24, 2018",link1:"/tcv/2018-09-24"}},{node:{headline:"Chaos At The Counter",description:"The Connecticut College Post Office operated in crisis mode at the beginning of this semester. After a decrease in staff that came with no technological […]",dates:"October 10, 2018",link1:"/tcv/2018-10-10"}},{node:{headline:"Where Do You Fit? Understanding Demographic Categories",description:"The federal government requires colleges and universities to report their race, ethnicity, and gender demographics as a set of fixed categories.",dates:"May 3, 2018",link1:"/tcv/2018-05-03"}}]}}}},217:function(e){e.exports={data:{allWburClipsJson:{edges:[{node:{date:"June 16, 2017 17:00",description:"This piece focuses on U.S. Congressman Jim McGovern's response to President Trump's decision to roll back Obama-era efforts that improved U.S.-Cuba relations. It also features a sound bite from an interview I did with the congressman.",iframe_link:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/428498868%3Fsecret_token%3Ds-783gz&color=%231a1919&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}},{node:{date:"June 19, 2017 15:00",description:"Criminal Justice Reform is the focus of this piece. Massachusetts lawmakers gathered to discuss reforms like mandatory minimum sentencing. The piece features a sound bite from my interview with Rahsaan Hall, the Director of the Racial Justice Program at the Massachusetts ACLU.",iframe_link:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/438125934%3Fsecret_token%3Ds-PWFLS&color=%231a1919&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}},{node:{date:"July 7, 2017 05:00",description:"U.S. Senator Ed Markey spoke on behalf of Francisco Rodriguez at a rally at a July rally in Boston. Rodriguez is an MIT janitor who has lived in the U.S. illegally for over 10 years. He has no criminal record, has two daughters who are U.S. citizens, and is beloved by the MIT community. He was denied asylum in 2011, but has been granted Stays of Removal every year since -- until last July. His first request for a Stay under the Trump administration was denied. Immigration authorities told him to bring a plane ticket to a hearing.",iframe_link:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/440275218%3Fsecret_token%3Ds-n8wxL&color=%231a1919&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}},{node:{date:"August 11, 2017 08:00",description:"North Adams Regional Hospital closed in 2014 with just five days notice to employees. Last summer, the Massachusetts Attorney General's Office decided not to punish leaders of the shuttered hosptials, despite a state requirement for hospitals to give 90 days notice in cases of closure. The AG's office said hospital leaders tried to keep the site open, but the leader of a coalition devoted to restoring inpatient services to North Berkshire County says this decision sets a dangerous precedent.",iframe_link:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/438117471%3Fsecret_token%3Ds-O2zfU&color=%231a1919&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-journalism-js-b1951ed24c5242ddea6a.js.map
import React from "react"
import Layout from "../components/layout"
import ProjectItem from "../components/projectItem"
import { StaticQuery, graphql } from 'gatsby'

//
// const MainList = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query ProjectsQuery {
//         allProjectsJson {
//           edges {
//             node {
//               title
//               description
//               details
//               project_link
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <ul style={{
//           listStyle: `none`,
//           paddingLeft: `0px`
//         }}>{getProjects(data)}</ul>
//       </>
//     )}
//   />
// );
//
//
// function getProjects(data) {
//   const projectItemsArray = [];
//   data.allProjectsJson.edges.forEach(
//     item =>
//       projectItemsArray.push(
//         <li key={item.node.title}>
//           <ProjectItem
//             title = {item.node.title}
//             description = {item.node.description}
//             details = {item.node.details}
//             project_link={item.node.project_link}
//           />
//         </li>
//       )
//   );
//   return projectItemsArray;
// }

// import thisImage from "/images/tamag.jpg"


function getProjects(data) {
  const projectItemsArray = [];
  data.allProjectsJson.edges.forEach(
    item =>
      projectItemsArray.push(
        <li key={item.node.title}>
          <ProjectItem
            title={item.node.title}
            description={item.node.description}
            details={item.node.details}
            img_url={item.node.img_url}
            alt_text={item.node.alt_text}
            project_link={item.node.project_link}
            github_link={item.node.github_link}
            custom_link={item.node.custom_link}
            languages={item.node.languages}
          />
        </li>
      )
  );
  return projectItemsArray
}

const Projects = ({ chidlren }) => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        allProjectsJson {
          edges {
            node {
              title
              description
              details
              img_url
              alt_text
              project_link
              github_link
              custom_link
              languages
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ul style={{
          listStyle: `none`,
          paddingLeft: `0px`
        }}>{getProjects(data)}</ul>
      </>
    )}
  />
);


export default ( ) => (
  <Layout>
    <h1 style={{
      textAlign:`center`
    }}>Projects</h1>

    <Projects />

    {/* <ProjectItem
      title = "TripAdvisor Magazine"
      description = "A Natural Language Processing-informed magazine of the highest-quality travel reviews"
      details = "For TripAdvisor's summer intern hackathon, I took TripAdvisor Magazine from concept to product. TripAdvisor Magazine is a web-based magazine-style publication that identifies high quality travel reviews with natural language processing and features them as articles. There are millions of reviews on TripAdvisor, often containing a few sentences of praise or frustration. But among those millions, there are some beautiful, compelling, and lengthy travel essays!"
      img_url = "/images/tamag.jpg"
      alt_text = "A storefront featured in TripAdvisor Magazine"
      project_link = "https://tripadvisor-magazine.herokuapp.com"
      github_link = "https://github.com/alexklavens/tripadvisor-magazine"
      languages = "Python##
                    Flask##
                    Contentful API##
                    Heroku##
                    Pandas##
                    HTML/CSS##
                    Jinja##
                    NLP##
                    CMS##
                    Design"

    />



    <ProjectItem
      title = "Hospital Closure Map"
      description = "A web-scraping effort and data visualization focusing on rural hospital closures"
      details = "This is a data analysis, and visualization project focused on rural hospital closures in the United States. During my internship at WBUR, I reported on the MA Attorney General’s decision to not prosecute the former leaders of a western Massachusetts hospital that closed in 2014 with less than a week’s notice to employees. The experience inspired me to learn more about rural hospital closures. This project was also my first foray into web-based data visualizations using D3.js."
      img_url = "/images/hospital_preview.png"
      alt_text = "Screenshot of the map in this project."
      project_link = "https://alexklavens.github.io/hospital-closure-map/"
      github_link = "https://github.com/alexklavens/hospital-closure-map"
      languages="D3.js##
                  GeoJSON##
                  HTML/CSS##
                  Python##
                  RegEx"
    />

    <a name="this"></a>
    <ProjectItem
      title = "Presidential Speech Scraper & NLP"
      description = "A computer science project focusing on web scraping and natural language processing of presidential documents."
      details="A web scraper for the American Presidency Project, a massive online repository of presidential documents that has no programmatic accessibility. I created this for the purpose of accessing documents for a natural language processing research project."
      img_url = "/images/presidency.png"
      alt_text = "Screen shot of the home page of the American Presidency Project's website."
      github_link = "https://github.com/alexklavens/presidential-speech-scraper"
      languages = "Python##
                    BeautifulSoup##
                    JSON"
    />

     <ProjectItem

      title = "Google Sheets + Slack Schedule Checker"
      img_url = "/images/slack_google.png"
      alt_text = "Slack and Google Sheets Logo. Source: BetterCloud."
      details="For the Computer Science teaching assistant program at Connecticut College, I integrated Slack into our work flow and built a Slack bot that employees could ask for schedules."
      languages="Python##
                Slack API##
                Google Sheets API##
                Heroku"
    />

    <ProjectItem

      title = "Skunkpocalypse"
      img_url = "https://skunkpocalypse.weebly.com/uploads/4/4/0/3/44033907/capture_1_orig.png"
      details="For a video game development course, my partner and I built Skunkpocalypse, a game built with Unity for a massive touchscreen in our school’s library. In Skunkpocalypse, Connecticut College has been overrun by Skunks (this is an actual problem at Conn). The user plays as Gustavo Ryan, a student who is charged with defeating these skunks, and eventually a boss skunk, by collecting and spraying perfume."
      github_link = "https://github.com/alexklavens/skunkpocalypse"

      languages="C# ##
                Unity
                "
    />

    <ProjectItem
      title = "Original Dutch Folk Music"
      details = "This was a final project for my Digital Sound Processing course. A MATLAB program analyzes a database of monophonic Dutch folk melodies to create intelligent original melodies. The main goal of the program is to create a interval-based (instead of pitch-based)symbolic representation of the music, and to generate original music based on likely interval changes heard in the database of music."
      languages="MATLAB"
      github_link = "https://github.com/alexklavens/smart-melody-generator"
    /> */}

  </Layout>
)

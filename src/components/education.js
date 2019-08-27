import React from "react"
import ResumeEntry from "../components/resumeEntry"
import { StaticQuery, graphql } from 'gatsby'


const Education  = ({ children }) => (

  <StaticQuery
    query={graphql`
      query EducationQuery {
        allEducationJson {
          edges {
            node {
              schoolName
              subDescription
              dates
              description
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
        }}>{getEducation(data)}</ul>
      </>
    )}
  />
);

function getEducation(data) {
  const educationItemsArray = [];
  data.allEducationJson.edges.forEach(
    item =>
      educationItemsArray.push(
        <li key={item.node.schoolName}>
          <ResumeEntry
            companyName = {item.node.schoolName}
            jobTitle = {item.node.subDescription}
            dates = {item.node.dates}
            description={item.node.description}
          />
        </li>
      )
  );
  return educationItemsArray;
}


export default () => (

  <Education />
)

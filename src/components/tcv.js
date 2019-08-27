import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import NewsHighlight from "../components/newsHighlight"


const TCV = ({children}) => (
  <StaticQuery
    query={graphql`
      query TCVQuery {
        allTcvAllJson {
          edges {
            node {
              headline
              description
              dates
              link1
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
        }}>{getTCVClips(data)}</ul>
      </>
    )}
  />
);


function getTCVClips(data) {
  const tcvHighlightsArray = [];
  data.allTcvAllJson.edges.forEach(
    item =>
      tcvHighlightsArray.push(
        <li key={item.node.date}>
        <div style={{
          borderBottom:`1px dashed gray`
        }}>
          <NewsHighlight
            headline = {item.node.headline}
            description = {item.node.description}
            dates = {item.node.dates}
            link1 = {item.node.link1}
          />
        </div>
        </li>
      )
  );
  return tcvHighlightsArray;
}

export default () => (
  <TCV />
)

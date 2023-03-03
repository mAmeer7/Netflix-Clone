import React from 'react'
import Nav from "./Nav"
import Row from './Row'
import Banner from "./Banner"
import requests from './Request'

export default function HomeScreen() {
  return (
    <>
    <div className="homescreen">
         <Nav/>
       
      <Banner/>
      
      <Row   title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} />
      <Row   title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row   title="HORROR" fetchUrl={requests.fetchHorror} />
      <Row   title="COMEDY" fetchUrl={requests.fetchComedy} />
      <Row   title="DOCUMENTRIES" fetchUrl={requests.fetchDocumentries} />
      <Row   title="TRENDING" fetchUrl={requests.fetchTrending} />
    </div>
    </>
  );
}
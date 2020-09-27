

    import React, { useContext } from "react";
    import { NewsContext } from "../NewsContext";
    // import NewsArticle from "./NewsArticle";
    import CardArticle from "./CardArticle";
    import Title from "./Title";
    
    function News(props) {
      const value= useContext(NewsContext);
        // console.log("fetched from news component data", data.articles[0].url);
    
    
      return (
        <div className="">
            <Title name="Indian " title="news "/>
            <div className="row container mx-auto" >
                
                {value.news ? value.news.articles.map((news)=>(
                    <CardArticle data1={news} key={news.url} id={news.url}/>
                )):"loading"}
        </div>
        </div>
      );
    }
    export default News;


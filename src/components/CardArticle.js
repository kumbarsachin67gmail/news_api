import React, { useContext }  from "react";
import {Link} from 'react-router-dom';
import { NewsContext } from "../NewsContext";

function CardArticle({ data1, id }) {

  const  value = useContext(NewsContext);

  //   const hideItem=(id)=>{
  //   console.log("item is hided")
  // }
  
 
  return (
    <div className="col-10 mx-auto col-md-6 mx-auto mx-auto px-10 col-lg-4 mx-auto my-auto container">
      <div className="card news">
        <div className="car-body">
          <div className="img-container img1 p-2">
              <Link to={data1.url}>
            <img src={data1.urlToImage} className="card-img-top "alt="image2" />
              </Link>

          </div>

          <div className="p-2">
            <div className="card-header">
              <h1 className="news__title">{data1.title.substring(0,50)}</h1>
            </div>
            {/* <p className="news__desc">{data.description}</p>
            <span className="news__auth">{data.author}</span>
            <br /> */}
            <div className="card-footer">

            <span className="news__published">{data1.publishedAt}</span>
            <br />
            <span className="news__source">{data1.source.name}</span>
            <button className="like">Like</button>
            <button className="hide" onClick={()=> value.hideItem(id)}>Hide</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardArticle;

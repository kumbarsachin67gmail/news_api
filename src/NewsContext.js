// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const NewsContext = createContext();

// export const NewsContextProvider = (props) => {

//   const [news,setNews] = useState();
//   const [data, setData] = useState();
//   const apiKey = "429f3cdc1ca7439d85dae2748ed3c260";

//   useEffect(() => {
//     axios
//       .get(
//         `http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-27&sortBy=publishedAt&apiKey=${apiKey}`
//       )
//       .then((response) => setNews(response.data))
//       .catch((err) => console.log(err));
//   }, [news]);
  
//   useEffect(()=>{
//     let tempData1 = {...news}
//   let tempData = JSON.stringify(tempData1);
//   localStorage.setItem("newsdata",tempData);
//   let originalData = JSON.parse(localStorage.getItem("newsdata"))
//   setData(originalData);
// },[news])

// //   const getItem = (id) => {
// //     const product = data.find((item) => item.articles[0].url === id);
// //     return product;
// //   };


//   const hideItem = (id) => {
//     // const tempData = { ...data };
    
//     // console.log("fetched data", data.articles[0].url);
//      console.log("presnet data", news);
     
//   };


//   return (
//     <NewsContext.Provider value={{ data,news, hideItem }}>
//       {props.children}
//     </NewsContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const [news,setNews] = useState();
  const apiKey = "429f3cdc1ca7439d85dae2748ed3c260";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-27&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setNews(response.data))
      .catch((err) => console.log(err));
  }, [news]);

//   const getItem = (id) => {
//     const product = data.find((item) => item.articles[0].url === id);
//     return product;
//   };

  useEffect(()=>{
      let tempData1 ={...news}
    let tempData = JSON.stringify(tempData1);
    localStorage.setItem("newsdata",tempData);
    let originalData = JSON.parse(localStorage.getItem("newsdata"))
    setData(originalData);
  },[news])

  const hideItem = (id) => {
    // const tempData = { ...data };
    
    console.log("fetched data", data);
     console.log("presnet data", news);
     
  };

  return (
    <NewsContext.Provider value={{ data,news, hideItem }}>
      {props.children}
    </NewsContext.Provider>
  );
};



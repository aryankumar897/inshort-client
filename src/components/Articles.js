
import React from 'react'
import  {useEffect , useState} from "react";
import  {getNews} from "../service/api";

import Article from './Article';


export const Articles = () => {
const [news,setNews]=useState([]);




useEffect(() => {
      dailyNews();

},[])

const  dailyNews = async()=>{
      let  response  =await getNews();
      console.log(response.data);
      setNews(response.data);
}
return (
       
    news?.length>0 && news.map(article =>(
     <Article article={article}/>
      ))
       )
}
export default Articles;
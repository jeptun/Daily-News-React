import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import NewsItem from './NewsItem';

function NewsList() {
    const [articles, setArticles] = useState ([]);
    
    //Data upload Axios Newsapi
    useEffect (() => {
        const getArticles = async () => {
            const res = await Axios.get('https://newsapi.org/v2/top-headlines?country=cz&category=business&pageSize=2&apiKey=ec41f72b88244678994239ffbbdd7003');

            setArticles(res.data.articles);
        };

        getArticles();
    },[]);

    //Komponenta nastavena v NewsItem.js
    return  <div>
        {articles.map(({publishedAt, title, description, url, urlToImage}) =>(
            <NewsItem
            publishedAt={publishedAt}
             title={title}
              description={description}
               url={url}
                urlToImage={urlToImage} 
                    key={url}
                />
        ))}
    </div>;   
};

export default NewsList;

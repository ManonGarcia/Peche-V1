import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleArticle from "./articleTitle";

function ArticleId() {
    const { id } = useParams();
    const [articles, setArticles] = useState(null);
    useEffect(fetchDataArticle, []);

    function fetchDataArticle() {
        fetch('http://localhost:3001/myArticles')
            .then((res) => res.json())
            .then((articles) => {
                const article = articles.find((article) => article.id === id);
                setArticles(article);
            })
            .catch(console.error);
    }

    if(articles === null) return (
        <div className="spinner">
            <div></div><div></div><div></div><div></div><div></div>
        </div>
    );


    return (
        <div className="spotsId">
            <TitleArticle article={articles} />
        </div>
    )
};

export default ArticleId;
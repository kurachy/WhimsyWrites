import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../../services/articleService'
import './articlePage.css'
import { useParams } from "react-router-dom"


export default function ArticlePage() {
    const { id } = useParams();
    const [ArticleData, setArticleData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const article = await fetchArticles();
                setArticleData(article)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <h1>Article {id}</h1>
            {ArticleData !== null ? (
                <p>{ArticleData[0].id}</p>

            ) : (
                <p>Loading...</p>
            )}

        </>
    )
}
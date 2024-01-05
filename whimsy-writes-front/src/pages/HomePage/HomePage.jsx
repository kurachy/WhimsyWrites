import './homePage.css';
import ArticleCard from '../../components/ArticleCard/ArticleCard.jsx'
import MainArticleCard from '../../components/MainArticleCard/MainArticleCard.jsx'

import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../../services/articleService'

export default function HomePage() {

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
      <main className="home-page">
         <div className="categories">
            <a href="#">#Food</a>
            <a href="#">#Nature</a>
            <a href="#">#Technology</a>
            <a href="#">#Multimedia</a>
         </div>
         <section className="home-page__main-articles">


            {ArticleData === null ? (
               <div>Loading...</div>
            ) : (
               <>

                  {ArticleData.slice(0, 5).map(article => (
                     <MainArticleCard key={article.id} articleCardData={{
                        id: article.id,
                        title: article.title, articleImage: article.image,
                        avatar: article.author_avatar, username: article.author_username, fullname: article.author_fullname,
                        timeOfPublication: "3 days ago"
                     }} />
                  ))}

               </>
            )}
         </section>

         <section className="home-page__category-container">

            <h2 className="category-container__title">#Food</h2>

            <div className="home-page__categary-articles">
               <ArticleCard articleCardData={{
                  id: 'galactic-gastronomy',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: 'pixelated-portraits',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: 'lunar-lullabies',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: 'zephyr-zest',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: 'aqua-odyssey',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
            </div>
            <a href="#" className="category-container__read-more">View all posts</a>
         </section>
         <section className="home-page__category-container">

            <h2 className="category-container__title">#Nature</h2>

            <div className="home-page__categary-articles">
               <ArticleCard articleCardData={{
                  id: '',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: '',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: '',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: '',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: '',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
            </div>
            <a href="#" className="category-container__read-more">View all posts</a>
         </section>
         <section className="home-page__category-container">

            <h2 className="category-container__title">#Technology</h2>

            <div className="home-page__categary-articles">
               <ArticleCard articleCardData={{
                  id: '',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: '',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: '',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: '',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
               <ArticleCard articleCardData={{
                  id: '',
                  title: "Buddha Bowl", articleImage: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg",
                  avatar: "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg", username: "ThomThom", fullname: "Thom Smith",
                  timeOfPublication: "3 days ago"
               }} />
            </div>
            <a href="#" className="category-container__read-more">View all posts</a>
         </section>
      </main>
   );
}
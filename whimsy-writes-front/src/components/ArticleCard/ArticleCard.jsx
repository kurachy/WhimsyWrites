import PropTypes from 'prop-types';
import "./ArticleCard.css"
import { Link } from "react-router-dom"

/**
 * ArticleCard
 * @param {Object} articleCardData - Data for rendering an article card.
 * @param {string} articleCardData.id - The title of the article.
 * @param {string} articleCardData.title - The title of the article.
 * @param {string} articleCardData.articleImage - URL of the article image.
 * @param {string} articleCardData.avatar - URL of the user avatar.
 * @param {string} articleCardData.username - Username of the author.
 * @param {string} articleCardData.fullname - Full name of the author.
 * @param {string} articleCardData.timeOfPublication - Time of publication.
 */

const ArticleCard = ({ articleCardData }) => {

    return (
        <Link key={articleCardData.id} className="article-card" to={'/ArticlePage/'+articleCardData.id} >
        
            <h3 className="article-card__title">
                {articleCardData.title}
            </h3>
            <img src={articleCardData.articleImage} alt={articleCardData.title} className="article-card__image" />
            <div className="article-card__author-and-time-of-publication">
                <div className="article-card__author">
                    <img src={articleCardData.avatar} alt="avatar" className="author__avatar" />
                    <div className="author__info">
                        <p className="author__username">@{articleCardData.username}</p>
                        <small className="author__fullname">{articleCardData.fullname}</small>
                    </div>
                </div>
                <p className="time-of-publication">{articleCardData.timeOfPublication}</p>
            </div>
        </Link>
    );
}


ArticleCard.propTypes = {
    articleCardData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        articleImage: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        timeOfPublication: PropTypes.string.isRequired,
    }).isRequired,
};

export default ArticleCard;
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/purohitcard.css';

/* ------------------------------------------------------------------
 * Build the right public‑asset URL in every environment.
 * - CRA sets process.env.PUBLIC_URL   → "/"
 * - Vite sets import.meta.env.BASE_URL → "/your‑base/" (or "/")
 * ------------------------------------------------------------------ */
const getAssetPath = (fileName) => {
  /* Vite first (import.meta is undefined in CRA, so guard it) */
  const viteBase =
    typeof import.meta !== 'undefined' &&
    import.meta.env &&
    import.meta.env.BASE_URL;

  /* CRA fallback */
  const craBase = process.env.PUBLIC_URL;

  const base = viteBase ?? craBase ?? '';
  return `${base.replace(/\/?$/, '/')}${'assets/'}${fileName}`;
};

const renderRatingStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  for (let i = 0; i < full; i++) stars.push(<i key={`f${i}`} className="fas fa-star" />);
  if (half) stars.push(<i key="half" className="fas fa-star-half-alt" />);
  for (let i = 0; i < empty; i++) stars.push(<i key={`e${i}`} className="far fa-star" />);

  return stars;
};

const PurohitCard = ({ purohit, detailed = false }) => {
  const imgSrc = getAssetPath(purohit.image);

  /* ---------------- Detailed layout ---------------- */
  if (detailed) {
    return (
      <article className="purohit-card detailed">
        <div className="purohit-image">
          <img src={imgSrc} alt={purohit.name} loading="lazy" />
        </div>

        <div className="purohit-details">
          <h3>{purohit.name}</h3>
          <p className="expertise">{purohit.expertise}</p>

          <div className="purohit-meta">
            <span><i className="fas fa-briefcase" /> {purohit.experience}</span>
            <span><i className="fas fa-map-marker-alt" /> {purohit.location}</span>
          </div>

          <div className="purohit-rating">
            {renderRatingStars(purohit.rating)}
            <span>{purohit.rating}/5</span>
          </div>

          <div className="purohit-languages">
            <h4>Languages:</h4>
            <div className="language-tags">
              {purohit.languages.map((lang) => (
                <span key={lang} className="language-tag">{lang}</span>
              ))}
            </div>
          </div>

          <div className="purohit-about">
            <h4>About</h4>
            <p>{purohit.about}</p>
          </div>

          {purohit.ceremonies?.length > 0 && (
            <div className="purohit-ceremonies">
              <h4>Specializes In:</h4>
              <ul>
                {purohit.ceremonies.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          )}

          <Link to="/book-pooja" className="book-btn">Book&nbsp;Now</Link>
        </div>
      </article>
    );
  }

  /* ---------------- Compact layout ---------------- */
  return (
    <article className="purohit-card">
      <div className="purohit-image">
        <img src={imgSrc} alt={purohit.name} loading="lazy" />
      </div>

      <div className="purohit-content">
        <h3>{purohit.name}</h3>
        <p className="expertise">{purohit.expertise}</p>

        <div className="purohit-meta">
          <span><i className="fas fa-briefcase" /> {purohit.experience}</span>
          <span><i className="fas fa-map-marker-alt" /> {purohit.location}</span>
        </div>

        <div className="purohit-rating">
          {renderRatingStars(purohit.rating)}
          <span>{purohit.rating}/5</span>
        </div>

        <Link to={`/purohits#${purohit.id}`} className="view-profile">
          View&nbsp;Profile
        </Link>
      </div>
    </article>
  );
};

/* Optional but recommended */
PurohitCard.propTypes = {
  purohit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    expertise: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.string,
    ceremonies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  detailed: PropTypes.bool,
};

export default PurohitCard;

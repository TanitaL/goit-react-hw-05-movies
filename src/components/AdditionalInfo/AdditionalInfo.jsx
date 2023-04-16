import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from "./AdditionalInfo.module.css";

const AdditionalInfo = ({ location }) => {
    return (
        <div>
            <span className={css.addInfo}>Additional information</span>
            <ul>
                <li>
                    <Link to={'cast'} state={{ from: location }}>Cast</Link>
                </li>
                <li>
                    <Link to={'reviews'} state={{ from: location }}>Reviews</Link>
                </li>
            </ul>
            <hr></hr>
        </div>
    )
}

export default AdditionalInfo;

AdditionalInfo.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.bool,
  }).isRequired,
};
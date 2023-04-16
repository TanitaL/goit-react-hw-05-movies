import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import css from "./GoBackBtn.module.css";


const GoBackBtn = ({ backLinkHref }) => {
  return (
    <div>
      <button type='button' className={css.goBackBtn}>
        <Link to={backLinkHref} className={css.goBackLink}>
          <BsArrowLeft size={20} />
          <span>Go back</span>
        </Link>
      </button>
    </div>
  )
}

export default GoBackBtn;

GoBackBtn.propTypes = {
  backLinkHref: PropTypes.shape({
    state: PropTypes.bool,
    pathname: PropTypes.string
  }).isRequired
}
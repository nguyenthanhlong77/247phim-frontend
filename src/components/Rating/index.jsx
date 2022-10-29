import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { Start } from '@mui/icons-material';
import './style.scss';

Rating.propTypes = {};

function Rating(props) {
  const stars = [1, 2, 3, 4, 5];
  const [currentValue, setCurrentValue] = useState(
    props.amount === 0 ? 0 : Math.ceil(props.total / props.amount)
  );
  const [hoverValue, setHoverValue] = useState(0);

  const handleOnClick = (rate) => {
    // setCurrentValue(rate);
  };

  const handleOnMouseOver = (index) => {
    setHoverValue(index);
  };

  const handleOnMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div>
      {stars.map((star, index) => {
        return (
          <>
            <BsStarFill
              className={`star 
              ${currentValue >= star ? 'star-rated' : ' '}
              ${hoverValue >= star ? 'star-on' : 'star-off'}
              `}
              key={star}
              onClick={() => handleOnClick(star)}
              onMouseOver={() => handleOnMouseOver(star)}
              onMouseLeave={() => handleOnMouseLeave()}
            />
          </>
        );
      })}
      {props.amount === 0 ? 0 : (props.total / props.amount).toFixed(1)}/5 ({props.amount} bình chọn
      )
    </div>
  );
}

export default Rating;

import React, { PropTypes } from 'react';
import GifCreator from './GifCreator';

const Main = (props) => {
  const {username} = props;

  return(
    <div>
      <span>Welcome back, {username}!</span>
      
    </div>
  )

}

Main.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Main;
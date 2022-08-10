import React from 'react';
import PropTypes from 'prop-types';

function Typing({ from, message }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div class="typing">
        <i className="fa fa-circle"></i>
        <i className="fa fa-circle"></i>
        <i className="fa fa-circle"></i>
      </div>
    </li>
  );
}

Typing.propTypes = {
    from: PropTypes.shape({ 
      name: PropTypes.string.isRequired 
    }).isRequired,
    message: PropTypes.shape({
      id: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired
    }).isRequired
};

export default Typing;
import React from 'react';
import PropTypes from 'prop-types';

function Message({ from, message }) {
  return (
    <li>
      <div className="message-data">
        <i className="fa fa-circle online"></i>&nbsp;
        <span className="message-data-name">{from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
}

Message.propTypes = {
  from: PropTypes.shape({ 
    name: PropTypes.string.isRequired 
  }).isRequired,
  message: PropTypes.shape({
    id: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Message;
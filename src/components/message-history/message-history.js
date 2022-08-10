import React from 'react';
import PropTypes from 'prop-types';
import Message from './message/message';
import Response from './response/response';
import Typing from './typing/typing';

function MessageHistory({ list }) {
  if (!list || list.length === 0) {
    return null;
  }

  const formatMessage = (message) => {
    switch (message.type) {
      case 'message':
        return <Message key={message.id} from={message.from} message={{ id: message.id, time: message.time, text: message.text }} />
      case 'response':
        return <Response key={message.id} from={message.from} message={{ id: message.id, time: message.time, text: message.text }} />
      case 'typing':
        return <Typing key={message.id} from={message.from} message={{ id: message.id, time: message.time }} />
      default:
        return null
    }
  };

  return (
    <ul>
      {list.map(msg => formatMessage(msg))}
    </ul>
  );
}

MessageHistory.defaultProps = {
  list: []
};

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    from: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string
  }))
};

export default MessageHistory;
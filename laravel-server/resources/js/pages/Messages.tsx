import eventEmitter from '@/utils/hook/useEventEmitter';
import React from 'react';

const Messages = () => {
    const handleClick = () => {
        eventEmitter.emit('data', 'Hello from Messages Component!');
    };

    return <button onClick={handleClick}>Send Data from Messages Component</button>;
};

export default Messages;

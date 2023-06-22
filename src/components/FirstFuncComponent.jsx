import React, { useEffect, useState } from 'react';

function FirstComponent(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // addEventListener('resize', () => setWindowWidth(window.innerWidth));
    useEffect(() => setWindowWidth(window.innerWidth), [windowWidth]);
    return <div>{windowWidth}</div>;
}

export default FirstComponent;

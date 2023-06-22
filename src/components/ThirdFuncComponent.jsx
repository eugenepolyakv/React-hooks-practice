import React, { useEffect, useRef, useState } from 'react';

const ThirdFuncComponent = () => {
    const [name, setName] = useState('');
    // const renderCount = useRef(1);
    // useEffect(() => {
    //     renderCount.current = renderCount.current + 1;
    //     console.log(renderCount.current);
    // });
    const inputRef = useRef();
    const focus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div>My name is {name}</div>
            {/* <div>I rendered {renderCount.current} times</div> */}
            <button onClick={focus}>Focus</button>
        </>
    );
};

export default ThirdFuncComponent;

import React, { useRef } from 'react';
function Focusinput() {
    // create a ref to the input element
    const inputRef = useRef(null);
    // function to focus the input element
    const handlefocus = () => {
        inputRef.current.focus();
    };



    return (
        <div>
            <h1>Focusinput</h1>
            <input ref={inputRef} type="text" placeholder="click button to focus" />
            <button onClick={handlefocus}> Focus the input</button>

            <input ref={inputRef} type="text" placeholder="enter ur name" />
            <button onClick={handlefocus}> ur name</button>


        </div>
    );
}


export default Focusinput;
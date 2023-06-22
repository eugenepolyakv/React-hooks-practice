import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FirstComponent from './components/FirstFuncComponent';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
function App(props) {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    console.log('app component render');
    useEffect(() => {
        // axios
        //     .get(`https://jsonplaceholder.typicode.com/${resourceType}`)
        //     .then((response) => {
        //         console.log(response.data);
        //         setItems(response.data);
        //     });
        console.log('resource changed');
        return () => {
            console.log('return from resource change');
        };
    }, [resourceType]);
    return (
        <>
            <NavLink to="firstComponent">to first component</NavLink>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>
                    Comments
                </button>
            </div>
            <h1>{resourceType}</h1>
            {items.map((el) => (
                <div>{JSON.stringify(el)}</div>
            ))}
        </>
    );
}

export default App;

// In this code below a general example on 'useEffect'
import React, { useEffect, useState } from 'react';

// 1st component: Fetch API example - 'componentDidMount'
function FetchExample() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h2> Example 1: Fetch Users Data.</h2>
            <ul>
                {users.slice(0, 5).map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

// 2nd component: Timer with cleanup example - 'componentWillUnmount'
function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log('Timer Stopped');
        };
    }, []);

    return <h2> Seconds: {seconds}</h2>;
}

// 3rd component: Title update example - 'componentDidUpdate'
function TitleUpdater() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = ` Clicks: ${count}`;
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Clicked {count} Times</button>
        </div>
    );
}

// Main App component
function App() {
    const [showTimer, setShowTimer] = useState(true);

    return (
        <div>
            <h1> Examples On Using "useEffect" in "React" </h1>
            <hr />
            <FetchExample />
            <hr />

            <h2>Example 2: Timer with Cleanup.</h2>
            <button onClick={() => setShowTimer(prev => !prev)}>
                {showTimer ? '  Hide Timer' : 'Show Timer '}
            </button>
            {showTimer && <Timer />}
            <hr />

            <h2>Example 3: Title update.</h2>
            <TitleUpdater />
            <hr />
        </div>
    );
}

export default App;

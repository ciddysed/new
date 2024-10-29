// src/App.jsx
import React from 'react';
import TutorLogin from './components/TutorLogin';
import TutorRegister from './components/TutorRegister';

const App = () => {
    return (
        <div>
            <h1>Tutor Registration</h1>
            <TutorRegister />
            <h1>Tutor Login</h1>
            <TutorLogin />
        </div>
    );
};

export default App;

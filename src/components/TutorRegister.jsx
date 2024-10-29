// src/components/TutorRegister.jsx
import React, { useState } from 'react';


const TutorRegister = () => {
    const [tutorData, setTutorData] = useState({
        tutorName: '',
        email: '',
        username: '',
        password: '',
        courseMajor: '',
        city: '',
        age: '',
        degrees: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTutorData({ ...tutorData, [name]: value });
    };

    const handleRegister = (event) => {
        event.preventDefault(); // Prevents default form submission
        const data = {
            tutorName: 'John Doe',
            email: 'john.doe@example.com',
            username: 'johndoe',
            password: 'securePassword',
            courseMajor: 'Mathematics',
            city: 'New York',
            age: 30,
            degrees: 'Master of Science'
        };
    
        fetch('http://localhost:8080/api/tutors/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to register');
            }
            return response.json();
        })
        .then(data => {
            console.log('Registration successful:', data);
        })
        .catch(error => {
            console.error('Error during registration:', error);
        });
    };
    
    return (
        <form onSubmit={handleRegister}>
            <label htmlFor="tutorName">Tutor Name:</label>
            <input id="tutorName" type="text" name="tutorName" value={tutorData.tutorName} onChange={handleInputChange} />

            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" value={tutorData.email} onChange={handleInputChange} />

            <label htmlFor="username">Username:</label>
            <input id="username" type="text" name="username" value={tutorData.username} onChange={handleInputChange} />

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" value={tutorData.password} onChange={handleInputChange} />

            <label htmlFor="courseMajor">Course Major:</label>
            <input id="courseMajor" type="text" name="courseMajor" value={tutorData.courseMajor} onChange={handleInputChange} />

            <label htmlFor="city">City:</label>
            <input id="city" type="text" name="city" value={tutorData.city} onChange={handleInputChange} />

            <label htmlFor="age">Age:</label>
            <input id="age" type="number" name="age" value={tutorData.age} onChange={handleInputChange} />

            <label htmlFor="degrees">Degrees:</label>
            <input id="degrees" type="text" name="degrees" value={tutorData.degrees} onChange={handleInputChange} />

            <button type="submit">Register</button>
        </form>
    );
};

export default TutorRegister;

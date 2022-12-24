import { Routes, Route } from 'react-router-dom';

import * as authService from './services/authService';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import MyPets from './components/MyPets';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Dashboard from './components/Dashboard';

function App() {
    const [userInfo, setUserInfo] = useState({
        isAuthenticated: false,
        user: '',
    });

    useEffect(() => {
        let user = authService.getUser();

        setUserInfo({ isAuthenticated: Boolean(user), user });
    }, []);

    const onLogin = (user) => {
        setUserInfo({
            isAuthenticated: true,
            user,
        });
    };

    return (
        <div>
            <Header {...userInfo} />
            <main id='site-content'>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route
                        path='/login'
                        element={<Login onLogin={onLogin} />}
                    />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/my-pets' element={<MyPets />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { AuthContext } from './contexts/AuthContext';
import Header from './components/Header';
import MyPets from './components/MyPets';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Logout from './components/Logout';
import { useLocalStorage } from './hooks/useLocalStorage';

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: '',
    username: '',
};

function App() {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <div id='container'>
                <Header email={user.email} />
                <main id='site-content'>
                    <Routes>
                        <Route path='/*' element={<Dashboard />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/my-pets' element={<MyPets />} />
                        <Route path='/details/:petId' element={<Details />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;

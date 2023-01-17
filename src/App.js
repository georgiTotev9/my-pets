import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MyPets from './components/MyPets';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Logout from './components/Logout';
import Edit from './components/Edit/Edit';
import GuardedRoute from './components/Common/GuardedRoute';
import PrivateRoute from './components/Common/PrivateRoute';
import ErrorBoundary from './components/Common/ErrorBoundary';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <div id='container'>
                    <Header />
                    <main id='site-content'>
                        <Routes>
                            <Route path='/*' element={<Dashboard />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/my-pets' element={<PrivateRoute><MyPets /></PrivateRoute>} />
                            <Route path='/details/:petId' element={<Details />} />

                            <Route element={<GuardedRoute />}>
                                <Route path='/create' element={<Create />} />
                                <Route path='/edit/:petId' element={<Edit />} />
                            </Route>
                        </Routes>
                    </main>
                </div>
            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;

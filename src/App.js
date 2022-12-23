import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyPets from './components/MyPets';
import Login from './components/Login';
import Register from './components/Register';
import Create  from './components/Create';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <div>
            <Header />
            <main id='site-content'>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/my-pets' element={<MyPets />} />
                </Routes>
            </main>

        </div>
    );
}

export default App;

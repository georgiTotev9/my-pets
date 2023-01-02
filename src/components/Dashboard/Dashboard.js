import { Routes, Route } from 'react-router-dom';
import PetList from '../PetList';

const Dashboard = () => {
    return (
        <section id='dashboard-page' className='dashboard'>
            <h1>Dashboard</h1>
            <nav>
                <Routes>
                    <Route path='/' element={<PetList/>} />
                    <Route path='/types' element={<p> Types </p>} />
                </Routes>
            </nav>
        </section>
    );
};

export default Dashboard;

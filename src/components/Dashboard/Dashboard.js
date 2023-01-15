import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';
import PetList from '../PetList';

const Dashboard = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll().then((result) => setPets(result));
    }, []);

    return (
        <section id='dashboard-page' className='dashboard'>
            <h1>Dashboard</h1>
            <section>
                <PetList pets={pets}/>
            </section>
        </section>
    );
};

export default Dashboard;

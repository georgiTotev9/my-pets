import { useState, useEffect } from 'react';
import * as petService from '../../services/petService';
import { useAuthContext } from '../../contexts/AuthContext';
import PetList from '../PetList';

const MyPets = () => {
    const [myPets, setMyPets] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        petService.getMyPets(user._id).then((petResult) => setMyPets(petResult));
    }, [user]);

    return (
        <section id='my-pets-page' className='my-pets'>
            <h1>My Pets</h1>

            <PetList pets={myPets} />
        </section>
    );
};

export default MyPets;

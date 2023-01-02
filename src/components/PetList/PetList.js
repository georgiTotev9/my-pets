import PetCard from './PetCard';
import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll().then((result) => setPets(result));
    }, []);
    return (
        <ul className='other-pets-list'>
            {pets.map((pet) => (
                <PetCard key={pet._id} pet={pet} />
            ))}
        </ul>
    );
};

export default PetList;

import PetCard from './PetCard';
import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll().then((result) => setPets(result));
    }, [pets]);
    return (
        <ul className='other-pets-list'>
            {pets.length ? pets.map((pet) => (
                <PetCard key={pet._id} pet={pet} />
            )) : <p>No pets in database!</p>}
        </ul>
    );
};

export default PetList;

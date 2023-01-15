import PetCard from './PetCard';
import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';

const PetList = ({ pets }) => {
    return (
        <>
            {pets.length > 0 ? (
                <ul className='other-pets-list'>
                    {pets.map((pet) => (
                        <PetCard key={pet._id} pet={pet} />
                    ))}
                </ul>
            ) : (
                <p className='no-pets'>No pets in database!</p>
            )}
        </>
    );
};

export default PetList;

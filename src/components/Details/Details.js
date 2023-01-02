import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as petService from '../../services/petService';

const Details = () => {
    const { petId } = useParams();
    const  [pet, setPet]  = useState({});

    useEffect(() => {
        petService.getOne(petId).then((pet) => setPet(pet));
    }, [petId, setPet]);
    return (
        <section id='details-page' className='details'>
            <div className='pet-information'>
                <h3>Name: {pet.name}</h3>
                <p className='type'>Type: {pet.type}</p>
                <p className='img'>
                    <img src={pet.imageUrl} />
                </p>
                <div className='actions'>
                    {/* <Link className="button" to={`/edit/${pet._id}`}>Edit</Link> */}
                    <a className='button' href='#' >
                        Delete
                    </a>

                    <div className='likes'>
                        <img className='hearts' src='/images/heart.png' />
                        <span id='total-likes'>Likes: {pet.likes}</span>
                    </div>
                </div>
            </div>
            <div className='pet-description'>
                <h3>Description:</h3>
                <p>{pet?.description}</p>
            </div>
        </section>
    );
};

export default Details;

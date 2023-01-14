import { useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import * as petService from '../../services/petService';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { petId } = useParams();
    const [pet, setPet] = useState({});

    useEffect(() => {
        petService.getOne(petId).then((pet) => setPet(pet));
    }, [petId, setPet]);

    const deleteHandler = (e) => {
        e.preventDefault();

        petService.remove(petId, user.accessToken).then(() => navigate('/'));
    };

    const ownerButtons = (
        <>
            <Link className='button' to={`/edit/${pet._id}`}>
                Edit
            </Link>
            <a className='button' href='#' onClick={deleteHandler}>
                Delete
            </a>
        </>
    );

    const userButton = (
        <a className='button' href=''>
            Like
        </a>
    );

    return (
        <section id='details-page' className='details'>
            <div className='pet-information'>
                <h3>Name: {pet.name}</h3>
                <p className='type'>Type: {pet.type}</p>
                <p className='img'>
                    <img src={pet.imageUrl} />
                </p>
                <div className='actions'>
                    {user._id &&
                        (user._id == pet._ownerId ? ownerButtons : userButton)}

                    <div className='likes'>
                        <img className='hearts' src='/images/heart.png' />
                        <span id='total-likes'>Likes: {pet.likes?.length}</span>
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

import { useParams, useNavigate } from 'react-router-dom';
import * as petService from '../../services/petService';
import usePetState from '../../hooks/usePetState';

const Edit = () => {
    const { petId } = useParams();
    const [pet, setPet] = usePetState(petId);
    const navigate = useNavigate();

    const petEditSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let petData = Object.fromEntries(formData);

        petService
            .update(pet._id, petData)
            .then(() => navigate(`/details/${petId}`));
    };

    return (
        <section id='edit-page' className='edit'>
            <form id='edit-form' method='POST' onSubmit={petEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className='field'>
                        <label htmlFor='name'>Name</label>

                        <input
                            type='text'
                            name='name'
                            id='name'
                            defaultValue={pet.name}
                        />
                    </p>
                    <p className='field'>
                        <label htmlFor='description'>Description</label>
                        <span className='input'>
                            <textarea
                                name='description'
                                id='description'
                                defaultValue={pet.description}
                            />
                        </span>
                    </p>
                    <p className='field'>
                        <label htmlFor='image'>Image</label>
                        <span className='input'>
                            <input
                                type='text'
                                name='imageUrl'
                                id='image'
                                defaultValue={pet.imageUrl}
                            />
                        </span>
                    </p>
                    <p className='field'>
                        <label htmlFor='type'>Type</label>
                        <span className='input'>
                            <select id='type' name='type' value={pet.type}>
                                <option value='cats'>Cat</option>
                                <option value='dogs'>Dog</option>
                                <option value='other'>Other</option>
                            </select>
                        </span>
                    </p>
                    <input
                        className='button submit'
                        type='submit'
                        value='Save'
                    />
                </fieldset>
            </form>
        </section>
    );
};

export default Edit;

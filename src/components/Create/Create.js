import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import * as petService from '../../services/petService';

const Create = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, description, imageUrl, type } =
            Object.fromEntries(formData);

        petService
            .create({ name, description, imageUrl, type })
            .then(() => navigate('/'));
    };

    return (
        <section id='create-page' className='create'>
            <form id='create-form' onSubmit={onCreate} method='POST'>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className='field'>
                        <label htmlFor='name'>Name</label>
                        <span className='input'>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Name'
                            />
                        </span>
                    </p>
                    <p className='field'>
                        <label htmlFor='description'>Description</label>
                        <span className='input'>
                            <textarea
                                name='description'
                                id='description'
                                placeholder='Description'></textarea>
                        </span>
                    </p>
                    <p className='field'>
                        <label htmlFor='image'>Image</label>
                        <span className='input'>
                            <input
                                type='text'
                                name='imageUrl'
                                id='image'
                                placeholder='Image'
                            />
                        </span>
                    </p>

                    <p className='field'>
                        <label htmlFor='type'>Type</label>
                        <span className='input'>
                            <select id='type' name='type'>
                                <option value='cats'>Cats</option>
                                <option value='dogs'>Dogs</option>
                                <option value='other'>Other</option>
                            </select>
                        </span>
                    </p>
                    <input
                        className='button submit'
                        type='submit'
                        value='Add Pet'
                    />
                </fieldset>
            </form>
        </section>
    );
};

export default Create;

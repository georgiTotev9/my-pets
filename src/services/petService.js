import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/pets';

export const getAll = async () => request.get(baseUrl);

export const getMyPets = (ownerId) => {
    // server side searching/filtering
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/pets?where=${query}`);
};

export const create = async (petData, token) => {
    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...petData, likes: [] }),
    });
    const result = await res.json();

    return result;
};

export const getOne = async (id) => {
    const res = await fetch(`${baseUrl}/${id}`);
    const pet = await res.json();

    return pet;
};

export const remove = async (id, token) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: { 'X-Authorization': token },
    });
    const result = await response.json();

    return result;
};

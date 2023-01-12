import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/pets';

export const getAll = () =>
    request.get(baseUrl).then((res) => Object.values(res));

    // TODO: Fix create ASAP
export const create = (petData) => async (petData, token) => {
    let response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...petData, likes: [] }),
    });

    let result = await response.json();

    return result;
};

export const getOne = (id) => request.get(`${baseUrl}/${id}`);

export const remove = async (id, token) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: { 'X-Authorization': token },
    });
    const result = await response.json();

    return result;
};

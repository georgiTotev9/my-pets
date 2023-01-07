const baseUrl = 'http://localhost:3030/data/pets';

export const getAll = async () => {
    const res = await fetch(baseUrl);

    const pets = await res.json();

    return Object.values(pets);
};

export const create = async (petData, token) => {
    let res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...petData, likes: [] }),
    });

    let result = await res.json();

    return result;
};

export const getOne = async (id) => {
    const res = await fetch(`${baseUrl}/${id}`);

    const pet = await res.json();

    return pet;
};

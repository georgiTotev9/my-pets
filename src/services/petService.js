const baseUrl = 'http://localhost:3030/jsonstore/pets';

export const getAll = async () => {
    const res = await fetch(baseUrl);

    const pets = await res.json();

    return Object.values(pets);
};

export const create = async (petData) => {
    let res = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(petData),
    });

    let result = await res.json();

    return result;
};

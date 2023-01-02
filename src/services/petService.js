const baseUrl = 'http://localhost:3030/jsonstore/pets';

export const getAll = async () => {
    const res = await fetch(baseUrl);

    const pets = await res.json();

    return Object.values(pets);
};

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password }),
    }).then((response) => response.json());
};

export const getUser = () => localStorage.getItem('user');

export const isAuthenticated = () => Boolean(getUser());

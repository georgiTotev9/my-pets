
const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    let jsonResult = await res.json();

    if (res.ok) return jsonResult;

    //else
    throw jsonResult.message;
};

export const logout = async (token) => {
    let res = await fetch(`${baseUrl}/logout`, {
        headers: { 'X-Authorization': token },
    });
};

export const register = async (email, password) => {
    let res = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    let jsonResult = await res.json();

    if (res.ok) return jsonResult;
};

export const getUser = () => localStorage.getItem('user');

export const isAuthenticated = () => Boolean(getUser());

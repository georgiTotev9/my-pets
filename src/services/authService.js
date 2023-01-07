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

export const logout = async () => {
    fetch(`${baseUrl}/logout`);
};

export const getUser = () => localStorage.getItem('user');

export const isAuthenticated = () => Boolean(getUser());

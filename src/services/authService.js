export const login = (user) => {
    localStorage.setItem('user', user);
};

export const getUser = () => localStorage.getItem('user');

export const isAuthenticated = () => Boolean(getUser())

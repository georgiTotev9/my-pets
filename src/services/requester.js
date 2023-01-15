export const requester = async (method, url, data) => {
    let token = getToken();
    let options = {};

    if (method != 'GET') {
        options.method = method;
        options.headers = {
            'content-type': 'application/json',
        };
        if (token) {
            options.headers['X-Authorization'] = token;
        }
        options.body = JSON.stringify(data);
    }

    const res = await fetch(url, options);
    const jsonData = await res.json();

    if (res.ok) {
        return Object.values(jsonData);
    } else {
        throw new Error('ERROR: Failed to fetch!');
    }
};

export const getToken = () => {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            throw new Error('You must be authenticated');
        }

        let user = JSON.parse(userItem);

        return user.accessToken;
    } catch (err) {
        console.error(err);
    }
};

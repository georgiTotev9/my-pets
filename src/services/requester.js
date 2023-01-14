export const request = async (method, url, data) => {
    let options = {};
    let token = getToken();

    if (method !== 'GET') {
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
        throw jsonData;
    }
};
export function getToken() {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            throw { message: 'You must be authenticated' };
        }

        let user = JSON.parse(userItem);

        return user.accessToken;
    } catch (err) {
        console.log(err);
    }
}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');
export const post = request.bind(null, 'POST');
export const del = request.bind(null, 'DELETE');

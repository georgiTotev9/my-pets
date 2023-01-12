export const request = async (method, url, data) => {
    let token = getToken();
    let result = null;
    if (method === 'GET') {
        result = await fetch(url);
    } else {
        result = await fetch(url, {
            method,
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token,
            },
            body: JSON.stringify(data),
        });
    }
    let jsonData = await result.json();

    if (result.ok) {
        Object.values(jsonData);
    } else {
        throw jsonData;
    }
};
async function getToken() {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            throw new Error('User not found');
        }

        let user = JSON.parse(userItem);

        return user.accessToken;
    } catch (error) {
        console.error(error);
    }
}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');
export const post = request.bind(null, 'POST');

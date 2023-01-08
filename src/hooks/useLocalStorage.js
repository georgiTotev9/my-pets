import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            let item = localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    const setItem = (value) => {
        // TODO: add support for functions
        try {
            // save to local storage
            localStorage.setItem(key, JSON.stringify(value));
            // save to state
            setState(value);
        } catch (error) {
            console.error(error);
        }
    };

    return [state, setItem];
};

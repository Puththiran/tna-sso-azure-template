import '@babel/polyfill';
import { fetch } from 'whatwg-fetch';

export const jokes = {
    getJoke: () => {
        return new Promise((resolve, reject) => {
            fetch('http://api.icndb.com/jokes/random/')
                .then(res => res.json())
                .then(data => {
                    resolve(data.value.joke);
                });
        }
        )
    }
};
import { jokes } from './jokes';

jokes.getJoke().then(joke => {
    document.getElementById('joke').innerHTML = joke;
});
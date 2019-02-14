import { jokes } from './jokes';
import '../src/scss/custom.scss';

jokes.getJoke().then(joke => {
    document.getElementById('joke').innerHTML = joke;
});
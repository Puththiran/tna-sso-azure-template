import { jokes } from './assets/js/jokes';
import '../assets/scss/custom.scss';

jokes.getJoke().then(joke => {
    document.getElementById('joke').innerHTML = joke;
});
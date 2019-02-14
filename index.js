import { jokes } from './src/js/jokes';
//import '../scss/custom.scss';

jokes.getJoke().then(joke => {
    document.getElementById('joke').innerHTML = joke;
});
import { getFullName } from './utils';
import '../styles/index.scss';

const firstName = getFullName('Hello World');

console.log(firstName);

class Name {
    name = 'Anonymous'
}
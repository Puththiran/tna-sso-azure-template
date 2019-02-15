import { getFullName } from './utils';
import '../styles/index.scss';

const firstName = getFullName('Hello World');

console.log(firstName);

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
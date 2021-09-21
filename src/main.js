import {
    Models
} from './js/models';
import {
    Gallery
} from './js/gallery';

import {
    Users
} from './js/users';
import './sass/main.scss';


document.addEventListener('DOMContentLoaded', () => {
    new Models();
    new Gallery()
    new Users()

})
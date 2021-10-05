import {
    Models
} from './js/models';
import {
    Gallery
} from './js/gallery';

import {
    Users
} from './js/users';

import {
    Swiper
} from './js/swiper';


import './sass/main.scss';


document.addEventListener('DOMContentLoaded', () => {
    new Models();
    new Gallery();
    const users = new Users();
    new Swiper();
    document.addEventListener('swipeLeft', () => users.nextUser())
    document.addEventListener('swipeRight', () => users.prevUser())
})
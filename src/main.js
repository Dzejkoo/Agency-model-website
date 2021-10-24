import {
    Users
} from './js/users';
import {
    Swiper
} from './js/swiper';
import './sass/main.scss';
document.addEventListener('DOMContentLoaded', () => {
    const users = new Users();
    new Swiper();
    document.addEventListener('swipeLeft', () => users.nextUser(1))
    document.addEventListener('swipeRight', () => users.prevUser(0))
})
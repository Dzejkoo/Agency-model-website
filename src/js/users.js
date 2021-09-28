import {
    Models
} from './models';

export class Users {
    constructor() {
        this.arrayUser = ['domjewel', 'romashilin', 'corey_saldana'];
        this.arrayCounterElement = document.querySelectorAll('.card__navigation-number');
        this.headerCard = document.querySelector('.card__name');
        this.nextButton = document.querySelector('.next');
        this.nextPrev = document.querySelector('.prev');
        this.mainPhoto = document.querySelector('.card__image-photo')
        this.galleryContainer = document.querySelector('.card__gallery')
        this.changeUsersByClick()
        this.i = 0;
        this.models = new Models();

    }

    changeUsersByClick() {
        this.nextButton.addEventListener('click', () => {
            this.arrayCounterElement[this.i].classList.remove('card__navigation-number--active')
            this.i++;
            if (this.i >= 3) {
                this.i = 0
            }
            this.arrayCounterElement[this.i].classList.add('card__navigation-number--active')
            fetch(`${this.models.apiUrl}/users/${this.arrayUser[this.i]}/photos/?client_id=${this.models.apiKey}`)
                .then(resp => resp.json())
                .then(data => this.models.chooseSpecificDimensions(data))
            this.changeAnimation();
        })
    }
    changeAnimation() {
        this.headerCard.classList.add('card__name--active');
        this.mainPhoto.classList.add('card__image-photo--active');
        this.galleryContainer.classList.add('card__gallery--active')
        console.log('dodanie klasy z animacją')
        setTimeout(() => {
            this.headerCard.classList.remove('card__name--active');
            this.mainPhoto.classList.remove('card__image-photo--active');
            this.galleryContainer.classList.remove('card__gallery--active')
        }, 1000)
    }
}
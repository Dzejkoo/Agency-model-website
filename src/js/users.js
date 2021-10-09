import {
    Models
} from './models';

export class Users {
    constructor() {
        this.arrayUser = ['domjewel', 'luisviol', 'charlyyyy'];
        this.arrayCounterElement = document.querySelectorAll('.card__navigation-number');
        this.headerCard = document.querySelector('.card__name');
        this.buttonEl = document.querySelectorAll('.button');
        this.mainPhoto = document.querySelector('.card__image-wrapper')
        this.galleryContainer = document.querySelector('.card__gallery')
        this.desciptionUser = document.querySelector('.card__description')
        this.changeUsersByClick()
        this.i = 0;
        this.models = new Models();
    }

    changeUsersByClick() {
        this.buttonEl.forEach(element => element.addEventListener('click', () => {
            if (this.buttonEl[0] === element) {
                this.prevUser(0);
            } else {
                this.nextUser(1)
            }
        }))
    }
    nextUser(whichSide) {
        this.arrayCounterElement[this.i].classList.remove('card__navigation-number--active')
        this.i++;
        if (this.i >= 3) {
            this.i = 0
        }
        console.log(whichSide)
        this.changeUser(whichSide);
    }

    prevUser(whichSide) {
        this.arrayCounterElement[this.i].classList.remove('card__navigation-number--active')
        if (0 >= this.i) {
            this.i = 3
        }
        this.i--;
        this.changeUser(whichSide);
    }

    changeUser(whichSide) {
        this.arrayCounterElement[this.i].classList.add('card__navigation-number--active')
        fetch(`${this.models.apiUrl}/users/${this.arrayUser[this.i]}/photos/?client_id=${this.models.apiKey}`)
            .then(resp => resp.json())
            .then(data => this.models.chooseSpecificDimensions(data))
        this.changeAnimation(whichSide);
    }


    changeAnimation(whichSide) {
        this.headerCard.classList.add('card__name--active');
        this.mainPhoto.classList.add('card__image-wrapper--active');
        this.galleryContainer.classList.add('card__gallery--active')
        this.desciptionUser.classList.add('card__description--active')
        setTimeout(() => {
            if (whichSide) {
                this.headerCard.classList.remove('card__name--active');
                this.desciptionUser.classList.remove('card__description--active')
                this.mainPhoto.classList.remove('card__image-wrapper--active');
                this.galleryContainer.classList.remove('card__gallery--active')
                console.log(whichSide)
            }

        }, 1000)
    }
}
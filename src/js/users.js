import {
    Models
} from './models';

export class Users {
    constructor() {
        this.arrayNameUserTile = ['luisviol', 'charlyyyy', 'awilx6', 'visionary_imaging', 'spluzhnov', 'mumble57', 'elyaspasban']
        this.arrayUserShow = ['domjewel'];
        this.arrayUserTile = document.querySelectorAll('.users__tile');
        this.usersName = document.querySelectorAll('.users__name');
        this.usersImage = document.querySelectorAll('.users__image')
        this.arrayCounterElement = [...document.querySelectorAll('.card__navigation-number')];
        this.headerCard = document.querySelector('.card__name');
        this.buttonEl = document.querySelectorAll('.button');
        this.mainPhoto = document.querySelector('.card__image-wrapper')
        this.galleryContainer = document.querySelector('.card__gallery')
        this.desciptionUser = document.querySelector('.card__description')

        this.counter = document.querySelector('.card__count');
        this.changeUsersByClick()
        this.i = 0;
        this.models = new Models();
        this.setUserOnTile();
    }

    changeUsersByClick() {
        this.buttonEl.forEach(element => element.addEventListener('click', () => {
            if (this.buttonEl[0] === element) {
                this.prevUser();
            } else {
                this.nextUser()
            }
        }))
    }
    nextUser() {
        this.arrayCounterElement[this.i].classList.remove('card__navigation-number--active')
        this.i++;
        if (this.i >= this.arrayUserShow.length) {
            this.i = 0
        }

        this.changeUser();
    }

    prevUser() {
        this.arrayCounterElement[this.i].classList.remove('card__navigation-number--active')
        if (0 >= this.i) {
            this.i = this.arrayUserShow.length
        }
        this.i--;
        this.changeUser();
    }

    setUserOnTile() {
        for (let i = 0; i < this.arrayNameUserTile.length; i++) {
            fetch(`${this.models.apiUrl}/users/${this.arrayNameUserTile[i]}/photos/?client_id=${this.models.apiKey}`)
                .then(resp => resp.json())
                .then(resp => {
                    this.usersName[i].textContent = `${resp[0].user.name}`
                    this.usersImage[i].setAttribute('src', resp[0].user.profile_image.medium)
                    this.arrayUserTile[i].setAttribute('data-name', resp[0].user.username)
                })
        }
        this.usersFromTile();

    }

    usersFromTile() {
        this.arrayUserTile.forEach(el => el.addEventListener('click', () => {
            el.classList.toggle('users__tile--active');
            console.log(el)
            if (!this.arrayUserShow.includes(el.dataset.name)) {
                this.arrayUserShow.push(el.dataset.name);
            } else {
                let indexDeleteUser = this.arrayUserShow.indexOf(el.dataset.name)
                this.arrayUserShow.splice(indexDeleteUser, 1);
            }
            console.log()
            this.createSpanForCounting(this.arrayUserShow.length);
        }))
    }

    createSpanForCounting(number) {
        let span = document.createElement('span');
        span.classList.add('card__navigation-number');
        this.arrayCounterElement.push(span);
        this.counter.appendChild(span);
        span.textContent = `${number}`
    }



    changeUser() {
        this.arrayCounterElement[this.i].classList.add('card__navigation-number--active')
        fetch(`${this.models.apiUrl}/users/${this.arrayUserShow[this.i]}/photos/?client_id=${this.models.apiKey}`)
            .then(resp => resp.json())
            .then(data => this.models.chooseSpecificDimensions(data))
        this.changeAnimation();
    }


    changeAnimation() {
        this.headerCard.classList.add('card__name--active');
        this.mainPhoto.classList.add('card__image-wrapper--active');
        this.galleryContainer.classList.add('card__gallery--active')
        this.desciptionUser.classList.add('card__description--active')
        setTimeout(() => {
            this.headerCard.classList.remove('card__name--active');
            this.desciptionUser.classList.remove('card__description--active')
            this.mainPhoto.classList.remove('card__image-wrapper--active');
            this.galleryContainer.classList.remove('card__gallery--active')
        }, 1000)
    }
}
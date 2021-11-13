export class Gallery {
    constructor() {
        this.pictures = document.querySelectorAll('.card__gallery-photo');
        this.mainPicture = document.querySelector('.card__image-photo');
        this.name = document.querySelector('.card__name');
        this.desciptionUser = document.querySelector('.card__description')
        this.linkToUserProfile = document.querySelector('.card__navigation-link');
        this.listenClick()
    }
    listenClick() {
        this.pictures.forEach(el => el.addEventListener('click', () => {
            this.changeMainPhoto(el.src);
            this.pictures.forEach(picture => picture.classList.remove('card__gallery-photo--active'))
            el.classList.add('card__gallery-photo--active')
        }))
    }
    changeMainPhoto(src) {
        this.mainPicture.setAttribute('src', src)
    }
    setPropertiesPhoto(correctPhoto, username, userBio, linkToProfile) {

        setTimeout(() => {
            this.name.textContent = `${username}`
            this.desciptionUser.textContent = `${userBio}`
            this.linkToUserProfile.setAttribute('href', linkToProfile)
            this.mainPicture.setAttribute('src', correctPhoto[0].urls.regular)
            for (let i = 0; i < this.pictures.length; i++) {
                this.pictures[i].setAttribute('src', correctPhoto[i].urls.regular)
                this.pictures[i].setAttribute('alt', correctPhoto[i].alt_description)
            }
        }, 550)
    }
}
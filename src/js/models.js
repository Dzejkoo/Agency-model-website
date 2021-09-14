export class Models {
    constructor() {
        this.apiUrl = 'https://api.unsplash.com/'
        this.apiKey = 'ujAeYpJ3CH0yUrvTA4u8xlRL2BxqXpY4jj_uEUew8h0'
        this.photos = document.querySelectorAll('#model__image')
    }
    getModelsPhotoFromApi() {
        fetch(`${this.apiUrl}/search/photos/?client_id=${this.apiKey}&query=fashion`)
        fetch(`${this.apiUrl}/photos/?client_id=${this.apiKey}`)
            .then(resp => resp.json())
            .then(data => this.chooseSpecificDimensions(data))

    }
    chooseSpecificDimensions(array) {
        const correctPhoto = array.filter(element => {
            if (element.width < element.height) {
                return element
            }
        });
        this.setAtrubutePhoto(correctPhoto)

    }
    setAtrubutePhoto(correctPhoto) {
        console.log(correctPhoto[1].urls.regular)
        for (let i = 0; i < this.photos.length; i++) {
            this.photos[i].setAttribute('src', correctPhoto[i].urls.regular)
        }
    }

}
import {
    Gallery
} from "./gallery";



export class Models {
    constructor() {
        this.apiUrl = 'https://api.unsplash.com/'
        this.apiKey = 'ujAeYpJ3CH0yUrvTA4u8xlRL2BxqXpY4jj_uEUew8h0'
        this.gallery = new Gallery()

    }
    getModelsPhotoFromApi() {
        fetch(`${this.apiUrl}/users/corey_saldana/photos/?client_id=${this.apiKey}`)
            .then(resp => resp.json())
            .then(data => this.chooseSpecificDimensions(data))
    }

    chooseSpecificDimensions(array) {
        const correctPhoto = array.filter(element => {
            if (element.width < element.height) {
                return element
            }
        });
        console.log(array)
        this.gallery.setPropertiesPhoto(correctPhoto, array[0].user.name)
    }
}
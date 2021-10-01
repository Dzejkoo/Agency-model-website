import {
    Gallery
} from "./gallery";

class Models {
    constructor() {
        this.apiUrl = 'https://api.unsplash.com/'
        this.apiKey = 'ujAeYpJ3CH0yUrvTA4u8xlRL2BxqXpY4jj_uEUew8h0'
        this.gallery = new Gallery()
        this.getModelsPhotoFromApi();

    }
    getModelsPhotoFromApi() {
        return fetch(`${this.apiUrl}/users/domjewel/photos/?client_id=${this.apiKey}`)
            .then(resp => resp.json())
            .then(data => this.chooseSpecificDimensions(data))
    }

    chooseSpecificDimensions(array) {
        console.log(array)
        const correctPhoto = array.filter(element => {
            if (element.width < element.height) {
                return element
            }
        });
        this.gallery.setPropertiesPhoto(correctPhoto, array[0].user.name, array[0].user.bio, array[0].user.links.html)
    }
}
export {
    Models
}
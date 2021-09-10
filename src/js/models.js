export class Models {
    constructor() {
        this.apiUrl = 'https://api.unsplash.com/'
        this.apiKey = 'ujAeYpJ3CH0yUrvTA4u8xlRL2BxqXpY4jj_uEUew8h0'
    }
    getModelsPhotoFromApi() {
        fetch(`${this.apiUrl}/photos/?client_id=${this.apiKey}`)
            .then(resp => resp.json())
            .then(data => console.log(data))

    }

}
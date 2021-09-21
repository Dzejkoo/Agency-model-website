import {
    Models
} from './models';

export class Users {
    constructor() {
        this.arrayUser = ['domjewel', 'romashilin', 'corey_saldana'];
        this.nextButton = document.querySelector('.next');
        this.nextPrev = document.querySelector('.prev');
        this.changeUsersByClick()
        this.i = 0;
        this.models = new Models();

    }

    changeUsersByClick() {
        this.nextButton.addEventListener('click', () => {
            this.i++;
            if (this.i >= 3) {
                this.i = 0
            }
            fetch(`${this.models.apiUrl}/users/${this.arrayUser[this.i]}/photos/?client_id=${this.models.apiKey}`)
                .then(resp => resp.json())
                .then(data => this.models.chooseSpecificDimensions(data))
        })
    }
}
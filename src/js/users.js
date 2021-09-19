export class Users {
    constructor() {
        this.arrayUser = ['domjewel', 'romashilin', 'corey_saldana'];
        this.nextButton = document.querySelector('.next');
        this.nextPrev = document.querySelector('.prev');
        this.changeUsersByClick()
        this.i = 0;

    }

    changeUsersByClick() {
        this.nextButton.addEventListener('click', () => {
            this.i++;
            if (this.i >= 3) {
                this.i = 0
            }
        })
    }
}
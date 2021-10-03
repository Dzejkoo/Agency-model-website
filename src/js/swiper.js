class Swiper {
    constructor() {
        this.initialY = null;
        this.initialX = null;
        document.addEventListener('touchstart', (event) => this.startTouch(event));
        document.addEventListener('touchmove', (event) => this.moveTouch(event));

        this.events = {
            swipeLeft: new Event('swipeLeft'),
            swipeRight: new Event('swipeRight'),
        }
    }
}
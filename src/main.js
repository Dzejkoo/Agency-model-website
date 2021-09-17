import {
    Models
} from './js/models';
import {
    Gallery
} from './js/gallery';
import './sass/main.scss';


document.addEventListener('DOMContentLoaded', () => {
    const photoModels = new Models();
    photoModels.getModelsPhotoFromApi();
    new Gallery()

})
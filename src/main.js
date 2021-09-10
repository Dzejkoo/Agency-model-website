import {
    Models
} from './js/models';
import './sass/main.scss';


document.addEventListener('DOMContentLoaded', () => {
    const photoModels = new Models();
    photoModels.getModelsPhotoFromApi();
})
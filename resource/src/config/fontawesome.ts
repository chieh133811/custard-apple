import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faBars,
    faLanguage,
    faXmark,
    faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { type App } from 'vue';

library.add(faBars);
library.add(faLanguage);
library.add(faXmark);
library.add(faCircleExclamation);

export default {
    install: (app: App) => {
        app.component('FontAwesomeIcon', FontAwesomeIcon);
    }
};
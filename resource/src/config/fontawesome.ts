import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { type App } from 'vue';

library.add(faBars);
library.add(faLanguage);

export default {
    install: (app: App) => {
        app.component('FontAwesomeIcon', FontAwesomeIcon);
    }
};
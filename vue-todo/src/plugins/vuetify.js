import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
        values: {
            remove: 'mdi-trash-can'
        }
    },
    theme: {
        themes: {
            light: {
                primary: '#41b883',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
                anchor: '#8c9eff'
            }
        }
    }
});

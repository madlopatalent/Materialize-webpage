import handlebars from 'vite-plugin-handlebars';
import data from './data.json';


export default {
    base : '/responsive_webpages/',   // <-- add this
    plugins: [handlebars({
        context : 
            /*
            previous setup here
            */
            data   // add this
        
    })],
};
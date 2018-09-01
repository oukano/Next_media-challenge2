
import axios from 'axios'

export default function Articles( { store } ) {

    return axios.get('http://femme.nextmedia.ma/api/menus/get_menu/?menu_id=7')
    
            .then((response)=> {
                // handle success
                // this.articles= response.data.posts; 
                // console.log(this.articles[0].thumbnail_images.thumbnail.url);
                store.commit('menus', response.data.menu.output);  
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            });
    
}
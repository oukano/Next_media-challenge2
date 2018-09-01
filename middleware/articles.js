
import axios from 'axios'

export default function Articles( { store } ) {

    return axios.get('http://femme.nextmedia.ma/api/get_recent_posts')
    
            .then((response)=> {
                // handle success
                // this.articles= response.data.posts; 
                // console.log(this.articles[0].thumbnail_images.thumbnail.url);
                store.commit('add',response.data.posts);  
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            });
    
}
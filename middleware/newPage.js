
import axios from 'axios'

export default function Articles( { params , store  } ) {

    return axios.get('http://femme.nextmedia.ma/api/get_recent_posts/?page='+params.page)
    
            .then((response)=> {
                // handle success   
                // this.articles= response.data.posts; 
                // console.log(this.articles[0].thumbnail_images.thumbnail.url);
                params.page++;
                store.commit('push' , response.data.posts);  
            })
            .catch( (error) => {
                // handle error
                store.commit('push' , ["",""]);  
            });
    
}
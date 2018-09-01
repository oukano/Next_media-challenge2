
import axios from 'axios'

export default function Articles( { params , store  } ) {

    return axios.get('http://femme.nextmedia.ma/api/get_post/?id='+params.articleid)
    
            .then((response)=> {
                // handle success   
                // this.articles= response.data.posts; 
                // console.log(this.articles[0].thumbnail_images.thumbnail.url);
                store.commit('getArticle' , response.data.post);  
            })
            .catch( (error) => {
                // handle error
                store.commit('getArticle' , ["fuck","you"]);  
            });
    
}
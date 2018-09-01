<template>
  <v-container grid-list-md text-xs-center>
    <articleCard :articles="articles"/>
  </v-container>
    
</template>

<script>

import articleCard from '@/components/articleCard';
import axios from 'axios'

export default {

  components :{
    articleCard
  },

  asyncData({params}){

       return axios.get('http://femme.nextmedia.ma/api/get_category_posts/?category_id='+params.catid)
    
            .then((response)=> {
                // handle success
                
                return {articles : response.data.posts}
                
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            });
  }


}
</script>



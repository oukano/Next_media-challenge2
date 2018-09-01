<template>
  <v-container >

    <v-layout column wrap>

      <!-- <img :src="$store.state.articleContent.attachments[0].url" /> -->


    </v-layout>


  </v-container>
    
</template>

<script>

import axios from 'axios'

export default {

  middleware: 'article',

  state (){
    return {



    }
  },

  //We can use Async Data Too

  // asyncData ({params}) {
  //   return axios.get('http://femme.nextmedia.ma/api/get_post/?id='+params.articleid)
    
  //           .then((response)=> {
  //               // handle success
  //               // this.articles= response.data.posts; 
  //               // console.log(this.articles[0].thumbnail_images.thumbnail.url);
  //               return {content : response.data.post}
  //           })
  //           .catch( (error) => {
  //               // handle error
  //               console.log(error);
  //           });
  // },


}
</script>



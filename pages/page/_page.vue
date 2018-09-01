<template>
  <v-container  grid-list-md text-xs-center>
    <articleCard :articles ="$store.state.newPage"/>
    <v-btn block color="primary" route :to="'/page/'+$route.params.page">المزيد من الامقالات</v-btn>
  </v-container>
    
</template>

<script>

import articleCard from '@/components/articleCard';
import axios from 'axios';
export default {

  state(){
    return{
      moreArticl : [''],
    }
  },


  components :{
    articleCard
  },
  middleware :  'newPage',

  
  methods:{
    

    // moreArticles(){
    //   axios.get('http://femme.nextmedia.ma/api/get_recent_posts/?page=2')
    
    //         .then((response)=> {
    //             // this.moreArticl=response.data.posts
    //             this.$store.commit('push',response.data.posts)
    //         })
    //         .catch( (error) => {
    //             // handle error
                
    //         });
    // }


  }
}
</script>



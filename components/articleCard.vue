<template>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="article in articles" :key="article.id" >
        <v-card>
          <v-img
            :src="article.thumbnail_images.medium.url"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{article.title}}</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn route :to=" '/article/' + article.id"  flat color="orange">المزيد </v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>
</template>

<script>
export default {

    props:['articles']
    
}
</script>

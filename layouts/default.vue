<template>
  
  <v-app id="inspire" dir="rtl">
    <v-navigation-drawer
                         right
      fixed
      v-model="drawer"
      app
                        
    >
      <v-list >
        <v-list-tile route :to="'/'">
          <v-list-tile-action >
            <v-icon>home  </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>اخر الاخبار</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <nuxt-link style="text-decoration:none; color:#fff" to="/"><v-toolbar-title > اخر الاخبار</v-toolbar-title></nuxt-link>
      
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn route :to="'/categorie/'+menu.object_id" flat v-for="menu in $store.state.menus" :key="menu.id" > {{menu.label}} </v-btn>
        
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
    <v-container fluid>
      <nuxt/>
    </v-container>
  </v-content>
  </v-app>
</template>

<script>
  export default {

    middleware : 'menus',
    data () {
      return {
        drawer: null
      }
    },
    mounted(){
      console.log(this.$store.state.menus)
    }
    
  }
</script>

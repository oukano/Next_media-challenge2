import Vuex from 'vuex'

 const createStore = () => {
  return new Vuex.Store({
    state: {
      articles: ['a','b'],
      menus:[],
      articleContent:['bh','hjgh'],
      newPage:[]
    },
    mutations: {
      add (state , payload) {
        state.articles = payload;
      },
      menus (state , payload){
        state.menus = payload
      },
      getArticle(state , payload){
        state.articleContent = payload
      },
      push(state,payload){
        state.newPage= payload
        
      }
    }
  })
}

export default createStore
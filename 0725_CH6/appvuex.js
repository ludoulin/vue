var state = {
    todos: [
     {
       id:0,
       task: "健康餐飲研習",
       done: false
     },
     {
      id:1,
      task: "好友五十大壽",
      done: true
     },
     {
      id:2,
      task: "提報教學計畫",
      done: false
     }
    ]
  }
  var getters = {
    getTodos : state => state.todos
  }
  var mutations = {
   AddTodo:(state, payload) => {
    var newTask = { //建構一個表示待辦事項的物件
          id: payload.newId,
          task: payload.task,
          done: false
    }
     state.todos.unshift(newTask); //將該待辦事件物件加入陣列的開頭位置
  
   },
   ToggleTodo:(state, payload) => { //切換待辦事件完成與否的狀態
     var item = state.todos.find(todo => todo.id === payload);
     item.done = !item.done;
  
   },
   DeleteTodo: (state, payload) => { //依指定的id從陣列中移除該待辦事項
    var index = state.todos.findIndex(todo => todo.id === payload);
    state.todos.splice(index, 1);
   }
  }
  
  var actions = {
    addTodo:(context, payload) =>{
     context.commit("AddTodo" , payload)
    },
    toggleTodo:(context, payload) =>{
      context.commit("ToggleTodo" , payload)
     },
     deleteTodo:(context, payload) =>{
      context.commit("DeleteTodo" , payload)
     },
  }
  Vue.component("list",{
    data(){
       return{
         todos:this.$store.getters.getTodos
       }
    },
    methods:{
     toggleTodo(id){
      this.$store.dispatch("toggleTodo", id)
     },
     deleteTodo(id){
      this.$store.dispatch("deleteTodo", id)
     }
    },
    template: `
    <div class="container">
      <div class="row" v-for='todo in todos' v-bind:key='todo.id' >
         <div class="col" @click="toggleTodo(todo.id)" @dblclick="deleteTodo(todo.id)">{{todo.task}}</div>
           <div class="col-3">
           <input type="checkbox" v-model="todo.done" class="form-check-input">
              <span :class='{undone:!todo.done}'>{{todo.done?'完成':'未完'}}</span>
           </div>
        </div>
      </div>        
    `
  })

  const vuexPersist = new window.VuexPersistence.VuexPersistence({
    key: 'appvuex',
    storage: localStorage
})

  var store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [vuexPersist.plugin]
  });  
  
  var app = new Vue({
      el:'#app',
      store,
      data:{
         task:"",
         newId:3
      },
      methods:{
        addTodo(){
           this.$store.dispatch("addTodo", this);
           this.newId++;
           this.task = "";
        }
      },
     template: "#test"
    })
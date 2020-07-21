import goodbye from './GoodBye.js'
import hello from './Hello.js'
export default{
    name: 'App',
    data(){
        return{
            currentTab: 'hello'
        }
    },
    components:{
        hello,
        goodbye
    },
    template:`
    <div class="container mt-2">
      <nav>
         <div class="nav nav-tabs" id="nav-tab" role="tablist">
         <a 
            class="nav-item nav-link active" 
            id="nav-home-tab" 
            data-toggle="tab" 
            href="#nav-home" role="tab" 
            aria-controls="nav-home" 
            aria-selected="true"
            @click='currentTab="hello"'>
            Home
        </a>
         <a 
            class="nav-item nav-link" 
            id="nav-profile-tab" 
            data-toggle="tab" 
            href="#nav-profile" role="tab" 
            aria-controls="nav-profile" 
            aria-selected="false"
            @click='currentTab="goodbye"'>
            Profile
        </a>
         <a 
            class="nav-item nav-link" 
            id="nav-contact-tab" 
            data-toggle="tab" 
            href="#nav-contact" role="tab" 
            aria-controls="nav-contact" 
            aria-selected="false">
            Contact
        </a>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div 
          class="tab-pane fade show active" 
          id="nav-home" role="tabpanel" 
          aria-labelledby="nav-home-tab">
          <keep-alive>
          <component :is="currentTab"></component>
          </keep-alive>
        </div>
    </div>
 </div>  `
   };
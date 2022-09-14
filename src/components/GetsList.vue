<script>
  import { ref,computed } from "vue";
  import { getInnerRange } from "@vue/compiler-core";
  import axios from "axios"

    export default{
      name: "GetsList",
      data() {
        return{
          filter: '',
          Gets: [],
        };
      },

      methods: {
      async getGets(){
          let API_URL_Random = "https://random-data-api.com/api/v2/users";
          const response = await axios.get(API_URL_Random)
          this.Gets = response.data
        }
      },
      created (){
        this.getGets()
      }
};

</script>

<template>
    <div class="wrap">
      <ul class="lista" id="lista">
        <li><a class="usercolor" href="http://127.0.0.1:5173/favoritos">{{Gets.gender}} | {{Gets.first_name}} {{Gets.last_name}} | {{Gets.email}} | {{Gets.addres}} | {{Gets.date_of_birth}}</a>
        </li>
      </ul>   
    </div> 
</template>



<style scoped>

    .wrap {
      margin: auto;
      max-width: 1000px;
      width: 100%;
     
    }
    .lista li {
      border-bottom: 1px solid #B6B6B6;
      color: black;
      
    }

.lista li a {
	display: block;
	padding: 20px 0;
  
}

.lista li a:hover {
	text-decoration: line-through;
  
}
.usercolor{ 
  text-align: left;
  color: black; 
}
</style>

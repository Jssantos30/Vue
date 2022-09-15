
<script>
import GetsList from "@/components/GetsList.vue"
import { userService } from "@/services/user.service";
import { mapActions, mapState } from 'vuex'

export default {
    name: "App",
    data() {
        return{
          filter: '',
          usersTemp:[]
        };
      },
    components: {
       
    },
    methods: {
        irUsuario(user){
            this.$router.push({name:'datos',params:{id:user.id}})
        },
        buscar(){
            this.usersTemp = this.users.filter(user => {
                if(user.gender.toLowerCase().includes(this.filter.trim().toLowerCase())){
                    return user;
                }
                if(user.date_of_birth.includes(this.filter.trim().toLowerCase())){
                    return user;
                }
                if(user.address.country.toLowerCase().includes(this.filter.trim().toLowerCase())){
                    return user;
                }
            })
        },  
        ...mapActions('userModule',['all'])
      },
    mounted() {
        this.all();
        this.usersTemp = this.users;
    },
    computed:{
        ...mapState('userModule',['users'])
    },
    watch:{
        users(){
            this.usersTemp = this.users;
        }
    }
     
};



</script>
<template>
    <div class="Home">
        <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
            @keyup.enter = "buscar()"
          />   
            <div id='app'>
                <table>
                    <thead>
                        <tr>
                            <th>Genero</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Nacionalidad</th>
                            <th>F. nacimiento</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in usersTemp" @click="irUsuario(user)">
                            <td>{{user.gender}}</td>
                            <td>{{user.first_name}} {{user.last_name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.address.country}}</td>
                            <td>{{user.date_of_birth}}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>
  
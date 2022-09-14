
<script>
import GetsList from "@/components/GetsList.vue"
export default {
    name: "App",
    components: {
        GetsList
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
          />   
            <div id='app'>
                
                <GetsList />
                <GetsList />
                <GetsList />
                <GetsList />
                <GetsList />
                <GetsList />
                <GetsList />
                <GetsList />
                <GetsList />
                <GetsList />

            </div>
        </div>
</template>
  
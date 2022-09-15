<template>
  <div class="Favoritos">
    <h3>Usuario</h3>
    <ul>
      <li v-for="favorito in favoritos">{{ favorito.first_name }}</li>
    </ul>

    <button @click="exportar">Exportar</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    if (this.users.length === 0) {
      this.$router.push({ name: "Home" });
    }
  },
  methods:{
    exportar(){
      let csvContent = "data:text/csv;charset=utf-8,";
      let header = [
        'nombre',
        'apellido',
        'genero'
      ].join(',');
      csvContent += header + "\r\n";
      this.favoritos.forEach((favorito) => {
          let row = [
            favorito.first_name,
            favorito.last_name,
            favorito.gender
          ].join(',')
          csvContent += row + "\r\n";
      });
      const encodedUri = encodeURI(csvContent);
      window.open(encodedUri);
    }
  },
  computed: {
    ...mapState("userModule", ["favoritos","users"]),
  },
};
</script>

<template>
  <div class="Favoritos">
    <h3>Usuario</h3>
    <ul>
      <li v-for="favorito in favoritos">{{ favorito.first_name }}</li>
    </ul>
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
  computed: {
    ...mapState("userModule", ["favoritos","users"]),
  },
};
</script>

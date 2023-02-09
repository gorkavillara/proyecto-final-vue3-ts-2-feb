<template>
  <div class="route-list">
    <router-link v-for="(route, index) in routes" :key="index" :to="route.path">
      {{ route.name }}
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import routes from "@/routes"
</script>

<style scoped>
div.route-list {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
a {
  padding: 1rem;
  color: #2b2b2b;
  text-decoration: none;
  transition: all 0.3s;
  background: #ffffff;
  border-radius: 15px;
}
a:hover {
  box-shadow:  5px 5px 20px #d9d9d9,
              -5px -5px 20px #ffffff;
}

a.router-link-active {
  box-shadow: inset 5px 5px 20px #d9d9d9,
              inset -5px -5px 20px #ffffff;
}
</style>

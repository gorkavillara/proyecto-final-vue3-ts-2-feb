<template>
  <div class="dashboard">
    <div class="sidebar">
      <div class="card">
        <div style="font-weight: 800">Logo</div>
        <Secciones />
        <div>Log out</div>
      </div>
    </div>
    <div class="content">
        <router-view></router-view>
        <p>{{ activeUser }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Secciones from "@/components/Secciones.vue";
import { useAuth } from "@/utils/auth";

const { activeUser, login } = useAuth()
const pruebaLogin = (email: string, password: string) => {
    login(email, password)
}

const route = ref("login")
const switchRoute = (newRoute: string) => {
    route.value = newRoute
}

</script>

<style scoped>
div.dashboard {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #eefff9;
  display: flex;
}

div.sidebar {
  width: 30%;
  padding: 2rem;
  box-sizing: border-box;
}
div.sidebar .card {
  background-color: white;
  height: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 0 30px rgba(88, 112, 121, 0.158);
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

div.content {
  margin-top: 2rem;
}
</style>

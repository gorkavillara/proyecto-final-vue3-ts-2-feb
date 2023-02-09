<template>
  <div>
    <h1>Mis clientes</h1>
    <table>
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Email</td>
          <td>Desde</td>
          <td>Acciones</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(client, index) in clients" :key="index">
          <td>{{ client.name }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.age }}</td>
          <td>
            <button>✏️</button>
            <button>🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ApiClient } from "@/models"
import axios, { AxiosResponse } from "axios"
import { onMounted, ref, Ref } from "vue"
import { getTokenFromCookies } from "../utils/auth"

const clients: Ref<ApiClient[]> = ref([])

const serverUrl = process.env.VUE_APP_SERVER_URL
const obtenClientes = async () => {
  const token = getTokenFromCookies()
  const res: AxiosResponse<ApiClient[], any> = await axios.post(
    `${serverUrl}/clients`,
    {
      action: "get"
    },
    {
      headers: {
        Authorization: "Bearer " + token
      }
    }
  )
  //   console.log(res.data);
  clients.value = res.data
}

// cuando monte el componente -> obtenClientes
onMounted(() => {
  obtenClientes()
})
</script>

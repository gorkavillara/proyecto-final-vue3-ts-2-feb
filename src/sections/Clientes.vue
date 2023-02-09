<template>
  <div>
    <div class="row items-center">
      <h4 class="q-mr-md">Mis clientes</h4>
      <q-btn round color="primary" icon="add" @click="openPrompt" />
    </div>
    <table>
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Email</td>
          <td>Edad</td>
          <td>Acciones</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(client, index) in clients" :key="index">
          <td>{{ client.name }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.age }}</td>
          <td>
            <q-btn flat round color="primary" icon="edit" @click="editClient(client)" />
            <q-btn flat round color="red" icon="delete" />
          </td>
        </tr>
      </tbody>
    </table>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Datos del cliente</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input label="Nombre" v-model="nombre" autofocus />
          <q-input label="Email" v-model="email" />
          <q-input label="Edad" v-model="edad" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat @click="closePrompt">
            {{ loading ? "Cargando..." : "Cancelar"  }}
          </q-btn>
          <q-btn v-if="!editing" flat @click="creaNuevoCliente">
            {{ loading ? "Cargando..." : "Nuevo cliente" }}
          </q-btn>
          <q-btn v-if="editing" flat @click="editarCliente">
            {{ loading ? "Cargando..." : "Editar cliente" }}
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ApiClient, Client } from "@/models"
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
  // console.log(res.data)
  clients.value = res.data
}

// cuando monte el componente -> obtenClientes
onMounted(() => {
  obtenClientes()
})

const prompt = ref(false)
const editing = ref(false)
const nombre = ref("")
const edad = ref(18)
const email = ref("")

const closePrompt = () => {
  prompt.value = false
  editing.value = false
  resetForm()
}

const openPrompt = () => {
  prompt.value = true
}

const resetForm = () => {
  nombre.value = ""
  edad.value = 0
  email.value = ""
}

const editClient = (client: Client) => {
  editing.value = true
  nombre.value = client.name
  edad.value = client.age
  email.value = client.email
  prompt.value = true
}

const url = process.env.VUE_APP_SERVER_URL

const loading = ref(false)

const creaNuevoCliente = () => {
  loading.value = true
  axios
    .post(`${url}/clients`, {
      action: "create",
      client: {
        nombre: nombre.value,
        edad: edad.value,
        email: email.value
      }
    })
    .then((r) => {
      console.log(r.data)
    })
    .catch(console.error)
    .finally(() => {
      obtenClientes()
      loading.value = false
      closePrompt()
    })
  // prompt.value = false
}
const editarCliente = () => {
  loading.value = true
  axios
    .post(`${url}/clients`, {
      action: "edit",
      client: {
        nombre: nombre.value,
        edad: edad.value,
        email: email.value
      }
    })
    .then((r) => {
      console.log(r.data)
    })
    .catch(console.error)
    .finally(() => {
      obtenClientes()
      loading.value = false
      closePrompt()
    })
  // prompt.value = false
}
</script>

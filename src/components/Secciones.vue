<template>
    <ul>
        <li v-for="(seccion, index) in secciones" :key="index">
            {{ seccion }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
    const secciones = ["Clientes", "Reserva salas", "Proveedores"]
</script>

<style scoped>
    ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    li {
        list-style: none;
        cursor: pointer;
        padding: 1rem;
        border-radius: 0.25rem;
    }
    li:hover {
        background-color: rgb(197, 255, 253);
    }
</style>
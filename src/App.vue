<script>
import Button from 'primevue/button';

export default {
    name: 'App',
    components: {
        PrimeButton: Button
    },
    methods: {
        handleSave() {
            console.warn('Guardado');
        }
    }
};
</script>

<template>
    <h1>You did it!</h1>
    <p>
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
    </p>
    <PrimeButton label="Guardar" @click="handleSave" />
</template>

<style scoped></style>

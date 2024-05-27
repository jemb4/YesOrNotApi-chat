<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squaredCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

const { counter, squaredCounter } = useCounter(2);

interface Props {
  value: number; // si pongo value?: number; no es obligatorio
}
const props = defineProps<Props>();
// import { computed, ref } from 'vue';


// const counter = ref(props.value ?? 10);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
.btn{
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>

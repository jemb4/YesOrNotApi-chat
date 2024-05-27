<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squaredCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounter } from '../composables/useCounter';

export default defineComponent({


  props: {
    value:{type: Number, required: true, default: 0}
  },

  setup() {
    const { counter, squaredCounter } = useCounter(5);

    // const counter = ref( props.value );
    // const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter,
      squaredCounter,
    };
  }
})
</script>

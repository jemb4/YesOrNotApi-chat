import { defineComponent } from "vue";
import { useCounter } from "../../composables/useCounter";

export default defineComponent({
  props: {
    value:{type: Number, required: true, default: 0}
  },

  setup() {
    const { counter, squaredCounter } = useCounter(8);

    // const counter = ref( props.value );
    // const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter,
      squaredCounter,
    };
  }
})


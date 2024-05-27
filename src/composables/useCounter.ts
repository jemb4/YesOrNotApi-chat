import { ref, computed } from "vue";

// const counter = ref(initialValue); así haríamos un gestor de estado global


export const useCounter = (initialValue: number = 5) => {
    const counter = ref(initialValue);
    const squaredCounter = computed(() => counter.value ** 2);

    return{
        counter,
        squaredCounter,
    };
}
<template>
  <h2>{{ title || "Counter " }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-testid="counter">{{ counter }}</p>
  <div>
    <button @click="decrease">-1</button>
    <button @click="increase">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: { type: Number, required: false, default: 100 },
  },
  // name: 'Patito'
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: aquamarine;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}
</style>
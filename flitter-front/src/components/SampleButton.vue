<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);

const onClick = () => {
  count.value++;
};
</script>

<template>
  <button @click="onClick">Click me!</button>
  <div>Count is {{ count }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheWelcome from "./Child.vue";

// Reference child component that has default slot.
const child = ref(null);
</script>

<template>
  <TheWelcome ref="child" />
</template>

<template>
  <div :class="$style.root">
    <p :class="$style.errorMessage">{{ props.message }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string
}

const props = withDefaults(defineProps<Props>(), {
  message: 'Error',
})
</script>

<style module>
.root {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
}
</style>

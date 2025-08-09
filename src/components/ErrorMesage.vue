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

<style module lang="scss">
@import '../assets/global.scss';

.root {
  width: 100%;
  height: 100%;
  @include flex-center;
  gap: var(--gap);
}
</style>

<script setup lang='ts'>

</script>

<template>
  <div class="container row gap">
    <button class="no">No, Thank You</button>
    <button class="later bd">Maybe later</button>
    <button class="yes">Yes, Please</button>
  </div>
</template>

<style scoped>
.container {
  padding: 16px;
}

button {
  height: 40px;
  border-radius: 12px;
}

.yes {
  background: green;
}

.no {
  background: red;
}

.later {
  background: var(--color-background-mute);
  color: var(--color-text-1)
}
</style>
<template>
<div id="app-body">
  <div id="all-items" class="items-container">
    <div id="all-items-container">
      <span class="no-items-message">Nema unosa</span>
      <all-items v-bind:pb="pb"></all-items>
    </div>
  </div>
</div>
</template>

<script>
import AllItems from "./AllItems";

export default {
  name: "Body",
  components: {
    "all-items": AllItems
  },
  props: ["pb"]
};
</script>

<style scoped>
#app-body {
  flex-grow: 1;
  overflow: hidden;
  display: flex;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track-piece {
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
  background-color: #c7c7c7;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #909090;
}

.items-container {
  width: 100%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;

  overflow: auto;
}

.items-container .no-items-message {
  display: none;
  margin: auto;
}

.no-items-message:only-child {
  display: block;
}

#all-items-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

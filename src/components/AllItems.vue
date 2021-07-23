<template>
  <div>
    <item
      v-for="(item) in pb.items"
      v-bind:key="item.id"
      v-bind:item="item"
      v-on:item-delete="onDelete(item)"
    ></item>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "AllItems",
  props: ["pb"],
  components: {
    item: Item
  },
  methods: {
    onDelete: function(item) {
      this.pb.delete(item);
    }
  }
};
</script>

<style scoped>
</style>

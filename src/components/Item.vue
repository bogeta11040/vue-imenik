<template>
  <div class="pb-item">
    <div class="pb-item-content">
      <p class="data">{{item.name}}</p>
      <p class="data">{{item.number}}</p>
    </div>
    <span class="delete-btn" title="ukloni" v-on:click.stop="onDelete"></span>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  methods: {
    onDelete: function() {
      this.$emit("item-delete");
    }
  }
};
</script>

<style scoped>
.pb-item {
  padding: 22px 4px;
  margin: 0px 12px;
  cursor: pointer;
  border-top: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
}

.pb-item .data {
  text-decoration: none;
}

.pb-item-content {
  flex-grow: 1;
  color: #7b7b7b;
  padding: 0 16px;
}

.pb-item:hover .pb-item-content {
  color: #4e4e4e;
}

.delete-btn {
  display: inline-block;
  width: 26px;
  height: 26px;
  background-image: url(~@/assets/icon-delete-light.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

.delete-btn:hover {
  background-image: url(~@/assets/icon-delete.png);
}
</style>

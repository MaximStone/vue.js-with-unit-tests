<template>
  <ul class="site-navigation">
    <menu-item v-for="item in items" :key="item.id" :item="item" @mouseover="menuItemMouseOverHandler(item)" />
  </ul>
</template>

<script>
import MenuItem from './MenuItem';

export default {
  name: 'MenuList',
  components: { MenuItem },
  props: {
    items: {
      type: Array,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    menuItemMouseOverHandler(itemObject) {
      if (itemObject.submenu && itemObject.submenu.length) {
        this.$emit('openSubmenu', itemObject.submenu);
      }
    },
  },
};
</script>

<style>

</style>

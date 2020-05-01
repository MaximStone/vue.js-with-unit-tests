<template>
  <div v-show="menuVisible" class="menu-list-wrapper">
    <menu-list v-for="(list, index) in menuLists" :key="index" :items="list" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MenuList from './MenuList';

export default {
  name: 'MainMenu',
  components: { MenuList },
  data: () => ({
    menuStructure: [],
    menuLists: [],
  }),
  computed: {
    ...mapState({
      menuState: (state) => state.the_menu.menu,
      menuVisible: (state) => state.the_menu.menu_is_visible,
    }),
  },
  created() {
    this.menuStructure.push(this.menuState.map((item) => ({
      ...item,
      selected: false,
    })));
    this.getChildren(this.menuStructure, this.menuLists);
  },
  getChildren(item, root) {
    if (item.submenu && item.submenu.length) {
      root.push(item.submenu);
    }
    if (item.submenu.find((element) => element.selected)) {
      this.getChildren(item.submenu.find((element) => element.selected), root);
    }
  },
};
</script>

<style>
.menu-list-wrapper {
  display: flex;
}
</style>

<template>
  <li class="site-navigation__item" @click="itemClickHandler">
    <nuxt-link class="site-navigation__link" :to="`/${item.slug}`">
      {{ item.name }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    itemClickHandler() {
      this.$emit('click', this.item);
    },
  },
};
</script>

<style>

</style>

<template>
  <div @click="itemClickHandler">
    {{ item.name }}
  </div>
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
      this.$emit('click');
    },
  },
};
</script>

<style scoped>

</style>

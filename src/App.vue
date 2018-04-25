<template>
  <div id="app">
    <ucc-header></ucc-header>
    <router-view></router-view>
  </div>
</template>

<script>
import uccHeader from '@/components/header/item.vue'

export default {
  name: 'App',
  components: {
    uccHeader
  }
}
</script>

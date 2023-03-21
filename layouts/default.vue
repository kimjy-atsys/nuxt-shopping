<template>
  <div>
    <!-- <AppHeader /> -->
    <!-- <header>
      <h1>
        <NuxtLink to="/">Nuxt Shopping</NuxtLink>
      </h1>     -->
      <!-- <NuxtLink to="/">홈페이지</NuxtLink>
      <NuxtLink to="/main">메인페이지</NuxtLink>
      <NuxtLink to="/product">상품페이지</NuxtLink> -->
      <!-- <router-link></router-link> -->
    <!-- </header> -->
    <header class="title">
      <nuxt-link class="logo" to="/">Nuxt Shopping</nuxt-link>
    </header>

    <Nuxt />
    <!-- <Nuxt></Nuxt> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import AppHeader from '@/components/AppHeader.vue'

export default {
  // components: { AppHeader },
}
</script>

<style scoped>
/* 헤더관련  */
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
<template>
  <div class="app">
    <!-- <Logo />
    <Tutorial /> -->
    <!-- <p>메인 페이지입니다.</p> -->
    <main>
      <!-- <SearchInput 
        :search-keyword="searchKeyword"
        @input="updateSearchKeyword"
      /> -->
      <SearchInput v-model="searchKeyword" @search="searchProducts"></SearchInput>
      <ul>
        <li           
          v-for="product in products" 
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)"
          >
          <!-- {{ product }} -->
          <img 
            class="product-image" 
            :src="product.imageUrl" 
            :alt="product.name" />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
// import Logo from '@/components/NuxtLogo.vue';
// import Tutorial from '@/components/Tutorial.vue';

import axios from 'axios'
import SearchInput from '@/components/SearchInput.vue'
import { fetchProductByKeyword } from '~/api'
// import ProductList from '~/components/ProductList.vue'

export default {
  components: { SearchInput },
  // components: { ProductList },
    // components: {
    //     Logo,
    //     Tutorial,

  async asyncData() {
      const response = await axios.get('http://localhost:3000/products')
      // console.log(response)
      const products = response.data.map((item) => ({
        ...item,
        // imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
      return { products }
  },

  data() {
    return {
      searchKeyword: '',
    }
  },

  methods: {
    moveToDetailPage(id) {
      console.log(id)
      this.$router.push(`detail/${id}`)
    },
    // updateSearchKeyword(keyword) {
    //   this.searchKeyword = keyword
    // },
    async searchProducts() {
      const response = await fetchProductByKeyword(this.searchKeyword)
      console.log(response)
      this.products = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    },
    moveToCartPage() {
      this.$router.push('/cart')
    },
  },

    // data() {
    //   return {
    //     products: [],
    //   }
    // },

    // async created() {
    // }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
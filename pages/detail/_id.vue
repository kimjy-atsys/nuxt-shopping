<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">카트에 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { fetchProductById, createCartItem } from '@/api/index'

export default {
    async asyncData({ params }) {
        // const id = console.log(params.id)
        const response = await fetchProductById(params.id)
        const product = response.data
        return { product }
    },

    methods: {
        async addToCart() {
            const response = await createCartItem(this.product)
            // const response = await createCartItem(this.product)
            console.log(response)
            this.$store.commit('addCartItem', this.product)                        
            this.$router.push('/cart')
        }
    },

    // created() {
    //   const id = console.log(this.$route.params.id)
    //   fetchProductById()
    // },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
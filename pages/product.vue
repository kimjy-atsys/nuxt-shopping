<template>
  <div>
    <ul>
      <li>상품 1</li>
      <li>상품 2</li>
      <li>상품 3</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData() {
        console.log('1')
        const response = await axios.get('http://localhost:3000/products')
        // console.log(response)
        const products = response.data
        return { products }
    },

}
</script>

<style>

</style>
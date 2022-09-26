<template>
  <div>
    <h1>
      Hello Nuxt.js!
    </h1>
    <h2>
      <nuxt-link to="/about">去About</nuxt-link>
    </h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomePage',
  layout: 'foo',
  async asyncData() {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/app/data.json'
    })
    console.log(res)
    return res.data
  },
  data () {
    return {
      foo: 'bar'
    }
  }
}
</script>

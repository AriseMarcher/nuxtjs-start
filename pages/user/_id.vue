<template>
  <div>
    <h1>
      UserPage
      <p>this.$route.params.id</p>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'UserPage',

  mounted() {
    console.log(this.$route)
  }
}
</script>

<template>
  <div class="hello">
   <ul id="example-1">
      <li v-for="item in dataList" :key="item.id">
      {{ item.title }}
  </li>
   </ul>
  </div>
</template>

<script>
import API from '../api/API'
const api = new API()
export default {
  name: 'hello',
  beforeMount () {
    let that = this
    let listParam = { 'page': 0, 'tab': 'ask', 'limit': 10, 'mdrender': true }
    // 获取信息列表
    let response = api.getList(listParam)

    response.then(function (res) {
      if (res.data.success) {
        that.dataList = res.data.data
      }
      console.log(that.dataList)
    })
      .catch(function (err) {
        console.log(err)
      })
  },
  data () {
    return {
      dataList: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

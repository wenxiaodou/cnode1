<template>
  <div id="app">
    <header class="header">
      <div class="logo">&#xe606;</div>
      <input type="text" class="searchInput">
      <div class="navContainer">
        <ul>
          <li>首页</li>
          <li>新手入门</li>
          <li>API</li>
          <li>关于</li>
          <li>注册</li>
          <li>登录</li>
        </ul>
      </div>
        <!--div class="search">&#xe632;</div-->
    </header>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{ margin: 0;padding: 0;font-family: "微软雅黑";overflow: hidden;}
body,html{-webkit-text-size-adjust: none;width: 100%;height: 100%;}
*{text-decoration: none;list-style: none;}
img{border: 0px;}
ul,li,dl,dd,dt,p,ol,h1,h2,h3,h4,h5{font-size: 12px;font-weight: 100;padding: 0;margin: 0;}
.clear{clear:both;}
@font-face {
  font-family: 'iconfont';  /* project id 397632 */
  src: url('//at.alicdn.com/t/font_397632_vpu3cfmahx17nwmi.eot');
  src: url('//at.alicdn.com/t/font_397632_vpu3cfmahx17nwmi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_397632_vpu3cfmahx17nwmi.woff') format('woff'),
  url('//at.alicdn.com/t/font_397632_vpu3cfmahx17nwmi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_397632_vpu3cfmahx17nwmi.svg#iconfont') format('svg');
}
.logo{
  font-family:'iconfont';
  font-size: 35px;
  padding-left:25%;
  padding-bottom: 8px;
}
.header{
  background-color:#000;
  opacity:.9;
  width:100%;
  height:80px;
  display: flex;
  align-items: center;
}
.searchInput{
  border-width: 0;
  border-radius: 18px;
  height: 32px;
  width: 200px;
  background: url("http://o4j806krb.qnssl.com/public/images/search.e53b380a.hashed.png") 4px 7px no-repeat #888;
}
.navContainer{
  margin-left: 40px;
}
.navContainer>ul>li{
  color:#ccc;
  float:left;
  padding-right:20px;
}
</style>

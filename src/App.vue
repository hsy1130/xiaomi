<template>
  <div id="app">
    <transition
    enter-active-class="slideInRight animated"
    leave-active-class="slideOutRight animated"
    >
    <router-view class="page"/>
    </transition>
    <div id="nav">
      <router-link to="/" class="list">
      <img src="./assets/home.png" alt="">
      首页
      </router-link> 
      <router-link to="/about" class="list">
      <img src="./assets/cat.png" alt="">
      关于</router-link>
      <router-link to="/cart" class="list">
      <img src="./assets/cart.png" alt="">
      服务</router-link>
      <router-link to="/user" class="list">
      <img src="./assets/user.png" alt="">
      我的</router-link>
      <!-- rount-link 切换页面导航 -->
    </div>
    
    <!-- <router-view/> -->
    <!-- rount-view 存放页面 -->
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color:#777;
}
.page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .98rem;
  overflow: auto;
}
.animated{
  /* box-shadow: -8px 0 16px rgba(200,200,200,.4); */
  animation-duration: .4s !important;
}
.slideOutRight{
  animation-delay: .4s;
  filter:brightness(80%);
}
#nav{
  display: flex;
  box-shadow: 0 -2px 4px rgba(200,200,200,.4);
  width:100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: .98rem;
}
#nav a{
  flex:1;
  display:flex; 
  flex-direction:column;
  justify-content:center; 
  align-items:center;
}
#nav .list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#nav .list img{
  width: 0.44rem;
  height: 0.44rem;
}
.router-link-exact-active{
  color:#f30;
}
</style>

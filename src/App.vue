<template>
  <nav>
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/about">关于</router-link></li>
      <li><router-link to="/ai">AI助手</router-link></li>
      <li><router-link to="/contact">联系</router-link></li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
nav {
  padding: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: #333;
}

a.router-link-active {
  color: #1e88e5;
}
</style> 
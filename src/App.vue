<template>
  <div class="app-container">
    <nav class="navigation">
      <div class="logo">媛飞飞</div>
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
        <li><router-link to="/ai">AI助手</router-link></li>
        <li><router-link to="/contact">联系</router-link></li>
      </ul>
    </nav>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
}

.navigation {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e88e5;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav-links a:hover {
  color: #1e88e5;
  background: rgba(30, 136, 229, 0.1);
}

.nav-links a.router-link-active {
  color: #1e88e5;
  background: rgba(30, 136, 229, 0.1);
}

.main-content {
  padding-top: 80px;
  min-height: calc(100vh - 80px);
}
</style> 
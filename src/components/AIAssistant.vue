<template>
  <div class="ai-assistant">
    <div class="content-card">
      <h1 class="title">你好，我是<span class="highlight">媛飞飞</span></h1>
      <p class="subtitle">我是余杭区第一不剩博主，欢迎来挑战我哦~</p>
      <p class="description">24小时在线，为您解答各种问题</p>
      <button class="start-chat">
        <span class="button-text">开始对话</span>
        <span class="button-icon">→</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.ai-assistant {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
}

.content-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
  backdrop-filter: blur(10px);
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.highlight {
  color: #1e88e5;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
}

.description {
  color: #888;
  margin-bottom: 2rem;
}

.start-chat {
  background: #1e88e5;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.start-chat:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(30, 136, 229, 0.4);
}

.button-icon {
  transition: transform 0.3s ease;
}

.start-chat:hover .button-icon {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .content-card {
    padding: 2rem;
    margin: 1rem;
  }
  
  .title {
    font-size: 2rem;
  }
}
</style> 
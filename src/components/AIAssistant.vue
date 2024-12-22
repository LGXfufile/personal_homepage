<template>
  <div class="ai-assistant">
    <h2>智能AI助手</h2>
    <p>24小时在线，为您解答各种问题</p>
    <button class="start-chat">开始对话</button>
    <div class="ai-image">
      <!-- 如果图片在 public 目录 -->
      <img :src="`${import.meta.env.BASE_URL}ai-assistant.png`" alt="AI助手" />
      
      <!-- 或者如果图片在 assets 目录 -->
      <!-- <img src="../assets/ai-assistant.png" alt="AI助手" /> -->
    </div>
  </div>
</template>

<style scoped>
.ai-assistant {
  padding: 2rem;
  text-align: center;
}

.start-chat {
  background-color: #1e88e5;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.ai-image {
  margin-top: 1rem;
  max-width: 300px;
  margin: 0 auto;
}

.ai-image img {
  width: 100%;
  height: auto;
}
</style> 
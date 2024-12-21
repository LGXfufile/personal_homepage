// 初始化AOS动画库
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true
    });
});

// AI聊天功能
let chatHistory = [];

// 添加API配置
const API_CONFIG = {
    url: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation',
    apiKey: '你的通义千问API密钥' // 请替换成你的实际API密钥
};

async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // 添加用户消息
    addMessage(message, 'user');
    input.value = '';
    
    // 显示加载状态
    showTypingIndicator();
    
    try {
        // 调用通义千问API
        const response = await fetch(API_CONFIG.url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_CONFIG.apiKey}`,
                'Content-Type': 'application/json',
                'X-DashScope-SSE': 'enable'  // 启用流式返回
            },
            body: JSON.stringify({
                model: 'qwen-turbo',         // 使用通义千问的模型
                input: {
                    messages: [
                        {
                            role: 'user',
                            content: message
                        }
                    ]
                }
            })
        });

        if (!response.ok) {
            throw new Error('API请求失败');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let aiResponse = '';

        while (true) {
            const {value, done} = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');
            
            for (const line of lines) {
                if (line.startsWith('data:')) {
                    try {
                        const data = JSON.parse(line.slice(5));
                        if (data.output && data.output.text) {
                            aiResponse += data.output.text;
                            // 更新显示的消息
                            updateAIMessage(aiResponse);
                        }
                    } catch (e) {
                        console.error('解析响应数据失败:', e);
                    }
                }
            }
        }

        // 移除加载指示器
        removeTypingIndicator();
        
        // 添加完整的AI响应
        if (aiResponse) {
            addMessage(aiResponse, 'ai');
        } else {
            addMessage('抱歉，我现在无法回答。请稍后再试。', 'ai');
        }

    } catch (error) {
        console.error('API调用失败:', error);
        removeTypingIndicator();
        addMessage('抱歉，发生了一些错误。请稍后再试。', 'ai');
    }
}

// 更新AI消息的辅助函数
function updateAIMessage(text) {
    const container = document.getElementById('chatContainer');
    let messageDiv = container.querySelector('.ai-message:last-child');
    
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.className = 'message ai-message';
        container.appendChild(messageDiv);
    }
    
    messageDiv.textContent = text;
    container.scrollTop = container.scrollHeight;
}

function addMessage(text, sender) {
    const container = document.getElementById('chatContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    container.appendChild(messageDiv);
    
    if (sender === 'ai') {
        typeMessage(messageDiv, text);
    } else {
        messageDiv.textContent = text;
    }
    
    container.scrollTop = container.scrollHeight;
    chatHistory.push({ sender, text });
}

function showTypingIndicator() {
    const container = document.getElementById('chatContainer');
    const indicator = document.createElement('div');
    indicator.className = 'message ai-message typing-indicator';
    indicator.innerHTML = '正在输入...';
    indicator.id = 'typingIndicator';
    container.appendChild(indicator);
    container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// 监听回车键发送消息
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}); 

// 初始化Swiper轮播
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});

// 返回顶部按钮
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 作品集模态框
function showPortfolioDetails(projectId) {
    const modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    // 这里可以根据projectId加载对应的项目详情
    const modalBody = document.querySelector('#portfolioModal .modal-body');
    modalBody.innerHTML = `
        <div class="project-details">
            <img src="project${projectId}.jpg" alt="项目详情" class="img-fluid mb-4">
            <h3>项目标题</h3>
            <p>项目详细描述...</p>
            <div class="tech-stack">
                <span class="badge bg-primary">HTML</span>
                <span class="badge bg-primary">CSS</span>
                <span class="badge bg-primary">JavaScript</span>
            </div>
            <a href="#" class="btn btn-primary mt-3">查看演示</a>
        </div>
    `;
    modal.show();
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 表单提交处理
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // 这里添加表单提交逻辑
    alert('消息已发送！');
    this.reset();
});

// AI消息打字机效果
function typeMessage(element, text) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    
    type();
}

// 添加 openAIChat 函数
function openAIChat() {
    const modal = new bootstrap.Modal(document.getElementById('aiChatModal'));
    modal.show();
    
    // 如果是第一次打开，可以添加欢迎消息
    if (chatHistory.length === 0) {
        addMessage('你好！我是 AI 助手，有什么我可以帮你的吗？', 'ai');
    }
}
  
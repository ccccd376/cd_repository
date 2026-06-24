// ==========================================
// 1. 作品数据配置表（在这里导入你的视频和文字！）
// ==========================================
const projectData = [
    {
        title: "虚实客家",
        tags: ["UE5", "三维交互", "信息可视化"],
        video: "videos/tulou_demo.MP4",
        desc: `
            <h3>项目简介</h3>
            <p>本项目旨在利用虚拟现实技术数字化重现客家土楼建筑群，并着重展现土家族人民生存智慧。</p>
                
            <h3>项目核心设计报告</h3>
            <p>项目设计详情，点击下方卡片即可全屏在线审阅：</p>
                
            <div class="pdf-trigger-card" data-pdf="pdfs/tulou_report.pdf">
                <div class="pdf-icon">📄</div>
                <div class="pdf-info">
                    <h4>客家土楼交互设计说明书.pdf</h4>
                    <p>点击全屏在线预览 / 支持放大缩小与翻页</p>
                </div>
                <div class="pdf-arrow">↗</div>
            </div>
                
            <h3>核心技术亮点</h3>
            <p>本项目采用“数据与逻辑分离”的设计架构，通过Actor容器动态挂UMG控件，利用参数实例化技术，实现了单一交互模板对多点位、多媒体信息的参数化驱动。</p>`
    },
    {
        title: "皮影-木兰辞",
        tags: ["UE5", "AE动画", "场景搭建"],
        video: "videos/piying_demo.MP4",
        desc: `<h3>项目简介</h3>
		<p>本项目利用三维皮影展馆到二维《木兰辞》皮影戏的演绎，旨在通过数字化方式宣扬中国传统皮影文化。</p>
		
		<h3>核心技术亮点</h3>
		<p>本项目基于UE5和AE完成，利用虚幻引擎序列动画进行运镜，AE动效与关键帧制作皮影动画。</p>`
    },
    {
        title: "跑酷游戏",
        tags: ["unity", "游戏开发", "C#编程"],
        video: "videos/paoku_demo.mp4",
        desc: `<h3>项目简介</h3>
		<p>本项目基于unity与C#完成人物跑酷逻辑，通过"a w d j 空格"驱动人物，并设有关卡选择、攻击、加速等功能。</p>`
    },
    {
        title: "underdogs点线动画",
        tags: ["AE", "苹果风", "临摹练习"],
        video: "videos/underdogs_demo.mp4",
        desc: `<h3>项目简介</h3>
		<p>本项目通过临摹Apple广告《Intention》点线创意，传达出励志逆袭的主题。</p>`
    },
    {
        title: "智能体对话网页",
        tags: ["Python", "网页开发", "ai对话"],
        video: "videos/zhinengti_demo.mp4",
        desc: `<h3>项目简介</h3>
		<p>基于Python的智能对话助手，连接DeepSeek/千问大模型，可自主调节对话温度以及助手性格角色，具有记忆存储功能。</p>`
    },
    {
        title: "竹文化馆",
        tags: ["3DMax", "unity", "三维交互"],
        video: "videos/zhu_demo.mp4",
        desc: `<h3>项目简介</h3>
		<p>本项目通过实地考察后建模优化，旨在数字化还原宜宾竹文化博物馆，内部文物海报皆参考实地制作，利用unity交互原理，建立数字化“云游博物馆”系统。</p>
		
		<h3>核心技术亮点</h3>
		<p>本项目利用3DMax建模搭建场馆，使用混元3d生成文物模型后进一步拓扑优化，根据展馆实地制作竹文化科普海报，在unity中完成多种效果的交互逻辑。</p>`
    },
	{
	    title: "视觉传达：系列主题海报设计",
	    tags: ["平面设计", "Photoshop", "视觉传达"],
	    video: "", 
	    desc: `
	        <h3>设计理念</h3>
	        <p>本系列海报专注于探索平面视觉中的创意与版式美学。</p>
	            
	        <h3>核心作品选登</h3>
	        <p>鼠标悬停可查看海报设计主题</p>
	            
	        <div class="poster-grid">
	            <div class="poster-item">
	                <img src="images/06_1.jpg" alt="海报1">
	                <div class="poster-mask">
	                    <span>关注情绪健康</span>
	                </div>
	            </div>
	            <div class="poster-item">
	                <img src="images/06_2.jpg" alt="海报2">
	                <div class="poster-mask">
	                    <span>关注情绪健康</span>
	                </div>
	            </div>
	            <div class="poster-item">
	                <img src="images/06_3.jpg" alt="海报3">
	                <div class="poster-mask">
	                    <span>关注情绪健康</span>
	                </div>
	            </div>
	            <div class="poster-item">
	                <img src="images/06_4.jpg" alt="海报4">
	                <div class="poster-mask">
	                    <span>关爱流浪动物</span>
	                </div>
	            </div>
	            <div class="poster-item">
	                <img src="images/06_5.jpg" alt="海报5">
	                <div class="poster-mask">
	                    <span>关爱流浪动物</span>
	                </div>
	            </div>
	            <div class="poster-item">
	                <img src="images/06_6.jpg" alt="海报6">
	                <div class="poster-mask">
	                    <span>关爱流浪动物</span>
	                </div>
	            </div>
				<div class="poster-item">
				    <img src="images/06_7.jpg" alt="海报6">
				    <div class="poster-mask">
				        <span>海洋公益海报</span>
				    </div>
				</div>
				<div class="poster-item">
				    <img src="images/06_8.jpg" alt="海报6">
				    <div class="poster-mask">
				        <span>创意字体设计</span>
				    </div>
				</div>
				<div class="poster-item">
				    <img src="images/06_9.jpg" alt="海报6">
				    <div class="poster-mask">
				        <span>放射构成创意海报</span>
				    </div>
				</div>
	        </div>
	            
	        <h3>设计工具与技术指标</h3>
	        <p>主要使用 Adobe Photoshop 进行图像合成。</p>`
	    },	
];

// ==========================================
// 2. 核心控制逻辑
// ==========================================
let container = document.querySelector('.container');
let currAngle = 0;

// 🌀 滚轮旋转控制
window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) currAngle -= 60;
    else currAngle += 60;
    container.style.transform = `rotateY(${currAngle}deg)`;
});

// 获取弹窗的 DOM 元素
const modal = document.getElementById('portfolio-modal');     
const closeBtn = document.querySelector('.close-btn');        
const detailVideo = document.getElementById('detail-video');  
const detailTitle = document.getElementById('detail-title');
const detailText = document.querySelector('.detail-text');
const tagsContainer = document.querySelector('.project-tags');

// 1. 🖱️ 批量给 3D 舞台内的 6 张卡片绑定点击事件（恢复纯净的 1 对 1 索引）
document.querySelectorAll('.stage .card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const data = projectData[index];
        if (data) {
            modal.classList.remove('poster-mode'); // 确保清除平面海报专属样式
            
            // 填充前六个作品的数据
            detailTitle.innerText = data.title;
            detailText.innerHTML = data.desc;
            tagsContainer.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');
            
            if (data.video) {
                detailVideo.src = data.video; 
                modal.style.display = 'flex';
                detailVideo.play().catch(err => console.log("自动播放被浏览器拦截", err));
            }
        }
    });
});

// 2. 🎯 单独绑定：给右下角“平面海报卡片”添加点击弹窗事件
const cornerCard = document.getElementById('corner-poster-card');
if (cornerCard) {
    cornerCard.addEventListener('click', () => {
        // 直接读取数组里的最后第 7 项（索引为 6）数据
        const data = projectData[6]; 
        if (data) {
            modal.classList.add('poster-mode'); // 强制激活平面海报专用全屏纯净模式

            // 填充海报展厅内容
            detailTitle.innerText = data.title;
            detailText.innerHTML = data.desc;
            tagsContainer.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');
            
            detailVideo.src = ""; // 海报没有视频，清空视频源
            modal.style.display = 'flex'; // 唤醒弹窗
        }
    });
}



// ❌ 关闭弹窗逻辑
const closeModal = () => {
    modal.style.display = 'none';
    detailVideo.pause();
    detailVideo.src = ""; // 清空视频源，彻底释放内存和停止声音
};

closeBtn.addEventListener('click', closeModal);

// ==========================================
// 📄 PDF 全屏预览控制逻辑
// ==========================================
const pdfModal = document.getElementById('pdf-modal');
const pdfViewer = document.getElementById('pdf-viewer');
const closePdfBtn = document.querySelector('.close-pdf-btn');

// 因为右侧的 HTML 是动态生成的，我们需要用事件委托来监听点击
document.querySelector('.detail-text').addEventListener('click', (e) => {
    // 寻找被点击的元素是不是 PDF 卡片（或者它的父级）
    const trigger = e.target.closest('.pdf-trigger-card');
    if (trigger) {
        const pdfUrl = trigger.getAttribute('data-pdf'); // 获取绑定的 PDF 路径
        if (pdfUrl) {
            pdfViewer.src = pdfUrl; // 把路径赋给大弹窗
            pdfModal.style.display = 'flex'; // 显示大弹窗
        }
    }
});

// 关闭 PDF 弹窗
closePdfBtn.addEventListener('click', () => {
    pdfModal.style.display = 'none';
    pdfViewer.src = ""; // 清空路径，释放内存
});

// 点击弹窗外面也能关闭
pdfModal.addEventListener('click', (e) => {
    if (e.target === pdfModal) {
        pdfModal.style.display = 'none';
        pdfViewer.src = "";
    }
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
// ==========================================
// 🎯 简易方案：点击左右箭头驱动 3D 圆环旋转
// ==========================================
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

if (prevBtn && nextBtn) {
    // 点击左箭头 ➔ 顺时针转
    prevBtn.addEventListener('click', () => {
        currAngle += 60;
        container.style.transform = `rotateY(${currAngle}deg)`;
    });

    // 点击右箭头 ➔ 逆时针转
    nextBtn.addEventListener('click', () => {
        currAngle -= 60;
        container.style.transform = `rotateY(${currAngle}deg)`;
    });
}

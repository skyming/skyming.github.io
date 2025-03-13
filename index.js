function btn_onclick() {
    var btn = document.getElementsByName("b1")[0];
    console.log(btn.value);
    
    var str = getWVRChatConfig();
    // 简化条件判断，直接赋值
    btn.value = str;
    
    // 创建或更新图片元素
    var img = document.getElementById('dynamicImage');
    if (!img) {
        img = document.createElement('img');
        img.id = 'dynamicImage';
        img.style.maxWidth = '100%';
        document.body.appendChild(img);
    }
    img.src = 'https://example.com/your-image.jpg'; // 替换为你的实际图片URL
}

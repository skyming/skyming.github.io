function handleMainFrameClick() {
    var btn = document.getElementsByName("main-btn")[0];
    console.log(btn.value);
    alert(btn.value);

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
    img.src = 'wvrhttp://2.jpg';
}

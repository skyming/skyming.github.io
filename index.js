function handleMainFrameClick() {
    var btn = document.getElementsByName("main-btn")[0];
    alert(btn.value);
    window.webkit.messageHandlers.WVRChatSendMessageToNative.postMessage(['WVRChatOutputLog', btn.value]);

    var str = getWVRChatConfig();
    window.webkit.messageHandlers.WVRChatSendMessageToNative.postMessage(['WVRChatOutputLog', str]);

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

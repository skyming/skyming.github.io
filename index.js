function btn_onclick() {
    var btn = document.getElementsByName("b1")[0];
    console.log(btn.value);
    
    var str = getWVRChatConfig()
    if (btn.value == "Click") {
        btn.value = str;
    }else{
        btn.value = str;
    }
}

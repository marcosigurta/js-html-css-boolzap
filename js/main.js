function init() {
    $('#chat-text-input').keypress(sendMessage);
    $('.message-time').text(currentTime);

}

function cpuMessage() {
    $('.cpu-message').show();
}

function sendMessage() {
    if (event.which == 13) {
        var txt = $('#chat-text-input').val();
        $('.user-message').show();
        $('.user-text').text(txt);
        $('#chat-text-input').val('');
        $('.cpu-text').text("ok!");
        setTimeout(cpuMessage, 2000);
    }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function currentTime() {
    var time = new Date();
    var h = addZero(time.getHours());
    var m = addZero(time.getMinutes());
    var currentTimeMessage = h + ":" + m;
    return currentTimeMessage;
}





$(document).ready(init);

//<i class="fas fa-paper-plane"></i>
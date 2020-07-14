function init() {
    $('#chat-text-input').keypress(sendMessage);
    $('.message-time').text(currentTime);

}

//Clone Template

function messageClone() {
    var userClone = $('.user-message').clone();
    $('.chat-content').append(userClone);
    $('.user-message').show();
}

function cpuMessageClone() {
    var cpuClone = $('.cpu-message').clone();
    $('.chat-content').append(cpuClone);
    $('.cpu-message').show();
}



function sendMessage() {
    if (event.which == 13) {
        var txt = $('#chat-text-input').val();
        messageClone();
        $('.user-text').text(txt);
        $('#chat-text-input').val('');
        $('.cpu-text').text("Ciao Marco, Funziono!!");
        setTimeout(cpuMessageClone, 2000);
    }
}

//Set current Time
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
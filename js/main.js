//Funzione per mostrare le opzioni messaggio
function openOptions(template){
    template.children('.fa-chevron-down').click(function(){
     $(this).parent().children('.message-options').toggle();
    });
}

//Input Testo chat
function addMessage() {
    var target = $('#chat-text-input');
    target.keyup(userMessage);
}

//Clone Template

function userMessage(event) {
    var key = event.which;
    var input = $(this);
    var txt = input.val();
    if (key === 13 && txt) {
        input.val('');
        printMessage(txt);
    }
}

function cpuMessage() {
    var template = $('#cpu-message-template .cpu-message').clone();
    var target = $('.chat-content');

    template.find('.cpu-text').text('Ok!');
    template.find('.message-time').text(currentTime());

    target.append(template);
    openOptions(template);
    var writing = $('#writing');
    writing.hide();
}

function printMessage(txt) {
    var template = $('#user-message-template .user-message').clone();
    var target = $('#chat-content');

    template.find('.user-text').text(txt);
    template.find('.message-time').text(currentTime());

    target.append(template);
    openOptions(template);
    var writing = $('#writing');
    writing.show();

    setTimeout(cpuMessage, 2000);

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


function init() {
    addMessage();
   
}

$(document).ready(init);

//<i class="fas fa-paper-plane"></i>
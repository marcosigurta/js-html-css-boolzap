//Funzione per mostrare le opzioni messaggio
function openOptions(){
    $('#cpu-message-template > i').click(function(){
        $('#cpu-message-template').find('.message-options').show();
    })
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
    var template = $('.cpu-message > #cpu-message-template').clone();
    var target = $('.chat-content');

    template.find('.cpu-text').text('Ok!');
    template.find('.message-time').text(currentTime());

    target.append(template);
}

function printMessage(txt) {
    var template = $('.user-message > #user-message-template').clone();
    var target = $('#chat-content');

    template.find('.user-text').text(txt);
    template.find('.message-time').text(currentTime());

    target.append(template);

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
    openOptions()

}

$(document).ready(init);

//<i class="fas fa-paper-plane"></i>
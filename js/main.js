//Funzione per la Ricerca utenti
function searchContacts() {
    var target = $('#search');
    target.keyup(searchUserName);
}

function searchUserName() {
    var input = $(this);
    var txt = input.val();

    var contacts = $('.conversation-chat');
    contacts.each(function () {
        var contact = $(this);
        var name = contact.find('.contact-name').text();
        if (name.toLowerCase().includes(txt.toLowerCase())) {
            contact.show();
        } else {
            contact.hide();
        }
    })
}

//Funzione per mostrare le opzioni messaggio
function openOptions(template) {
    template.children('.fa-chevron-down').click(function () {
        $(this).parent().children('.message-options').toggle(200);
        $('.user-message').mouseleave(function(){
            $(this).find('.message-options').hide();
        });
        $('.cpu-message').mouseleave(function(){
            $(this).find('.message-options').hide();
        });


        //   $(document).click(function (){
        //      $('.message-options').hide();
        //  })
    });
}

//Funzione per cancellare Messaggio

function deleteMessageUser(template) {
    template.find('.delete').click(function(){
        template.hide(50);
    })
}

// function deleteMessageCpu(template) {
//     var template = $('.cpu-message');
//     template.find('.delete').click(function(){
//         $(this).parent('.message-options').parent('.cpu-message').hide();
//     })
// }

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
    deleteMessageUser(template);
    // deleteMessageCpu(template);
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
    deleteMessageUser(template);
    // deleteMessageCpu(template)
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
    searchContacts();
}

$(document).ready(init);

//<i class="fas fa-paper-plane"></i>
"use strict";

function send_message() {
    /// function used for the chat

    console.log('vous avez envoyé le message : ');
    console.log($("#id_message").val());
    // insert message in chat
    $("#id_message").val("");

};

// url for ajax request
var url = "control_board/ajax/move/";


function moveUp() {
    // this function send an AJAX request to move up

    $.ajax({
        url:url,
        type: 'get',
        data: {'direction': 'up'},
        success: function(data) {

            console.log('UP');

        },
    });
};


function moveRight() {
    // this function send an AJAX request to move right

    $.ajax({
        url:url,
        type: 'get',
        data: {'direction': 'right'},
        success: function(data) {

            console.log('RIGHT');

        },
    });
};


function moveLeft() {
    // this function send an AJAX request to move left

    $.ajax({
        url:url,
        type: 'get',
        data: {'direction': 'left'},
        success: function(data) {

            console.log('LEFT');

        },
    });
};


function moveDown() {
    // this function send an AJAX request to move down

    $.ajax({
        url:url,
        type: 'get',
        data: {'direction': 'down'},
        success: function(data) {

            console.log('DOWN');

        },
    });
};


function applyKey(event) {

    // if the key is the up arrow key, it moves UP
    if (event.keyCode == 38) {
        moveUp();
    // if the key is the left arrow key, it moves LEFT
    } else if (event.keyCode == 37) {
        moveLeft();
    // if the key is the right arrow key, it moves RIGHT
    } else if (event.keyCode == 39) {
        moveRight();
    // if the key is the down arrow key, it moves DOWN
    } else if (event.keyCode == 40) {
        moveDown();
    };

}


// the document is listening to any key pressed and return applyKey in this case
document.onkeypress = applyKey;

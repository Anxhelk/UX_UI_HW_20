console.log("JavaScript file loaded correctly.");

$(document).ready(function() {
    
    $('#changeTextButton').click(function() {
        
        $('#textToChange').text('Text changed by jQuery!');
    });
});

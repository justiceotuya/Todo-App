//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("change");
});

//fading and deleting a todo item
$("ul").on("click","span", function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
});

//addin new Todo Items
$("input").keypress(function (e) {
    if(e.which == 13){
        //grabbing new todo text from input and creating a new li
        $("ul").append("<li><span>x</span> " + $(this).val() + "</li>");
        
        //clearing value from input box
        $("input").val(" ");
    
    
    }
    
});


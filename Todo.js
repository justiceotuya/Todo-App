// //check off specific todos by clicking
// $("ul").on("click", "li", function(){
//     $(this).toggleClass("change");
    
// });



// //fading and deleting a todo item
// $("ul").on("click","span", function(event){
//         $(this).parent().fadeOut(500, function(){
//             $(this).remove();
//         });
//         event.stopPropagation();
// });

// //addin new Todo Items
// $("input").keypress(function (e) {
//     if(e.which == 13){
//         //grabbing new todo text from input and creating a new li
//         $("ul").append("<li><span class='deleteButton'><i class='fa fa-trash' aria-hidden='true'></i></span> " + $(this).val() + "</li>");
        
//         //clearing value from input box
//         $("input").val(" ");
//     }
    
// });



var todo = [];
var archive = [];
var completed = [];
//Add the todo in the array
$("input").keypress(function (e) {
        if(e.which == 13){
            //grabbing new todo text from input and creating a new li
            
            $("ul").append("<li><span class='deleteButton'><i class='fa fa-trash' aria-hidden='true'></i></span> " + $(this).val() + "</li>");
            todo.push($(this).val());
            //clearing value from input box
            $("input").val(" ");
            
            }
    });

    //fading and deleting a todo item
$("ul").on("click","span", function(event){
        $(this).parent().fadeOut(500, function(){
            archive.push($(this).text());
            $(this).remove();
        });
        event.stopPropagation();
});

//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("change");
    if($(this).hasClass("change")){
        console.log("yes");
        completed.push($(this).text());
     } else {
         completed.remove($(this).text());
     }
});
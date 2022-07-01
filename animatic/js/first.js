$(".cell").on("mouseenter", function(){
    $($(".thread")[$(this).index()]).addClass("active");
    if($(".container").hasClass("started")){
        $('#threadIdx').text([$(this).index()]);
    }
    
}).on("mouseleave", function(){
    console.log($(this).index());
    $($(".thread")[$(this).index()]).removeClass("active");
    if($(".container").hasClass("started")){
        $('#threadIdx').text('threadIdx.x');
    }
    
})
$(".warp_cell").on("mouseenter", function(){
    $($(".block")[$(this).index()]).addClass("active");
    if($(".container").hasClass("started")){
        $('#blockIdx').text([$(this).index()]);
        $('#blockDim').text(32);
    }
    
}).on("mouseleave", function(){
    console.log($(this).index());
    $($(".block")[$(this).index()]).removeClass("active");
    if($(".container").hasClass("started")){
        $('#blockIdx').text('blockIdx.x');
        $('#blockDim').text('blockDim.x');
    }
    
})

$("#buttonS").on("click", function(){
    $(".container").addClass("started");
})
$("#buttonR").on("click", function(){
    $(".container").removeClass("started");
})

$(".cell").each(function(i){
    $(this).text(i);
})

$(".thread").each(function(i){
    $(this).text(i);
})


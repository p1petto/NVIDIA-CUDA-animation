$(".cell").on("mouseenter", function(){
    $($(".thread")[m = $(this).index()]).addClass("active");
    if($(".container").hasClass("started")){
        if (m <= 7){
            $('#threadIdx_y').text(0);
        }
        if (m <= 15 && m > 7){
            $('#threadIdx_y').text(1);
        }
        if (m <= 23 && m > 15){
            $('#threadIdx_y').text(2);
        }
        if (m <= 31 && m > 23){
            $('#threadIdx_y').text(3);
        }
        if (m <= 39 && m > 31){
            $('#threadIdx_y').text(4);
        }
        if (m <= 47 && m > 39){
            $('#threadIdx_y').text(5);
        }
        if (m <= 55 && m > 47){
            $('#threadIdx_y').text(6);
        }
        if (m <= 63 && m > 55){
            $('#threadIdx_y').text(7);
        }
        if (m <= 71 && m > 63){
            $('#threadIdx_y').text(8);
        }
        $('#threadIdx_x').text(m%8);
    }
    
}).on("mouseleave", function(){
    $($(".thread")[$(this).index()]).removeClass("active");   
    if($(".container").hasClass("started")){
        $('#threadIdx_y').text('threadIdx.y');
        $('#threadIdx_x').text('threadIdx.x');
    }

})

$(".block").on("mouseenter", function(){
    $($(".block")[n = $(this).index()]).addClass("active_block");
    $(".thread").each(function(i){
        $(this).text(i + 64 * (n-2));
    })
    if($(".container").hasClass("started")){
        $('#blockIdx_x').text((n-2)%3);
        if (n-2 <= 2){
            $('#blockIdx_y').text("0");
        }
        if (n-2 <= 5 && n-2 > 2){
            $('#blockIdx_y').text("1");
        }
        if (n-2 <= 8 && n-2 > 5){
            $('#blockIdx_y').text("2");
        }
        $('#gridDim_x').text(3);
        $('#blockId').text(n-2);
        $('.blockDim_x').text(8);
        $('#blockDim_y').text(8);
    }
    
    
}).on("mouseleave", function(){
    $($(".block")[$(this).index()]).removeClass("active_block");  
    if($(".container").hasClass("started")){
        $('#blockIdx_x').text('blockIdx.x');
        $('#blockIdx_y').text('blockIdx.y');
        $('#gridDim_x').text('gridDim.x');
        $('#blockId').text('blockId');
        $('.blockDim_x').text('blockDim.x');
        $('#blockDim_y').text('blockDim.y');
    } 
})

$("#buttonS").on("click", function(){
    $(".container").addClass("started");
})
$("#buttonR").on("click", function(){
    $(".container").removeClass("started");
})



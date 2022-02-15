var slidesToShowrow = 0;

function myFunction(x) {
  if (x.matches) { // If media query matches
    slidesToShowrow = 2;
    
    $(".card").removeClass("width-10-rem");
  } else {
    slidesToShowrow = 4;
   
    $(".card").addClass("width-10-rem");
    
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)

var showulid=null;

function showul(id){
  if($("#"+id).is(":visible")){
    $("#"+id).hide("fast");
    showulid=id;
  }
  else{
    $("#"+id).show("fast");
    showulid=id;
  }
}


function dropdownn(id){
  if($("#"+id).is(":visible")){
    $("#"+id).hide("fast");
    $("#chevron-up").hide("fast");
    $("#chevron-down").show("fast");
  }
  else{
    $("#"+id).show("fast");
   
    $("#chevron-up").show("fast");
    $("#chevron-down").hide("fast");
  }
}


function col_view_2(){
$('.view-col-change').removeClass("col-lg-3 col-md-3 col-6");
$('.view-col-change').addClass("col-lg-6 col-md-6 col-6");
$('#btn-2-col').addClass('f-000');
$('#btn-4-col').removeClass('f-000')
$('#btn-4-col').addClass('f-878787');
}
function col_view_4(){
  $('.view-col-change').removeClass("col-lg-6 col-md-6 col-6");
  $('.view-col-change').addClass("col-lg-3 col-md-3 col-6");
  
  $('#btn-2-col').removeClass('f-000')
  $('#btn-2-col').addClass('f-878787');
  $('#btn-4-col').removeClass('f-878787')
  $('#btn-4-col').addClass('f-000');
  }

function imagesetsrc(img){
  $(".containerZoom").css("background-image", "url(" + img + ")");
  $('#imageZoom').attr('src',img);
}


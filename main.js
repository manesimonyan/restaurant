"use strict";


// *************fixed nav*************


window.onscroll = function () {
	var scrolled = document.scrollTop || document.documentElement.scrollTop;

    if(scrolled > 100){
        document.getElementById('header').style.position = "fixed";
        document.getElementById('header').style.backgroundColor = "rgba(0,0,0,0.40)";
    }else if(scrolled < 100){
         document.getElementById('header').style.backgroundImage = "linear-gradient(to bottom, black, transparent)";
      }
}

// ****************slides*****************

var index = 0;
function plusSlides(n){	
	f(index += n)
}
function currentSlides(n){
	f(index = n)
}
var slide = document.getElementsByClassName("mySlides")
var dot = document.getElementsByClassName("dot")

function f(e){
	if (e > slide.length -1) { index = 0}

    if (e < 0) { index = slide.length -1}

    for (var i = 0; i < slide.length;  i++) {
    	slide[i].style.display = "none"
    }
    slide[index].style.display = "block"

    for (var i = 0; i < dot.length;  i++) {
    	dot[i].classList.remove("active")
    }
    dot[index].classList.add("active")

    }

  f()

// ***************validate email***************
  
$(document).ready(function(){
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  $('#e-mail').on("input", function(){
        if(reg.test($(this).val())){
            $(this).css({'border': '1px solid #578b57e6', 'box-shadow': '0px 0px 15px 0px rgba(73, 143, 76, 1)'});
            $('#button').css('background', '#578b57e6');
            $('#button').removeAttr('disabled',false);
        } else {
            $(this).css({'border': '1px solid #ee7373d1', 'box-shadow': '0px 0px 15px 0px rgba(238, 115, 115, 0.82)'});
            $('#button').css('background', '#ee7373d1');
            $('#button').attr('disabled',true);
        }
    })

})

// ****************Nav bar****************
   
$(document).ready(function(){
  $(".phonemenu button").click(function(){
   $(".phonenav").toggleClass("active");
  })
})

// ************name**************

var input = document.getElementsByTagName("input")[0];
var label = document.getElementsByTagName("label")[0];
input.onblur = function(){
  if (!this.value) {
    label.style.transform = "translateY(28px)";
    this.nextElementSibling.classList.add("error");
    this.nextElementSibling.innerHTML = "Please write your name";
  }
};
input.onfocus = function(){
     this.nextElementSibling.classList.remove("error");
     this.nextElementSibling.innerHTML = '';
     label.style.transform = "translateY(0px)";
}

// **************mail***********

var input1 = document.getElementsByTagName("input")[1];
var label1 = document.getElementsByTagName("label")[1];
input1.onblur = function(){
  if (!this.value) {
    label1.style.transform = "translateY(28px)";
    this.nextElementSibling.classList.add("error");
    this.nextElementSibling.innerHTML = "Please write correct e-mail";
  }
};
input1.onfocus = function(){
     this.nextElementSibling.classList.remove("error");
     this.nextElementSibling.innerHTML = '';
     label1.style.transform = "translateY(0px)";
}

// ****************data*************

var input2 = document.getElementsByTagName("input")[2];
var label2 = document.getElementsByTagName("label")[2];
input2.onblur = function(){
  if (!this.value) {
    label2.style.transform = "translateY(28px)";
    this.nextElementSibling.classList.add("error");
    this.nextElementSibling.innerHTML = "Please choose date and time";
  }
};
input2.onfocus = function(){
     this.nextElementSibling.classList.remove("error");
     this.nextElementSibling.innerHTML = '';
     label2.style.transform = "translateY(0px)";
}

// ************party************  

var select = document.querySelector("select#number");
var label3 = document.getElementsByTagName("label")[3];
select.onblur = function(){
  if (this.value == 0) {
    label3.style.transform = "translateY(28px)";
    var p = document.getElementById("p");
    p.classList.add("error");
    p.innerHTML = "Please choose your party number";
  }
};
select.onfocus = function(){
     p.classList.remove("error");
     p.innerHTML = '';
     label3.style.transform = "translateY(0px)";
}

// *************Anchor**************
 $(document).ready(function(){
 $("a").on("click", function(e){
 var a = $(e.target).attr("data-id")
 var block = "#" + a;
 var ofs = $(block).offset().top
 $("html,body").animate({scrollTop: ofs-45}, 1000)
})
})


console.log(String(new Date().getHours()) + ":" + String(new Date().getMinutes()))



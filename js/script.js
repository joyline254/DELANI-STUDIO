$(document).ready(function(){
    $(".design").click(function(){
$("#DESIGN").show();
$("").removeClass();
$("").addClass("#DESIGN")
    });
});
$(document).ready(function(){
    $(".development").click(function(){
$(".development").show();
$("#DEVELOPMENT").show();
$("").removeClass();
$("").addClass(".development")
    });
});
$(document).ready(function(){
    $(".management").click(function(){
$("#PRODUCTMANAGEMENT").show()
$("").removeClass(".");
$("").addClass()
    });
});


//$(document).ready(function () {
  //  $(".development").click(function () {
    //    $(".development").toggle('1500').hide('1000');
      //  $("#DEVELOPMENT").show('1500');
    //});
    //$("#DEVELOPMENT").click(function () {
     //   $("#DEVELOPMENT").toggle('1500');
       // $(".development").toggle('1500');
    //});
//});

//$(document).ready(function () {
//    $(".design ").click(function () {
  //      $(".design ").toggle('1500').hide('1000');
    //    $("#DESIGN").show('1500');
    //});
    //$("#DESIGN").click(function () {
      //  $("#DESIGN").toggle('1500');
        //$(".design ").toggle('1500');
    //});
//});

//$(document).ready(function () {
    //$(".product").click(function () {
        //$(".product").toggle('1500').hide('1000');
      //  $("#PRODUCTMANAGEMENT").show('1500');
    //});
   // $("#PRODUCTMANAGEMENT").click(function () {
 //       $("#PRODUCTMANAGEMENT").toggle('1500');
      //  $(".product").toggle('1500');
   // });
//});

$(document).ready(function () {
    $("#work1").mouseover(function () {
        $("#back0").show();
    }).mouseout(function () {
        $("#back0").hide();
    });
});
$(document).ready(function () {
    $("#work2").mouseover(function () {
        $("#back2").show();
    }).mouseout(function () {
        $("#back2").hide();
    });
});
$(document).ready(function () {
    $("#work3").mouseover(function () {
        $("#back3").show();
    }).mouseout(function () {
        $("#back3").hide();
    });
});
$(document).ready(function () {
    $("#work4").mouseover(function () {
        $("#back4").show();
    }).mouseout(function () {
        $("#back4").hide();
    });
});

$(document).ready(function () {
    $("#work5").mouseover(function () {
        $("#back5").show();
    }).mouseout(function () {
        $("#back5").hide();
    });
    $("#work6").mouseover(function () {
        $("#back6").show();
    }).mouseout(function () {
        $("#back6").hide();
    });
    $("#work7").mouseover(function () {
        $("#back7").show();
    }).mouseout(function () {
        $("#back7").hide();
    });
    $("#work8").mouseover(function () {
        $("back8").show();
    }).mouseout(function () {
        $("#back8").hide();
    });
});

//This doesnt really dispaly the expected result

$(document).ready(function () {
    $(".btn-primary").click(function (event) {
         event.preventDefault();
        var name = $("#name").val();
        var email = $("#mail").val();
        var message = $("#feedback").val();
        if ($("#name").val() !=="" && $("#mail").val()!=="") {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
            alert("Please enter your name and email!");
        }

    });

});
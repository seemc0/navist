function Preview(){
  this.updateRoundedCorners = function(){
    if ($("#roundedCorners").is(':checked')) {
      $(".main-nav ul").addClass("roundedCorners");
    } else  {
      $(".main-nav ul").removeClass("roundedCorners");
    };
  };

  this.updateAlignment = function(){
    var alignment = $("#alignment").val();
    $(".main-nav ul").css({"text-align" : alignment});
  };
};

var thePreview = new Preview();

function updateNavPreviewFull(){
  //Set primary color
  var priColor = $(".primary-color").val();
  $(".main-nav li").css({"color": "#" + priColor});

  //Set secondary color
  var secColor = $(".secondary-color").val();
  $(".main-nav ul li").css({"background-color": "#" + secColor});
  $(".main-nav ul").css({"background-color": "#" + secColor});
};

function watchColorChange(){
  $(".jscolor").change(function(){
    updateNavPreviewFull();
  });
};

function watchNavHover(){

  $(".main-nav ul li").hover(function(){
    var tertiaryColor = "#" + $(".tertiary-color").val();
    var hoverTextColor = "#" + $(".hover-text-color").val();
    $(this).css({"background-color": tertiaryColor});
    $(this).css({"color": hoverTextColor});
  }, function(){
    var secondaryColor = "#" + $(".secondary-color").val();
    var primaryColor = "#" + $(".primary-color").val();
    $(this).css({"background-color": secondaryColor});
    $(this).css({"color": primaryColor});
  });


};

function watchRoundedCheck(){
  $("#roundedCorners").change(function(){
      thePreview.updateRoundedCorners();
  });
};

function watchAlignmentChange(){
  $("#alignment").change(function(){
    thePreview.updateAlignment();
  });
}

function watchClosers(){
  $(".closer").click(function(){
    var close = $(this).attr('data-closes');
    //If the target is currently open, close it
    if ($(this).html()=="-"){
      $(close).css({"display":"none"});
      $(this).html("+");
    } else {
      $(close).css({"display":"block"});
      $(this).html("-");
    }

  });
};

$(function(){
  updateNavPreviewFull();
  watchColorChange();
  watchNavHover();
  watchRoundedCheck();
  watchAlignmentChange();
  watchClosers();
  thePreview.updateRoundedCorners();
  thePreview.updateAlignment();
  $('select').niceSelect();
});

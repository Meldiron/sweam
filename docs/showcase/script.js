$(document).ready(function() {
  let obj = {
    "path": "C:/Program Files (x86)/Steam",
    "imgPath": ["default.jpg", "Iceberg.png", "lakeside.jpg"],
    "usrName": ["account 1", "account 2", "account 3"],
    "name": ["steam 1", "steam 2", "steam 3"],
    "pass": [],
    "date": ["06/10/2017", "04/10/2017", "12/8/1998"]

  }

  let usrImg = " ";
  let usrName = " "
  let list = "";
  let showInfo = "";
  let i = 0;
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  if(dd < 10) {
    dd = '0' + dd
  }
  if(mm < 10) {
    mm = '0' + mm
  }
  today = dd + '/' + mm + '/' + yyyy;


  function loadDoc() {
    for(let i = 0; i <= obj.name.length - 1; i++) {
      usrImg = obj.imgPath[i];
      usrName = obj.usrName[i];
      list += "<li class='accounts'>";
      list += "<div class='pic'>";
      list += "<img src='" + usrImg + "' class='img'>";
      list += "</div>";
      list += "<div class='padText'>";
      list += "&nbsp;&nbsp;" + usrName;
      list += "</div>";
      list += "</li>";
      createElement();

    }
    i = 0;
    date = "Last Online: " + obj.date[i];
    $(".usrName").children("span").text(obj.name[i]);
    $(".date").children("span").text(date);
  }
  loadDoc()
  //add account
  function createElement() {
    $("#myList").append(list);
    list = "";
    animation();
  }
  //update name and date
  function editInfo() {
    $(".usrName").find("span").fadeTo(255, 0, function() {
      $(this).stop(true).text(obj.name[i]).fadeTo(255, 1);
    })
    date = "Last Online: " + obj.date[i];
    $(".date").children("span").fadeTo(255, 0, function() {
      $(this).stop(true).text(date).fadeTo(255, 1);
    })
  }


  function addAcc() {
    //window popup, input for image,usrname, name and password, set today's date
  }

  var image = $(".img:first").attr("src");
  $(".bg").children("img").attr("src", image);
  //change  width on start
  $('.start').height($(window).height() - 300);
  $('.start, .bg').width($(window).width() - $(".table").width() - 15);
  //change width on resize
  $(window).resize(function() {
    $('.start').height($(window).height() - 300);
    $('.start, .bg').width($(window).width() - $(".table").width() - 15);
  });

  function animation() {
    //make pictures bigger on hover
    $(".accounts").children(".img").off();
    $(".bg").children(".img").off();
    $(".accounts").off();
    $(".accounts").hover(
      function() {
        $(this).children(".pic").stop(true).animate({
          width: "95px",
          height: "95px"
        }, 255);
      },
      function() {
        $(this).children(".pic").stop(true).animate({
          width: "80px",
          height: "80px"
        }, 255);
      }
    );
    //change to respective bg image on account click
    $(".accounts").click(function(e) {
      i = $(this).index() - 1;
      console.log(i)
      editInfo();
      image = $("img", this).attr("src");
      $(".bg").children("img").fadeOut(255, function() {
        $(this).attr("src", image);
        $(this).fadeIn(255);
      })
    })
  }
  animation();

  $(".login").hover(
    function() {
      $(this).stop(true).animate({
        width: "32%",
        height: "14%"
      }, 255);
    },
    function() {
      $(this).stop(true).animate({
        width: "30%",
        height: "12%"
      }, 255);
    }
  );



  //simulate click with pictures
  $(".login").click(function() {
    $(this).children("img").attr("src", "login1.jpg");
    $(this).css("backgroundColor", "#13083C");
    setTimeout(function() {
      $(".login").children("img").attr("src", "login.jpg");
      $(".login").css("backgroundColor", "#230F6E");
    }, 50)
  });
  //make login bigger on hover
})

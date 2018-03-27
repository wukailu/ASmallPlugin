var postUrl = "https://www.image-feedback.com"

function userTab(){
  $("#failMsg").hide();
  $("#login").hide();
  $("#logged").show();
}

function loginTab(){
  $("#logged").hide();
  $("#failMsg").hide();
  $("#login").show();
}

function trylogin(){
  console.log("logging...");
  $.cookie('username',$("#username").val());
  //$.cookie('password',$.md5($("#psw").val()));
  $.cookie('password',$("#psw").val());
  if(verifyUser() == true){
    userTab();
  }else{
    $("#failMsg").show();
  }
}

function verifyUser(){
  if($.cookie('username') != "" && $.cookie('password') != "" ){
    var name = $.cookie('username');
    var psw = $.cookie('password');
		console.log("POSTing");
		var result = false;
    $.ajax
    ({
        type: "POST",
        url: postUrl + "/api/token",
        dataType: 'json',
        async: false,
        headers: {
            "Authorization": "Basic " + btoa(name + ":" + psw)
        },
        data: { query:"none" },
        success: function (data){
						chrome.runtime.sendMessage({username: name , password: psw});
						result = true;
        },
        error : function(){
            result = false;
        }
    });
	}
	return result;
}

function feedback(){
  window.open(postUrl);
}
function download(){
  window.open("http://on9i1rseh.bkt.clouddn.com/ASmallPlugin.zip",'_blank');
}

if(jQuery){
	loginTab();
	$("#bt1").click(trylogin);
  $("#bt2").click(feedback);
  $("#bt3").click(download);
	if(verifyUser() == true)
		userTab();
}else{
	console.log("jQuery is needed!");
}




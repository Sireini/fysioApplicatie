
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        $.ajax({
            url:     "http://sylvanreinieren.com/fysioWebapp/php/get_schema.php",
            type:    "GET",
            success: function(data) {
                /* ...use the data to fill in some HTML elements... */
                $('#myDiv').html(data);
            },
            error:   function() {
                /* ...show an error... */
            }
        });
    }
};


$("#submit").click(function(e){
   var tokenValue = $('.valueToken').val();

   console.log($("div").hasClass(tokenValue));

//    if($("div").hasClass(tokenValue) && tokenValue == $('div').val()){
    // do something
    //    console.log('test');
    //    $(tokenValue).addClass('testClass');
    // }

    var tokenValue = $('.valueToken').val();
    $("div."+tokenValue).addClass("showSchema");
    
});

function loadXMLDoc(){
        var xmlhttp;
        if (window.XMHttpRequest){
            xmlhttp=new XMLHttpRequest();
        }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.readyState==4 && xmlhttp.status==200){
                document.getElementById("myDiv").innerHTML=xmlhttp.resonseText;
            }
        }
        xmlhttp.open("GET", "http://localhost/dummy/get_info.php",true);
        xmlhttp.send();
}


// document.getElementById("test").onclick = function(){
//     loadXMLDoc();
// }

app.initialize();
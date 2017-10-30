
    function deletepost(id) {
      

        //Delete from back end
        $.ajax({
            url: "http://172.19.38.26:3000/map/" + id, // post id
            type: "DELETE" // Use DELETE
        })
        alert('Delete Complete !');
        setTimeout(window.location.href = "index.html");
        //Delete from front end
        $("#map" + id).empty();

    }

    function Updatepost(id) {      
        alert("<<"+id+">> is id number. And the update form is below the page.");
}


$(function () {

    var textarea = $('#textarea');
    var lat1 = $('#lat1');
    var lng1 = $('#lng1');
    var title = $('#title');
    var photo1 = $('#photo1');
    $('#submit').on('click', function () {


        var object = {

            comment: textarea.val(),
            photo: photo1.val(),
            title: title.val(),
            lat: lat1.val(),
            lng: lng1.val()
        }

        $.ajax({
            type: 'POST',
            url: 'http:// 172.19.38.26:3000/map',
            data: object,
            success: function (newObject) {
                alert("Success!");
            },
            error: function () {
                alert('error saving order');
            }
        });
    });
});

$(function () {



});

$(function () {
    var photo = $('#photo');

    $('#convert').on('click', function () {

        function toDataURL(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                var reader = new FileReader();
                reader.onloadend = function () {
                    callback(reader.result);
                }
                reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();

        }


        toDataURL(photo.val(), function (dataUrl) {
            $("#photo1").val(dataUrl);
        });

    });
});






$(function () {
    var url1 = 'http://172.19.38.26:3000/user';
    var username = $('#username');
    var password = $('#password');
    var email = $('#email');
    var phone = $('#phone');
    $('#su').on('click', function () {
        var object = {
            username: username.val(),
            password: password.val(),
            email: email.val(),
            phone: phone.val()
        }

        $.ajax({
            type: 'POST',
            url: url1,
            data: object,
            success: function (newObject) {
                alert("Success!");
            },
            error: function () {
                alert('error saving order');
            }
        });
    });
});

$(function () {
    var id = $('#idd');

    var url = 'http://172.19.38.26:3000/user/';
    $("#delete").click(function () {
        $.ajax({
            type: 'DELETE',
            url: url + id.val(),// 2  is id you want to delete 
            success: function (data) {
                data.remove();
                alert('sucess');
            }
        })

    })
});

$(function () {

    var id = $('#idu');

    var textarea = $('#textarea');

    var title = $('#title');
  

    $("#submit1").click(function () {

        var object = {

            comment: textarea.val(),
            title: title.val(),
         
        }
        $.ajax({
            url: "http://172.19.38.26:3000/map/" + id.val(),
            type: "POST",
            data: JSON.stringify(object),
            success: function (data) {
                alert('sucess');

 setTimeout(window.location.href = "index.html");
            }
        })

    });




    ons.ready(function () {

        initTimeline();

        var tabar = document.querySelector('ons-tabbar');
        tabar.addEventListener('postchange', function (event) {
            if (event.index == 0) {
                initTimeline(event);
            }
        });


        $("#hello").click(function () {
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
            });

            function onSuccess(imageURI) {
                var image = document.getElementById('preview');
                image.src = imageURI;
            }

            function onFail(message) {
                alert('Failed because: ' + message);
            }
        });


       

    });
/*
    function deletepost(id) {
        alert('Delete This Post ?');

        //Delete from back end
        $.ajax({
            url: "http://localhost:3000/map/" + id, // post id
            type: "DELETE" // Use DELETE
        })
        alert('Delete Complete !');
        setTimeout(window.location.href = "index.html");
        //Delete from front end
        $("#map" + id).empty();

    }
*/





    function initTimeline(event) {

        var url = "http://172.19.38.26:3000/map";
        $.get(url, function (data) {
            $("#timetab").attr("badge", data.length);
            $.each(data, function (index, item) {
                $.get('card.html', function (template) {
                    var rendered = Mustache.render(template, item);
                    $("#pins").append(rendered);
                });
            });
        });
    }





});

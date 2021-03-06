var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var base_url_protocol = window.location.protocol;
var base_url_hostname = window.location.hostname;
var base_url_pathname = window.location.pathname;
var base_url_href     = window.location.href;
if(base_url_pathname == "/")
{
    base_url_pathname = "/index.php";
}
var base_url = base_url_protocol+'//'+base_url_hostname;
var base_url_user = base_url + base_url_pathname;
var base_url_user_services = base_url + "/services.php";
var base_url_user_login = base_url + "/login.php";
var base_url_user_websitesettings = base_url + "/websitesettings.php";
var base_url_user_menu = base_url + "/menu.php";
var base_url_user_users = base_url + "/users.php";
var base_url_user_cv = base_url + "/cv.php";

var tinymce_selector;
var tinymce_options;

var work_experience_counter = 0;
var education_counter = 0;




var base64DefaultLinkImage = "iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4QzE3MjdGMTEzREMxMUU2QjVBNkI2Q0ZFRUY0RUEwMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQjFCOTg2NzhENzkxMUU2OTJGMURGQzIzMzhFQjVGRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQjFCOTg2NjhENzkxMUU2OTJGMURGQzIzMzhFQjVGRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzRhMjg5NS1kOWNjLTY2NDAtOGNkMy02ODVlYWI2ZjhlNmQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEMxNzI3RjExM0RDMTFFNkI1QTZCNkNGRUVGNEVBMDEiLz4gPC9yZGY6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";
var imageTypeDefaultLinkImage = "image/png";






var paramToObjct = function () {
    var _search = window.location.search.substring(1);
    if(_search == null || _search == ""){
        return null;
    }
    var object = JSON.parse('{"' + decodeURI(_search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    return object;
};



var urlHash = function () {
    var _search = window.location;
    if(_search.hash == null || _search.hash == ""){
        return null;
    }
    return _search.hash;
};

var arrayToObjct = function (obj) {
    var str = [];
    $.each( obj, function( key, value ) {
        str.push(key+"="+value);
    });
    return str.join("&");
};

$(window).ready(function() {
    if(isMobile.any()) {
        //alert("This is a Mobile Device");
    }

    subjectId =$('[name="subjectId"]').val() ;
    if(subjectId == "0")
    {
        $('[name="subject"]').prop('disabled', false) ;
    }
    else
    {
        $('[name="subject"]').prop('disabled', true) ;
    }
    $('[name="subjectId"]').on('change',function(e){
        subjectId = $( this ).val() ;
        if(subjectId == "0"){$('[name="subject"]').prop('disabled', false) ;
        }
        else
        {
            $('[name="subject"]').prop('disabled', true) ;
        }
    }) ;
});

function tinymce_init(tinymce_selector_var) {
    var tinymce_selector = tinymce_selector_var;
    var tinymce_options = {selector:tinymce_selector,
        inline: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons template paste textcolor colorpicker textpattern imagetools"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        toolbar2: "print preview media | forecolor backcolor emoticons",
        image_advtab: true,
        templates: [
            {title: 'Test template 1', content: 'Test 1'},
            {title: 'Test template 2', content: 'Test 2'}]

        //,toolbar3: "mybutton",setup: function(editor) {editor.addButton('mybutton', {text: 'My button',
        //icon: false,onclick: function() {editor.insertContent('Main button');}});}
    };
    tinymce.init(tinymce_options);
}

$(window).load(function() {
    $('#loader-wrapper').fadeOut();
    $.material.init();
    //tinymce_init('textarea');

    //var textarea_timer = setInterval(function() {/* code here */}, 1 * 1000);
    //clearInterval(textarea_timer);
});
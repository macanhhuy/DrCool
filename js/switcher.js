if($.cookie("css")) {
   $("link.color").attr("href",$.cookie("css"));
}
$(document).ready(function() {	
      $("#switcher a").click(function() { 
         $("link.color").attr("href",$(this).attr('rel'));
         $.cookie("css",$(this).attr('rel'), {expires: 365, path: '/'});
         return false;
      });
   });

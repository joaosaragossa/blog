if(document.getElementById("page-header"))var pageHeader=document.getElementById("page-header");if(document.getElementById("post-header"))var postHeader=document.getElementById("post-header");if(document.getElementById("tags-header"))var tagHeader=document.getElementById("tags-header");if(pageHeader&&setInterval(function(){pageHeader.style.height=window.innerHeight+"px"},0),postHeader&&setInterval(function(){postHeader.style.height=window.innerHeight+"px"},0),tagHeader&&setInterval(function(){tagHeader.style.height=window.innerHeight+"px"},0),document.getElementById("post-list")){var posts=document.getElementById("post-list").getElementsByTagName("li");setInterval(function(){for(var a=0;a<posts.length;a++)posts[a].style.height=posts[a].clientWidth+"px"},0)}window.innerWidth>960&&(window.onscroll=function(){var a=8;pageHeader&&(pageHeader.style.backgroundPosition=-window.pageXOffset/a+"px "+-window.pageYOffset/a+"px"),postHeader&&(postHeader.style.backgroundPosition=-window.pageXOffset/a+"px "+-window.pageYOffset/a+"px"),tagHeader&&(tagHeader.style.backgroundPosition=-window.pageXOffset/a+"px "+-window.pageYOffset/a+"px")});
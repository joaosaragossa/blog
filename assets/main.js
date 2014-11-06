// Get headers

  if (document.getElementById('page-header')) {
      
    var pageHeader = document.getElementById('page-header');
  }

  if(document.getElementById('post-header')) {

    var postHeader = document.getElementById('post-header');
  }

  if(document.getElementById('tags-header')) {

    var tagHeader = document.getElementById('tags-header');
  }

// Page header height resize

  if (pageHeader) {
    setInterval(function()
    {
      pageHeader.style.height = window.innerHeight + "px";
    },0);
  }

// Post header height resize

  if (postHeader){
    setInterval(function()
    {
      postHeader.style.height = window.innerHeight + "px";
    },0);
  }

// Tag header height resize

  if (tagHeader){
    setInterval(function()
    {
      tagHeader.style.height = window.innerHeight + "px";
    },0);
  }

// Post resize li

  if (document.getElementById('post-list')) {

    var posts = document.getElementById('post-list').getElementsByTagName('li');
    
    setInterval(function() {

      for (var i = 0; i < posts.length; i++) {
        
        posts[i].style.height = posts[i].clientWidth + "px";
      }
    },0);
  }

// Fuid behavior

  if (window.innerWidth > 960) {

    window.onscroll = function() {
      var speed = 8.0;
      if (pageHeader) {

        pageHeader.style.backgroundPosition = (-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px";
      }
      if (postHeader) {

        postHeader.style.backgroundPosition = (-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px";
      }
      if (tagHeader) {

        tagHeader.style.backgroundPosition = (-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px";
      }
    }
  }
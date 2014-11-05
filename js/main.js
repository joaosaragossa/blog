// Get headers

  if (document.getElementById('page-header')) {
      
    var header = document.getElementById('page-header');
  }
  else if(document.getElementById('post-header')) {

    var header = document.getElementById('post-header');
  }
  else if(document.getElementById('tags-header')) {

    var header = document.getElementById('tags-header');
  }

// Header height resize

  if (header) {
    setInterval(function()
    {
      header.style.height = window.innerHeight + "px";
    },0);
  }

// Post header height resize

  if (header){
    setInterval(function()
    {
      header.style.height = window.innerHeight + "px";
    },0);
  }

// Post resize li

  if (document.getElementById('post-list').getElementsByTagName('li')) {

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
    header.style.backgroundPosition = (-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px";

    console.log(window.innerWidth);
    }
  }
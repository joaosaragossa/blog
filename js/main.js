window.onload = function()
{
  // Header height resize

  var header = document.getElementById('page-header');
  
  if (header){
    setInterval(function()
    {
      header.style.height = window.innerHeight + "px";
    },0);

  };

  // Post header height resize

  var postHeader = document.getElementById('post-header');
  
  if (postHeader){
    setInterval(function()
    {
      postHeader.style.height = window.innerHeight + "px";
    },0);

  };

  // Post list items height resize

  var posts = document.getElementById('post-list').getElementsByTagName('li');

  if (posts){
    setInterval(function()
    {
      for (var i = 0; i < posts.length; i++) 
      {
        posts[i].style.height = posts[i].clientWidth + "px";
      }
    },0);
  };
}
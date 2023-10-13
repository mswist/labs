// Path: script.js
// On load make the page 100% on mobile (hide address bar)
window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
      // Hide the address bar!
      window.scrollTo(0, 1);
    }, 0);
  });
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  });
});

function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

//document.addEventListener('DOMContentLoaded', () => {
//  const savedPreference = localStorage.getItem('darkMode');
//  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//  if (savedPreference === 'enabled' || (!savedPreference && systemPrefersDark)) {
//    document.body.classList.add('dark-mode');
//  } else {
//    document.body.classList.remove('dark-mode');
//  }
//});

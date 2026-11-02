(function(){
  var root=document.documentElement, btn=document.getElementById('theme');
  var mq=window.matchMedia('(prefers-color-scheme: dark)');
  function current(){
    var t=root.getAttribute('data-theme');
    return t||(mq.matches?'dark':'light');
  }
  function paint(){
    var d=current()==='dark';
    btn.textContent=d?'☀️':'🌙';
    btn.setAttribute('aria-label',d?'Switch to light mode':'Switch to dark mode');
  }
  try{var s=localStorage.getItem('theme'); if(s==='dark'||s==='light') root.setAttribute('data-theme',s);}catch(e){}
  paint();
  btn.addEventListener('click',function(){
    var n=current()==='dark'?'light':'dark';
    root.setAttribute('data-theme',n);
    try{localStorage.setItem('theme',n);}catch(e){}
    paint();
  });
  mq.addEventListener&&mq.addEventListener('change',paint);
  document.getElementById('y').textContent=new Date().getFullYear();
})();
 
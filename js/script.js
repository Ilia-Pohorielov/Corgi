window.addEventListener('DOMContentLoaded', function() {
    var nodes = document.querySelectorAll('.header-menu .hamburger');
    var text = document.querySelectorAll('.box .description p');
    [].forEach.call(nodes, function(a) {
        a.addEventListener('click', function() {
            [].forEach.call(document.querySelectorAll('.header-menu'), function (d) {
                d.classList.toggle("open")
        });
      });
    });
    [].forEach.call(text, function (s) {
        var size, obj;
        obj = s.innerHTML;
        size = 100;
        if (obj.length > size){
            obj = obj.slice(0,100);
        }
        s.innerHTML = obj + '...';
    });
});

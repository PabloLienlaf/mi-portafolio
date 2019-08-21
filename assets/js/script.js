$(function(){
  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var num = this.hash;

      $("html, body").animate({
        scrollTop: $(num).offset().top
      }, 800, function(){
        window.location.hash = num;
      });
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

});

$(document).ready(function(){

  $('#botao-cadastrar').click(function(){
    $('#form-cadastrar').slideToggle("slow")
    $('#section-login').slideToggle("slow")
    $('#botao-cadastrar').hide()
  });
  
  $('#botao-logar').click(function(){
    $('#form-cadastrar').slideToggle("slow")
    $('#section-login').slideToggle("slow")
    $('#botao-cadastrar').show()
  });

});
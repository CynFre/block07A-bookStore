$('input[name="star"]').on('change',function(){
    $('.star-label').removeClass('selected');
    $('.star-label[for=star'+$(this).val()+']').addClass('selected');
  })
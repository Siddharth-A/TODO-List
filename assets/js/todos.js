
// checkoff To-Do's by simply clicking
//$('li').click (function() {------------this does not apply to future elements added
$('ul').on('click','li',function() {
		$(this).toggleClass('checkoff');
	}
);
//delete To-Do's by clicking on X
//$('span').click(function(e){------------this does not apply to future elements added
$('ul').on('click','span',function(e){
		e.stopPropagation();
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
	}
);

//1)add new elements to list 2)clear text box once list appended
$('#textbox').on('keypress', function(x){
	if (x.keyCode === 13){
		var n = $('#textbox').val();
		$('ul').append('<li ><span><i class="fa fa-trash"></i></span>' + n + '</li>');
		$(this).val('');

	}

});

$('.fa-plus').on("click",function (){
	$('#textbox').fadeToggle(100);

})


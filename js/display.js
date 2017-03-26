function display(){
	 $('body').on('click', 'a', function() {
    var id = $(this).attr('id');
    console.log(id); 
});
}
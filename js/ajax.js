(function($) {
	$(function() {
		var 
		    btnsub = $('btnsub');


		// console.log(adr);
		// btnsub.click(function () {
		// 	var send = {'pic':pic,'name':name,'sex':sex,'age':age,'ID':ID,'adr':adr,'level':level,'type':type,'more':more}
		// 	$.post('member.php',send,function (data){

			btnsub.bind('click',function () {
		var pic = $('#pic'),
		    name = $('#name').val(),
		    sex  = $('#sex').val(),
		    age  = $('#age').val(),
		    ID   = $('#ID').val(),
		    adr  = $('#adr').val(),
		    level = $('#level').val(),
		    type = $('#type').val(),
		    btnsub = $('#btnsub').val(),
		    more = $('#more').val();

		    console.log(type);

		    $.ajax({
		    	url:"http://localhost/section2/FBMS/member.php",
		    	type:"post",
		    	dataType:"json",
		    	data:"pic ="+pic+"&name="+name+"&sex="+sex+"&age="+age+"&ID="+ID+"&adr="+adr+"&level="+level+"&type="+type+"&more="+more,   
		    	timeout:5000,
		    	error:function() {
		    		areat(1)
		    	},
		    	success:function (){

		    	}
		    })
			})

	})
})(jQuery)







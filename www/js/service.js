angular.module('kurukshetra')
.factory('user', [function(){
	var winners = [];
	return { event_type :"" , event_name : "" , round : "" ,place : "" , participant_type : "" ,qr : "" , count : "" , qr3 : "" , qr4:"" , qr5:"" , qr6 : "" , 
	
			addwinner : function(index){
				winners[index] = {event_type : event_type , event_name : event_name , round : round ,place : place , participant_type : participant_type ,qr : qr}
			}};

}])
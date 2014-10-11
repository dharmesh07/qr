function submit(){
    var postData = $(this).serialize();
    console.log(postData);
    $.ajax({
        type: 'POST',
        data: postData,
        dataType: 'jsonp',
        url: 'http:techteam.kurukshetra.org.in/qr.php',
        success: function(data){
            console.log(data);
            alert('Your comment was successfully added');
        },
        error: function(){
            console.log(data);
            alert('There was an error adding your comment');
        }
    });
    
    return false;
};
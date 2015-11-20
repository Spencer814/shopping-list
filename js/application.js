$(document).ready(function() {

    //add Item
    $('#add').click(function() {
        if($('input#item').val().trim().length == 0) {
            // Alert("Please enter an item");
            $('#error').show();
            $('input#item').val("");
        } else {
            $('ul').append('<li class="items"><div class="box"><input type="checkbox" id="check" value="value"></div><span>' + $('input#item').val() +'</span><img class="delete" src="images/delete.png" title="Delete Item"></li>');
            $('input#item').val("");
            $('#error').hide();
        };
    });

//delete list items
    $('#list').on('click', '.delete', function(e){e.preventDefault(); 
        $(this).parent().remove()
    });

//cross off item and check box
    $('#list').on('click', 'li', function(e) {
            var cb = $(this).find('#check')[0];
            if (e.target != cb) cb.checked = !cb.checked;
            $(this).toggleClass('selected', cb.checked);
            $(this).toggleClass('strike')
    });

//date
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var newDate = new Date();

    newDate.setDate(newDate.getDate());    

    $('#date').html(dayNames[newDate.getDay()] + ", " + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());

//sortable list items
    $('#list').sortable();
    $('#list').disableSelection();

    
//show delete button on mouse hover
    $('#list').on('mouseenter', 'li', function(){
        $(this).children('.delete').toggleClass('show');
    });

    $('#list').on('mouseleave', 'li', function(){
        $(this).children('.delete').toggleClass('show');
    });

});

$('button[id^="change_pls_"]').click(function(e){
    var qty_id = '#qty_'+$(this).attr('data-id')
    $.ajax({
        type:'GET',
        url: "{% url 'change_qty' %}",
        data:{key_qty:$(this).attr('data-id')},
        dataType:"json",
        success: function(response){
            $(qty_id).html(response)
        },
        error: function(){
            alert('this is None')
        }
    }
})
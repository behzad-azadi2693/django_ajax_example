$('#ajax_search').keyup(function(e){
        var word = $('#ajax_search').val()
        $.ajax({
        url: "{% url 'df:ajax_search' %}",
        type: 'GET',
        data: {word:$('#ajax_search').val()},
        dataType:'json',
        success: function(response){
            console.log(response)
            $('#search_category').html("")
            for (let i = 0; i < response.datas.length; i++) {
                url = '/search/'+response.datas[i]+'/'+'?text='+word
                $('#search_category').prepend(`
                   <p> <a href=${url}> جستجوی ${word} در دسته بندی ${response.datas[i]} </a> </p>
                `
                )
            }
        },
        
    })
})

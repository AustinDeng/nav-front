$(function() {
    $('.optionBtn').click(function (e) {
        var target = $(e.target)
        var categoryid = target.data('categoryid')
        $('#categoryid').attr('value', categoryid)
    })
    
    $('.cardBtn').click(function (e) {
        var target = $(e.target)
        var cardid = target.data('cardid')
        $('#cardid').attr('value', cardid)
    })
})

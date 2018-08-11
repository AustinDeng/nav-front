$(function() {
    $('.optionBtn').click(function (e) {
        var target = $(e.target)
        var categoryid = target.data('categoryid')
        $('#categoryid').attr('value', categoryid)
    })
    
    $('.cardBtn').click(function (e) {
        var target = $(e.target)
        var optionid = target.data('optionid')
        $('#cardid').attr('value', optionid)
    })
})

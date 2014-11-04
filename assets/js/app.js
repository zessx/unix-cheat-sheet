String.prototype.removeAccents = function() {
    var r = this.toLowerCase();
    r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
    r = r.replace(new RegExp("æ", 'g'),"ae");
    r = r.replace(new RegExp("ç", 'g'),"c");
    r = r.replace(new RegExp("[èéêë]", 'g'),"e");
    r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
    r = r.replace(new RegExp("ñ", 'g'),"n");
    r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
    r = r.replace(new RegExp("œ", 'g'),"oe");
    r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
    r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
    return r;
};

$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().removeAccents().indexOf(arg.removeAccents()) >= 0;
    };
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function searchFor(search) {
    $('#tip').css('opacity', 0);
    if(search != '') {
        $('#tip').css('opacity', 1);
    }
    $('#search').val(search);
    $('#search').data('old', search);
    var terms = search.split(' ').join('):contains(');
    $('#sheet tbody tr').hide();
    $('#sheet tbody td:contains(' + terms + ')').parent().show();
}

$(function() {

    $('#search').on('propertychange keyup input paste', function(event) {
        if(event.which == 27) {
            searchFor('');
        }
        if($(this).data('old') != $(this).val()) {
            searchFor($(this).val());
        }
    });
    searchFor(getParameterByName('s'));

});
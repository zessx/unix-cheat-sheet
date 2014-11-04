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


$(function() {

    $('#search').on('keyup change', function(event) {

        var search = $(this).val();
        var terms = search.split(' ').join('):contains(');

        $('#sheet tr:not(:first-child)').hide();
        $('#sheet td:contains(' + terms + ')').parent().show();

    });

});
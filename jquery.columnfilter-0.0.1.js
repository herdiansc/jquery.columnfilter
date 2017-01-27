/*
 * jQuery Column Filter
 * Copyright 2017, Herdian Sc
 * https://github.com/herdiansc
 *
 * Licensed under the MIT licenses.
 */

/*
 * If you have a table with many columns, you can show/hide several columns
 * This plugin works with localStorage
 * 
 * Still in early development, so be carefull.
 */

(function ( $ ) {
 
    $.fn.columnFilter = function( options ) {
        var settings = $.extend({
            columnCheckboxsContainer: '.column-list',
            localStorageNamespace: 'table.column.',
            headerCell: 'TH'
        }, options );

        var columnList = '';
        var that = this;
        $(that).find('* > tr').each(function(){
            $(this).children().each(function(index){
                if( localStorage.getItem(settings.localStorageNamespace + index) == 'hide' ) {
                    $(this).hide();
                    var checked='';
                } else {
                    $(this).show();
                    var checked='checked';
                }
                if( $(this).context.nodeName == settings.headerCell ) {
                    var checkbox = '<input type="checkbox" '+ checked +'>';
                    columnList = $.fn.columnFilter.format( checkbox, $.trim($(this).text()) );
                    $(settings.columnCheckboxsContainer).append(columnList);
                }
            });
        });
        $(settings.columnCheckboxsContainer+' li div input').bind('click', function(){
            var label = $(this).siblings('label').text();

            var index = $(that).find('thead tr th').filter(function() {
                return $.trim($(this).text()) === label;
            }).index();

            if( !$(this).is(':checked') ) {
                localStorage.setItem(settings.localStorageNamespace + index, 'hide');
                $(that).find('thead').children().each(function(i){
                    $(this).children().eq(index).hide();
                });

                $(that).find('tbody').children().each(function(i){
                    $(this).children().eq(index).hide();
                });
            } else {
                localStorage.setItem(settings.localStorageNamespace + index, 'show');
                $(that).find('thead').children().each(function(i){
                    $(this).children().eq(index).show();
                });

                $(that).find('tbody').children().each(function(i){
                    $(this).children().eq(index).show();
                });
            }
        });
        return;
    };

    $.fn.columnFilter.format = function(checkbox,column) {
        return '<label>' + checkbox + column + '</label>';
    };
 
}( jQuery ));
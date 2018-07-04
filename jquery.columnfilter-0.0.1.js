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
    'use strict';
     
    $.fn.columnFilter = function( options ) {
        var settings = $.extend({
            columnCheckboxsContainer: '.column-list',
            localStorageNamespace: 'table.column.',
            headerCell: 'TH'
        }, options );

        var columnList = '';
        var that = this;
        var checked='';
        $(that).find('* > tr').each(function(){
            // Handle empty state row
            // We can say "Data not found" as empty state row
            if ($(this).children().length > 1) {
                $(this).children().each(function(index){
                    if( localStorage.getItem(settings.localStorageNamespace + index) == 'hide' ) {
                        $(this).hide();
                        checked='';
                    } else {
                        $(this).show();
                        checked='checked';
                    }
                    if( $(this).context.nodeName == settings.headerCell ) {
                        var label = $.trim($(this).text());
                        var checkbox = '<input type="checkbox" '+ checked +' data-label="'+ label +'">';
                        columnList = $.fn.columnFilter.format( checkbox, label );
                        $(settings.columnCheckboxsContainer).append(columnList);
                    }
                });
            }
        });
        $(settings.columnCheckboxsContainer).find('input').bind('click', function(){
            var label = $(this).attr('data-label');

            var index = $(that).find('thead tr th').filter(function() {
                return $.trim($(this).text()) === label;
            }).index();

            if( !$(this).is(':checked') ) {
                localStorage.setItem(settings.localStorageNamespace + index, 'hide');
                $(that).find('thead').children().each(function(i){
                    $(this).children().eq(index).hide();
                });
                
                // Handle empty state row
                if ($(that).find('tbody').children().children().length > 1 && $(that).find('thead').children().children().length > 1) {
                    $(that).find('tbody').children().each(function(i){
                        $(this).children().eq(index).hide();
                    });
                }
            } else {
                localStorage.setItem(settings.localStorageNamespace + index, 'show');
                $(that).find('thead').children().each(function(i){
                    $(this).children().eq(index).show();
                });
                
                // Handle empty state row
                if ($(that).find('tbody').children().children().length > 1 && $(that).find('thead').children().children().length > 1) {
                    $(that).find('tbody').children().each(function(i){
                        $(this).children().eq(index).show();
                    });
                }
            }
        });
        return;
    };

    $.fn.columnFilter.format = function(checkbox,column) {
        return checkbox + '<label>' + column + '</label>';
    }; 
}( jQuery ));

$(function () {
    'use strict';

var defaultFrom = mymoments().subtract(30, 'days').format('L'),
        defaultTo = mymoments().format('L');
    // initialize bootstrap date picker and set the to and from dates
    $('.fromDate').datepicker({
      todayBtn: "linked",
      autoclose: true,
      todayHighlight: true
    }).datepicker('update', defaultFrom);

    $('.toDate').datepicker({
      todayBtn: "linked",
      autoclose: true,
      todayHighlight: true
    }).datepicker('update', defaultTo);

    // initialize bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip({'trigger': 'click hover'});
});

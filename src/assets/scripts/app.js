$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').removeClass('reset-margin');
    $('#sidebarCollapse').attr('data-toggle', 'false');
    $('#sidebarShow').addClass('enable');
    $('#sidebar').addClass('hide-nav');
    $('#content').addClass('normalize-padding');
  });
  $('#sidebarShow').on('click', function () {
    if ($('#sidebarCollapse').attr('data-toggle') == 'false') {
      $('#content').removeClass('normalize-padding');
      $('#sidebar').removeClass('hide-nav');
      $('#sidebarShow').removeClass('enable');
      if ($(window).width() <= 768) {
        $('#sidebar').addClass('reset-margin');
      }
    } else {
      $('#sidebar').addClass('reset-margin');
      $('#sidebarShow').removeClass('enable');
    }
  });
});

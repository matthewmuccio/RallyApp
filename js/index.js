(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });  
    // Making logo disppear and reappear on toggle
    $('#nav-toggle').click(function() {
        $('.logo-full').fadeToggle(175);
        $('#body-text').fadeToggle(150);
        $('.home-button').fadeToggle(125);
    });
    
    $('.logo-full').click(function() {
        $('.logo-full').animate({width: "600px"});
        $('.logo-full').animate({width: "400px"});
    });
  }); // end DOM ready
})(jQuery); // end jQuery
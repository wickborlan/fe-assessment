
jQuery(document).ready(function(){
    jQuery("#nav-mobile").html(jQuery("#navbar").html());
    jQuery("#nav-trigger span").click(function(){
        if (jQuery("nav#nav-mobile ul").hasClass("expanded")) {
            jQuery("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            jQuery(this).removeClass("open");
        } else {
            jQuery("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            jQuery(this).addClass("open");
        }
    });
});
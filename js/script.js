jQuery(document).on('click', 'a[href*="#"]', function (t) { 
    if (jQuery(this).is('[href="#"]') || jQuery(this).is('[href="#0"]')) { return };
         if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = jQuery(this.hash); (e = e.length ? e : jQuery("[name=" + this.hash.slice(1) + "]")).length && (t.preventDefault(), jQuery("html, body").animate({
                 scrollTop: e.offset().top }, 400)) } });

            
                 window.addEventListener('sfsi_functions_loaded', function () {
                    if (typeof sfsi_plugin_version == 'function') {
                        sfsi_plugin_version(2.51);
                    }
                });


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
 /*--------------------------------------------------------------------------------------------------*/       
                function sfsi_processfurther(ref) {
        
                    var feed_id = 'YjB1REp6MjFUQWhwcDhqRDE0UzBNSEo5eWVxTVl4SWZ5RElBU1VZVTkwdEhGdU1TWlNvOWhHTUhaT3N0MnNNMm5sZy9kZ1hXdEhyU1A2OE1EbVE2clcxUTY0YWdDR3NWZTFVb2cwQWU0TGVLOXljanFrOE9HWndqT1J0bHRtNmN8MlBpUkYyeDhlWEpMZkRhQWh6akNZWkdKcjQ3dW1jclVIMkRBZWFXSW1wTT0=';
                    var feedtype = 8;
        
                    var email = jQuery(ref).find('input[name="data[Widget][email]"]').val();
        
                    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
                    if ((email != "Enter your email") && (filter.test(email))) {
                        if (feed_id != "") {
        
                            if (feedtype == "8") {
        
                                var url = "https://www.specificfeeds.com/widgets/subscribeWidget/" + feed_id + "/" + feedtype;
        
                                window.open('', "popupwindow", "scrollbars=yes,width=1080,height=760");
        
                                ref.action = url;
        
                                ref.target = "popupwindow";
        
                                return true;
        
                            } else {
        
                                return false
        
                            }
                        }
                    } else {
        
                        alert("Please enter email address");
        
                        jQuery(ref).find('input[name="data[Widget][email]"]').focus();
        
                        return false;
        
                    }
        
                }


                function oxygenVSBInitTabs(element) {
                    if (element !== undefined) {
                        jQuery(element).find('.oxy-tabs-wrapper').addBack('.oxy-tabs-wrapper').each(function (index) {
                            jQuery(this).children('.oxy-tabs-wrapper > div').eq(0).trigger('click');
                        });
                    }
                    else {
                        jQuery('.oxy-tabs-wrapper').each(function (index) {
                            jQuery(this).children('.oxy-tabs-wrapper > div').eq(0).trigger('click');
                        });
                    }
                }
        
                jQuery(document).ready(function () {
                    let event = new Event('oxygenVSBInitTabsJs');
                    document.dispatchEvent(event);
                });
        
                document.addEventListener("oxygenVSBInitTabsJs", function () {
                    oxygenVSBInitTabs();
                }, false);
        
                // handle clicks on tabs  
                jQuery("body").on('click', '.oxy-tabs-wrapper > div', function (e) {
        
                    /* a tab or an element that is a child of a tab has been clicked. prevent any default behavior */
                    //e.preventDefault();
        
                    /* which tab has been clicked? (e.target might be a child of the tab.) */
                    clicked_tab = jQuery(e.target).closest('.oxy-tabs-wrapper > div');
                    index = clicked_tab.index();
        
                    /* which tabs-wrapper is this tab inside? */
                    tabs_wrapper = jQuery(e.target).closest('.oxy-tabs-wrapper');
        
                    /* what class dp we use to signify an active tob? */
                    class_for_active_tab = tabs_wrapper.attr('data-oxy-tabs-active-tab-class');
        
                    /* make all the other tabs in this tabs-wrapper inactive */
                    jQuery(tabs_wrapper).children('.oxy-tabs-wrapper > div').removeClass(class_for_active_tab);
        
                    /* make the clicked tab the active tab */
                    jQuery(tabs_wrapper).children('.oxy-tabs-wrapper > div').eq(index).addClass(class_for_active_tab);
        
                    /* which tabs-contents-wrapper is used by these tabs? */
                    tabs_contents_wrapper_id = tabs_wrapper.attr('data-oxy-tabs-contents-wrapper');
        
                    /* try to grab the correct content wrapper, in case of duplicated ID's */
                    $content_wrapper = jQuery(tabs_wrapper).next();
                    if ($content_wrapper.attr("id") != tabs_contents_wrapper_id) $content_wrapper = jQuery('#' + tabs_contents_wrapper_id);
        
                    $content_tabs = $content_wrapper.children("div");
        
                    /* hide all of the content */
                    $content_tabs.addClass('oxy-tabs-contents-content-hidden');
        
                    /* unhide the content corresponding to the active tab*/
                    $content_tabs.eq(index).removeClass('oxy-tabs-contents-content-hidden');
        
                });

   // Initialize Oxygen Modals
   jQuery(document).ready(function () {

    function showModal(modal) {
        var $modal = jQuery(modal);
        $modal.addClass("live");
        var modalId = $modal[0].querySelector('.ct-modal').id;

        // Check if this modal can be shown according to settings and last shown time
        // Current and last time in milliseconds
        var currentTime = new Date().getTime();
        var lastShownTime = localStorage && localStorage['oxy-' + modalId + '-last-shown-time'] ? JSON.parse(localStorage['oxy-' + modalId + '-last-shown-time']) : false;
        // manual triggers aren't affected by last shown time
        if ($modal.data('trigger') != 'user_clicks_element') {
            switch ($modal.data('open-again')) {
                case 'never_show_again':
                    // if it was shown at least once, don't show it again
                    if (lastShownTime !== false) return;
                    break;
                case 'show_again_after':
                    var settingDays = parseInt($modal.data('open-again-after-days'));
                    var actualDays = (currentTime - lastShownTime) / (60 * 60 * 24 * 1000);
                    if (actualDays < settingDays) return;
                    break;
                default:
                    //always show
                    break;
            }
        }
        // save current time as last shown time
        if (localStorage) localStorage['oxy-' + modalId + '-last-shown-time'] = JSON.stringify(currentTime);

        // trick to make jQuery fadeIn with flex
        $modal.css("display", "flex");
        $modal.hide();
        // trick to force AOS trigger on elements inside the modal
        $modal.find(".aos-animate").removeClass("aos-animate").addClass("aos-animate-disabled");

        // show the modal
        $modal.fadeIn(250, function () {
            // trick to force AOS trigger on elements inside the modal
            $modal.find(".aos-animate-disabled").removeClass("aos-animate-disabled").addClass("aos-animate");
        });


        if ($modal.data('close-automatically') == 'yes') {
            var time = parseInt($modal.data('close-after-time'));
            if ($modal.data('close-after-time-unit') == 'seconds') {
                time = parseInt(parseFloat($modal.data('close-after-time')) * 1000);
            }
            setTimeout(function () {
                hideModal(modal);
            }, time);
        }

        // close modal automatically after form submit (Non-AJAX)
        if ($modal.data('close-after-form-submit') == 'yes' && $modal.data("trigger") == "after_specified_time") {

            // WPForms
            // WPForms replaces the form with a confirmation message on page refresh
            if ($modal.find(".wpforms-confirmation-container-full").length > 0) {
                setTimeout(function () {
                    hideModal(modal);
                }, 3000);
            }

            // Formidable Forms
            // Formidable Forms replaces the form with a confirmation message on page refresh
            if ($modal.find(".frm_message").length > 0) {
                setTimeout(function () {
                    hideModal(modal);
                }, 3000);
            }

            // Caldera Forms
            // Caldera Forms replaces the form with a confirmation message on page refresh
            if ($modal.find(".caldera-grid .alert-success").length > 0) {
                setTimeout(function () {
                    hideModal(modal);
                }, 3000);
            }

        }
    }

    var hideModal = function (modal) {

        // The function may be called by third party code, without argument, so we must close the first visible modal
        if (typeof modal === 'undefined') {
            var openModals = jQuery(".oxy-modal-backdrop.live");
            if (openModals.length == 0) return;
            modal = openModals[0];
        }

        var $modal = jQuery(modal);
        // refresh any iframe so media embedded this way is stopped
        $modal.find('iframe').each(function (index) {
            this.src = this.src;
        });
        // HTML5 videos can be stopped easily
        $modal.find('video').each(function (index) {
            this.pause();
        });
        // If there are any forms in the modal, reset them
        $modal.find("form").each(function (index) {
            this.reset();
        });

        $modal.fadeOut(400, function () {
            $modal.removeClass("live");
        });
    };

    window.oxyCloseModal = hideModal;

    jQuery(".oxy-modal-backdrop").each(function (index) {

        var modal = this;

        (function (modal) {
            var $modal = jQuery(modal);

            var exitIntentFunction = function (e) {
                if (e.clientY <= 0) {
                    showModal(modal);
                    document.removeEventListener("mouseleave", exitIntentFunction);
                    document.removeEventListener("mouseout", exitIntentFunction);
                }
            }

            switch (jQuery(modal).data("trigger")) {

                case "on_exit_intent":
                    document.addEventListener("mouseleave", exitIntentFunction, false);
                    document.addEventListener("mouseout", exitIntentFunction, false);
                    break;

                case "user_clicks_element":
                    jQuery(jQuery(modal).data('trigger-selector')).click(function (event) {
                        showModal(modal);
                        event.preventDefault();
                    });
                    break;

                case "after_specified_time":
                    var time = parseInt(jQuery(modal).data('trigger-time'));
                    if (jQuery(modal).data('trigger-time-unit') == 'seconds') {
                        time = parseInt(parseFloat(jQuery(modal).data('trigger-time')) * 1000);
                    }
                    setTimeout(function () {
                        showModal(modal);
                    }, time);
                    break;

                case "after_scrolled_amount":
                    window.addEventListener("scroll", function scrollDetection() {
                        var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
                        var docheight = jQuery(document).height();
                        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                        var isScrollUp = false;
                        var oxyPreviousScrollTop = parseInt(jQuery(modal).data('previous_scroll_top'));
                        if (!isNaN(oxyPreviousScrollTop)) {
                            if (oxyPreviousScrollTop > scrollTop) isScrollUp = true;
                        }
                        jQuery(modal).data('previous_scroll_top', scrollTop);
                        var trackLength = docheight - winheight;
                        var pctScrolled = Math.floor(scrollTop / trackLength * 100);
                        if (isNaN(pctScrolled)) pctScrolled = 0;

                        if (
                            (isScrollUp && jQuery(modal).data('trigger_scroll_direction') == 'up') ||
                            (!isScrollUp && jQuery(modal).data('trigger_scroll_direction') == 'down' && pctScrolled >= parseInt(jQuery(modal).data('trigger_scroll_amount')))
                        ) {
                            showModal(modal);
                            window.removeEventListener("scroll", scrollDetection);
                        }
                    }, false);
                    break;
                case "on_scroll_to_element":
                    window.addEventListener("scroll", function scrollDetection() {
                        var $element = jQuery(jQuery(modal).data('scroll_to_selector'));
                        if ($element.length == 0) {
                            window.removeEventListener("scroll", scrollDetection);
                            return;
                        }

                        var top_of_element = $element.offset().top;
                        var bottom_of_element = $element.offset().top + $element.outerHeight();
                        var bottom_of_screen = jQuery(window).scrollTop() + jQuery(window).innerHeight();
                        var top_of_screen = jQuery(window).scrollTop();

                        if ((bottom_of_screen > bottom_of_element - $element.outerHeight() / 2) && (top_of_screen < top_of_element + $element.outerHeight() / 2)) {
                            showModal(modal);
                            window.removeEventListener("scroll", scrollDetection);
                        }
                    }, false);
                    break;
                case "after_number_of_clicks":
                    document.addEventListener("click", function clickDetection() {
                        var number_of_clicks = parseInt(jQuery(modal).data('number_of_clicks'));

                        var clicks_performed = isNaN(parseInt(jQuery(modal).data('clicks_performed'))) ? 1 : parseInt(jQuery(modal).data('clicks_performed')) + 1;

                        jQuery(modal).data('clicks_performed', clicks_performed);

                        if (clicks_performed == number_of_clicks) {
                            showModal(modal);
                            document.removeEventListener("click", clickDetection);
                        }
                    }, false);
                    break;
                case "after_time_inactive":
                    var time = parseInt(jQuery(modal).data('time_inactive'));
                    if (jQuery(modal).data('time-inactive-unit') == 'seconds') {
                        time = parseInt(parseFloat(jQuery(modal).data('time_inactive')) * 1000);
                    }
                    var activityDetected = function () {
                        jQuery(modal).data('millis_idle', 0);
                    };
                    document.addEventListener("click", activityDetected);
                    document.addEventListener("mousemove", activityDetected);
                    document.addEventListener("keypress", activityDetected);
                    document.addEventListener("scroll", activityDetected);

                    var idleInterval = setInterval(function () {
                        var millis_idle = isNaN(parseInt(jQuery(modal).data('millis_idle'))) ? 100 : parseInt(jQuery(modal).data('millis_idle')) + 100;
                        jQuery(modal).data('millis_idle', millis_idle);
                        if (millis_idle > time) {
                            clearInterval(idleInterval);
                            document.removeEventListener("click", activityDetected);
                            document.removeEventListener("mousemove", activityDetected);
                            document.removeEventListener("keypress", activityDetected);
                            document.removeEventListener("scroll", activityDetected);
                            showModal(modal);
                        }
                    }, 100);
                    break;

                case "after_number_of_page_views":
                    var modalId = modal.querySelector('.ct-modal').id;
                    var pageViews = localStorage && localStorage['oxy-' + modalId + '-page-views'] ? parseInt(localStorage['oxy-' + modalId + '-page-views']) : 0;
                    pageViews++;
                    if (localStorage) localStorage['oxy-' + modalId + '-page-views'] = pageViews;
                    if (parseInt(jQuery(modal).data('number_of_page_views')) == pageViews) {
                        if (localStorage) localStorage['oxy-' + modalId + '-page-views'] = 0;
                        showModal(modal);
                    }
                    break;

            }

            // add event handler to close modal automatically after AJAX form submit
            if ($modal.data('close-after-form-submit') == 'yes') {

                // Contact Form 7
                if (typeof wpcf7 !== 'undefined') {
                    $modal.find('div.wpcf7').each(function () {
                        var $form = jQuery(this).find('form');
                        this.addEventListener('wpcf7submit', function (event) {
                            if (event.detail.contactFormId == $form.attr("id")) {
                                setTimeout(function () {
                                    hideModal(modal);
                                }, 3000);
                            }
                        }, false);
                    });
                }

                // Caldera Forms
                document.addEventListener("cf.submission", function (event) {
                    // Pending, Caldera AJAX form submissions aren't working since Oxygen 2.2, see: https://github.com/soflyy/oxygen/issues/1638
                    console.log(event);
                });

                // Ninja Forms
                jQuery(document).on("nfFormSubmitResponse", function (event, response) {
                    // Only close the modal if the event was triggered from a Ninja Form inside the modal
                    if ($modal.find("#nf-form-" + response.id + "-cont").length > 0) {
                        setTimeout(function () {
                            hideModal(modal);
                        }, 3000);
                    }
                });

            }

        })(modal);

    });

    // handle clicks on modal backdrop and on .oxy-close-modal
    jQuery("body").on('click touchend', '.oxy-modal-backdrop, .oxy-close-modal', function (event) {

        var $this = jQuery(this);
        var $target = jQuery(event.target);

        // Click event in the modal div and it's children is propagated to the backdrop
        if (!$target.hasClass('oxy-modal-backdrop') && !$this.hasClass('oxy-close-modal')) {
            event.stopPropagation();
            return;
        }

        if ($target.hasClass('oxy-modal-backdrop') && $this.hasClass('oxy-not-closable')) {
            return;
        }

        if ($this.hasClass('oxy-close-modal')) event.preventDefault();

        var $modal = $this.hasClass('oxy-close-modal') ? $this.closest('.oxy-modal-backdrop') : $this;
        hideModal($modal[0]);
    });

    jQuery(document).keyup(function (e) {
        if (e.key == 'Escape') {
            jQuery(".oxy-modal-backdrop:visible").each(function (index) {
                if (jQuery(this).data("close_on_esc") == 'on') hideModal(this);
            });
        }
    });

});              


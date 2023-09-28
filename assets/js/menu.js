$(document).ready(function() {
    // Get the active tab ID from query parameters or use the default value "Menus"
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams)
    var activeTabId = urlParams.get("category") || "#Menus";
    // Activate the tab based on the stored tab ID
    $('#pills-tabContent').find('.tab-pane').removeClass('show active');
    $(activeTabId).addClass('show active');
  
    // Update the URL with query parameters when a tab is clicked
    $('#pills-tab a').on('click', function (e) {
      var clickedTabId =e.currentTarget.dataset.bsTarget;
      // Update the URL with the activeTabId query parameter
      var newUrl = window.location.pathname + '?category=' + clickedTabId.replace("#", "%23");
      history.pushState(null, null, newUrl);
  
      // Also update localStorage
      var urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams)
      var activeTabId = urlParams.get("category") || "#Menus";
      // Activate the tab based on the stored tab ID
      $('#pills-tabContent').find('.tab-pane').removeClass('show active');
      $(activeTabId).addClass('show active');
    });
  });
  
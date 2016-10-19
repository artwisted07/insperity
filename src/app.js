import jQuery from 'jquery'

//DOCUMENT READY
jQuery(function () {
  var winWidth = window.innerWidth;
  console.log(winWidth)
  if (winWidth > 970) {
    var rightH = jQuery('.right').height();
    jQuery('.left').css({
      'height': rightH
    });
  }
});

//DOWNLOAD E-BOOK FORM LOGIC
console.log("length" + jQuery('form#download').length);
if (jQuery('form#download').length > 0) {
   console.log("From function is live!")
    //UNFOCUS ACTIONS
    //EMAIL FIELD UNFOCUS ACTION
  jQuery('input[name=email]').focusout(function () {
    var valid = validateEmail(jQuery(this).val());
    if (jQuery(this).val() === "" || valid === false) {
      jQuery(this).next("span.error").show();
    }
    else {
      jQuery(this).next("span.error").hide();
    }
  });
  
  
  //REMAINING FIELD UNFOCUS ACTIONS
  jQuery('input[name=firstName],[name=lastName],[name=company],[name=phone]').focusout(function () {
    if (jQuery(this).val() === "") {
      jQuery(this).next("span.error").show();
    }
    else {
      jQuery(this).next("span.error").hide();
    }
  });
  //FUNCTION TO VALIDATE EMAIL VALUE 
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  //DOWNLOAD BUTTON CLICK ACTION
  jQuery('a.download').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    var email = jQuery('input[name=email]');
    var firstN = jQuery('input[name=firstName]');
    var lastN = jQuery('input[name=lastName]');
    var company = jQuery('input[name=company]');
    var phone = jQuery('input[name=phone]');
    
    if (validateEmail(email.val()) && firstN.val() !== "" && company.val() !== "" && lastN.val() !== "" && phone.val() !== "") {
      // All Fields are valid, lets let them view the results and download the PDF
      window.open('http://isidrogallegos.com/insperity/wp-content/uploads/2016/10/Insperity-hr-outsourcing-a-step-by-step-guide-to-professional-employer-organizations.pdf');
      jQuery('form#download').slideUp("fast", function () {
        var result = "";
        result += '<p>First Name: <strong>' + firstN.val() + '</strong></p>' + '<p>Last Name: <strong>' + lastN.val() + '</strong></p>' + '<p>Company: <strong>' + company.val() + '</strong></p>' + '<p>Phone: <strong>' + phone.val() + '</strong></p>' + '<p>Email: <strong><a href="mailTo:' + email.val() + '">' + email.val() + '</a></strong></p>'
        jQuery('.downloadResults').html(result).slideDown("fast");
      });
    }
    else if (email.val() === "" && firstN.val() === "" && lastN.val() === "" && company.val() === "" && phone.val() === "") {
      
      // display errors if the user hits the download button without filling fields
      email.next("span.error").show();
      firstN.next("span.error").show();
      lastN.next("span.error").show()
      company.next("span.error").show()
      phone.next("span.error").show()
      
    }
    else if (validateEmail(email.val()) === false) {
      email.next("span.error").show();
    }
    else if (firstN.val() === "") {
      firstN.next("span.error").show();
    }
    else if (lastN.val() === "") {
      lastN.next("span.error").show();
    }
    else if (company.val() === "") {
      company.next("span.error").show();
    }
    else if (phone.val() === "") {
      phone.next("span.error").show();
    }
  });
}
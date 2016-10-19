(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//DOCUMENT READY
(0, _jquery2.default)(function () {
  var winWidth = window.innerWidth;
  console.log(winWidth);
  if (winWidth > 970) {
    var rightH = (0, _jquery2.default)('.right').height();
    (0, _jquery2.default)('.left').css({
      'height': rightH
    });
  }
});

//DOWNLOAD E-BOOK FORM LOGIC
console.log("length" + (0, _jquery2.default)('form#download').length);
if ((0, _jquery2.default)('form#download').length > 0) {
  (function () {
    //FUNCTION TO VALIDATE EMAIL VALUE 
    var validateEmail = function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

    //DOWNLOAD BUTTON CLICK ACTION


    console.log("From function is live!");
    //UNFOCUS ACTIONS
    //EMAIL FIELD UNFOCUS ACTION
    (0, _jquery2.default)('input[name=email]').focusout(function () {
      var valid = validateEmail((0, _jquery2.default)(this).val());
      if ((0, _jquery2.default)(this).val() === "" || valid === false) {
        (0, _jquery2.default)(this).next("span.error").show();
      } else {
        (0, _jquery2.default)(this).next("span.error").hide();
      }
    });

    //REMAINING FIELD UNFOCUS ACTIONS
    (0, _jquery2.default)('input[name=firstName],[name=lastName],[name=company],[name=phone]').focusout(function () {
      if ((0, _jquery2.default)(this).val() === "") {
        (0, _jquery2.default)(this).next("span.error").show();
      } else {
        (0, _jquery2.default)(this).next("span.error").hide();
      }
    });(0, _jquery2.default)('a.download').on('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      var email = (0, _jquery2.default)('input[name=email]');
      var firstN = (0, _jquery2.default)('input[name=firstName]');
      var lastN = (0, _jquery2.default)('input[name=lastName]');
      var company = (0, _jquery2.default)('input[name=company]');
      var phone = (0, _jquery2.default)('input[name=phone]');

      if (validateEmail(email.val()) && firstN.val() !== "" && company.val() !== "" && lastN.val() !== "" && phone.val() !== "") {
        // All Fields are valid, lets let them view the results and download the PDF
        window.open('http://isidrogallegos.com/insperity/wp-content/uploads/2016/10/Insperity-hr-outsourcing-a-step-by-step-guide-to-professional-employer-organizations.pdf');
        (0, _jquery2.default)('form#download').slideUp("fast", function () {
          var result = "";
          result += '<p>First Name: <strong>' + firstN.val() + '</strong></p>' + '<p>Last Name: <strong>' + lastN.val() + '</strong></p>' + '<p>Company: <strong>' + company.val() + '</strong></p>' + '<p>Phone: <strong>' + phone.val() + '</strong></p>' + '<p>Email: <strong><a href="mailTo:' + email.val() + '">' + email.val() + '</a></strong></p>';
          (0, _jquery2.default)('.downloadResults').html(result).slideDown("fast");
        });
      } else if (email.val() === "" && firstN.val() === "" && lastN.val() === "" && company.val() === "" && phone.val() === "") {

        // display errors if the user hits the download button without filling fields
        email.next("span.error").show();
        firstN.next("span.error").show();
        lastN.next("span.error").show();
        company.next("span.error").show();
        phone.next("span.error").show();
      } else if (validateEmail(email.val()) === false) {
        email.next("span.error").show();
      } else if (firstN.val() === "") {
        firstN.next("span.error").show();
      } else if (lastN.val() === "") {
        lastN.next("span.error").show();
      } else if (company.val() === "") {
        company.next("span.error").show();
      } else if (phone.val() === "") {
        phone.next("span.error").show();
      }
    });
  })();
}

},{"jquery":"jquery"}]},{},[1]);

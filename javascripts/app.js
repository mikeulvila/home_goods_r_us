define(["product-loader", "discount-loader"], function(productLoader, discountLoader) {
	console.log("app load");
	console.log("product", productLoader);
	console.log("discount", discountLoader);




// Loads initial product information to page
	var getProdInfo = function (product) {
	require(['hbs!../template/unit_good'], function(unit_template) {
		$("#products").html(unit_template(product));
		});
	};
	productLoader.getJsonData(getProdInfo);

// Not yet functioning. Close maybe?

	$(document).ready(function(e) {
		console.log("hullo");
		$(".department:contains('1')").html("Apparel"); 
	});


});






// We need to figure out how to put an if statement within the HBS template. Maybe it involves helpers. See below.

// Handlebars.registerHelper('ifIsZero', function(value, options) {
//  if(value === 0) {
//    return options.fn(this);
//  }
//  return options.inverse(this);
// });







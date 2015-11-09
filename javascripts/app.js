define(["product-loader", "discount-loader"], function(productLoader, discountLoader) {
	console.log("app load");
	console.log("product", productLoader);
	console.log("discount", discountLoader);

	var getProductInfo = function (response) {
			require(['hbs!../template/unit_good'], function(productTemplate) {
				$("#products").append(productTemplate(response));
			});
		};

	productLoader.getJsonData(getProductInfo);


});






// We need to figure out how to put an if statement within the HBS template. Maybe it involves helpers. See below.

// Handlebars.registerHelper('ifIsZero', function(value, options) {
//  if(value === 0) {
//    return options.fn(this);
//  }
//  return options.inverse(this);
// });







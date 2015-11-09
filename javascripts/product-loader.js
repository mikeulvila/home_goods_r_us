define(["jquery", "data-combiner"], function($, datacombiner) {
	return {
		getJsonData: function(callback) {
			$.ajax({url: "../data/products.json"})
				.done(function (data1) {
					$.ajax({url: "../data/categories.json"}).done(function (data2) {
						callback(datacombiner(data1, data2));
					});
				}); 
  	  	}
	};
});
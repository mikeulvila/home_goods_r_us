define(function() {

	return function (data1, data2) {
		for (var i = 0; i < data1.products.length; i++) {
			category = data1.products[i].category_id;
			data2.categories.forEach(function(categoryObject) {
				if (categoryObject.id === category) {
					data1.products[i].discount_category = categoryObject;
				} 
			});
		}
		return data1;
		
	};

});
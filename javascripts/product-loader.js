define(["jquery"], function($) {
    return {
        getJsonData: function(callback) {
            $.ajax({url: "data/products.json"})
                .done(callback); 
           }
    };
});
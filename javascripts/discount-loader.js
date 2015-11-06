define(["jquery"], function($) {
    return {
        getJsonData: function(callback) {
            $.ajax({url: "data/categories.json"})
                .done(callback); 
           }
    };
});
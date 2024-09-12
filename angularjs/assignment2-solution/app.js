(function() {
    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListAppService', ShoppingListAppService);

    ToBuyController.$inject = ['ShoppingListAppService'];

    function ToBuyController(ShoppingListAppService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListAppService.getToBuyItems();

        toBuyList.buyItem = function(itemIndex) {
            ShoppingListAppService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListAppService'];

    function AlreadyBoughtController(ShoppingListAppService) {
        var alreadyBougthList = this;

        alreadyBougthList.items = ShoppingListAppService.getAlreadyBoughtItems();
    }

    function ShoppingListAppService() {
        var service = this;
        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "cokes", quantity: 2 },
            { name: "beers", quantity: 6 },
            { name: "apples", quantity: 4 },
            { name: "bananas", quantity: 7 }
        ];
        var alreadyBoughtItems = [];

        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];

            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };
    }
})();
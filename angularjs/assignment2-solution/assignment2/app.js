(function() {
    'use strict';

    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
        var listCtrl = this;

        listCtrl.toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 5 },
            { name: "soda", quantity: 2 },
            { name: "chocolates", quantity: 20 },
            { name: "bread", quantity: 1 }
        ];

        listCtrl.boughtItems = [];

        listCtrl.buyItem = function(itemIndex) {
            var item = listCtrl.toBuyItems[itemIndex];
            listCtrl.toBuyItems.splice(itemIndex, 1);
            listCtrl.boughtItems.push(item);
        };
    }
})();

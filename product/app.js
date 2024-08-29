const app = angular.module('productApp', []);

app.controller('ProductController', function($scope, $http) {
    $scope.products = [];
    $scope.newProduct = {};
    $scope.editMode = false;

    // Fetch all products
    $scope.getProducts = function() {
        $http.get('http://localhost:3000/api/products').then(function(response) {
            $scope.products = response.data;
        });
    };

    // Add a new product
    $scope.addProduct = function() {
        $http.post('http://localhost:3000/api/products', $scope.newProduct).then(function(response) {
            $scope.products.push(response.data);
            $scope.newProduct = {};
        });
    };

    // Edit a product
    $scope.editProduct = function(product) {
        $scope.newProduct = angular.copy(product);
        $scope.editMode = true;
    };

    // Update product
    $scope.updateProduct = function() {
        $http.put('http://localhost:3000/api/products/' + $scope.newProduct._id, $scope.newProduct).then(function(response) {
            $scope.getProducts();
            $scope.newProduct = {};
            $scope.editMode = false;
        });
    };

    // Initialize products
    $scope.getProducts();
});

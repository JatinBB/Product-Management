// app.js
angular.module('productApp', [])
  .service('ProductService', ProductService)
  .controller('ProductController', ProductController);

function ProductService() {
  const products = [
  ];

  this.getProducts = function() {
    return products;
  };

  this.addProduct = function(product) {
    product.id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    products.push(product);
  };

  this.updateProduct = function(updatedProduct) {
    const index = products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      products[index] = updatedProduct;
    }
  };

  this.deleteProduct = function(productId) {
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
      products.splice(index, 1);
    }
  };
}

function ProductController($scope, ProductService) {
  $scope.products = ProductService.getProducts();
  $scope.editMode = false;
  $scope.newProduct = {};

  $scope.addProduct = function() {
    if ($scope.newProduct && $scope.newProduct.name && $scope.newProduct.price && $scope.newProduct.rating < 5) {
      ProductService.addProduct($scope.newProduct);
      $scope.newProduct = {};
    }
  };

  $scope.editProduct = function(product) {
    $scope.newProduct = angular.copy(product);
    $scope.editMode = true;
  };

  $scope.updateProduct = function() {
    if ($scope.newProduct && $scope.newProduct.name && $scope.newProduct.price && $scope.newProduct.rating < 5) {
      ProductService.updateProduct($scope.newProduct);
      $scope.newProduct = {};
      $scope.editMode = false;
    }
  };

  $scope.deleteProduct = function(productId) {
    ProductService.deleteProduct(productId);
    if ($scope.editMode && $scope.newProduct.id === productId) {
      $scope.newProduct = {};
      $scope.editMode = false;
    }
  };
}

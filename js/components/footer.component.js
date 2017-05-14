(function () {
  'use strict'

  angular.module('app')
    .component('footer', {
      templateUrl: '/js/templates/footer.html',
      controller: FooterController
    })

  function FooterController() {
    const vm = this

    vm.$onInit = function () {
      console.log("hello")

    }
  }
}())

(function () {
  'use strict'

  angular.module('app')
    .component('press', {
      templateUrl: '/js/templates/press.html',
      controller: PressController
    })

  function PressController() {
    const vm = this

    vm.$onInit = function () {
    }
  }
}())

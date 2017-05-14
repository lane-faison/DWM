(function () {
  'use strict'

  angular.module('app')
    .component('team', {
      templateUrl: '/js/templates/team.html',
      controller: TeamController
    })

  function TeamController() {
    const vm = this

    vm.$onInit = function () {
    }
  }
}())

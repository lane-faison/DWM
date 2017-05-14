(function () {
  'use strict'

  angular.module('app')
    .component('newsletter', {
      templateUrl: '/js/templates/newsletter.html',
      controller: NewsletterController
    })

  function NewsletterController() {
    const vm = this

    vm.$onInit = function () {
    }
  }
}())

(function () {
  'use strict'

  angular.module('app')
    .component('story', {
      templateUrl: '/js/templates/story.html',
      controller: StoryController
    })

  function StoryController() {
    const vm = this

    vm.$onInit = function () {
    }
  }
}())

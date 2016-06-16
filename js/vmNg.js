var vmNg = angular.module("vmNg", []);

vmNg.directive("vmPageDivider", function() {
	return {
		restrict: 'E',
		scope: {
			num: '=',
			step: '=',
			handler: '&func',
		},
		template: "<span ng-show='shownPages'>" +  
			"<a href='javascript:void(0);' ng-show='shownToBegining' ng-click='toBegining()'><< </a>" + 
			"<a href='javascript:void(0);' ng-show='shownBack' ng-click='back()'>< </a>" + 
			
			"<a href='javascript:void(0);' " + 
			"ng-repeat='page in shownPagesArr | orderBy:id:true' ng-click='clickPage(page)' " + 
			"class='page' ng-class='{page_active:page.active}'>{{page.id}}</a>" + 
			
			"<a href='javascript:void(0);' ng-show='shownForward' ng-click='forward()'> ></a>" + 
			"</span>",
		// replace: true,
		link: function(scope, element, attrs) {
			//console.log("scope", scope);
			//console.log("attrs", attrs);

			scope.shownPages = true;
			scope.shownForward = false;
			scope.shownBack = false;
			scope.shownToBegining = false;
			var max = parseInt(attrs.max);

			function getActiveId() {
				var activeId;
				for (var i = 0; i < scope.pagesArr.length; i++) {
					if (scope.pagesArr[i].active) {
						activeId = i;
						break;
					}
				}	
				return activeId;
			}

			scope.firstLoad = true;
			scope.$watchGroup(['num', 'step'], function(arr) {
				var num = arr[0];
				var step = arr[1];
				
				scope.pagesAmount = Math.ceil(num / step);
				
				if (scope.pagesAmount === 1) {
					scope.shownPages = false;
				} else {
					scope.shownPages = true;

					scope.pagesArr = [];
					for (var i = 0; i < scope.pagesAmount; i++) {
						scope.pagesArr.push({id: i + 1, active: false});	
					}

					if (num > 0) {
						scope.pagesArr[scope.pagesArr.length - 1].active = true;
						scope.firstLoad = false;
					}
					if (scope.pagesAmount > max) {
						var activeId = getActiveId();
						scope.shownPagesArr = scope.pagesArr.slice(activeId - max + 1, activeId + 1);
					} else {
						scope.shownPagesArr = scope.pagesArr;
					}
				}

			}); 
			scope.clickPage = function(page) {
				for (var i = 0; i < scope.pagesArr.length; i++) {
					scope.pagesArr[i].active = false;
				}
				page.active = true;
				scope.handler({num: page.id});
			}
			scope.toBegining = function() {
				//var firstElId = scope.shownPagesArr[0].id;
				var startInx = scope.pagesArr.length - max;
				var endInx = scope.pagesArr.length;
				//console.log('startInx', startInx);
				//console.log('endInx', endInx);

				scope.shownPagesArr = scope.pagesArr.slice(startInx, endInx);

				var lastPageNum = scope.pagesArr.length - 1;
				scope.clickPage(scope.pagesArr[lastPageNum]);
			}
			scope.forward = function() {
				var firstElId = scope.shownPagesArr[0].id;
				var startInx = firstElId - 2;
				var endInx = firstElId + max - 2;
				//console.log('startInx', startInx);
				//console.log('endInx', endInx);

				scope.shownPagesArr = scope.pagesArr.slice(startInx, endInx);
			}

			scope.back = function() {
				//var lastElId = scope.shownPagesArr[scope.shownPagesArr.length - 1].id;
				var lastElId = scope.shownPagesArr[0].id;
				var startInx = lastElId;
				var endInx = lastElId + max;
				//console.log('startInx', startInx);
				//console.log('endInx', endInx);

				scope.shownPagesArr = scope.pagesArr.slice(startInx, endInx);
			}
			scope.$watch('shownPagesArr', function(shownPagesArr) {
				scope.shownForward = true;
				scope.shownBack = true;
				scope.shownToBegining = true;
				if (shownPagesArr && shownPagesArr.length > 0) {
					if (shownPagesArr[0].id === 1) {
						scope.shownForward = false;
					}
					if (shownPagesArr[shownPagesArr.length -1].id === scope.pagesAmount) {
						scope.shownBack = false;
						scope.shownToBegining = false;
					}						
				}
			});
		},
	}
});
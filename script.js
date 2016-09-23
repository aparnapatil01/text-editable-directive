var editableDirective = angular.module('directive.editable', []);
editableDirective.directive('editable', function(){
	return{
		restrict:'A',
		scope:{
			model:'=',
			label:'@text',
			save:'&',
			id:'@'
		},
		transclude:true,
		template:`
		<div id="main-container"> 
			<u><span class="editable-text" ng-transclude></span></u> 
			<div ng-show="editForm" id="inner-container"> 
				<form name="form" class="form-style" novalidate> 
					<div class="form-group"> 
						<label for="{{id}}">{{label}}</label> 
						<input type="text" ng-model="editText" id="{{id}}" class="form-control" name="editInput" ng-maxlength="15" ng-minlength="3" required> 
						<span class="text-danger" ng-show="form.editInput.$error.required">value required!</span> 
						<span class="text-danger" ng-show="form.editInput.$error.minlength || form.editInput.$error.maxlength">value must be in range 3-15</span> 
					</div> 
					<div> 
						<button id="save" class="btn btn-primary" ng-disabled="!form.$valid" ng-click="saveText();save({editedText:editText})">Save</button> 
						<button id="cancel" class="btn btn-default" ng-click="cancel()">Cancel</button> 
					</div> 
				</form> 
			</div> 
		</div> 
		`,
		link:function(scope, element, attrs){
			scope.editForm=false;
			// Get Element for adding styles
			var spanElement = element.find('span'),
			    form = element.find('form'),
			    input = element.find('input');
	        
			// Add class
		  	form.addClass(attrs.formStyle);
		  
			spanElement.bind('click', function(){
				// Auto Focus
				input[0].focus();
				
				scope.$apply(scope.editForm=true);
				scope.editText = angular.copy(scope.model);
			});
			
			scope.saveText = function(){
				scope.model = angular.copy(scope.editText);
				scope.editForm = false;
			};

			scope.cancel = function(){
				scope.editForm=false;	
			};
		}
	}
});
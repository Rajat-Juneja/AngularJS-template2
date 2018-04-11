const app = angular.module('myApp',[]);

app.controller("myctrl",($scope,$interval)=>{
    $interval(()=>{
        if(window.pageYOffset>10){
         $scope.belo=true;
        //  console.log(window.pageYOffset);   
        }
        else{
            $scope.belo=false;
        }
    },1);

});
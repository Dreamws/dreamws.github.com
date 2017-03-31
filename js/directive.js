/**
 * Created by Administrator on 2017/3/31.
 */
angular.module('app.directive',[],['$compileProvider',function(compile){
    /*   头部   */
    compile.directive('ngHeader',function(){
        return {
            restrict:'EA',
            templateUrl:'./templates/header.html',
            link:function(scope,ele,attr){

            }
        }
    });
    /*   banner   */
    compile.directive('ngBanner',function(){
        return {
            restrict:'EA',
            templateUrl:'./templates/banner.html',
            link:function(scope,ele,attr){
                var mySwiper=new Swiper('.swiper-container',{
                    pagination:'.swiper-pagination',
                    loop:true,
                    autoplay:2000
                });
            }
        }
    });
    /*   main   */
    compile.directive('ngMain',function(){
        return {
            restrict:'EA',
            templateUrl:'./templates/main.html',
            link:function(scope,ele,attr){

            }
        }
    });
    /*   footer   */
    compile.directive('ngFooter',function(){
        return {
            restrict:'EA',
            templateUrl:'./templates/footer.html',
            link:function(scope,ele,attr){

            }
        }
    })
}]);
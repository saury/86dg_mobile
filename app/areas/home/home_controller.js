angular.module('APT.home.controller', [])
  .controller('HomeCtrl', ['$scope', '$state','$ionicSlideBoxDelegate','$window', function ($scope, $state,$ionicSlideBoxDelegate,$window) {

    getHeaderSlideData();
    getCategoryData();
    // headerChangeColor();
    countdown();
    goTop();

    // 监听视图完全加载之后的事件
    // $scope.$on('$ionicView.afterEnter', function (e) {
    //   initHeaderSlide();
    //   initToutiaoSlide();
    // });


    // 头部滚动条数据
    function getHeaderSlideData(){
      $scope.headerSlideData=[
        {
          alt:"alt1",
          src:"images/home/home-headerSlide-1.jpg",
          href:"http://www.baidu.com/1"
        },
        {
          alt:"alt2",
          src:"images/home/home-headerSlide-2.jpg",
          href:"http://www.baidu.com/2"
        },
        {
          alt:"alt3",
          src:"images/home/home-headerSlide-3.jpg",
          href:"http://www.baidu.com/3"
        },
        {
          alt:"alt4",
          src:"images/home/home-headerSlide-4.jpg",
          href:"http://www.baidu.com/4"
        }
      ];
    }

    // 10 category data
    function getCategoryData(){
      $scope.categoryData=[
        {
          description:"女装",
          order:"0"
        },
        {
          description:"女鞋",
          order:"1"
        },
        {
          description:"女包",
          order:"2"
        },
        {
          description:"饰品",
          order:"3"
        },
        {
          description:"配饰",
          order:"4"
        },
        {
          description:"男装",
          order:"5"
        },
        {
          description:"男鞋",
          order:"6"
        },
        {
          description:"男包",
          order:"7"
        },
        {
          description:"数码",
          order:"1"
        },
        {
          description:"小家电",
          order:"2"
        }
      ];
    }


    // 改变头部颜色
    // function headerChangeColor(){
    //   var bg=$window.document.getElementById('home-content');
    //   var nowOpacity=0;
    //   bg.onscroll=function(event){
    //     if(this.scrollTop/250<.85){
    //       nowOpacity=this.scrollTop/250;
    //     }
    //     document.getElementById("headerBar-bg").style.opacity=nowOpacity;
    //   }
    // }


    // 初始化头部滚动条
    // function initHeaderSlide(){
    //   var headerSwiper = new Swiper('#headerSlider', {
    //     slidesPerView: 1,
    //     paginationClickable: true,
    //     centeredSlides: true,
    //     autoplay: 2000,
    //     autoplayDisableOnInteraction: false,
    //     loop: true,
    //     // 如果需要分页器
    //     pagination: '.swiper-pagination',
    //     // 改变自动更新
    //     observer:true,
    //     observeParents:true
    //   });
    // }

    // 初始化京东头条滚动条
    // function initToutiaoSlide(){
    //   var toutiaoSwiper = new Swiper('#toutiaoSlider', {
    //     direction:'vertical',
    //     autoplay: 2000,
    //     loop: true
    //   });
    // }

    // 秒杀计时器
    function countdown(){
      if($window.timer){
        clearInterval($window.timer);
      }
      // 倒计时
      var timeObj={
        h:1,
        m:37,
        s:13
      };

      var timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
      var timeList=document.getElementsByClassName('time-text');
      for(var i=0;i<timeList.length;i++){
        timeList[i].innerHTML=timeStr[i];
      }
      function toDouble(num){
        if(num<10){
          return '0'+num;
        }else{
          return ''+num;
        }
      }

      $window.timer=setInterval(function(){
        timeObj.s--;
        if(timeObj.s==-1){
          timeObj.m--;
          timeObj.s=59;
        }
        if(timeObj.m==-1){
          timeObj.h--;
          timeObj.m=59;
        }
        if(timeObj.h==-1){
          timeObj.h=0;
          timeObj.m=0;
          timeObj.s=0;
          clearInterval($window.timer);
        }
        timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
        for(var i=0;i<timeList.length;i++){
          timeList[i].innerHTML=timeStr[i];
        }
      },1000)
    }

    //回到顶部
    function goTop(){
      var bg=$window.document.getElementById('home-content');
      var goTop = document.querySelector(".back_top");

      bg.addEventListener('scroll',function(){
        var top = bg.scrollTop;
        if(top>200){
          goTop.style.opacity = 1;
        }else{
          goTop.style.opacity = 0;
        }
      },false);

      goTop.onclick = function(){
        bg.scrollTop = 0;
      }
    };



    $scope.$on('$stateChangeSuccess', function(e) {
    });

    $scope.$on('$ionicView.enter', function (e) {
      $ionicSlideBoxDelegate.update();
    })

  }]);

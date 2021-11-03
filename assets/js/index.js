function fadeAnime(){

  //動きの指定
    $('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
      }else{
      $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
      }
      });
  }
  // 2. 定義した名前をページが読み込まれた後・スクロールした後それぞれのきっかけに指定
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動く場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動く場合の記述

// ＊スライダー
    $('.p-slider').slick({
      arrows: false,//左右の矢印はなし
      autoplay: true,//自動的に動き出すか。初期値はfalse。
      autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
      speed: 10000,//スライドのスピード。初期値は300。
      infinite: true,//スライドをループさせるかどうか。初期値はtrue。
      pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
      pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
      cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
      slidesToShow: 5,//スライドを画面に4枚見せる
      slidesToScroll: 1,//1回のスライドで動かす要素数
      responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
          slidesToShow:3,//スライドを画面に2枚見せる
        }
      },
      {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
          slidesToShow: 1.5,//スライドを画面に1.5枚見せる
        }
      }
    ]
    });

    // ＊ギャラリー
//上部画像の設定
$('.gallery').slick({
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  fade: true, //フェードの有効化
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});

//選択画像の設定
$('.choice-btn').slick({
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 8, //表示させるスライドの数
  focusOnSelect: true, //フォーカスの有効化
  asNavFor: '.gallery', //連動させるスライドショーのクラス名
});

//下の選択画像をスライドさせずに連動して変更させる設定。
$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  var index = nextSlide; //次のスライド番号
  //サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
  $(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});
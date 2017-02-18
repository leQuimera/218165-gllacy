ymaps.ready(init);
var myMap;

function init() {
  myMap = new ymaps.Map("yandex_map", {
      center: [59.938694, 30.324896],
      zoom: [16],
      controls: []
    }),
    myMap.behaviors.disable("scrollZoom");
    myMap.controls.add("zoomControl");

  myPlacemark = new ymaps.Placemark([59.938882, 30.32318], {
    hintContent: "Магазин мороженого Глейси",
    balloonContent: ""
  },

  {
    iconImageHref: "img/ico_point.png",
    iconImageSize: [218, 142],
    iconImageOffset: [-45, -110],
    iconLayout: "default#image",
  });

  myMap.geoObjects.add(myPlacemark);
}


var btnFeedbackOpen = document.querySelector(".back_btn"); 
var popupFeedback = document.querySelector(".modal_content");
var overlay = document.querySelector(".modal_overlay");
var btnFeedbackClose = popupFeedback.querySelector(".modal_content_btn");


btnFeedbackOpen.addEventListener('click', function(even){
  event.preventDefault();
  popupFeedback.classList.add('modal_content_show');
  overlay.classList.add('modal_content_show')
});

btnFeedbackClose.addEventListener('click', function(event){
  event.preventDefault();
  popupFeedback.classList.remove('modal_content_show');
  overlay.classList.remove('modal_content_show');
});

overlay.addEventListener('click', function(event){
  popupFeedback.classList.remove('modal_content_show');
  overlay.classList.remove('modal_content_show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popupFeedback.classList.contains('modal_content')) {
      popupFeedback.classList.remove('modal_content_show');
      overlay.classList.remove('modal_content_show');
    }
  }
});
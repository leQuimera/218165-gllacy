var btnFeedbackOpen = document.querySelector(".back_btn");
var popupFeedback = document.querySelector(".modal_content");
var btnFeedbackClose = document.querySelector(".modal_content_btn");
var overlay = document.querySelector(".modal_overlay");
var fieldName = popup.querySelector("[name=user_name]");
var fieldAdress = popup.querySelector("[name=user_email]");
var fieldComment = document.querySelector("[name=user_text]");
var btnSubmit = document.querySelector('.modal_btn');




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

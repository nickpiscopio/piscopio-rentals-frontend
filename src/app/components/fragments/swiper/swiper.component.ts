import { Component } from '@angular/core';
import { SwiperOptions } from "swiper";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent {
  images = [
    "assets/images/keats_photos/deck_1.webp",
    "assets/images/keats_photos/deck_2.webp",
    "assets/images/keats_photos/deck_3.webp",
    "assets/images/keats_photos/deck_4.webp",
    "assets/images/keats_photos/dining_area.webp",
    "assets/images/keats_photos/first_floor_bathroom_1.webp",
    "assets/images/keats_photos/first_floor_bathroom_2.webp",
    "assets/images/keats_photos/first_floor_bedroom_1.webp",
    "assets/images/keats_photos/first_floor_bedroom_2.webp",
    "assets/images/keats_photos/first_floor_bedroom_3.webp",
    "assets/images/keats_photos/first_floor_bunk_1.webp",
    "assets/images/keats_photos/first_floor_bunk_2.webp",
    "assets/images/keats_photos/first_floor_bunk_3.webp",
    "assets/images/keats_photos/first_floor_bunk_4.webp",
    "assets/images/keats_photos/front.webp",
    "assets/images/keats_photos/kitchen_1.webp",
    "assets/images/keats_photos/kitchen_2.webp",
    "assets/images/keats_photos/kitchen_3.webp",
    "assets/images/keats_photos/living_room_1.webp",
    "assets/images/keats_photos/living_room_2.webp",
    "assets/images/keats_photos/living_room_3.webp",
    "assets/images/keats_photos/loft_1.webp",
    "assets/images/keats_photos/loft_2.webp",
    "assets/images/keats_photos/second_floor_bathroom_1.webp",
    "assets/images/keats_photos/second_floor_bedroom_1.webp",
    "assets/images/keats_photos/second_floor_bedroom_2.webp",
    "assets/images/keats_photos/second_floor_bedroom_3.webp",
    "assets/images/keats_photos/yard_1.webp",
    "assets/images/keats_photos/yard_2.webp",
  ];

  swiperConfig: SwiperOptions = {
    direction: "horizontal",
    slidesPerView: 1,
    mousewheel: false,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: { nextEl: ".swiper-next", prevEl: ".swiper-previous" },
    keyboard: false,
    pagination: {
      enabled: false
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    roundLengths: true,
    breakpoints: {
      // When window width is >= "x" pixels.
      1400: {
        slidesPerView: 2,
      },
    },
  };
}

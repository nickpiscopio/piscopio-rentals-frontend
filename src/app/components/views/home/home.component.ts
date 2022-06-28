import { Component, OnInit } from "@angular/core";
import { FooterService } from "src/app/services/footer.service";
import { HeaderService } from "src/app/services/header.service";
import { environment } from "src/environments/environment";
import { SwiperOptions } from "swiper";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  images = [
    "assets/images/keats_photos/deck_1.webp",
    "assets/images/keats_photos/deck_2.webp",
    "assets/images/keats_photos/deck_3.webp",
    "assets/images/keats_photos/deck_4.webp",
  ];

  swiperConfig: SwiperOptions = {
    direction: 'horizontal',
    slideToClickedSlide: true,
    slidesPerView: 1,
    mousewheel: false,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: { nextEl: '.swiper-next', prevEl: '.swiper-previous' },
    keyboard: false,
    pagination: {
      el: '.pagination',
      type: 'bullets',
      clickable: true,
    },
    centeredSlides: true,
    loop: true,
    roundLengths: true,
    spaceBetween: 24,
    centeredSlidesBounds: true,
    breakpoints: {
      // When window width is >= 'x' pixels.
      600: {
        slidesPerView: 2,
      },
    },
  };

  constructor(private headerService: HeaderService, private footerService: FooterService) { }

  ngOnInit(): void {
    this.headerService.setShowBookNow(true);
    this.footerService.setShowBookingAndPropertyManagerInfo(true);
  }

  bookNow(): void {
    window.open(environment.bookNow)
  }

  getVehicleThreshold(): number {
    return environment.vehicleThreshold;
  }
}

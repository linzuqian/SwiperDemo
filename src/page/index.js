import Vue from 'vue'
import homePage from '@/page/home/index.vue'
import business from '@/page/business/index.vue'
import cases from '@/page/case/index.vue'
import cooperation from '@/page/cooperation/index.vue'
import quality from '@/page/quality/index.vue'
import swiperFooter from '@/components/footer/item.vue'

export default {
  name: 'page-index',
  data () {
    return {
      swiperSlides:[],
      swipersOption: {
        // loop: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        direction : 'vertical',
        speed:1000,
        slidesPerView: 'auto',
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        autoplay:  false,
        mousewheel: true
      }
    }
  },
  components: {
    homePage,
    business,
    cases,
    cooperation,
    quality,
    swiperFooter
  }
}
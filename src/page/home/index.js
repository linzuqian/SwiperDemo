import Vue from 'vue'
import first from '@/components/home/first/item.vue'
import second from '@/components/home/second/item.vue'
import third from '@/components/home/third/item.vue'
import fourth from '@/components/home/fourth/item.vue'

export default {
  name: 'page-home-index',
  data () {
    return {
      swipersOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        speed:800,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay:  true,
        mousewheel: false
      }
    }
  },
  components: {
    first,
    second,
    third,
    fourth
  }
}
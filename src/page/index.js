import Vue from 'vue'
import homePage from '@/page/home/index.vue'
import business from '@/page/business/index.vue'
import cases from '@/page/case/index.vue'
import cooperation from '@/page/cooperation/index.vue'
import quality from '@/page/quality/index.vue'
import increment from '@/page/increment/index.vue'
import about from '@/page/about/index.vue'
import contact from '@/page/contact/index.vue'
import swiperFooter from '@/components/footer/item.vue'

export default {
  name: 'page-index',
  data () {
    let seft = this
    return {
      swiperNav:[
        '首页','业务','案例','合作','品质','增值','关于','联系'
      ],
      currentIndex:'0',
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
        mousewheel: true,
        on: {
          slideChangeTransitionStart: function(){
            seft.currentIndex = this.activeIndex
          }
        }
      }
    }
  },
  components: {
    homePage,
    business,
    cases,
    cooperation,
    quality,
    increment,
    about,
    contact,
    swiperFooter
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.init()
  },
  watch:{
    currentIndex(){
      this.init()
    }
  },
  methods: {
    // 点击切换
    switchPage (index) {
      this.currentIndex = index
      this.swiper.slideTo(index, 1000, false)
    },
    // 初始化
    init () {
      this.slideLi(this.currentIndex)
    },
    // 鼠标移入
    movein (index) {
      this.slideLi(index)
    },
    slideLi(index) {
      let bg = document.getElementById("backgroundSlide")
      let currentLi = document.getElementsByTagName('li')[0].offsetWidth
      bg.style.left = currentLi*index + 'px' 
    },
    // 鼠标移出
    moveout () {
      this.init()
    }
  }
}
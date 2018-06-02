import Vue from 'vue'

export default {
  name: 'components-home-second',
  data () {
    return {
      swipersOption: {
        on: {
          slideChangeTransitionEnd: function () {
            let bg = document.getElementById('backgroundSlide')
            bg.style.left = '-50%'
          }
        }
      }
    }
  }
}

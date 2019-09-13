
Vue.component('slider', {

  template: `
    <div>
            <div class="btn">
            <p>
              <a @click="prev" href='#'><img class="prevNextBtn" src="images/prevBtn.png" alt="#" /></a>  <a @click="next" href='#'><img class="prevNextBtn" src="images/nextBtn.png" alt="#" /></a>
            </p>
            </div>
            
            <transition-group name='fade' tag='div'>
              <div
               v-for="number in [currentNumber]"
               :key='number'
               >
                 <img
                     :src="currentImage"
                     v-on:mouseover="stopRotation"
                     v-on:mouseout="startRotation"
                     class="image"
                     />
            </div>
          </transition-group>
    </div>

    


    
    
    `,

  data() {
    return {

      images: ["images/Bild1.jpg", 'images/Bild2.jpg', 'images/Bild3.jpg', 'images/Bild4.jpg'],
      currentNumber: 0,
      timer: null
    }
  },

  mounted() {
    this.startRotation();
  },

  methods: {
    startRotation() {
      this.timer = setInterval(this.next, 3000);
    },

    stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next() {
      this.currentNumber += 1
    },
    prev() {
      this.currentNumber -= 1
    }
  },

  computed: {
    currentImage() {
      return this.images[Math.abs(this.currentNumber) % this.images.length];
    }
  }



})

var app = new Vue({
  el: '#app',

  data: {
    room: 'Raum 2'

  }
})







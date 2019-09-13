
Vue.component('slider', {

  template: `
    <div>
    
            <p>
              <a @click="prev" href='#'><img class="prevNextBtn" src="images/prevBtn.png" alt="#" /></a>  <a @click="next" href='#'><img class="prevNextBtn" src="images/nextBtn.png" alt="#" /></a>
            </p>
            
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
    

    


    
    
    `,

  data() {
    return {

      images: ["images/Bild1.jpg", 'images/Bild2.jpg', 'images/Bild3.jpg', 'images/Bild4.jpg'],
      currentNumber: 0,
      timer: null
    }
  },

  mounted: function () {
    this.startRotation();
  },

  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 3000);
    },

    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function () {
      this.currentNumber += 1
    },
    prev: function () {
      this.currentNumber -= 1
    }
  },

  computed: {
    currentImage: function () {
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







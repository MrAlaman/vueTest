<template>
  <body>
    <div class="sidebar">
      <router-link to='./'>
        <div class="btnHome" v-on:click="retry"></div>
      </router-link>
      <button class="btnRetry" v-on:click="retry">
        <div class="btnIcon"></div>
      </button>
      <div class="params">Параметри:</div>
      <div class="sadCounter">
        <img class='sad_icon' src="./img/sad_icon.png" alt=""><p class='sadCounterText'>{{sad}}</p>
      </div>
      <div class="happyCounter">
        <img class='happy_icon' src="./img/happy_icon.png" alt=""><p class='happyCounterText'>{{happy}}</p>
      </div>
      <div class="loyalCounter">
        <img class='heart_icon' src="./img/heart_icon.png" alt=""><p class='loyalCounterText'>{{loyal}}</p>
      </div>
      <div class="lineBack"></div>
      <div class="line">Осталось в очереди:<br>{{ clients.length - count }} / {{clients.length}} </div>
    </div>

    <v-touch @swipeleft="sadC">
      <v-touch @swipeup="happyC">
        <v-touch @swiperight="loyalC">
          <vue-swing
            :config="config">
          <div>
            <div class='img_background'></div>
            <div class="card">
              <img :src = 'clients[count].url' class="cardImg">
              <div class='cardName'>{{clients[count].name}}</div>
              <div class="cardDescription">{{clients[count].description}}</div>
            </div>
          </div>
            </vue-swing>
          </v-touch>
        </v-touch>
    </v-touch>

    <button class='btn1' v-on:click="sadC">Препарат 1</button>
    <button class='btn2' v-on:click="happyC">Препарат 2</button>
    <button class='btn3' v-on:click="loyalC">Препарат 3</button>
  </body>
</template>

<script>
export default {
  name: 'game',
  data () {
    return {
      config: {
        allowedDirections: [
        ],
        maxRotation: 50
      },
      count: 0,
      sad: 0,
      happy: 0,
      loyal: 0,
      clients: [
        {
          url: './img/img1.png',
          name: 'Марія, 19 років',
          description: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.'
        },
        {
          url: './img/img2.jpg',
          name: 'Степан, 61 рік',
          description: 'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?'
        },
        {
          url: './img/img3.jpg',
          name: 'Любов, 58 років',
          description: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.'
        },
        {
          url: './img/img4.jpg',
          name: 'Олександр, 20 років',
          description: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.'
        },
        {
          url: './img/img5.jpg',
          name: 'Ірина, 55 років',
          description: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.'
        },
      ]
    }
  },
  methods: {
    sadC: function() {
      if (this.count < 4) {
        this.count++;
        this.sad++;
        this.$store.dispatch('sadinc');
      }
      else {
        this.$store.dispatch('sadinc');
        this.$router.push({ name: 'end'})
      }
    },
    happyC: function() {
      if (this.count < 4) {
        this.count++
        this.happy++
        this.$store.dispatch('happyinc')
      }
      else {
        this.$store.dispatch('happyinc')
        this.$router.push({ name: 'end'})
      }
    },
    loyalC: function() {
      if (this.count < 4) {
        this.count++
        this.loyal++
        this.$store.dispatch('loyalinc')
      }
      else {
        this.$store.dispatch('loyalinc')
        this.$router.push({ name: 'end'})
      }
    },
    retry: function() {
      this.count = 0
      this.loyal = 0
      this.happy = 0
      this.sad = 0
      this.$store.dispatch('refresh')
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: absolute;
  width: 470px;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: linear-gradient(77.12deg, #2D8550 16.62%, #5E6EC2 83.38%);
  opacity: 0.7;
  z-index: 2;
}
.btnHome {
  background: url('./img/btn_home.png');
  position: absolute;
  width: 70px;
  height: 70px;
  left: 50px;
  top: 70px;
  border-radius: 100px;
  outline: 0;
  border: 0;
}
.btnRetry {
  background: #fff;
  position: absolute;
  width: 70px;
  height: 70px;
  left: 158px;
  top: 70px;
  border-radius: 100px;
  border: 0;
  outline: 0;
}
.btnIcon {
  background: url('./img/btn_retry.png') center/cover;
  margin: 8px;
  width: 42px;
  height: 32px;
  align-items: center;
  left: 172px;
  top: 89px;
}
.params {
  position: absolute;
  width: 390px;
  height: 40px;
  left: 40px;
  top: 430px;
  font-family: Avenir Next Cyr;
  font-size: 36px;
  line-height: 44px;
  color: #FFFFFF;
  text-align: left;
}
.sadCounter {
  position: absolute;
  width: 190px;
  height: 80px;
  left: 40px;
  top: 500px;
  background: #FFFFFF;
  box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
  border-radius: 40px;
}
.sadCounterText {
  position: absolute;
  left: 42.11%;
  right: 5.26%;
  top: 0%;
  bottom: 0%;
  font-family: Avenir Next Cyr;
  font-size: 48px;
  line-height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
  margin: 0;
}
.happyCounter {
  position: absolute;
  width: 190px;
  height: 80px;
  left: 250px;
  top: 503px;
  background: #FFFFFF;
  box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
  border-radius: 40px;
}
.happyCounterText {
  position: absolute;
  left: 42.11%;
  right: 5.26%;
  top: 0%;
  bottom: 0%;
  font-family: Avenir Next Cyr;
  font-size: 48px;
  line-height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
  margin: 0;
}
.loyalCounter {
  position: absolute;
  width: 190px;
  height: 80px;
  left: 149px;
  top: 620px;
  background: #FFFFFF;
  box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
  border-radius: 40px;
}
.loyalCounterText {
  position: absolute;
  left: 42.11%;
  right: 5.26%;
  top: 3.75%;
  bottom: -3.75%;
  font-family: Avenir Next Cyr;
  font-size: 48px;
  line-height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
  margin: 0;
}
.line {
  position: absolute;
  width: 470px;
  height: 134px;
  top: 890px;
  font-family: Avenir Next Cyr;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}
.lineBack {
  position: absolute;
  width: 470px;
  height: 134px;
  top: 890px;
  background: #FFFFFF;
  opacity: 0.15;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.card {
  position: absolute;
  width: 540px;
  height: 590px;
  left: 690px;
  top: 130px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.cardImg {
  width: 540px;
  height: 350px;
  left: 690px;
  top: 130px;
  border-radius: 20px 20px 0px 0px;
}
.img_background {
  background: linear-gradient(52.46deg, #2D8550 16.62%, #5E6EC2 83.38%);
  width: 540px;
  height: 350px;
  opacity: 0.2;
  position: absolute;
  left: 690px;
  top: 130px;
  border-radius: 20px 20px 0px 0px;
  z-index: 1;
}
.cardName {
  position: absolute;
  width: 420px;
  height: 40px;
  left: 60px;
  top: 375px;
  font-family: Avenir Next Cyr;
  font-size: 32px;
  line-height: 39px;
  color: #8E9AD5;
  text-align: left;
}
.cardDescription {
  position: absolute;
  width: 420px;
  height: fit-content;
  left: 60px;
  top: 415px;
  font-family: Avenir Next Cyr;
  font-size: 26px;
  text-align: left;
}
.btn1 {
  position: absolute;
  width: 280px;
  height: 90px;
  left: 500px;
  top: 870px;
  background: linear-gradient(258.29deg, #8049C7 0%, #CA57FD 100%);
  border-radius: 100px;
  font-family: Avenir Next Cyr;
  font-size: 28px;
  line-height: 34px;
  justify-content: center;
  color: #FFFFFF;
  border: 0;
  outline: 0;
}
.btn2 {
  position: absolute;
  width: 280px;
  height: 90px;
  left: 820px;
  top: 870px;
  background: linear-gradient(258.29deg, #169AE4 0%, #0CC4FA 100%);
  border-radius: 100px;
  font-family: Avenir Next Cyr;
  font-size: 28px;
  line-height: 34px;
  color: #FFFFFF;
  justify-content: center;
  border: 0;
  outline: 0;
}
.btn3 {
  position: absolute;
  width: 280px;
  height: 90px;
  left: 1140px;
  top: 870px;
  background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%);
  border-radius: 100px;
  font-family: Avenir Next Cyr;
  font-size: 28px;
  line-height: 34px;
  color: #FFFFFF;
  justify-content: center;
  border: 0;
  outline: 0;
}
.sad_icon {
  position: absolute;
  left: 5.26%;
  right: 63.16%;
  top: 12.5%;
  bottom: 12.5%;
}
.happy_icon {
  position: absolute;
  left: 5.26%;
  right: 63.16%;
  top: 12.5%;
  bottom: 12.5%;
}
.heart_icon {
  position: absolute;
  left: 7.37%;
  right: 63.16%;
  top: 21.25%;
  bottom: 18.75%;
}
</style>

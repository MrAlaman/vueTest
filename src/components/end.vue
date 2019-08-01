<template>
  <body>
    <div class='img'></div>
    <router-link to='/'>
      <div class="btnHome" v-on:click="retry">
        <div class='home'></div>
      </div>
    </router-link>
    <div class="divider"></div>
    <div class="pr1">Препарат 1</div>
    <div class="pr2">Препарат 2</div>
    <div class="pr3">Препарат 3</div>
    <div class="percentSad">{{ sad * 20 }}%</div>
    <div class="percentHappy">{{ happy * 20 }}%</div>
    <div class="percentLoyal">{{ loyal * 20 }}%</div>
    <div class="result"><h2>Ваш результат:<br>«Что я здесь делаю?»</h2></div>
    <div class="text">Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.</div>
    <router-link to='/game'>
      <div class="home_btn" v-on:click="retry">Попробовать ещё</div>
    </router-link>
  </body>
</template>

<script>
export default {
  name: "end",
  data () {
    return {
      sad: this.$store.state.sad,
      happy: this.$store.state.happy,
      loyal: this.$store.state.loyal
    }
  },
  methods: {
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
body {
  min-width: 1440px;
  min-height: 1024px;
}
h2 {
  margin: 0;
  letter-spacing: 0.02em;
}
.img {
  position: absolute;
  width: 710px;
  height: 720px;
  left: 730px;
  top: 0px;
  right: 0;
  background: url('./img/bg2.png');
}
.btnHome {
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  border-radius: 100px;
  position: absolute;
  width: 70px;
  height: 70px;
  left: 50px;
  top: 70px;
  border-radius: 100px;
  outline: 0;
  border: 0;
}
.home {
  background: url('./img/btn_home2.png');
  border-radius: 100px;
  width: 70px;
  height: 70px;
  background-repeat: no-repeat;
  background-position: center;
  left: 50px;
  top: 70px;
  border-radius: 100px;
  outline: 0;
}
.divider {
  position: absolute;
  width: 580px;
  left: 9.03%;
  right: 50.69%;
  top: 41.02%;
  bottom: 58.98%;
  border: 1px solid #D9D9D9;
}
.pr3 {
  position: absolute;
  left: 36.81%;
  right: 50.69%;
  top: 32.23%;
  bottom: 63.87%;
  font-family: Avenir Next Cyr;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
}
.pr2 {
  position: absolute;
  left: 22.92%;
  right: 64.51%;
  top: 32.23%;
  bottom: 63.87%;
  font-family: Avenir Next Cyr;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
}
.pr1 {
  position: absolute;
  left: 9.03%;
  right: 78.47%;
  top: 32.23%;
  bottom: 63.87%;
  font-family: Avenir Next Cyr;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
}
.percentLoyal{
  position: absolute;
  left: 36.81%;
  right: 50.69%;
  top: 25.39%;
  bottom: 67.77%;
  font-family: Avenir Next Cyr;
  font-size: 48px;
  line-height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
}
.percentHappy {
  position: absolute;
  left: 22.92%;
  right: 64.51%;
  top: 25.39%;
  bottom: 67.77%;
  font-family: Avenir Next Cyr;
  font-size: 48px;
  line-height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
}
.percentSad {
  position: absolute;
  left: 9.03%;
  right: 78.47%;
  top: 25.39%;
  bottom: 67.77%;
  font-family: Avenir Next Cyr;
  font-size: 48px;
  line-height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
}
.text {
  position: absolute;
  left: 9.03%;
  right: 50.69%;
  top: 54.69%;
  bottom: 38.48%;
  font-family: Avenir Next Cyr;
  font-size: 24px;
  line-height: 29px;
  color: #424242;
  text-align: left;
}
.result {
  position: absolute;
  left: 9.03%;
  right: 49.31%;
  top: 44.92%;
  bottom: 47.27%;
  font-family: Avenir Next Cyr;
  font-size: 32px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #8E9AD5;
  text-align: left;
}
.home_btn {
  position: absolute;
  left: 9.03%;
  right: 72.22%;
  top: 85.94%;
  bottom: 8.2%;
  width: 270px;
  height: 60px;
  background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
  border-radius: 100px;
  font-family: Avenir Next Cyr;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
}
</style>

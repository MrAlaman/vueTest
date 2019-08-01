<template>
  <body>
    <div class="gradient"></div><div class="ellipse"></div>
    <div class="welcome">Добро пожаловать в игру</div>
    <div class="help">Помоги Фармацевту</div>
    <router-link to ='/game'><div class="btn">  <div class="begin">Начать</div></div></router-link>
  </body>
</template>

<script>
export default {
  name: 'Start',
}
</script>

<style scoped>
body {
  position: absolute;
  min-width: 1440px;
  min-height: 1024px;
  background: url('./img/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
}
.gradient {
  width: 100%;
  height: 100%;
  background: linear-gradient(54.9deg, #2D8550 16.62%, #5E6EC2 83.38%);
  opacity: 0.35;
}
.ellipse {
  position: absolute;
  width: 860px;
  height: 860px;
  left: 110px;
  top: -30px;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  border-radius: 50%;
}
.welcome {
  position: absolute;
  color: #FFFFFF;
  width: 444px;
  height: 41px;
  left: 296px;
  top: 250px;
  font-family: Avenir Next Cyr;
  font-size: 35px;
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
}
.help {
  position: absolute;
  width: 580px;
  height: 140px;
  left: 291px;
  top: 320px;
  font-family: Avenir Next Cyr;
  font-size: 60px;
  line-height: 66px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}
.btn {
  position: absolute;
  width: 381.32px;
  height: 90px;
  left: 351.21px;
  top: 580px;
  background: #FFFFFF;
  border-radius: 100px;
}
.begin {
  height: 100%;
  font-size: 36px;
  line-height: 44px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  color: #8E9AD5;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

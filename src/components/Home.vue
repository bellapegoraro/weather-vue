<template>
  <div id="container-home">
    <div class="text animate__animated animate__fadeInRight">
      <h1>Previsão do tempo</h1>
    </div>
    <img
      src="../assets/weatherHome.png"
      class="animate__animated animate__fadeInLeft"
    />
    <div class="text animate__animated animate__fadeInRight">
      <p>Escolha sua cidade e a hora que quer checar o tempo!</p>
    </div>
  </div>
</template>

<script></script>

<style>
#container-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  align-items: space-evenly;
  height: 500px;
  font-family: Georgia, Verdana, sans-serif;
}
h1 {
  font-family: "Courier New", Courier, monospace;
  text-transform: uppercase;
}
p {
  font-size: 18px;
  padding-top: 10px;
}

img {
  width: 300px;
  margin: auto;
}

.text {
  height: 50px;
  width: 600px;
  margin: 0 auto;
  -webkit-box-shadow: 4px 7px 5px 1px #d8d8d8;
  box-shadow: 4px 7px 5px 1px #d8d8d8;
}

@media (max-width: 650px) {
  h1 {
    padding-top: 10px;
  }
  .text {
    width: 400px;
    height: 70px;
  }
}
</style>

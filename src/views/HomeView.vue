<template>

  <body @load="GetTimeToday()">
    <main>
      <ContainerBox>
        <header>
          <div class="container-text">
            <h1>Horário Oficial de Brasília</h1>
          </div>
          <hr />
        </header>
        <nav>
          <div class="container-text">
            <h2>{{ dayComplete }}</h2>
          </div>
        </nav>
        <nav>
          <div class="animated-border"></div>
          <div class="corner">
            <div class="container-wrap">
              <div class="container-Hours">
                <p class="text-hours" id="clock">{{ hours }}</p>
              </div>
            </div>
          </div>
        </nav>
        <div class="container-text">
          <p class="text">
            Hora sincronizada com servidores de horário do observatorio Nacional-RJ
          </p>
          <br />
          <br />
          <hr />
        </div>
        <div class="container-text">
          <span class="text">Ajude a manter esse site sempre no ar. Faça-nos uma doação de qualquer valor. Muito
            obrigado.</span>
          <p class="text">Chave PIX: <b>pp6kp@icloud.com</b></p>
        </div>
        <div class="container-text">
          (<router-link to="/qrCode">Doe via Qr Code</router-link>)
          <br />
          <br />
          <hr />
        </div>
        <footer>
          <div class="container-text">
            <div class="container-footer">
              <img src="../assets/brasil.png" width="15" height="10" alt="Bandeira do Brasil"
                title="Bandeira do Brasil" />
              Brasil (UTC-3)
              {{ dayComplete }}
            </div>
            <div class="links">
             •<a href="http://pcdsh01.on.br">ON</a>
             •<a href="https://time.gov/">US TIME</a>
            </div>
            ©️ Relogio.cc
          </div>
        </footer>
      </ContainerBox>
    </main>
  </body>
</template>

<script>
// @ is an alias to /src

import ContainerBox from "@/components/ContainerBox.vue";

export default {
  name: "HomeView",
  components: {
    ContainerBox,
  },
  data() {
    return {
      dayComplete: "",
      hours: "",
    };
  },
  methods: {
    getDayMonthYear() {
      var dayName = new Array(
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado"
      );
      var monName = new Array(
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      );
      var now = new Date();

      const dayCompleted =
        dayName[now.getDay()] +
        ", " +
        now.getDate() +
        " de " +
        monName[now.getMonth()] +
        " de " +
        now.getFullYear();
      this.dayComplete = dayCompleted;
    },
    GetTimeToday() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      console.log(h);
      console.log(m);
      console.log(s);

      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      const horas = h + ":" + m + ":" + s;
      this.hours = horas;

      console.log(horas);
    },
  },
  mounted() {
    this.getDayMonthYear();

    setInterval(() => {
      this.GetTimeToday();
    }, 500);
  },
};
</script>

<style scoped>
.container-text {
  text-align: center;
}

.container-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container-Hours {
  border: 1px solid #e6e6e6;
  height: 228px;
  width: 896.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #87ceeb;
  color: black;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #778899;
}

.text-hours {
  text-align: center;
  font-size: 190px;
  font-weight: 700;
}

.text {
  color: #778899;
  font-weight: lighter;
}

.container-footer {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.links {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 10px;
}

img {
  margin-top: 4px;
}

a {
  text-decoration: none;
}


@media (max-width: 599px) {
  .text-hours {
    font-size: 70px;
  }

  .container-Hours {
    width: 300px;
    height: 150px;
  }
}
</style>

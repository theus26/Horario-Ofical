<template>
  <body @load="GetTimeToday()">
    <main>
      <ContainerBox>
        <header>
          <div class="container-text">
            <h1>Hora Oficial de Brasília - BRASIL</h1>
          </div>
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
                <p class="text-hours" id="clock">{{ horas }}:{{ minutes }}:{{ second }}</p>
              </div>
            </div>
          </div>
        </nav>

        <div class="container-text">
          <p class="text">
            Hora sincronizada com servidores de horário do Observatorio
            Nacional-RJ
          </p>
          <br />
          <br />
        </div>

        <div class="container-text">
          <p class="text color">
            FUSOS HORÁRIOS DO BRASIL POR ESTADOS E ILHAS:
          </p>

          <div class="container-text">
            <p class="text txt title">
              Estados com o Horário de Brasília (-3:00HS UTC):
            </p>
            <p class="text txt">
              ALAGOAS, AMAPÁ, BAHIA, CEARÁ, ESPÍRITO SANTO, GOIÁS, MARANHÃO,
              MINAS GERAIS, PARÁ, PARAÍBA, PARANÁ, PERNAMBUCO, PIAUÍ, RIO DE
              JANEIRO, RIO GRANDE DO NORTE, RIO GRANDE DO SUL, SÃO PAULO,
              SERGIPE, SANTA CATARINA E TOCANTINS.
            </p>

            <p class="text txt title">
              Ilhas com Horário de Brasília + 1:00H (-2:00HS UTC):
            </p>

            <p class="text txt">
              ARQUIPÉLAGO DE SÃO PEDRO E SÃO PAULO, ATOL DAS ROCAS, FERNANDO DE
              NORONHA, MARTIM VAZ E TRINDADE.
            </p>

            <p class="text txt title">
              Estado com Horário de Brasília -2:00HS (-5:00HS UTC):
            </p>

            <p class="text txt">Acre.</p>

            <p class="text txt title">
              Estados com Horário de Brasília -1:00H (-4:00HS UTC):
            </p>

            <p class="text txt">
              AMAZONAS, MATO GROSSO, MATO GROSSO DO SUL, RONDÔNIA E RORAIMA.
            </p>

            <p class="text txt">
              UTC – Coordinated Universal Time ou Tempo Universal Coordenado,
              refere-se ao fuso horário de 0:00 hora no Meridiano de Greenwich,
              que serve como referência a todos os outros fusos horários do
              mundo.
            </p>
          </div>
        </div>

        <div class="container-text">
          <p class="text txt">
            A padronização dos horários foi introduzida em 1º de janeiro de
            1914, após publicação do DPL 2.784, de 18 de junho e do decreto
            10.546, de 5 de novembro de 1913. Antes, cada lugar sincronizava os
            relógios conforme o horário solar aparente; havia uma diferença
            horária de 13 minutos e 54 segundos da então capital federal (até
            1960) Rio de Janeiro (c. GMT-02:52:41) a São Paulo (c. GMT-03:06:35)
            como exemplo – esta que deixou de existir com o estabelecimento do
            atual Horário de Brasília a ambas capitais e estados homônimos. A
            determinação, conservação e disseminação da Hora Legal Brasileira
            (HLB) é competência da Divisão do Serviço da Hora (DSHO), do
            Observatório Nacional (ON), onde é possível a sincronização horária
            conforme os relógios exibidos no website da instituição, que por sua
            vez mantém precisão milimétrica por serem relógios atômicos de
            césio.
          </p>
          <p class="text-p">
            Fontes: Wikipedia e Divisão de Serviço da Hora/Observatório Nacional
          </p>
          <br />
          <br />
        </div>
        <div class="container-text">
          <span class="text">Quer nos ajudar a manter o site? Ajude-nos doando qualquer valor
            pelo PIX:<br> <br><b>e-mail: pp6kp@hotmail.com</b> </span>
          <p class="text">Muito Obrigado!</p>
        </div>
        <div class="container-text">
          (<router-link to="/qrCode">Quer doar usando Qr Code? Clique aqui.</router-link>)
          <br />
          <br />
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
              •<a href="http://pcdsh01.on.br">ON</a> •<a href="https://time.gov/">US TIME</a>
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
      second: '',
      minutes: '',
      horas: '',
      zero: ''
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

    async getServerTime() {
      fetch('https://worldtimeapi.org/api/ip')
        .then(response => response.json())
        .then(data => {
          // Extrai a data e hora do objeto de resposta
          const dateTimeString = data.datetime;
          const dateTime = new Date(dateTimeString);

          const H = dateTime.getHours();
          const M = dateTime.getMinutes();
          const S = dateTime.getSeconds();
          this.horas = H < 10 ? "0" + H : H
          this.minutes = M < 10 ? "0" + M : M
          this.second = S < 10 ? "0" + S : S;

        })
        .catch(error => console.error('Erro ao obter hora da internet:', error));

    }


  },
  mounted() {

    this.getServerTime()
    setInterval(this.getServerTime, 500)

    this.getDayMonthYear()

  }
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
  height: 228px;
  width: 896.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 10px;
}

.text-hours {
  text-align: center;
  font-size: 190px;
  font-weight: 700;
  font-family: DS-Digit;
  
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

.txt {
  text-align: justify;
  font-weight: bold;
}

.text-p {
  text-align: center;
  font-weight: bold;
}

.color {
  font-weight: bold;
  color: black;
  font-size: large;
}

.title {
  color: black;
  font-size: medium;
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

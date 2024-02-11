<template>
  <div>
    <nav class="navbar">
      <div class="logo">
        <img src="https://i.ibb.co/TkHLsmX/anahuac-oaxaca.png" alt="Logo Anáhuac">
      </div>

      <div class="nav-sections">
        <router-link to="/primera-cita" class="nav-link">Primera Cita</router-link>
        <router-link to="/seguimiento" class="nav-link">Seguimiento</router-link>
        <router-link to="/horario" class="nav-link">Horario</router-link>
        <router-link to="/autoayuda" class="nav-link">Autoayuda</router-link>
      </div>

      <div class="login-btn">
        <button>Iniciar sesión</button>
      </div>
    </nav>

    <div class="page-content">
      <router-view></router-view>

      <section class="welcome-section">
        <div class="welcome-box">
>
          <div class="welcome-image">
            <img src="https://merida.anahuac.mx/hubfs/apreu-website/ilustraciones/ama_vector_psi.png" alt="Ilustración Psicología">
          </div>

          <div class="welcome-text">
            <h2 class="welcome-heading">BIENVENIDO AL SERVICIO DE ACOMPAÑAMIENTO PSICOLÓGICO</h2>
            <p>
              Descubre un espacio seguro para cuidar tu bienestar emocional.
              Nuestro equipo de psicólogos está aquí para brindarte apoyo en tu camino hacia la salud mental.
            </p>
          </div>
        </div>
      </section>
    </div>

    <section class="team-section">
      <div class="psychologist-profile">
        <div class="profile-details">
          <h3>NUESTRO EQUIPO</h3>
        </div>
      </div>

      <div v-for="psicologo in psicologos" :key="psicologo.id" class="psychologist-profile">
        <img :src="psicologo.imagen" :alt="'Perfil ' + psicologo.nombre">
        <div class="profile-details">
          <h3>{{ psicologo.nombre }}</h3>
          <p>{{ psicologo.experiencia }}</p>
          <p>{{ psicologo.especializacion }}</p>
        </div>
      </div>

    </section>

     <section class="button-section">
      <button class="button-card" @click="redirectTo('/primera-cita')">Primera Cita</button>
      <button class="button-card" @click="redirectTo('/seguimiento')">Seguimiento</button>
      <button class="button-card" @click="redirectTo('/horario')">Horario</button>
      <button class="button-card" @click="redirectTo('/autoayuda')">Autoayuda</button>
    </section>

    <br>
    <br>
    <footer class="footer">
      <div class="footer-content">

        <div class="footer-right">
          <img src="https://www.anahuac.mx/oaxaca/sites/default/files/img/Inicial.png" alt="Anáhuac Logo">
        </div>

        <div class="footer-contact">
          <button class="footer-button" @click="openMap" target="_blank">
            <strong>Dirección:</strong> Blvd. Guadalupe Hinojosa de Murat No. 1100.<br>San Raymundo Jalpan, Oaxaca C.P. 71248.
          </button>
          <p><strong>Teléfono:</strong> (951) 50-1-62-50<br>Lada sin costo: 800-737-26-24<br>E-mail: orientacionpsicologica.uao@anahuac.mx</p>
        </div>

        <div class="footer-buttons">
          <button class="footer-button" @click="openLink('https://www.anahuac.mx/oaxaca/aviso-privacidad')">Aviso de Privacidad</button>
          <button class="footer-button" @click="openLink('https://www.anahuac.mx/oaxaca/compendio-reglamentario')">Compendio Reglamentario</button>
        </div>

        <div class="footer-social-buttons">
          <button class="footer-button" @click="openLink('https://www.facebook.com/anahuacoaxaca/')" target="_blank">
            <img src="https://www.anahuac.mx/oaxaca/sites/default/files/img/redFacebook_1.png" alt="Facebook">
          </button>
          <button class="footer-button" @click="openLink('https://www.instagram.com/anahuacoaxaca')" target="_blank">
            <img src="https://www.anahuac.mx/oaxaca/sites/default/files/img/redInstagram.png" alt="Instagram">
          </button>
          <button class="footer-button" @click="openLink('https://twitter.com/anahuacoaxaca')" target="_blank">
            <img src="https://www.anahuac.mx/oaxaca/sites/default/files/img/redTwitter.png" alt="Twitter">
          </button>
          <button class="footer-button" @click="openLink('https://www.youtube.com/channel/UCk5xAk91c-F_lNKn6ceDVZQ')" target="_blank">
            <img src="https://www.anahuac.mx/oaxaca/sites/default/files/img/redYoutube.png" alt="Youtube">
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {

  name: 'InicioBea',

  data() {
    return {
      psicologos: [
        {
       
          nombre: 'Nombre del Psicólogo 1',
          imagen: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          experiencia: 'Experiencia Académica y Profesional',
          especializacion: 'Áreas de Especialización: Ansiedad, Depresión, Relaciones'
        },
        {
      
          nombre: 'Nombre del Psicólogo 2',
          imagen: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          experiencia: 'Experiencia Académica y Profesional',
          especializacion: 'Áreas de Especialización: Ansiedad, Depresión, Relaciones'
        },
        {
         
          nombre: 'Nombre del Psicólogo 3',
          imagen: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          experiencia: 'Experiencia Académica y Profesional',
          especializacion: 'Áreas de Especialización: Ansiedad, Depresión, Relaciones'
        },
        {
         
         nombre: 'Nombre del Psicólogo 4',
         imagen: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
         experiencia: 'Experiencia Académica y Profesional',
         especializacion: 'Áreas de Especialización: Ansiedad, Depresión, Relaciones'
       },
       {
         
         nombre: 'Nombre del Psicólogo 5',
         imagen: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
         experiencia: 'Experiencia Académica y Profesional',
         especializacion: 'Áreas de Especialización: Ansiedad, Depresión, Relaciones'
       },
      ]
    };
  },
  methods: {
    openMap() {
      window.location.href = 'https://maps.app.goo.gl/te3G28WuD56cTgyHA';
    },
    openLink(url) {
      window.location.href = url;
    }
  }
};
</script>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: black;
  color: white;
}

.logo img {
  max-height: 40px;
}

.nav-sections {
  display: flex;
}

.nav-link {
  margin-right: 30px;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #d45c37;
}

.login-btn button {
  background-color: #d45c37;
  color: white;
  border: none;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.login-btn button:hover {
  background-color: #a03722;
}

.page-content {
  padding: 30px;
}

.welcome-section {
  margin-top: 20px;
}

.welcome-box {
  background-color: #ff5900;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
}

.welcome-image img {
  max-width: 100%;
}

.welcome-heading {
  font-weight: bold;
  color: #f6f6f6;
  margin-bottom: 10px;
}

.welcome-text {
  max-width: 100%;
  text-align: center;
}

.team-section {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #423a38;
  padding: 20px;
  border-radius: 10px;
}

.psychologist-profile {
  flex: 0 0 calc(48% - 20px);
  margin-bottom: 20px;
  background-color: #ff5900;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
}

.psychologist-profile:hover {
  background-color: #f6f6f6;
  color: black;
}

.psychologist-profile img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

/* Sección de Botones */
.button-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.button-card {
  flex: 0 0 calc(23% - 10px);
  background-color: #ff5900;
  color: white;
  border: none;
  padding: 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  margin-bottom: 15px;
}

.button-card:hover {
  background-color: #423a38;
}

/* Pie de Página */
.footer {
  background-color: black;
  color: white;
  padding: 30px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.footer-right img {
  max-height: 80px;
}

.footer-contact p {
  margin: 10px;
}

.footer-buttons {
  display: flex;
  flex-direction: column;
}

.footer-button {
  background-color: #000000;
  color: white;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
}

.footer-social-buttons img {
  max-height: 35px;
  margin-right: 5px;
}

.footer-social-buttons button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

</style>
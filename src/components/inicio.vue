<template>
  <div>
    <!-- Barra de Navegación -->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo">
        <img src="https://i.ibb.co/TkHLsmX/anahuac-oaxaca.png" alt="Logo Anáhuac">
      </div>

      <!-- Secciones -->
      <div class="nav-sections">
        <router-link to="/primera-cita" class="nav-link">Primera Cita</router-link>
        <router-link to="/seguimiento" class="nav-link">Seguimiento</router-link>
        <router-link to="/horario" class="nav-link">Horario</router-link>
        <router-link to="/autoayuda" class="nav-link">Autoayuda</router-link>
      </div>

      <!-- Botón de Login -->
      <div class="login-btn">
        <button>Login</button>
      </div>
    </nav>

      <!-- Contenido de la Página -->
    <div class="page-content">
      <router-view></router-view>

      <!-- Sección de Bienvenida -->
      <section class="welcome-section">
        <div class="welcome-box">
          <!-- Imagen -->
          <div class="welcome-image">
            <img src="https://merida.anahuac.mx/hubfs/apreu-website/ilustraciones/ama_vector_psi.png" alt="Ilustración Psicología">
          </div>

          <!-- Texto -->
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

    <!-- Sección de Equipo de Psicólogos -->
<section class="team-section">
  
  <div class="psychologist-profile">
    <div class="profile-details">
      <h3>NUESTRO EQUIPO</h3>
    </div>
  </div>

  <!-- Perfiles -->
  <div class="psychologist-profile">
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Perfil Psicólogo 1">
    <div class="profile-details">
      <h3>Nombre del Psicólogo 1</h3>
      <p>Experiencia Académica y Profesional</p>
      <p>Áreas de Especialización: Ansiedad, Depresión, Relaciones</p>
    </div>
  </div>

  <div class="psychologist-profile">
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Perfil Psicólogo 2">
    <div class="profile-details">
      <h3>Nombre del Psicólogo 2</h3>
      <p>Experiencia Académica y Profesional</p>
      <p>Áreas de Especialización: Ansiedad, Depresión, Relaciones</p>
    </div>
  </div>

  <div class="psychologist-profile">
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Perfil Psicólogo 3">
    <div class="profile-details">
      <h3>Nombre del Psicólogo 3</h3>
      <p>Experiencia Académica y Profesional</p>
      <p>Áreas de Especialización: Ansiedad, Depresión, Relaciones</p>
    </div>
  </div>

  <div class="psychologist-profile">
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Perfil Psicólogo 4">
    <div class="profile-details">
      <h3>Nombre del Psicólogo 4</h3>
      <p>Experiencia Académica y Profesional</p>
      <p>Áreas de Especialización: Ansiedad, Depresión, Relaciones</p>
    </div>
  </div>
  
  <div class="psychologist-profile">
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Perfil Psicólogo 5">
    <div class="profile-details">
      <h3>Nombre del Psicólogo 5</h3>
      <p>Experiencia Académica y Profesional</p>
      <p>Áreas de Especialización: Ansiedad, Depresión, Relaciones</p>
    </div>
  </div>
  

  
</section>


<!-- Pie de Página -->
<br>
<br>
    <footer class="footer">
      <div class="footer-content">
        <!-- Imagen a la derecha -->
        <div class="footer-right">
          <img src="https://www.anahuac.mx/oaxaca/sites/default/files/img/Inicial.png" alt="Anáhuac Logo">
        </div>

        <!-- Información de contacto -->
        <div class="footer-contact">
          <button class="footer-button" onclick="window.location.href='https://maps.app.goo.gl/te3G28WuD56cTgyHA'" target="_blank" >
            <strong>Dirección:</strong> Blvd. Guadalupe Hinojosa de Murat No. 1100.<br>San Raymundo Jalpan, Oaxaca C.P. 71248.
          </button>
          <p><strong>Teléfono:</strong> (951) 50-1-62-50<br>Lada sin costo: 800-737-26-24<br>E-mail: orientacionpsicologica.uao@anahuac.mx</p>
        </div>

        <!-- Enlaces a Aviso de Privacidad y Compendio Reglamentario como botones -->
        <div class="footer-buttons">
          <button class="footer-button" onclick="window.location.href='https://www.anahuac.mx/oaxaca/aviso-privacidad'">Aviso de Privacidad</button>
          <button class="footer-button" onclick="window.location.href='https://www.anahuac.mx/oaxaca/compendio-reglamentario'">Compendio Reglamentario</button>
        </div>

        <!-- Botones de redes sociales como botones -->
        <div class="footer-social-buttons">
          <button class="footer-button" onclick="window.location.href='https://www.facebook.com/anahuacoaxaca/'" target="_blank">
            <img src="https://www.anahuac.mx/oaxaca/sites/default/files/img/redFacebook_1.png" alt="Facebook">
          </button>
          <button class="footer-button" onclick="window.location.href='https://www.instagram.com/anahuacoaxaca'" target="_blank">
            <img src="https://www.anahuac.mx/oaxaca/sites/default/files/img/redInstagram.png" alt="Instagram">
          </button>
          <button class="footer-button" onclick="window.location.href='https://twitter.com/anahuacoaxaca'" target="_blank">
            <img src="https://www.anahuac.mx/oaxaca/sites/default/files/img/redTwitter.png" alt="Twitter">
          </button>
          <button class="footer-button" onclick="window.location.href='https://www.youtube.com/channel/UCk5xAk91c-F_lNKn6ceDVZQ'" target="_blank">
            <img src="https://www.anahuac.mx/oaxaca/sites/default/files/img/redYoutube.png" alt="Youtube">
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Estilos específicos de la barra de navegación y otros ajustes */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: black; /* Cambiado a color negro */
  color: white; /* Cambiado el color del texto a blanco */
}

.logo img {
  max-height: 40px; /* Ajusta el tamaño del logo según sea necesario */
}

.nav-sections {
  display: flex;
}

.nav-link {
  margin-right: 30px; /* Espaciado mayor entre las secciones */
  color: white; /* Color del texto de las secciones */
  text-decoration: none; /* Elimina la subrayado de los enlaces */
  transition: color 0.3s ease; /* Transición suave para el color del texto */
}

.nav-link:hover {
  color: #d45c37; /* Color diferente al pasar el ratón */
}

.login-btn button {
  background-color: #d45c37; /* Color de fondo del botón de login */
  color: white;
  border: none;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease; /* Transición suave para el color de fondo */
}

.login-btn button:hover {
  background-color: #a03722; /* Cambiar color al pasar el ratón */
}

/* Estilos para el contenido de la página */
.page-content {
  padding: 30px; /* Ajusta el espacio alrededor del contenido */
}

/* Estilos para el pie de página (puedes ajustar según tus necesidades) */
.footer {
  background-color: black; /* Cambiado a color negro */
  color: white;
  padding: 30px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-right img {
  max-height: 100px; /* Ajusta el tamaño de la imagen según sea necesario */
}

.footer-contact p {
  margin: 10px;
}

.footer-buttons {
  display: flex;
  flex-direction: column;
}

.footer-button {
  background-color: #000000; /* Color de fondo del botón */
  color: white;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px; /* Espaciado entre los botones */
}

.footer-social-buttons img {
  max-height: 35px; /* Ajusta el tamaño de las imágenes de redes sociales según sea necesario */
  margin-right: 5px;
}

.footer-social-buttons button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}


/* Estilos para la sección de Bienvenida */
.welcome-section {
  margin-top: 0px;
}

.welcome-box {
  background-color: #ff5900; /* Color naranja */
  padding: 20px;
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome-image img {
  max-width: 100%; /* Ajusta la imagen al tamaño del contenedor */
}

.welcome-heading {
  
  font-weight: bold; /* Negrita */
  color: #f6f6f6; /* Color blanco */
  margin-bottom: 10px; /* Espaciado inferior */
}

.welcome-text {
  max-width: 65%; /* Ajusta el ancho del texto según sea necesario */
}

.welcome-text h2 {
  color: #f6f6f6; /* Color blanco */
}

.welcome-text p {
  color: #231f20; /* Color negro */
}

/* Estilos para la sección de Equipo de Psicólogos */
.team-section {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se muevan a la siguiente línea si no hay espacio suficiente */
  justify-content: space-between; /* Distribuye los elementos horizontalmente */
  background-color: #423a38; /* Agrega el fondo detrás de las tarjetas */
  padding: 20px; /* Ajusta el espaciado del fondo */
  border-radius: 10px; /* Añade bordes redondeados al fondo */
}

.psychologist-profile {
  flex: 0 0 calc(48% - 20px); /* Ancho del 48% con un margen más amplio */
  margin-bottom: 20px;
  background-color: #ff5900; /* Color de fondo inicial de las tarjetas */
  transition: background-color 0.3s ease; /* Transición suave */
  display: flex; /* Para centrar la imagen y los detalles verticalmente */
  align-items: center; /* Para centrar la imagen y los detalles verticalmente */
  padding: 20px; /* Añade un margen general al recuadro de las tarjetas */
  border-radius: 5px; /* Añade bordes redondeados a las tarjetas */
}

.psychologist-profile:hover {
  background-color: white; /* Cambio de color al pasar el ratón */
}
.psychologist-profile:hover h3 {
  color: black; /* Cambia el color del h3 al pasar el ratón */
}

.psychologist-profile img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  margin-left: auto; /* Centra la imagen ajustando el margen izquierdo */
}

.profile-details h3 {
  margin-bottom: 5px;
  font-weight: bold; /* Pone en negritas el nombre del psicólogo */
  color: #f6f6f6; /* Color blanco para el texto */
}

.team-message {
  margin-top: 30px;
}

.team-message h3 {
  color: #ff5900;
}



</style>
<template>
    <div>
      <button @click="fetchUsers">Obtener Usuarios</button>
      <button @click="fetchUserEmails">Obtener Correos</button>
      <div v-for="(user, index) in users" :key="index">{{ user.displayName }}</div>
      <div v-for="(email, index) in emails" :key="index">{{ email.subject }}</div>
    </div>
  </template>
  
  <script>
  import api from '/Users/PC/Desktop/software/beatest/src/api.js'
  
  export default {
    name: 'IniciarSesion',
    data() {
      return {
        users: [],
        emails: []
      }
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await api.getUsers();
          this.users = response.value;
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
      async fetchUserEmails() {
        try {
          const response = await api.getUserEmails();
          this.emails = response.value;
        } catch (error) {
          console.error('Error fetching emails:', error);
        }
      },
    },
  }
  </script>
  
  <style>
  
  </style>
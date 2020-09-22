<template>
<v-app>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title><v-icon large color="white darken-2">mdi-email</v-icon> MAIL BOX</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn> -->

      <v-btn icon @click="signout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 200px;"></v-container>
    </v-sheet>
  <MailList/>
  </v-card>
 
 <DialogLogin/>
</v-app>
</template>

<script>

import DialogLogin from "./components/DialogLogin";
import MailList from "./components/MailList";

import {mapActions} from "vuex";
export default {
  name: 'App',

  components: {
    DialogLogin,
    MailList
  },

  data: () => ({
    items:[]
  }),
  methods: {
    ...mapActions({
      signout:"sign_out"
    })
    
  }
};
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="auth_login_inverse" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              
              <v-col cols="12">
                <v-text-field label="Email*" v-model="email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" v-model="password" required></v-text-field>
              </v-col>
              
             
            </v-row>
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"

    export default {
        name: 'DialogLogin',
    
    components: {
    
    },
    data: () =>({
        email: '',
        password:''
}),
    computed:{
        ...mapGetters({
                auth_login_inverse: 'get_auth_login_inverse'
        })
    },
    methods:{
        ...mapActions({
                login : "login"
            })
    }
    
    }
    
</script>

<style scoped>

</style>
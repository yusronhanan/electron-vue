<template>
     <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in 20"
        :key="i"
      >
        <v-expansion-panel-header>Header</v-expansion-panel-header>
        <v-expansion-panel-content>
          sender and cc       
          </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
    export default {
        name:'MailList',
    
    components:{

    },
    data: () =>({
    
    }),
    methods:{
        
    }
    }
</script>

<style scoped>

</style>
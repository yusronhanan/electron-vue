<template>
     <v-row justify="center">
    <v-expansion-panels popout v-if="subjects">
      <v-expansion-panel v-for="i in subjects.length" v-bind:key="i">
        <v-expansion-panel-header>{{subjects[i]}} - {{dates[i]}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          From : {{froms[i]}}
          </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        name:'MailList',
    
    components:{

    },
    data: () =>({
    
    }),
    methods:{
        
    },
    computed:{
        ...mapGetters({
                subjects: 'getSubject',
                dates: 'getDate',
                froms: 'getFrom'
        })
        
        }
    }
</script>

<style scoped>

</style>

<script setup>
import Header from './components/hearder.vue'
import Footer from './components/footer.vue'
import { ref, provide } from 'vue'
import { useI18n } from 'vue-i18n';
const i18n = useI18n()

// provide 傳遞語系值給 header
const ProLanguage = ref('zh')
provide('ProLanguage', ProLanguage)

ProLanguage.value = localStorage.language

if(localStorage.language == undefined){
  localStorage.language = 'zh'
  location.reload()
}

// 偉恩寫法
// if(localStorage.language == undefined){
//   localStorage.language = 'zh'
//   ProLanguage.value = localStorage.language
//   location.reload()
// }else{
//   ProLanguage.value = localStorage.language
// }


</script>

<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style>
*{
  box-sizing: border-box;
  font-family: sans-serif;

}
body{
  margin: 0;
  padding: 0;
  place-items:unset;
}
#app{
  display: block;
  max-width: none;
  width: 100%;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>

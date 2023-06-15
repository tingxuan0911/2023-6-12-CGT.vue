<script setup>
import axios from 'axios';
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
const i18n = useI18n()
// 選取網址idx
const getNewsId = location.href.split('newsIdx=')[1]

// API
const getNews = () => {
    axios.post('http://192.168.66.17:81/showCgtnews/')
        .then(res => {
            console.log(res.data)
            newsLists.value = res.data[getNewsId]
            console.log(getNewsId)
            console.log(newsLists.value)
        })
}

const newsLists = ref([])

onMounted(() => {
    getNews()
})
</script>
<template>
    <main>
        <template v-if="i18n.locale.value == 'zh'">
            <h1>{{ newsLists.titleTW }}</h1>
            <div class="img">
                <img :src="newsLists.url">
            </div>
            <!-- v-html 印出陣列 html -->
            <p v-html="newsLists.contentTW" class="content"></p>
        </template>
        <template v-if="i18n.locale.value == 'en'">
            <h1>{{ newsLists.titleUS }}</h1>
            <div class="img">
                <img :src="newsLists.url">
            </div>
            <p v-html="newsLists.contentUS" class="content"></p>
        </template>
        <template v-if="i18n.locale.value == 'cn'">
            <h1>{{ newsLists.titleCN }}</h1>
            <div class="img">
                <img :src="newsLists.url">
            </div>
            <p v-html="newsLists.contentCN" class="content"></p>
        </template>

    </main>
</template>

<style scoped>
main {
    padding: 70px 15%;
    width: 100%;
}

main>h1 {
    font-weight: bold;
    text-align: center;
}

main img {
    width: 80%;
}

main p {
    color: #949494;
    letter-spacing: 1px;
}

.img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
}

/* .content css */
/* v-html印出來的畫面若要改變內文css，需用 v-html的class + ">>>" + 修改目標 */
.content>>>a {
    color: royalblue;
    text-decoration: underline;
}

.content>>>img {
    display: block;
    margin: 20px auto;
    width: 70%;
}

/* table */
.content>>>table {
    border-collapse: collapse;
    /* 表格邊框合併(共享) */
}

.content>>>td {
    border-bottom: 1px solid #000;
}
</style>

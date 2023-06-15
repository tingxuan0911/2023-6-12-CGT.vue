<script setup>
import axios from 'axios';
import { useI18n } from 'vue-i18n';
import { ref, onMounted} from 'vue';
const i18n = useI18n()

// API
const getNews = () => {
    axios.post('http://192.168.66.17:81/showCgtnews/')
        .then(res => {
            // console.log(res.data)
            newsLists.value = res.data
            console.log(newsLists.value)
        })
}
const newsLists = ref([])
onMounted(() => {
    getNews()
})


// localStorage儲存語系 test
const getLan = () => {
    localStorage.language = `${i18n.locale.value}`
}

</script>

<template>
    <main>
        <img class="main-bgi" src="../img/news-bgi.png" alt="">
        <div class="news">
            <template v-for="(newsList, idx) in newsLists" :key="idx">
                <template v-if="i18n.locale.value == 'zh'">
                    <!-- 建立子層網址 -->
                    <router-link :to="{ path: 'news1', query: { newsIdx: idx } }" @click="getLan()">
                        <img :src="newsList.url">
                        <p>{{ newsList.titleTW }}</p>
                    </router-link>
                </template>
                <template v-if="i18n.locale.value == 'en'">
                    <router-link :to="{ path: 'news1', query: { newsIdx: idx } }" @click="getLan()">
                        <img :src="newsList.url">
                        <p>{{ newsList.titleUS }}</p>
                    </router-link>
                </template>
                <template v-if="i18n.locale.value == 'cn'">
                    <router-link :to="{ path: 'news1', query: { newsIdx: idx } }" @click="getLan()">
                        <img :src="newsList.url">
                        <p>{{ newsList.titleCN }}</p>
                    </router-link>
                </template>
            </template>
        </div>
    </main>
</template>

<style scoped>
.main-bgi {
    width: 100%;
}

.news {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 5%;
    margin: 50px 0 40px 0;
    width: 100%;
}

.news a {
    margin-bottom: 20px;
    width: 28%;
    color: black;
}

.news a:hover {
    background-color: unset;
}

img {
    width: 100%;
    height: 18vw;
}

.news p {
    padding: 0px 10px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
}

@media (max-width: 1400px) {
    .news p {
        font-size: 20px;
    }
}

@media (max-width: 1200px) {
    .news p {
        font-size: 17px;
    }
}

@media (max-width: 768px) {
    .news {
        gap: 15%;
        margin: 50px 0 80px 0;
        width: 100%;
    }

    .news a {
        width: 32%;
    }

    .news img {
        height: 22vw;
    }
}

@media (max-width: 576px) {
    .news {
        margin: 50px 0 80px 0;
        width: 100%;
    }

    .news a {
        width: 250px;
    }

    .news img {
        height: 28vw;
    }
}</style>

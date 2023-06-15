<script setup>
// icon CDN
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'

import { ref, computed, inject } from 'vue';
import { useI18n } from 'vue-i18n';

const isAsc1 = ref(false)
const isAsc2 = ref(false)
const isAsc3 = ref(false)
const isAsc4 = ref(false)

const nowAsc = ref('') // 接收目前參數

const menuNavStatus = (getNav) => {
    isAsc1.value = false
    isAsc2.value = false
    isAsc3.value = false
    isAsc4.value = false
    if (nowAsc.value == getNav) {
        nowAsc.value = ''
    } else {
        nowAsc.value = getNav
        if (getNav == 'navBtn1') {
            isAsc1.value = true
        } else if (getNav == 'navBtn2') {
            isAsc2.value = true
        } else if (getNav == 'navBtn3') {
            isAsc3.value = true
        } else if (getNav == 'navBtn4') {
            isAsc4.value = true
        }
    }
}
// RWD
const check = ref(false)

// i18n
const i18n = useI18n()
const ProLanguage = inject('ProLanguage')
console.log(ProLanguage.value)
const changeLanguage = (locale) => {
    // console.log(locale.target.value) // select 接收選取的值
    // console.log(i18n.locale.value) // i18n目前選擇的值
    i18n.locale.value = locale.target.value
    localStorage.language = locale.target.value
};
</script>

<template>
    <header>
        <div>
            <router-link to="/">
                <img alt="" class="logo" src="../img/logo.png" width="80" />
                <p>CGT</p>
            </router-link>
        </div>
        <label>
            <div class="hamburger">
                <input type="checkbox" id="switch" @click="check = !check">
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
            </div>
        </label>
        <nav class="menu" :class="{ active: check }">
            <ul>
                <li @click="menuNavStatus('navBtn1')"> {{ $t('INTRODUCE') }}<i class="fa-solid fa-caret-down fa-2xs"></i>
                    <div v-if="isAsc1" class="selector">
                        <router-link to="/started">
                            <div>{{ $t('GETTINGSTARTEDGUIDE') }}</div>
                        </router-link>
                        <router-link to="/#">
                            <div>{{ $t('WHITEPAPER') }}</div>
                        </router-link>
                    </div>
                </li>
                <li @click="menuNavStatus('navBtn2')">{{ $t('RESOURCE') }}<i class="fa-solid fa-caret-down fa-2xs"></i>
                    <div v-if="isAsc2" class="selector">
                        <router-link to="/wallet">
                            <div>{{ $t('SELECTWALLET') }}</div>
                        </router-link>
                    </div>
                </li>
                <li @click="menuNavStatus('navBtn3')">{{ $t('PARTICIPATE') }}<i class="fa-solid fa-caret-down fa-2xs"></i>
                    <div v-if="isAsc3" class="selector">
                        <router-link to="/news">
                            <div>{{ $t('LATESTNEWS') }}</div>
                        </router-link>
                    </div>
                </li>
                <li @click="menuNavStatus('navBtn4')">{{ $t('OTHER') }}<i class="fa-solid fa-caret-down fa-2xs"></i>
                    <div v-if="isAsc4" class="selector">
                        <router-link to="/law">
                            <div>{{ $t('LAW') }}</div>
                        </router-link>
                        <router-link to="/privacy">
                            <div>{{ $t('PRIVACY') }}</div>
                        </router-link>
                    </div>
                </li>
                <select v-model="ProLanguage" @change="changeLanguage($event)">
                    <option value="cn">简体中文</option>
                    <option value="zh">繁體中文</option>
                    <option value="en">English</option>
                </select>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
a {
    color: #fff;
}

a:hover {
    background-color: unset;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    width: 100%;
    height: 110px;
    background-color: rgb(39, 39, 39);
    color: #fff;
}

header>div>a {
    display: flex;
    align-items: center;
}

header>div>a:hover {
    background-color: unset;
}

header>div>a>p {
    margin-left: 40px;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
}

/* ---------------------------------------- */
nav>ul {
    display: flex;
    align-items: center;
}

nav>ul>li {
    position: relative;
    margin-right: 50px;
    font-weight: bold;
    font-size: 16px;
}

nav>ul>li:hover {
    color: rgb(247, 195, 66);
    cursor: pointer;
}

select {
    color: #fff;
    background-color: rgb(39, 39, 39);
    padding: 10px 8px;
    border-radius: 3px;
}

svg {
    margin-left: 4px;
}

/* 下拉選單 */
.selector {
    position: absolute;
    top: 50px;
    left: -15px;
    padding: 0px;
    width: 210px;
    background-color: rgb(39, 39, 39);
    color: #fff;
}

.selector>a {
    width: 100%;
    line-height: 10px;
}

.selector>a>div {
    padding: 15px;
    width: 100%;
    height: 40px;
    font-size: 14px;
}

.selector>a>div:hover {
    background-color: #adadad;
}

.hamburger #switch {
    display: none;
}

@media (max-width: 1300px) {
    header {
        padding: 0 40px;
    }
}

@media (max-width: 992px) {
    ul {
        display: none;
    }

    .hamburger {
        display: block;
        position: relative;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    /* 叉叉變hamburger */
    .line {
        position: absolute;
        width: 25px;
        height: 3px;
        background-color: #ffffff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20;
        transition-property: top, transform;
        transition-duration: 0.5s, 0.1s;
    }

    .line-1 {
        top: 20%;
    }

    .line-2 {
        top: 50%;
    }

    .line-3 {
        top: 80%;
    }

    /* hamburger變叉叉 */
    #switch:checked~.line {
        transition-duration: 0.1s, 0.5s;
    }

    #switch:checked~.line-1 {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    #switch:checked~.line-2 {
        display: none;
    }

    #switch:checked~.line-3 {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 110px;
        right: -20px;
        width: 150vw;
        height: 0;
        background-color: rgb(39, 39, 39);
        overflow: hidden;
        transition: 1s;
    }

    .active {
        height: 260px;
    }

    nav ul {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 33%;
        padding: 0;
        list-style-type: none;
        width: 300px;
        text-align: center;
    }

    nav ul li {
        margin-bottom: 10px;
    }

    .selector {
        position: relative;
        top: 0px;
        left: 0px;
        font-size: 14px;
        padding: 0 0 0 110px;
        text-align: start;
    }

    .selector>a {
        padding: 0;
        height: 30px;
        width: 80vh;
        line-height: 30px;
    }

    .selector>a>div {
        padding: 0;
        margin-top: 5px;
        height: 30px;
        width: 70vw;
    }
}</style>

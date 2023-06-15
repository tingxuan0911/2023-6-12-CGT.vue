<script setup>

</script>

<template>
    <main>
        <img class="main-bgi" src="../img/chooseWallet-bgi.png" alt="">

        <div class="wallet">
            <h1>{{ $t('walletH')}}</h1>
            <div class="wallet-box">
                <div>
                    <img src="../img/chooseWallet-1.png" alt="">
                </div>
                <div class="box-right">
                    <p>Tronlink</p>
                    <a href="">
                        <img src="../img/chooseWallet-2.png" alt="">
                    </a>
                    <a href="">
                        <img src="../img/chooseWallet-3.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
a:hover{
    background-color: unset;
}
.main-bgi{
    width: 100%;
}
.wallet{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.wallet>h1{
    margin: 60px 0;
    font-weight: bolder;
    font-size: 34px;
    text-align: center;
}
.wallet-box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-bottom: 48px;
    width: 668px;
    height: 197px;
    box-shadow:0 0 20px 10px #ececec;
}
.wallet-box>div>img{
    margin: 40px;
    width: 119px;
}

.wallet-box>div>p{
    margin: -50px 0 20px 0;
    font-size: 24px;
    font-weight: bold;
}
.wallet-box>div>a{
    margin-right: 15px;
}
@media (max-width: 768px){
    .wallet-box{
        display: flex;
        flex-direction: column;
        padding: 40px 0;
        width: 90%;
        height: unset;
    }
    .wallet-box>div{
        width: 100%;
        text-align: center;
    }
    .wallet-box>div>img{
        margin: 0;
        width: 85%;
        
    }
    .box-right{
        margin-top: 70px;
    }
    .wallet-box>div>p{
        margin: -50px 0 20px 0;
        font-size: 24px;
        font-weight: bold;
    }
    .wallet-box>div>a{
        margin-right: 15px;
    }
}

</style>

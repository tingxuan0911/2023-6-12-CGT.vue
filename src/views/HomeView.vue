
<template>
    <main>
        <img class="main-bgi" src="../img/main-backgrand.png" alt="">

        <div class="main-main">
            <img alt="" class="logo" src="../img/logo.png">
            <p>{{ $t('homeP11')}} <br>
                {{ $t('homeP12')}}
            </p>
            <div>
                <router-link to="/started" class="main-yellow">{{ $t('homeA1')}}</router-link>
                <router-link to="/wallet" class="main-yellow">{{ $t('homeA2')}}</router-link>
            </div>
        </div>
        <div class="main-footer">
            <div class="main-footer-left">
                <h3>{{ $t('homeH31')}}</h3>
                <p> {{ $t('homeP2')}}</p>
                <div>
                    <img src="../img/main-footer-1.png" alt="">
                    <p> {{ $t('homeP3')}}</p>
                </div>
                <div>
                    <img src="../img/main-footer-2.png" alt="">
                    <p>{{ $t('homeP4')}}</p>
                </div>
                <div>
                    <img src="../img/main-footer-3.png" alt="">
                    <p>{{ $t('homeP5')}}</p>
                </div>
            </div>
            <div class="main-footer-right"></div>
        </div>
    </main>
</template>

<style scoped>
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width: 100%;
    background-color: #f1f1f1;
}
.main-bgi{
    width: 100%;
}
.main-main{
    margin: 80px 0;
    width: 100%;
    text-align: center;
}
.logo{
    width: 100px;
}
.main-main>p{
    margin-top: 20px;
    margin-bottom: 55px;
    font-size: 20px;
    color: #7c7c7c;
}
.main-main>div{
    display: flex;
    justify-content: center;
}
.main-yellow{
    margin: 0px 25px;
    padding: 20px 10px;
    width: 30vw;
    background-color: rgb(247, 195, 66);
    color: black;
    border-radius: 5px;
    font-size: 20px;
}
.main-yellow:hover{
    background-color: rgb(252, 217, 64);
}
.main-yellow:last-child{
    background-color: #ffffff;
}
.main-footer{
    display: flex;
    width: 100%;
    background-color: #ffffff;
}
.main-footer-left{
    padding: 100px 120px;
    width: 50%;
}
.main-footer-left>h3{
    font-size: 36px;
    font-weight: 600;
}
.main-footer-left>p{
    margin-bottom: 20px;
    font-size: 20px;
    color: #7c7c7c;
}
.main-footer-left>div{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}
.main-footer-left>div>p{
    font-size: 26px;
    color: #7c7c7c;
}
.main-footer-right{
    width: 50%;
    background-image:url("../img/main-footer-rught.png") ;
    background-size: cover;
}
@media (max-width: 992px){
    .main-footer{
        flex-direction: column-reverse;
    }
    .main-footer-left{
        width: 100%;
        padding: 50px;
    }
    .main-footer-right{
        width: 100%;
        height: 480px;
    }
}
@media (max-width: 500px){
    .main-yellow{
    margin: 0px 15px;
    padding: 10px 3%;
}
}
</style>

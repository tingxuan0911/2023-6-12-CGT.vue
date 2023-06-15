<template>
    <main>
      <img src="../img/started-img.png" alt="">
      <div>
        <h2>CGT</h2>
        <h2>{{ $t('startedH21')}}</h2>
        <!-- ----- -->
        <h3>{{ $t('startedH31')}}</h3>
      <div class="axis">
          <div class="left">
            <div>
              <h2>{{ $t('startedH22')}}</h2>
              <p>{{ $t('startedP1')}}</p>
            </div>
            <div>
              <h2>{{ $t('startedH23')}}</h2>
              <p>{{ $t('startedP2')}}</p>
            </div>
          </div>
          <div class="middle">
            <div><p>1</p></div>
            <div><p>2</p></div>
            <div><p>3</p></div>
            <div><p>4</p></div>
          </div>
          <div class="right">
            <div>
              <h2>{{ $t('startedH24')}}</h2>
              <p>{{ $t('startedP3')}}</p>
            </div>
            <div>
              <h2>{{ $t('startedH25')}}</h2>
              <p>{{ $t('startedP4')}}</p>
            </div>
          </div>
        </div>
      
        <h3>{{ $t('startedH31')}}</h3>
        <div class="axis">
          <div class="left">
            <div>
              <h2>{{ $t('startedH22')}}</h2>
              <p>{{ $t('startedP5')}}</p>
            </div>
            <div>
              <h2>{{ $t('startedH26')}}</h2>
              <p>{{ $t('startedP6')}}</p>
            </div>
          </div>
          <div class="middle">
            <div><p>1</p></div>
            <div><p>2</p></div>
            <div><p>3</p></div>
            <div><p>4</p></div>
          </div>
          <div class="right">
            <div>
              <h2>{{ $t('startedH27')}}</h2>
              <p>{{ $t('startedP7')}}</p>
            </div>
            <div>
              <h2>{{ $t('startedH28')}}</h2>
              <p>{{ $t('startedP8')}}</p>
            </div>
          </div>
        </div>
      </div>
   </main>
</template>

<style>
main{
  margin: 0 0 40px 0;
}
main>img{
  width: 100%;
}
main>div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
main>div>h2{
  font-weight: bolder;
  font-size: 36px;
  text-align: center;
}
main>div>h3{
  margin: 50px 0 50px 0;
  font-weight: bolder;
  font-size: 26px;
}
.axis{
  display: flex;
  justify-content: center;
  gap: 10px;
}
.left{
  width: 30%; 
}
.left>div{
  position: relative;
  margin-top: 40px;
  box-shadow:0 0 20px 10px #ececec;
}
.left>div::after{
  position: absolute;
  top: 12px;
  right: -12px;
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 11px 0 11px 13px;
  border-color: transparent transparent transparent #000000;
}
.left>div:first-child{
  margin-bottom: 210px;
}
.left>div>h2{
  padding: 5px 30px;
  background-color: #000;
  color: #fff;
  text-align: end;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.left>div>p{
  padding: 30px;
  font-size: 18px;
  color: #999999;
  text-align: end;
  height: 180px;
}
/* --------------------------------------------- */
.middle{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  text-align: center;
}
.middle::before{
  content: "";
  display: block;
  position: absolute;
  top: 80px;
  z-index: -99;
  width: 2px;
  height: 650px;
  background-color: #bdbdbd;
}
.middle>div{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 140px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow:0 0 20px 10px #ececec;
  background-color: #fff;
}
.middle>div>p{
  width: 30px;
  height: 30px;
  font-size: 22px;
  border: 2px solid #4873ff;
  color: #4873ff;
  border-radius: 50%;
  line-height: 26px;
  
}
/* ------------------------------------------------ */
.right{
width: 30%;
}
.right>div{
  position: relative;
  margin-top: 270px;
  box-shadow:0 0 20px 10px #ececec;
}
.right>div::after{
  position: absolute;
  top: 12px;
  left: -12px;
  z-index: 99;
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 11px 13px 11px 0;
  border-color: transparent #000000 transparent transparent;
}
.right>div:last-child{
  margin-top: 210px;
}
.right>div>h2{
  padding: 5px 30px;
  background-color: #000;
  color: #fff;
  text-align: start;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.right>div>p{
  padding: 30px;
  font-size: 18px;
  color: #999999;
  text-align: start;
  height: 180px;
}

@media (max-width: 1430px){
  .axis{
  gap: 20px;
  margin-top: -100px;
}
  .left>div{
  margin-top: 140px;
}
.left>div:first-child{
  margin-bottom: -20px;
} 
  .left>div>p{
  height: 280px;
}
.middle::before{
  top: 140px;
}
.right>div>p{
  height: 280px;
}
.right>div{
  margin-top: 360px;
}
.right>div:last-child{
  margin-top: 120px;
}
}


@media (max-width: 950px){
  .axis{
  gap: 30px;
  margin-top: -200px;
}
  .left>div{
  margin-top: 230px;
}
.left>div:first-child{
  margin-bottom: -200px;
} 
  .left>div>p{
  height: 370px;
}
.middle::before{
  top: 270px;
}
.right>div{
  margin-top: 450px;
}
.right>div>p{
  height: 370px;
}
.right>div:last-child{
  margin-top: 30px;
}
}

@media (max-width: 768px){
  .axis{
    position: relative;
    gap: 50px;
    margin-top: 0px;
  }
  .left{
    position: absolute;
    right: 16%;
    width: 50%;
  }
  .left>div{
  margin-top:10px;
}
.left>div:first-child{
  margin-bottom: 350px;
} 
  .left>div::after{
  top: 12px;
  left: -13px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 11px 13px 11px 0;
  border-color: transparent #000000 transparent transparent;
}
  .left>div>h2{
    text-align: start;
}
.left>div>p{
  height: 230px;
  text-align: start;
  padding: 20px;
}
.middle>div{
  margin-bottom: 230px;
}
.middle::before{
  top: 80px;
  height: 850px;
}
  .right{
    width: 50%;
  }
  .right>div{
  margin-top: 330px;
}
  .right>div>p{
  height: 230px;
  padding: 20px;
}
.right>div:last-child{
  margin-top: 340px;
}
}
@media (max-width: 645px){
    .left>div>p{
    font-size: 16px;
    height: 210px;
  }
  .right>div>p{
    font-size: 16px;
    height: 210px;
  }
}
@media (max-width: 578px){
  .left{
    right: 14%;
  }
  .left>div{
  margin-top: 20px;
}
.left>div:first-child{
  margin-bottom: 450px;
} 
  .left>div>p{
  padding: 15px;
  height: 300px;
}
.middle::before{
  height: 1200px;
  top: 70px;
}
.middle>div{
  margin-bottom: 320px;
}
.right>div{
  margin-top: 420px;
}
.right>div>p{
  padding: 15px;
  height: 300px;
}
.right>div:last-child{
  margin-top: 450px;
}
}

</style>

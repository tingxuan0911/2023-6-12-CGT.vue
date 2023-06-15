<script setup> 

</script>

<template>
    <footer>
         <div>
            <div>
                <img alt="" class="logo" src="../img/logo.png" width="80" />
                <p>CGT</p>
            </div>
            <ul>
                <li><a @click.prevent="" href="#">{{ $t('Introduce') }}</a></li>
                <li><router-link to="/started"><div>{{ $t('GettingStartedGuide') }}</div></router-link></li>
                <li><router-link to="/#"><div>{{ $t('Whitepaper') }}</div></router-link></li>
            
            </ul>
            <ul>
                <li><a @click.prevent="" href="#">{{ $t('Resource') }}</a></li>
                <li><router-link to="/wallet"><div>{{ $t('Selectwallet') }}</div></router-link></li>
            </ul>
            <ul>
                <li><a @click.prevent="" href="#">{{ $t('Participate') }}</a></li>
                <li><router-link to="/news"><div>{{ $t('Latestnews') }}</div></router-link></li>
            </ul>
            <ul>
                <li><a @click.prevent="" href="#">{{ $t('Other') }}</a></li>
                <li><router-link to="/law"><div>{{ $t('Law') }}</div></router-link></li>
                <li><router-link to="/privacy"><div>{{ $t('Privacy') }}</div></router-link></li>
            </ul>
            <ul>
                <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href=""><i class="fa-brands fa-whatsapp"></i></a></li>
                <li><a href=""><i class="fa-brands fa-telegram"></i></a></li>
            </ul>
        </div>
        <div class="copyright">
                <p>Copyright © CGT Inc.</p>
        </div>
    </footer>
    
</template>

<style scoped>
a{
    color: #fff;
    font-size: 17px;
}
a:hover{
    background-color: unset;
}
footer>div {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 90px 10%;
  width: 100%;
  background-color: rgb(39, 39, 39);
  color:#fff;
}
footer>div>div{
    text-align: center;
}
footer>div>ul:last-child{
        padding-top: 25px;
}
footer>div>div>p{
    font-size: 18px;
    font-weight: 600;
}
ul:last-child{
    display: flex;
}
svg{
    font-size: 34px;
    margin-left: 25px;
}
.copyright{
    padding: 15px;
    width: 100%;
    color: black;
    background-color: #f1f1f1;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
}
.copyright>p{
    font-weight: normal;
}

@media (max-width: 992px) {
    footer>div{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    footer>div>div{
        margin-bottom: 20px;
    }

    footer>div>ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0;
        padding: 0;
    }
    footer>div>ul:last-child{
        flex-direction: row;
        padding: 0;
    }
    svg{
    font-size: 34px;
    margin: 0 10px;
    }
}


</style>

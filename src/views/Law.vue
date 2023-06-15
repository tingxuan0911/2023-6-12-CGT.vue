<script setup>

</script>

<template>
    <main>
        <img class="main-bgi" src="../img/law-bgi.png" alt="">

       <div class="law">
        <h3>{{ $t('lawH31')}}</h3>
        <p>{{ $t('lawP1')}}</p>
        <h3>{{ $t('lawH32')}}</h3>
        <p>{{ $t('lawP2')}}</p>
        <h3>{{ $t('lawH33')}}</h3>
        <p>{{ $t('lawP31')}}<br>
            {{ $t('lawP32')}}<br>
            {{ $t('lawP33')}}<br>
            {{ $t('lawP34')}}<br>
            {{ $t('lawP35')}}<br>
            {{ $t('lawP36')}}</p>
        <h3>{{ $t('lawH34')}}</h3>
        <p>{{ $t('lawP4')}}</p>
        <h3>{{ $t('lawH35')}}</h3>
        <p>{{ $t('lawP5')}}</p>
        <h3>{{ $t('lawH36')}}</h3>
        <p>{{ $t('lawP6')}}</p>
        <h3>{{ $t('lawH37')}}</h3>
        <p>{{ $t('lawP7')}}</p>
        <h3>{{ $t('lawH38')}}</h3>
        <p>{{ $t('lawP8')}}</p>
        <h3>{{ $t('lawH39')}}</h3>
        <p>{{ $t('lawP9')}}</p>
        <h3>{{ $t('lawH310')}}</h3>
        <p>{{ $t('lawP10')}}</p>

       </div>
    </main>
</template>

<style scoped>
.main-bgi{
    width: 100%;
}
.law{
    margin: 80px 15%;
}
h3{
    width: 100%;
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
}
p{
    margin: 5px 0 80px 0;
    width: 100%;
    font-size: 18px;
    font-weight:lighter;
    color: rgb(134, 134, 134);
}
@media (max-width: 768px){
    .law{
    margin: 40px 15%;
}
}

</style>

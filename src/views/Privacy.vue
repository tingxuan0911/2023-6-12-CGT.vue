<script setup>

</script>

<template>
    <main>
        <img class="main-bgi" src="../img/privacy-bgi.png" alt="">

       <div class="law">
        <p>{{ $t('privacyP1')}}</p>

        <h3>{{ $t('privacyH31')}}</h3>
        <p>{{ $t('privacyP2')}}</p>
        <h3>{{ $t('privacyH32')}}</h3>
        <p>{{ $t('privacyP31')}}<br>
            <br>
            {{ $t('privacyP32')}}<br>
            <br>
            {{ $t('privacyP33')}}</p>
        <h3>{{ $t('privacyH33')}}</h3>
        <p>{{ $t('privacyP41')}}<br>
            <br>
            {{ $t('privacyP42')}}<br>
            <br>
            {{ $t('privacyP43')}}</p>
        <h3>{{ $t('privacyH34')}}</h3>
        <p>{{ $t('privacyP5')}}</p>
        <h3>{{ $t('privacyH35')}}</h3>
        <p>{{ $t('privacyP6')}}</p>
        

       </div>
    </main>
</template>

<style scoped>
.main-bgi{
    width: 100%;
}
.law{
    margin: 80px 17%;
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

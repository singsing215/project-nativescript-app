<template>
    <Page>
        <WebView
            src="https://leafletapi.mtchoy.now.sh/index.html?lat=22.2818462&lng=114.1836251&zoom=17&markerLat=22.2818462&markerLng=114.1836251&markerTitle=Hoi%20deen%20Court&locate=true" />
    </Page>
</template>

<script>
    export default {
        props: ["selectedProduct", "$delegate"]
    };
</script>

<style>
    data() {
        return {}
    }
</style>
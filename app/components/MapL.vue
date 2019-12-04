<template>
    <Page>
        <WebView
            src="https://leafletapi.mtchoy.now.sh/index.html?lat=22.3212966&lng=114.16478&zoom=17&markerLat=22.3212966&markerLng=114.16478&markerTitle=Lime%20Stardom&locate=true" />
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
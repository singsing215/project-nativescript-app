<template>
    <Page>
        <WebView src="https://leafletapi.mtchoy.now.sh/index.html?lat=22.2794683&lng=114.1533675&zoom=17&markerLat=22.2794683&markerLng=114.1533675&markerTitle=Robinson%20Heights&locate=true" />
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
<template>
    <Page>
        <WebView
            src="https://leafletapi.mtchoy.now.sh/index.html?lat=22.2849974&lng=114.1513049&zoom=17&markerLat=22.2849974&markerLng=114.1513049&markerTitle=AKVO%20Hotel&locate=true" />
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
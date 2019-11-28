<template>
    <Page>
        <ListView for="feed in feeds" @itemTap="onItemTap">
            <v-template>
                <FlexboxLayout flexDirection="row">
                    <Label :text="selectedProduct.title" margin="10"
                        class="h2" />
                </FlexboxLayout>
            </v-template>
        </ListView>
    </Page>
</template>

<script>
    import ProductDetail from "./ProductDetail";
    export default {
        props: ["selectedProduct", "$delegate"],
        methods: {
            onItemTap: function(args) {
                this.$navigateTo(ProductDetail, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedProduct: args.item,
                        $delegate: this
                    }
                });
            }
        },
        data() {
            return {
                feeds: []
            };
        },
        async mounted() {
            global.rootURL = "http://192.168.1.103:1337";
            var response = await fetch(
                global.rootURL + "/rent/json", {
                    method: "GET",
                    credentials: "same-origin"
                }
            );
            if (response.ok) {
                this.feeds = await response.json();
                console.log(JSON.stringify(this.feeds));
            } else {
                console.log(response.statusText);
            }
        }
    };
</script>

<style>
</style>
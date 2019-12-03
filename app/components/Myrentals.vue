<template>
    <page>
        <ListView for="feed in feeds.renting" style="height:1250px"
            @itemTap="onItemTap">
            <v-template>
                <FlexboxLayout flexDirection="row">
                    <Label :text="feed.title" margin="10" class="h2" />
                </FlexboxLayout>
            </v-template>
        </ListView>
    </page>
</template>

<script>
    import ProductDetail from "./ProductDetail";
    export default {
        props: ["selectedProduct", "$delegate"],
        data() {
            return {
                feeds: [],
                renting: []
            };
        },
        methods: {
            onItemTap: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log("Product selected: " + args.item.name);
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
        async mounted() {
            var response = await fetch(global.rootURL +
            "/user/2/renting", {
                method: "GET",
                credentials: "same-origin"
            });
            this.feeds = await response.json();
            console.log(JSON.stringify(this.feeds.renting));
        }
    };
</script>

<style>
</style>
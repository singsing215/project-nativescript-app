<template>
    <Page>
        <ActionBar title="Real Estate Rental System" />
        <StackLayout>
            <BottomNavigation height="400px">
                <TabStrip>
                    <TabStripItem>
                        <Label text="Home"></Label>
                        <Image src="res://home"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Estates"></Label>
                        <Image src="res://search"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Bedrooms"></Label>
                        <Image src="res://search"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Profile"></Label>
                        <Image src="res://settings"></Image>
                    </TabStripItem>
                </TabStrip>
                <!-- <Label text="Home Page" class="h2 text-center"> -->
                <TabContentItem>
                    <ListView for="feed in feeds" @itemTap="onItemTap">
                        <v-template>
                            <StackLayout height="300">
                                <Image :src="feed.url" stretch="aspectFill" />
                                <Label :text="feed.title" class="h2" />
                            </StackLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <!-- <Label text="Estates Page" class="h2 text-center"> -->
                <TabContentItem>
                    <ListView for="estate in estates">
                        <v-template>
                            <FlexboxLayout flexDirection="row">
                                <Label :text="estate.name" class="t-12"
                                    style="width: 60%" />
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <!-- <Label text="Bedrooms Page" class="h2 text-center"> -->
                <TabContentItem>
                    <WebView src="http://192.168.1.103:1337" />
                </TabContentItem>
                <!-- <Label text="Profile Page" class="h2 text-center"> -->
                <TabContentItem>
                    <GridLayout>
                        </Label>
                    </GridLayout>
                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import ProductDetail from "./ProductDetail";
    export default {
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

        data() {
            return {
                feeds: [],
                estates: [{
                        name: "Robinson Heights"
                    },
                    {
                        name: "Hoi deen Court"
                    },
                    {
                        name: "Lime Stardom"
                    },
                    {
                        name: "AKVO Hotel"
                    }
                ]
            };
        },

        async mounted() {
            global.rootURL = "http://192.168.1.103:1337";
            var response = await fetch(global.rootURL + "/rent/json", {
                method: "GET",
                credentials: "same-origin"
            });
            if (response.ok) {
                this.feeds = await response.json();
                console.log(JSON.stringify(this.feeds));
            } else {
                console.log(response.statusText);
            }
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>
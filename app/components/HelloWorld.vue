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
                    <ListView for="feed in feeds" @itemTap="onItemTap2"
                        style="height:1250px">
                        <v-template>
                            <FlexboxLayout flexDirection="row">
                                <Label :text="feed.estate" margin="10"
                                    class="h2" />
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <!-- <Label text="Bedrooms Page" class="h2 text-center"> -->
                <TabContentItem>
                    <ListView for="bedroom in bedrooms" @itemTap="onItemTap3"
                        style="height:1250px">
                        <v-template>
                            <FlexboxLayout flexDirection="row">
                                <Label :text="bedroom.name" margin="10"
                                    class="h2" />
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <!-- <Label text="Profile Page" class="h2 text-center"> -->
                <TabContentItem>
                    <Label text="hello world!" />
                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import ProductDetail from "./ProductDetail";
    import Title from "./Title";
    import Bedroom from "./Bedroom";
    import Bedroom3 from "./Bedroom3";
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
            },
            onItemTap2: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log("Product selected: " + args.item.name);
                this.$navigateTo(Title, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {}
                });
            },
            onItemTap3: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log("Product selected: " + args.item.name);
                this.$navigateTo(Bedroom, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedProduct3: args.item,
                        $delegate: this
                    }
                });
            }
        },

        data() {
            return {
                feeds: [],
                bedrooms: [{
                        name: "Bedrooms<=2",
                        url: "/rent/jpaginate?maxarea=2"
                    },
                    {
                        name: "Bedrooms>=3",
                        url: "/rent/jjpaginate?maxarea=3"
                    }
                ]
            };
        },

        async mounted() {
            var response = await fetch(global.rootURL + "/rent/jhome", {
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
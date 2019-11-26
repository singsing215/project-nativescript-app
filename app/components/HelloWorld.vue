<template>
    <Page>
        <ActionBar title="Home" />

        <StackLayout>
            <BottomNavigation>
                <TabStrip>
                    <TabStripItem>
                        <Label text="Home"></Label>
                        <Image src="res://home"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Estates"></Label>
                        <Image src="res://settings"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Bedrooms"></Label>
                        <Image src="res://settings"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Profile"></Label>
                        <Image src="res://search"></Image>
                    </TabStripItem>
                </TabStrip>
                <TabContentItem>

                    <ListView for="product in ladies" @itemTap="onItemTap">
                        <v-template>
                            <StackLayout orientation="vertical" height="300">
                                <Image :src="product.image"
                                    stretch="aspectFill" />
                                <Label :text="product.name" class="h2" />
                            </StackLayout>
                        </v-template>
                    </ListView>

                </TabContentItem>
                <TabContentItem>

                    <ListView for="product in gents" @itemTap="onItemTap">
                        <v-template>
                            <StackLayout orientation="vertical" height="300">
                                <Image :src="product.image"
                                    stretch="aspectFill" />
                                <Label :text="product.name" class="h2" />
                            </StackLayout>
                        </v-template>
                    </ListView>

                </TabContentItem>
                <TabContentItem>

                    <StackLayout orientation="vertical" margin="10">
                        <Label text="My Shopping Cart" class="h2" />

                        <ListView for="product in inCart" @itemTap="onItemTap"
                            height="300">
                            <v-template>
                                <FlexboxLayout flexDirection="row">
                                    <Image :src="product.image"
                                        class="thumb img-circle" />
                                    <Label
                                        :text="product.name + ' x ' + product.quantity"
                                        class="t-12" style="width: 60%" />
                                </FlexboxLayout>
                            </v-template>
                        </ListView>

                        <Label :text="'Total: $' + total" class="h2" />
                    </StackLayout>

                </TabContentItem>
                <TabContentItem>

                    <GridLayout rows="*" height="1000px">
                        <RadCartesianChart row="0" style="font-size: 12;">
                            <BarSeries v-tkCartesianSeries
                                :items="chartData"
                                categoryProperty="name"
                                valueProperty="quantity" />
                            <CategoricalAxis v-tkCartesianHorizontalAxis />
                            <LinearAxis v-tkCartesianVerticalAxis />
                        </RadCartesianChart>
                    </GridLayout>

                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadCartesianChart from "nativescript-ui-chart/vue";
    Vue.use(RadCartesianChart);

    import ProductDetail from "./ProductDetail";

    export default {
        mounted() {
            console.log("in mounted ");
            this.gents = this.Rent.filter(function(p) {
                return p.department == "Gents";
            });
            this.ladies = this.Rent.filter(function(p) {
                return p.department == "Ladies";
            });
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
            },

            updateCart: function() {
                var sum = 0;
                this.inCart = this.Rent.filter(function(p) {
                    sum += p.quantity * p.price;
                    return p.quantity > 0;
                });
                this.total = sum;
                this.chartData = this.Rent.slice();
            }
        },

        data() {
            return {
                chartData: [],
                inCart: [],
                total: 0,
                ladies: [],
                gents: [],
                Rent: [
      { id: 1, title: "半山自住品味靚裝-三房兩廁-中高層開揚景觀", estate: "Robinson Heights", url: "https://i1.28hse.com/2019/09/938689_2019094721.jpg", bedroom: 3, area: 899, tenant: 5, rent: 43000, property: "dummy" },
      { id: 2, title: "銅鑼灣2房2廳。即租即住。優質罕盤。", estate: "Hoi deen Court", url: "https://i1.28hse.com/2019/10/951089_2019104698.jpg", bedroom: 2, area: 700, tenant: 3, rent: 26500, property: "dummy" },
      { id: 3, title: "形品星寓。3分鐘到地鐵站", estate: "Lime Stardom", url: "https://i1.28hse.com/2019/09/930790_2019095031.jpg", bedroom: 1, area: 390, tenant: 2, rent: 19000, property: "dummy" },
      { id: 4, title: "中上環服務式住宅 2分鐘到地鐵", estate: "AKVO Hotel", url: " https://i1.28hse.com/2019/10/955789_2019101877.jpg", bedroom: 1, area: 605, tenant: 2, rent: 35000, property: "dummy" }
                ]
            };
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
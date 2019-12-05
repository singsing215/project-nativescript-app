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
                    <ListView for="home in homes" @itemTap="onItemTap">
                        <v-template>
                            <StackLayout>
                                <Image :src="home.url" height="300"
                                    stretch="aspectFill" />
                                <Label :text="home.title" margin="10"
                                    class="h2" />
                            </StackLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <!-- <Label text="Estates Page" class="h2 text-center"> -->
                <TabContentItem>
                    <ScrollView orientation="vertical">
                        <StackLayout orientation="vertical" margin="10"
                            class="form">
                            <Button text="Robinson Heights"
                                @tap="onButtonTap3"
                                class="btn btn-primary btn rounded-lg" />
                            <Button text="Hoi deen Court" @tap="onButtonTap4"
                                class="btn btn-primary btn rounded-lg" />
                            <Button text="Lime Stardom" @tap="onButtonTap5"
                                class="btn btn-primary btn rounded-lg" />
                            <Button text="AKVO Hotel" @tap="onButtonTap6"
                                class="btn btn-primary btn rounded-lg" />
                        </StackLayout>
                    </ScrollView>
                </TabContentItem>
                <!-- <Label text="Bedrooms Page" class="h2 text-center"> -->
                <TabContentItem>
                    <ScrollView orientation="vertical">
                        <StackLayout orientation="vertical" margin="10"
                            class="form">
                            <Button text="Bedrooms<=2" @tap="onButtonTap"
                                class="btn btn-primary btn rounded-lg" />
                            <Button text="Bedrooms>=3" @tap="onButtonTap2"
                                class="btn btn-primary btn rounded-lg" />
                        </StackLayout>
                    </ScrollView>
                </TabContentItem>
                <!-- "Profile Page" -->
                <TabContentItem>
                    <ScrollView orientation="vertical">
                        <StackLayout orientation="vertical" margin="10"
                            class="form">
                            <FlexboxLayout>
                                <Image
                                    src="https://hbimg.huabanimg.com/4ba5c23dab24b6cb77cd8794a4b64b6e54998c31189a-fYHrJF_fw658"
                                    stretch="aspectFill" width="50"
                                    height="50" ; />
                                <Label text="kenny" margin="10"
                                    class="text-right" id="kenny" />
                            </FlexboxLayout>
                            <Button text="Login" @tap="onButtonTap7"
                                class="btn btn-primary btn-rounded-lg"
                                type="submit" id="login" />
                            <Button text="Logoff" @tap="onButtonTap9"
                                class="btn btn-primary btn-rounded-lg"
                                type="submit" id="logout" v-show="logout" />
                            <Button text="My Rentals" @tap="onButtonTap8"
                                class="btn btn-primary btn-rounded-lg"
                                type="submit" id="myrent" />
                        </StackLayout>
                    </ScrollView>
                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import ProductDetail from "./ProductDetail";
    import Bedroom from "./Bedroom";
    import Bedroom3 from "./Bedroom3";
    import Robinson from "./Robinson";
    import Hoi from "./Hoi";
    import Lime from "./Lime";
    import AKVO from "./AKVO";
    import Login from "./Login";
    import Myrentals from "./Myrentals";
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
                    transitionAndroid: {},
                    props: {
                        selectedProduct2: args.item,
                        $delegate: this
                    }
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
            },
            onButtonTap() {
                console.log("Button was pressed");
                this.$navigateTo(Bedroom);
            },
            onButtonTap2() {
                console.log("Button was pressed");
                this.$navigateTo(Bedroom3);
            },
            onButtonTap3() {
                console.log("Button was pressed");
                this.$navigateTo(Robinson);
            },
            onButtonTap4() {
                console.log("Button was pressed");
                this.$navigateTo(Hoi);
            },
            onButtonTap5() {
                console.log("Button was pressed");
                this.$navigateTo(Lime);
            },
            onButtonTap6() {
                console.log("Button was pressed");
                this.$navigateTo(AKVO);
            },
            onButtonTap7() {
                console.log("Button was pressed");
                this.$navigateTo(Login);
            },
            onButtonTap8() {
                console.log("Button was pressed");
                this.$navigateTo(Myrentals);
            },
            async onButtonTap9() {
                var response = await fetch(global.rootURL +
                    "/user/jlogout/", {
                        method: "POST",
                        credentials: "same-origin"
                    });
                if (response.ok) {
                    var data = await response.json();
                    alert(data.message);
                } else {
                    alert(response.status + ": " + response.statusText);
                }
            }
        },

        data() {
            return {
                homes: [],
                logout:false
            };
        },

        async mounted() {
            var home = await fetch(global.rootURL + "/rent/jhome", {
                method: "GET",
                credentials: "same-origin"
            });
            this.homes = await home.json();
            var estate = await fetch(global.rootURL + "/rent/json", {
                method: "GET",
                credentials: "same-origin"
            });
            this.estates = await estate.json();
            console.log(user);
            if (user == "kenny") {
                this.logout = true;
            } else {
                this.logout = false;
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
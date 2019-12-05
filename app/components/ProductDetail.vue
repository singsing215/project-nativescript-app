<template>
    <Page>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical" margin="10" class="form">
                <Image :src="selectedProduct.url" height="300"
                    stretch="aspectFill" />
                <Label :text="selectedProduct.title" margin="10" class="h2" />
                <Label :text="'Estate: ' + selectedProduct.estate" class="h3"
                    margin="3" />
                <Label :text="'Bedroom: ' + selectedProduct.bedroom"
                    class="h3" margin="3" />
                <Label :text="'Rent: $' + selectedProduct.rent" class="h3"
                    margin="3" />
                <Label :text="'Tenant: ' + selectedProduct.tenant" class="h3"
                    margin="3" />
                <Label :text="'Area: ' + selectedProduct.area" class="h3"
                    margin="3" />
                <Button text="Move-in" @tap="onButtonTap1(selectedProduct.id)"
                    class="btn btn-primary btn-rounded-lg" id="button"
                    v-show="movein" />
                <Button text="Address"
                    @tap="onButtonTap2(selectedProduct.estate)"
                    class="btn btn-primary btn-rounded-lg" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import MapR from "./MapR";
    import MapH from "./MapH";
    import MapL from "./MapL";
    import MapA from "./MapA";
    export default {
        props: ["selectedProduct", "$delegate"],
        methods: {
            async onButtonTap1(id) {
                console.log(id);
                var result = await confirm({
                    title: "Are you sure?",
                    message: "to move in this appartment?",
                    okButtonText: "Yes ",
                    cancelButtonText: "No "
                });
                if (result) {
                    var response = await fetch(
                        global.rootURL + "/user/2/renting/add/" +
                        id, {
                            method: "POST",
                            credentials: "same-origin"
                        }
                    );
                    console.log(response);
                    if (response.ok) {
                        var data = await response.json();
                        alert(data.message);
                        window.location = data.url;
                        location.reload(true);
                    } else {
                        alert(response.status + ": " + response
                            .statusText);
                    }
                } else {
                    alert("cancelled");
                }
            },

            async onButtonTap2(estate) {
                console.log(estate);
                if (estate == "Robinson Heights") {
                    this.$navigateTo(MapR);
                }
                if (estate == "Hoi deen Court") {
                    this.$navigateTo(MapH);
                }
                if (estate == "Lime Stardom") {
                    this.$navigateTo(MapL);
                }
                if (estate == "AKVO Hotel") {
                    this.$navigateTo(MapA);
                }
            }
        },

        data() {
            return {
                movein: false
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
                this.movein = true;
            } else {
                this.movein = false;
            }
        }
    };
</script>
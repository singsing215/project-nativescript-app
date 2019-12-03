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
                <Label :text="'Address:'" class="h3" margin="3" />
                <WebView :src="selectedProduct.map" height="300"
                    stretch="aspectFill" />
                <Button text="Move-in" @tap="onButtonTap"
                    class="btn btn-primary btn-rounded-lg" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Bedroom from "./Bedroom";
    export default {
        props: ["selectedProduct", "$delegate"],
        methods: {
            async onButtonTap() {
                console.log("Button was pressed");
                var result = await confirm({
                    title: "Are you sure?",
                    message: "to move in  this appartment?",
                    okButtonText: "Yes ",
                    cancelButtonText: "No "
                });
                if (result) {
                    this.$navigateTo(Bedroom);
                }
            }
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
        }
    };
</script>
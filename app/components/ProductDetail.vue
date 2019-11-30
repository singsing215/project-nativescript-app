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
                <Button text="Move-in" @tap="onButtonTap"
                    class="btn btn-primary btn-rounded-lg" />
                <Button text="Address" @tap="onButtonTap"
                    class="btn btn-primary btn-rounded-lg" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        props: ["selectedProduct", "$delegate"]
    };
</script>
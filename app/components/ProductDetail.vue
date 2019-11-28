<template>
    <Page>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical" margin="10" class="form">
                <Image :src="selectedProduct.url" height="300"
                    stretch="aspectFill" />
                <Label :text="selectedProduct.title" margin="10" class="h2" />
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
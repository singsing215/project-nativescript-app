<template>
    <Page>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical" margin="10" class="form">
                <TextField v-model="textFieldValue" margin="30"
                    hint="username" />
                <TextField v-model="textFieldValue" margin="30"
                    hint="password" type="password" />
                <Button text="Login" @tap="onButtonTap"
                    class="btn btn-primary btn-rounded-lg" type="submit" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        props: ["selectedProduct", "$delegate"]
    };
</script>

<style>
    data() {
        return {}
    }
</style>
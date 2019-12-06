<template>
    <Page>
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical" margin="10" class="form">
                <TextField v-model="textFieldValue" margin="30"
                    hint="username" name="username" />
                <TextField v-model="textFieldValue2" margin="30"
                    hint="password" type="password" name="password" />
                <Button text="Login" @tap="onButtonTap"
                    class="btn btn-primary btn-rounded-lg" type="submit" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import HelloWorld from "./HelloWorld";
    export default {
        props: ["selectedProduct", "$delegate"],
        methods: {
            async onButtonTap() {
                var username = "visitor";
                var password = "123456";
                console.log(user);
                this.username = this.textFieldValue || 0;
                this.password = parseInt(this.textFieldValue2) || 0;
                // console.log(this.username);
                // console.log(this.password);
                var response = await fetch(global.rootURL +
                    "/user/jlogin/", {
                        method: "POST",
                        credentials: "same-origin",
                        body: "username=" + this.username +
                            "&password=" + this.password
                    });
                if (response.ok) {
                    var data = await response.json();
                    var user = global.user = this.username;
                    alert(data.message);
                    // this.$navigateTo(HelloWorld);
                } else {
                    alert(response.status + ": " + response.statusText);
                }
                console.log(user);
            },
        }
    };
</script>

<style>

</style>
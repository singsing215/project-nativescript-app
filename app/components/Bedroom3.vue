<template>
    <page>
        <ListView for="feed in feeds" style="height:1250px">
            <v-template>
                <FlexboxLayout flexDirection="row">
                    <Label :text="feed.title" margin="10" class="h2" />
                </FlexboxLayout>
            </v-template>
        </ListView>
    </page>
</template>

<script>
    export default {

        data() {
            return {
                feeds: []
            };
        },
        async mounted() {
            var response = await fetch(
                global.rootURL + "/rent/jjpaginate?maxarea=3", {
                    method: "GET",
                    credentials: "same-origin"
                }
            );
            this.feeds = await response.json();
        }
    };
</script>

<style>
</style>
<template>
    <Page class="page">
        <!--<ActionBar class="action-bar" title="Jus Broadcasting"/>-->
        <!--<WebView src="http://nativescript-vue.org/" />-->
        <!--<WebView src="<div><h1>Some Yellow static HTML</h1></div>" />-->
        <!--<WebView src="~/Network.html" />-->
        <StackLayout>
            <WebView @loadFinished="onLoadFinished" :src="src"/>

        </StackLayout>

        <!--<StackLayout>-->
        <!--<Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>-->
        <!--<Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>-->
        <!--</StackLayout>-->

    </Page>
</template>
<script>
    import webViewModule from "tns-core-modules/ui/web-view";

    export default {
        data() {
            return {
                src: '~/Network.html'
            }
        },
        methods: {
            onLoadFinished(args) {
                let message;
                if (!args.error) {
                    message = "WebView finished loading " + args.url;
                } else {
                    message = "Error loading " + args.url + ": " + args.error;
                }
            }
        }
    }
</script>
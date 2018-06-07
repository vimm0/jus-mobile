<template>
    <Page class="page">
        <!--<ActionBar class="action-bar" title="Jus Broadcasting"/>-->
        <!--<WebView src="http://nativescript-vue.org/" />-->
        <!--<WebView src="<div><h1>Some Yellow static HTML</h1></div>" />-->
        <!--<WebView src="~/Network.html" />-->
        <StackLayout>
            <Image src="http://jus-static-prod.s3-website-us-east-1.amazonaws.com/static/img/home-hero-bg.5fb3abf.jpeg"
                   class="cover"/>
            <WebView @loadFinished="onLoadFinished" :src="src" class="webview-network"/>
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
<style>
    .cover {
        /*background-image: url("~/images/background.png");*/
        /*background-repeat: no-repeat;*/
        /*background-position: center;*/
        background-size: cover;
    }

    .webview-network {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>
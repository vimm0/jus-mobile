<template>
    <Page class="page">
    <!--<WebView src="~/Network.html" />-->
    <StackLayout>
    <Image src="http://jus-static-prod.s3-website-us-east-1.amazonaws.com/static/img/home-hero-bg.5fb3abf.jpeg" class="cover"/>
        <DockLayout orientation="horizontal" horizontalAlignment="center" verticalAlignment="center" minHeight="100">
            <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus-punjabi.png" width="50" height="50" class="network" stretch="none"/>
            <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus24x7.png" width="50" height="50" class="network" stretch="none"/>
            <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus-one.png" width="50" height="50" class="network" stretch="none"/>
            <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/9xtashan.png" width="50" height="50" class="network" stretch="none"/>
            <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus-radio.png" width="50" height="50" class="network" stretch="none"/>
        </DockLayout>
    </StackLayout>
    </Page>
</template>
<script>
    import * as webViewModule from "tns-core-modules/ui/web-view";
    export default {
        data() {
            return {
                // src: 'http://docs.nativescript.org'
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
        },
        created() {
            // setTimeout(() => {
            // // let page = this.$refs.page.nativeView;
            // // let webView = page.getViewById('webView');
            // console.log("webViewModule");
            // console.log(webViewModule);
            // }, 1);
            
            // webView.on(webViewModule.android.getSettings().setDomStorageEnabled(true), function (webViewModule) {
            //  let message;
            //  if (!args.error) {
            //           message = "WebView finished loading " + args.url;
            //    }
            //    else {
            //     message = "Error loading " + args.url + ": " + args.error;
            //    }
            //  });
            // webView.on(webViewModule.android.getSettings().setDomStorageEnabled(true))
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

    .network {
        /* display: inline-block; */
        padding:0.5rem;
        margin-left: auto;
        margin-right: auto;
        /* width: 50%; */
    }
</style>
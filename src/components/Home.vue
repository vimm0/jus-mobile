<template>
    <Page class="page">
    <!--<WebView src="~/Network.html" />-->
            <ScrollView style="height: 100%">

    <StackLayout>
    <Image src="http://jus-static-prod.s3-website-us-east-1.amazonaws.com/static/img/home-hero-bg.5fb3abf.jpeg" class="cover"/>
       
    <StackLayout class="container">
        <StackLayout class="card" v-for="(item, index) in results" :key="index">
            <Image :src="item.pic" width="100" height="100" stretch="aspectFill" row="0" col="0" />
            <Label :text="item.title" /> 
            <Label :text="item.duration" /> 
            <Label :text="item.created" /> 
        </StackLayout>             
    </StackLayout>
    <DockLayout orientation="horizontal" horizontalAlignment="center" verticalAlignment="center" minHeight="100">
        <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus-punjabi.png" width="50" height="50" class="network" stretch="none"/>
        <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus24x7.png" width="50" height="50" class="network" stretch="none"/>
        <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus-one.png" width="50" height="50" class="network" stretch="none"/>
        <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/9xtashan.png" width="50" height="50" class="network" stretch="none"/>
        <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus-radio.png" width="50" height="50" class="network" stretch="none"/>
    </DockLayout>

    </StackLayout>
            </ScrollView>
    </Page>
</template>
<script>
    import * as webViewModule from "tns-core-modules/ui/web-view";
    // import Collection from './Collection'
    import axios from 'axios';

    export default {
        data() {
            return {
                results: '',
                 countries: [
        { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
        { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
      ],
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
            },
        onItemTap: function (args) {
      console.log('Item with index: ' + args.index + ' tapped');
    },
        },
        mounted() {
        const Vue = require('nativescript-vue/dist/index');
        axios.get(`http://52.202.70.246/v1/video/?page_size=0`).then(
        ({data}) => {
            this.results = data
            Vue.set(this.$data, 'results', data)
            console.log(data)
        }
      )
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
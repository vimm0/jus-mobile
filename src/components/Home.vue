<template>
    <Page class="page">
        <ActionBar android.systemIcon="ic_menu_back" class="action-bar" title="appTitle">
            <NavigationButton
                    v-if="$isAndroid"
                    text="Menu"
                    icon="res://ic_menu_white_24dp"
                    @tap="$refs.drawer.nativeView.showDrawer()"></NavigationButton>
            <ActionItem
                    v-else
                    text="Menu"
                    ios.position="left"
                    icon="res://ic_menu"
                    @tap="$refs.drawer.nativeView.showDrawer()"></ActionItem>
        </ActionBar>
        <RadSideDrawer id="drawer" ref="drawer" showOverNavigation="true">
            <StackLayout class="drawer-content" ~drawerContent>
                <StackLayout class="sidedrawer-header"></StackLayout>
                <ListView for="item in topNavItems">
                    <v-template>
                        <StackLayout @tap="goToPage(item.page)" orientation="horizontal" class="sidedrawer-list-group">
                            <Label class="mdi">{{fonticon(item.icon)}}</Label>
                            <Label :text="item.text"></Label>
                        </StackLayout>
                    </v-template>
                </ListView>
            </StackLayout>
            <StackLayout ~mainContent>
                <router-view/>
            </StackLayout>
        </RadSideDrawer>
        <ScrollView style="height: 100%">

            <StackLayout>
                <Image src="http://jus-static-prod.s3-website-us-east-1.amazonaws.com/static/img/home-hero-bg.5fb3abf.jpeg"
                       class="cover"/>

                <StackLayout class="container">
                    <StackLayout class="card" v-for="(item, index) in results" :key="index"
                                 @tap="$router.push({ name:'Local Video Detail',params: {videoId: item.id} })"
                                 v-if="item.is_local">
                        <Image :src="item.pic" width="auto" height="100" stretch="aspectFill" row="0" col="0"/>
                        <Label :text="item.title"/>
                        <Label :text="item.duration"/>
                        <Label :text="item.created"/>
                    </StackLayout>
                    <StackLayout class="card" v-for="(item, index) in results" :key="index"
                                 @tap="$router.push({ name:'External Video Detail',params: {videoId: item.id} })"
                                 v-if="item.is_local === false">
                        <Image :src="item.pic" width="auto" height="100" stretch="aspectFill" row="0" col="0"/>
                        <Label :text="item.title"/>
                        <Label :text="item.duration"/>
                        <Label :text="item.created"/>
                    </StackLayout>
                </StackLayout>
                <DockLayout orientation="horizontal" horizontalAlignment="center" verticalAlignment="center"
                            minHeight="100">
                    <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus-punjabi.png"
                           width="50" height="50" class="network" stretch="none"/>
                    <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus24x7.png"
                           width="50" height="50" class="network" stretch="none"/>
                    <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus-one.png"
                           width="50" height="50" class="network" stretch="none"/>
                    <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/9xtashan.png"
                           width="50" height="50" class="network" stretch="none"/>
                    <Image src="http://jusbroadcasting.com/jus-punjabi/wp-content/uploads/2016/09/jus-radio.png"
                           width="50" height="50" class="network" stretch="none"/>
                </DockLayout>

            </StackLayout>
        </ScrollView>
    </Page>
</template>
<script>
    import * as webViewModule from "tns-core-modules/ui/web-view";
    import axios from 'axios';
    import {fonticon} from 'nativescript-fonticon'

    export default {
        data() {
            return {
                results: '',
                topNavItems: [
                    {icon: 'mdi-home', text: 'Home', page: 'home'},
                    {icon: 'mdi-date-range', text: 'Events', page: 'events'},
                    {icon: 'mdi-nature-people', text: 'Conferences', page: 'conferences'}
                ],
                countries: [
                    {name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png"},
                    {name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png"},
                ],
            }
        },
        methods: {
            fonticon(icName) {
                try {
                    return fonticon(icName)
                }
                catch (e) {
                    return ''
                }
            },
            goToPage(page) {
                this.$router.push(page)
                this.$refs.drawer.nativeView.closeDrawer()
            },
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
                }
            )
            // Add shadow to iOS Drawer
            let _drawer = this.$refs.drawer
            if (_drawer._nativeView.ios) {
                const ios = _drawer._nativeView.ios
                // .. but if the menu is drawn 'above' the hostview, do this:
                ios.defaultSideDrawer.style.shadowMode = 2; // TKSideDrawerShadowMode.SideDrawer;
                // if you have shadowMode = 2, then you can add a little dim to the lower layer to add some depth. Keep it subtle though:
                ios.defaultSideDrawer.style.dimOpacity = 0.12;

                // then tweak the shadow to your liking:
                ios.defaultSideDrawer.style.shadowOpacity = 0.75; // 0-1, higher is darker
                ios.defaultSideDrawer.style.shadowRadius = 5; // higher is more spread

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

    .network {
        /* display: inline-block; */
        padding: 0.5rem;
        margin-left: auto;
        margin-right: auto;
        /* width: 50%; */
    }
</style>
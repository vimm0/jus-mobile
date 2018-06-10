<template>
    <Page class="page">
        <ScrollView style="height: 100%">
            <StackLayout>
                <Label text="Local Video Detail"/>
                <Label :text="obj.title"/>
            </StackLayout>
        </ScrollView>
    </Page>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'LocalVideoDetail',
        data() {
            return {
                obj: '',
                showMore: false,
                moreOrLess: '',
                playerOptions: {
                    video: {}
                }
            }
        },
        mounted() {
            const Vue = require('nativescript-vue/dist/index');
            if (this.$route.params.videoId) {
                console.log('outside axios')
                axios.get(`http://52.202.70.246/v1/local/video/` + this.$route.params.videoId).then(({data}) => {
                    console.log(data)
                    Vue.set(this.$data, 'obj', data)
                    conosle.log('inside axios')
                    console.log(this.obj)
                    let videoObj = Object.assign({
                            pic: JSON.parse(JSON.stringify(data.pic)),
                            defaultQuality: JSON.parse(JSON.stringify(0))
                        }, Object.assign({
                            quality: data.quality
                        })
                    )
                    let logo = Object.assign(JSON.parse(JSON.stringify(data.pic)))
                    Vue.set(this.playerOptions, 'video', videoObj)
                    Vue.set(this.playerOptions, 'logo', logo)
                })
            }
        }
    }
</script>

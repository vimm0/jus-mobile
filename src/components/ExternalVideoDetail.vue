<template>
    <Page class="page">
        <ActionBar :title="$route.path">
        </ActionBar>
        <ScrollView style="height: 100%">
            <StackLayout>
                <Label text="External Video Detail"/>

                <!--<WebView src="~/Network.html" />-->
                <Placeholder @load="createVideoView"/>

                <Label :text="obj.title"/>
            </StackLayout>
        </ScrollView>
    </Page>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'ExternalVideoDetail',
        data() {
            return {
                obj: '',
                showMore: false,
                moreOrLess: '',
                videoId: ''
            }
        },
        methods: {
            createVideoView(args) {

                //create videoview
                let mVideoView = new android.widget.VideoView(args.context);
                let mMediaController = new android.widget.MediaController(args.context);
                mMediaController.setAnchorView(mVideoView);

                // parse the uri
                let videoLink = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
                let mVideoURL = android.net.Uri.parse(videoLink);
                mVideoView.setVideoURI(mVideoURL);
                mVideoView.setMediaController(mMediaController);
                mVideoView.requestFocus();
                mVideoView.start();

                args.view = mVideoView;

                // Create our Complete Listener - this is triggered once a video reaches the end
                let completionListener = new android.media.MediaPlayer.OnCompletionListener({
                    onCompletion: function (args) {
                        console.log('Video Done');
                    }
                });
                // Set the listener using the correct method
                mVideoView.setOnCompletionListener(completionListener);
            }
        },
        mounted() {
            const Vue = require('nativescript-vue/dist/index');
            if (this.$route.params.videoId) {
                axios.get(`http://52.202.70.246/v1/external/video/` + this.$route.params.videoId)
                    .then(({data}) => {
                        Vue.set(this.$data, 'obj', data)
                        Vue.set(this.$data, 'videoId', data.video_id)
                    })
            }
        }
    }
</script>

<template>
    <Page class="page">
        <ActionBar :title="$route.path">
      </ActionBar>
            <ScrollView style="height: 100%">

    <StackLayout>
              <Label text="Video Detail" /> 
            <!-- <Label :text="item.id" /> -->
            <!-- {{ $route }} -->
            <Label :text="$route.path" />
    </StackLayout>
            </ScrollView>
    </Page>
</template>
<script>
    export default {
    name: 'VideoDetail',
    created () {
        console.log(this)
    }
    }
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <!-- <template v-if="story">
    <pre><code>{{ story.content }}</code></pre>
  </template> -->
</template>

<script setup>
const { slug } = useRoute().params;
const { story } = await useAsyncStoryblok(slug === "" ? "index" : slug, {
  api: {
    version: "draft",
    resolve_links: "url",
    // cv: Date.now(),
  },
});

useSeoMeta({
  title: () => story?.value?.content.seo[0].title,
  description: () => story?.value?.content.seo[0].description,
  ogImage: () => story?.value?.content.seo[0].image.filename,
});
</script>

<style lang="scss" scoped></style>

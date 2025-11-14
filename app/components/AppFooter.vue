<template>
  <footer
    role="contentinfo"
    class="header px-4 lg:px-8 py-4 border-t border-accent"
  >
    <div
      class="container flex flex-col gap-2 lg:flex-row-reverse lg:justify-between items-center"
    >
      <div class="flex">
        <Button v-if="config?.facebook.url" as-child size="icon" variant="ghost"
          ><a :href="config.facebook.url" :target="config.facebook.target"
            ><Facebook /></a
        ></Button>
        <Button
          v-if="config?.instagram.url"
          as-child
          size="icon"
          variant="ghost"
          ><a :href="config.instagram.url" :target="config.instagram.target"
            ><Instagram /></a
        ></Button>
      </div>
      <p
        class="text-balance text-center md:text-left leading-loose text-sm text-muted-foreground"
      >
        Built with
        <a href="https://shadcn-vue.com/" target="_blank">shadcn</a> and
        <a href="https://nuxt.com/" target="_blank">Nuxt3</a>. Code available on
        <a
          href="https://github.com/elliotcln/storyblok-nuxt-root"
          target="_blank"
          >Github</a
        >. Created by
        <a href="https://alty.studio" target="_blank">Alty Studio</a>.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Instagram, Facebook } from "lucide-vue-next";

defineProps({
  config: Object,
});
const footerLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];
</script>

<style lang="css" scoped>
a {
  @apply underline underline-offset-4;
}
</style>

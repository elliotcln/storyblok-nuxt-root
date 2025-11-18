<template>
  <footer role="contentinfo" class="header border-accent border-t py-4">
    <div
      class="container flex flex-col items-center gap-2 lg:flex-row-reverse lg:justify-between"
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
        class="text-muted-foreground text-center text-sm leading-loose text-balance md:text-left"
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

<script setup lang="ts">
import { Instagram, Facebook } from "lucide-vue-next";

defineProps<{
  config: AppConfig;
}>();
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

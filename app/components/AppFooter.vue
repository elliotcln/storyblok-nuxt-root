<template>
  <USeparator icon="lucide:asterisk" class="mt-4" />
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>
    <UNavigationMenu :items="footerLinks" variant="link" />
    <template #right>
      <UButton
        v-if="config.facebook"
        icon="stash:social-facebook-solid"
        color="neutral"
        variant="ghost"
        :to="config.facebook.url"
        :target="config.facebook.target ? config.facebook.target : '_self'"
        aria-label="Facebook"
      />
      <UButton
        v-if="config.instagram"
        icon="ant-design:instagram-filled"
        color="neutral"
        variant="ghost"
        :to="config.instagram.url"
        :target="config.instagram.target ? config.instagram.target : '_self'"
        aria-label="Instagram"
      />
    </template>
  </UFooter>
</template>

<script setup>
defineProps({
  config: Object,
});
const footerLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];
</script>

<style lang="scss" scoped></style>

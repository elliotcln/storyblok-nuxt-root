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
        icon="stash:social-facebook-solid"
        color="neutral"
        variant="ghost"
        to="/"
        target="_blank"
        aria-label="Facebook"
      />
      <UButton
        icon="ant-design:instagram-filled"
        color="neutral"
        variant="ghost"
        to="https://instagram.com/roamwithelliot"
        target="_blank"
        aria-label="Instagram"
      />
    </template>
  </UFooter>
</template>

<script setup>
const footerLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];
</script>

<style lang="scss" scoped></style>

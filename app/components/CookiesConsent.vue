<template>
  <div class="fixed right-4 bottom-4" v-if="!isBar">
    <Button
      @click.prevent="isBar = true"
      class="h-12 w-12 rounded-full"
      aria-label="Open Cookies consent bar"
      ><Icon name="noto:cookie"
    /></Button>
  </div>
  <div class="fixed inset-x-4 bottom-4 z-[999]" v-if="isBar">
    <Item variant="muted" class="bg-primary text-primary-foreground">
      <ItemMedia variant="icon" class="border-0 bg-transparent">
        <Icon name="noto:cookie" size="32px" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>We use Cookies</ItemTitle>
        <ItemDescription
          >This website uses cookies to ensure you get the best experience on
          our website.</ItemDescription
        >
      </ItemContent>
      <ItemActions>
        <Button variant="secondary" @click.prevent="acceptCookies"
          >Accept Cookies</Button
        >
        <Button @click.prevent="declineCookies">Decline Cookies</Button>
      </ItemActions>
    </Item>
  </div>
</template>

<script setup>
import { useLocalStorage } from "@vueuse/core";

const { proxy } = useScriptGoogleAnalytics();
const consent = useLocalStorage("consentGranted");
const isBar = ref(!consent.value);

proxy.gtag("consent", "default", {
  ad_user_data: consent.value,
  ad_personalization: consent.value,
  ad_storage: consent.value,
  analytics_storage: consent.value,
  wait_for_update: 500,
});

const acceptCookies = () => {
  isBar.value = false;
  consent.value = "granted";

  gtag("consent", "update", {
    ad_user_data: consent.value,
    ad_personalization: consent.value,
    ad_storage: consent.value,
    analytics_storage: consent.value,
  });
};
const declineCookies = () => {
  isBar.value = false;
  consent.value = "denied";

  gtag("consent", "update", {
    ad_user_data: consent.value,
    ad_personalization: consent.value,
    ad_storage: consent.value,
    analytics_storage: consent.value,
  });
};
</script>

<style scoped></style>

<template>
  <template
    v-if="blok.link.linktype === 'story' || blok.link.linktype === 'url'"
  >
    <Button
      :variant="blok.variant"
      :size="blok.size"
      as-child
      v-editable="blok"
      :class="[{ 'w-full': blok.block }]"
    >
      <NuxtLink
        :to="
          blok.link.linktype === 'story' ? blok.link.story.url : blok.link.url
        "
        :target="blok.link.target"
        :aria-label="blok.link.hide_label ? blok.label : null"
      >
        <template
          v-if="
            blok.icon &&
            (blok.size === 'icon' ||
              blok.size === 'icon-sm' ||
              blok.size === 'icon-lg')
          "
        >
          <Icon :name="blok.icon.icon" />
        </template>
        <template v-else-if="blok.icon">
          <Icon
            v-if="blok.icon.icon && !blok.trailing_icon"
            :name="blok.icon.icon"
          />
          {{ blok.label ? blok.label : blok.link.story.name }}
          <Icon
            v-if="blok.icon.icon && blok.trailing_icon"
            :name="blok.icon.icon"
          />
        </template>
        <template v-else>
          {{ blok.label ? blok.label : blok.link.story.name }}
        </template>
      </NuxtLink>
    </Button>
  </template>
  <template v-else>
    <Button :variant="blok.variant" :size="blok.size" v-editable="blok">{{
      blok.label
    }}</Button>
  </template>
</template>

<script setup lang="ts">
import type { ButtonItem } from "~/types/storyblok-components";

defineProps<{ blok: ButtonItem }>();
</script>

<style lang="scss" scoped></style>

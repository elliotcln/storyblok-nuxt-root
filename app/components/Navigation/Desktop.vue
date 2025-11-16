<template>
  <NavigationMenu id="main-nav" class="hidden xl:flex" :viewport="false">
    <NavigationMenuList>
      <template v-for="item in items" :key="item.label">
        <NavigationMenuItem>
          <NavigationMenuLink
            v-if="!item.children || item.children.length === 0"
            as-child
            :class="navigationMenuTriggerStyle()"
          >
            <NuxtLink
              :to="
                item.link.linktype === 'story'
                  ? item.link.story.url
                  : item.link.url
              "
              :target="item.link.target"
              >{{ item.label ? item.label : item.link.story.name }}</NuxtLink
            >
          </NavigationMenuLink>
          <NavigationMenuTrigger v-else>{{
            item.label ? item.label : item.link.story.name
          }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li
                v-for="(child, index) in item.children"
                :key="index"
                class="w-full"
              >
                <NavigationMenuLink as-child>
                  <NuxtLink
                    :to="
                      child.link.linktype === 'story'
                        ? child.link.story.url
                        : child.link.url
                    "
                    :target="child.link.target"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                    >{{
                      child.label ? child.label : child.link.story.name
                    }}</NuxtLink
                  >
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </template>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup>
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

defineProps({
  items: Object,
});
</script>

<style lang="scss" scoped></style>

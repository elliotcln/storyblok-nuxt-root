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
                  ? '/' + item.link.story.url
                  : '/' + item.link.url
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
                        ? '/' + child.link.story.url
                        : '/' + child.link.url
                    "
                    :target="child.link.target"
                    class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 text-sm leading-none no-underline transition-colors outline-none select-none"
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

<script setup lang="ts">
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

defineProps<{
  items: NavItem[];
}>();
</script>

<style lang="scss" scoped></style>

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
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </NavigationMenuLink>
          <NavigationMenuTrigger v-else>{{ item.label }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li
                v-for="(child, index) in item.children"
                :key="index"
                class="w-full"
              >
                <NavigationMenuLink as-child>
                  <NuxtLink
                    :to="child.to"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                    >{{ child.label }}</NuxtLink
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

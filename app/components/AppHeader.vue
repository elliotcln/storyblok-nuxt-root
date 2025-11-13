<template>
  <header role="banner" class="header px-4 lg:px-8 py-2 border-b border-accent">
    <div class="header-content flex h-full items-center justify-between">
      <NuxtLink to="/" class="text-lg font-semibold">{{
        config.app_title
      }}</NuxtLink>

      <!-- Desktop Navigation -->
      <NavigationMenu id="main-nav" class="max-xl:hidden">
        <NavigationMenuList>
          <NavigationMenuItem v-for="item in navItems">
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
              <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <!--  -->

      <div class="header-content--right flex gap-2">
        <!-- Mobile Navigation -->
        <Drawer>
          <DrawerTrigger as-child>
            <Button
              size="icon"
              variant="outline"
              class="xl:hidden"
              aria-label="toggle mobile navigation"
              ><Menu
            /></Button>
          </DrawerTrigger>
          <DrawerContent>
            <nav class="px-4 pb-4">
              <ul>
                <li v-for="item in navItems">
                  <Item as-child>
                    <NuxtLink :to="item.to">
                      <ItemContent>
                        <ItemHeader>{{ item.label }}</ItemHeader>
                      </ItemContent>
                      <ItemActions>
                        <ChevronRight class="h-4 w-4" />
                      </ItemActions>
                    </NuxtLink>
                  </Item>
                </li>
              </ul>
              <Separator class="my-4" />
              <div class="flex flex-col gap-2">
                <Button as-child class="w-full"
                  ><NuxtLink to="/">Post an offer</NuxtLink></Button
                >
                <Button as-child variant="secondary" class="w-full"
                  ><NuxtLink to="/signin"><LogIn /> Sign In</NuxtLink></Button
                >
              </div>
            </nav>
          </DrawerContent>
        </Drawer>
        <!-- -->

        <Button as-child class="hidden xl:inline-flex"
          ><NuxtLink to="/">Post an offer</NuxtLink></Button
        >
        <Button as-child class="hidden xl:inline-flex" variant="secondary"
          ><NuxtLink to="/signin"><LogIn /> Sign In</NuxtLink></Button
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { Item, ItemContent, ItemHeader } from "./ui/item";
import { LogIn, Menu, ChevronRight } from "lucide-vue-next";
import { Drawer, DrawerTrigger, DrawerContent } from "./ui/drawer";
import { Button } from "./ui/button";

defineProps({
  config: Object,
});

const navItems = [
  {
    label: "Paid offers",
    to: "/",
  },
  {
    label: "Volunteer offers",
    to: "/volunteer",
  },
  {
    label: "About HH",
    to: "/about",
  },
];
</script>

<style lang="scss" scoped></style>

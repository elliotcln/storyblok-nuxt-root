<template>
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
      <DrawerHeader class="sr-only">
        <DrawerTitle>Main Navigation</DrawerTitle>
        <DrawerDescription
          >Navigate through the website using the main
          navigation</DrawerDescription
        >
      </DrawerHeader>
      <nav class="px-4 pb-4">
        <ul>
          <li v-for="item in items">
            <template v-if="!item.children || item.children.length === 0">
              <Item as-child>
                <NuxtLink
                  :to="
                    item.link.linktype === 'story'
                      ? item.link.story.url
                      : item.link.url
                  "
                  :target="item.link.target"
                >
                  <ItemContent>
                    <ItemHeader>{{
                      item.label ? item.label : item.link.story.name
                    }}</ItemHeader>
                  </ItemContent>
                  <ItemActions>
                    <ChevronRight class="h-4 w-4" />
                  </ItemActions>
                </NuxtLink>
              </Item>
            </template>
            <template v-else>
              <Collapsible v-model:open="isOpen">
                <CollapsibleTrigger as-child>
                  <Button
                    class="hover:bg-accent/50 text-primary h-auto w-full cursor-pointer justify-between bg-transparent p-0 font-normal"
                  >
                    <Item class="w-full p-4">
                      <ItemContent>
                        <ItemHeader>{{
                          item.label ? item.label : item.link.story.name
                        }}</ItemHeader>
                      </ItemContent>
                      <ItemActions>
                        <Plus v-if="!isOpen" class="h-4 w-4" />
                        <Minus v-if="isOpen" class="h-4 w-4" />
                      </ItemActions>
                    </Item>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul>
                    <li v-for="child in item.children">
                      <Item as-child>
                        <NuxtLink
                          :to="
                            child.link.linktype === 'story'
                              ? child.link.story.url
                              : child.link.url
                          "
                          :target="child.link.target"
                          class="ml-4 text-xs"
                        >
                          <ItemContent>
                            <ItemHeader>{{
                              child.label ? child.label : child.link.story.name
                            }}</ItemHeader>
                          </ItemContent>
                          <ItemActions>
                            <ChevronRight class="h-4 w-4" />
                          </ItemActions>
                        </NuxtLink>
                      </Item>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </template>
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
</template>

<script setup lang="ts">
import { LogIn, Menu, ChevronRight, Plus, Minus } from "lucide-vue-next";
import type { NavItem } from "~/types/storyblok-components";

defineProps<{
  items: NavItem[];
}>();

const isOpen = ref(false);
</script>

<style lang="scss" scoped></style>

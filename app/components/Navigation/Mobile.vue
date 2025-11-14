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
                <NuxtLink :to="item.to">
                  <ItemContent>
                    <ItemHeader>{{ item.label }}</ItemHeader>
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
                    class="w-full justify-between p-0 h-auto cursor-pointer bg-transparent hover:bg-accent/50 text-primary font-normal"
                  >
                    <Item class="p-4 w-full">
                      <ItemContent>
                        <ItemHeader>{{ item.label }}</ItemHeader>
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
                        <NuxtLink :to="child.to" class="text-xs ml-4">
                          <ItemContent>
                            <ItemHeader>{{ child.label }}</ItemHeader>
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

<script setup>
import { LogIn, Menu, ChevronRight, Plus, Minus } from "lucide-vue-next";

defineProps({
  items: Object,
});

const isOpen = ref(false);
</script>

<style lang="scss" scoped></style>

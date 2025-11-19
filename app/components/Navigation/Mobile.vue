<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button
        size="icon"
        variant="outline"
        class="xl:hidden"
        aria-label="toggle mobile navigation"
      >
        <Icon name="hugeicons:menu-two-line" />
      </Button>
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
                    <Icon name="hugeicons:arrow-right-01" />
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
                        <Icon name="hugeicons:plus-sign" v-if="!isOpen" />
                        <Icon name="hugeicons:minus-sign" v-if="isOpen" />
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
                            <Icon name="hugeicons:arrow-right-01" />
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
      </nav>
      <DrawerFooter class="border-muted border-t" v-if="actions.length">
        <StoryblokComponent
          v-for="currentBlok in actions"
          :key="currentBlok._uid"
          :blok="currentBlok"
          class="w-full"
        />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
defineProps<{
  actions: ButtonItem[];
  items: NavItem[];
}>();

const isOpen = ref(false);
</script>

<style lang="scss" scoped></style>

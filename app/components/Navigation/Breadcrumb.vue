<template>
  <Breadcrumb class="mb-10">
    <BreadcrumbList>
      <BreadcrumbItem v-if="config" as-child>
        <NuxtLink to="/"> {{ JSON.parse(config).app_title }}</NuxtLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <template v-for="(link, index) in routes" :key="index">
        <BreadcrumbItem as-child v-if="index < routes.length - 1">
          <NuxtLink :to="'/' + link.to">{{ link.name }}</NuxtLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        <BreadcrumbItem as-child v-else>
          {{ link.name }}
        </BreadcrumbItem>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
const config = useLocalStorage<string | null>("config");
const router = useRouter();

type RouteLink = { name: string; to: string };
const routes = ref<RouteLink[]>([]);

const currentRoute = router.currentRoute;
const slugs = currentRoute.value.params.slug;
if (slugs && Array.isArray(slugs)) {
  slugs.forEach(async (slug, index) => {
    const prevSlug = slugs.slice(0, index + 1).join("/");
    if (prevSlug !== "") {
      await useAsyncStoryblok("/pages/" + prevSlug, {
        api: {
          version: "draft",
          resolve_links: "url",
        },
        bridge: {},
      }).then(({ story }) => {
        if (story.value) {
          routes.value.push({
            name: String(story.value.name ?? ""),
            to: String(story.value.slug ?? ""),
          });
        }
      });
    }
  });
}
</script>

<style scoped></style>

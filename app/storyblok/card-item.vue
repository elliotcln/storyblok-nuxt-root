<template>
  <Card v-editable="blok" class="w-full">
    <CardHeader>
      <CardTitle>{{ blok.title }}</CardTitle>
      <CardDescription>{{ blok.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <!-- <Vue3RuntimeTemplate :template="resolvedRichText"></Vue3RuntimeTemplate> -->
      {{ blok.content }}
    </CardContent>
    <CardFooter class="gap-2">
      <StoryblokComponent
        v-for="(currentBlok, index) in blok.actions"
        :key="index"
        :blok="currentBlok"
      />
    </CardFooter>
  </Card>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped></style>

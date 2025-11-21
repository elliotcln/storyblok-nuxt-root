<template>
  <Card v-editable="blok" class="w-full">
    <CardHeader>
      <CardTitle>{{ blok.title }}</CardTitle>
      <CardDescription v-if="blok.description">{{
        blok.description
      }}</CardDescription>
    </CardHeader>
    <CardContent v-if="blok.content">
      {{ blok.content }}
    </CardContent>
    <CardFooter class="gap-2" v-if="blok.actions.length">
      <StoryblokComponent
        v-for="(currentBlok, index) in blok.actions"
        :key="index"
        :blok="currentBlok"
      />
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
defineProps<{ blok: CardItem }>();
</script>

<style lang="scss" scoped></style>

<template>
  <Accordion
    v-editable="blok"
    class="mx-auto w-full max-w-2xl"
    type="single"
    collapsible
    default-value="0-faq"
  >
    <AccordionItem
      v-for="(question, index) in blok.questions"
      :key="question.uid"
      :value="index + '-faq'"
    >
      <AccordionTrigger class="text-md cursor-pointer">{{
        question.title
      }}</AccordionTrigger>
      <AccordionContent class="text-primary/50">
        <div v-html="question.content"></div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped></style>

<template>
  <nav
    role="navigation"
    aria-label="Skip links"
    class="group absolute top-[-900px] focus-within:top-0 w-full z-[100] bg-white"
  >
    <ul class="flex justify-center items-center p-2 gap-2">
      <li v-for="link in links">
        <Button as-child variant="secondary">
          <a :href="link.target">{{ link.label }}</a>
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const links = [
  {
    label: "Go to main navigation",
    target: "#main-nav",
  },
  {
    label: "Go to main content",
    target: "#main",
  },
];
</script>

<style lang="scss" scoped></style>

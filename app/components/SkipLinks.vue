<template>
  <nav
    role="navigation"
    aria-label="Skip links"
    class="group absolute top-[-900px] z-[100] w-full bg-white focus-within:top-0"
  >
    <ul class="flex items-center justify-center gap-2 p-2">
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

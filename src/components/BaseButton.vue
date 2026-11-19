<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    to?: string | Record<string, unknown>
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    to: undefined,
    variant: 'primary',
    size: 'md',
  },
)

const classes = computed(() => [
  'btn',
  props.variant === 'secondary' ? 'btn-outline' : props.variant === 'ghost' ? 'btn-ghost' : 'btn-primary',
  props.size === 'md' ? '' : `btn-${props.size}`,
].join(' '))
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="classes"><slot /></RouterLink>
  <button v-else type="button" :class="classes"><slot /></button>
</template>


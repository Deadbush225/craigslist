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
  `btn-${props.variant}`,
  `btn-${props.size}`,
].join(' '))
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="classes"><slot /></RouterLink>
  <button v-else type="button" :class="classes"><slot /></button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  box-shadow: none;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-sm {
  padding: 0.72rem 1rem;
  font-size: 0.85rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  box-shadow: 0 8px 18px rgba(123, 104, 233, 0.18);
}

.btn-secondary {
  background: var(--surface-strong);
  border-color: var(--border);
  color: var(--primary);
}

.btn-ghost {
  background: transparent;
  color: var(--muted);
  border-color: var(--border);
}
</style>

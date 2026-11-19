<script setup lang="ts">
import { messages } from '../data/mockData'
</script>

<template>
  <div class="page-shell page-shell--tight">
    <div class="grid grid-cols-1 lg:grid-cols-[22rem_minmax(0,1fr)] gap-6">
      <aside class="card bg-base-100 border border-base-300 shadow-sm">
        <div class="card-body p-4">
          <div class="flex items-center justify-between">
            <h2 class="card-title">My Inquiries</h2>
            <button type="button" class="btn btn-primary btn-sm btn-soft">New</button>
          </div>

          <div class="filter mt-3 flex-wrap">
            <input class="btn btn-sm filter-reset" type="radio" name="message-filter" aria-label="All (4)" />
            <input class="btn btn-sm" type="radio" name="message-filter" aria-label="Unread (1)" />
            <input class="btn btn-sm" type="radio" name="message-filter" aria-label="Services" />
          </div>

          <ul class="list mt-2">
            <li v-for="message in messages" :key="message.name" class="list-row">
              <div class="avatar placeholder">
                <div class="bg-primary text-primary-content rounded-full w-10">
                  <span>{{ message.name.charAt(0) }}</span>
                </div>
              </div>
              <div class="min-w-0">
                <strong>{{ message.name }}</strong>
                <div class="truncate text-sm text-base-content/60">{{ message.preview }}</div>
              </div>
              <div class="flex flex-col items-end gap-1 text-xs">
                <span>{{ message.time }}</span>
                <span v-if="message.unread > 0" class="badge badge-primary badge-xs">{{ message.unread }}</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <section class="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
        <div class="flex items-center justify-between border-b border-base-300 px-5 py-4">
          <div class="flex items-center gap-2">
            <h2 class="card-title">Lina J.</h2>
            <span class="status status-success"></span>
            <small class="text-base-content/60">Online now</small>
          </div>
          <RouterLink to="/provider/1" class="btn btn-ghost btn-sm">View profile</RouterLink>
        </div>

        <div class="chat-thread flex min-h-[22.5rem] flex-col gap-3 bg-base-200/50 px-5 py-4">
          <div class="chat chat-start">
            <div class="chat-bubble chat-bubble-primary">
            <p>Hi! I saw your painting listing. Can you tell me about your turnaround time?</p>
            </div>
            <time class="chat-footer opacity-60">9:18 AM</time>
          </div>
          <div class="chat chat-end">
            <div class="chat-bubble">
            <p>Absolutely. I can do a two-room refresh in about 3 days and keep the site spotless.</p>
            </div>
            <time class="chat-footer opacity-60">9:20 AM</time>
          </div>
          <div class="chat chat-start">
            <div class="chat-bubble chat-bubble-primary">
            <p>Perfect. Could you send the full quote for my living room and kitchen?</p>
            </div>
            <time class="chat-footer opacity-60">9:22 AM</time>
          </div>
        </div>

        <div class="join w-full border-t border-base-300 p-4">
          <input type="text" class="input input-bordered join-item flex-1" placeholder="Type a message" />
          <button type="button" class="btn btn-primary btn-sm">Send</button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.messaging-layout {
  display: grid;
  grid-template-columns: 360px minmax(0, 1fr);
  gap: 22px;
}

.conversation-list {
  padding: 18px;
}

.conversation-item {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
  padding: 10px 8px;
  border-radius: 14px;
  margin-top: 10px;
}

.conversation-item.unread {
  background: rgba(77, 70, 231, 0.05);
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dfe4ff, #ced5ff);
  display: grid;
  place-items: center;
  color: var(--primary);
  font-weight: 800;
}

.conversation-item strong {
  display: block;
  margin-bottom: 4px;
}

.message-meta {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
  font-size: 0.72rem;
  color: var(--muted);
}

.message-meta em {
  min-width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  font-style: normal;
  font-weight: 800;
}

.quick-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 10px;
}

.pill {
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.8);
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
}

.pill--active {
  background: var(--primary);
  color: white;
  border-color: transparent;
}

.chat-panel {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
}

.chat-header {
  padding: 16px 18px 12px;
  border-bottom: 1px solid var(--border);
}

.chat-thread {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 360px;
  padding: 18px 22px;
  background: linear-gradient(180deg, #f9fafe 0%, #f4f5ff 100%);
}

.bubble {
  max-width: 72%;
  padding: 12px 14px;
  border-radius: 18px;
  line-height: 1.6;
}

.bubble p {
  margin: 0 0 6px;
}

.bubble time {
  font-size: 0.72rem;
  opacity: 0.7;
}

.bubble.incoming {
  align-self: flex-start;
  background: #edf1ff;
}

.bubble.outgoing {
  align-self: flex-end;
  background: var(--primary);
  color: white;
}

.composer {
  display: flex;
  gap: 12px;
  padding: 18px 22px 22px;
  border-top: 1px solid var(--border);
}

.composer input {
  flex: 1;
  padding: 12px 14px;
}

@media (max-width: 980px) {
  .messaging-layout {
    grid-template-columns: 1fr;
  }
}
</style>

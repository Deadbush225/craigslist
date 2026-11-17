<script setup lang="ts">
import { messages } from '../data/mockData'
</script>

<template>
  <div class="page-shell page-shell--tight">
    <div class="container messaging-layout">
      <aside class="card conversation-list">
        <div class="panel-header">
          <h3>My Inquiries</h3>
          <button type="button" class="small-link">New</button>
        </div>

        <div class="quick-pills">
          <button type="button" class="pill pill--active">All (4)</button>
          <button type="button" class="pill">Unread (1)</button>
          <button type="button" class="pill">Services</button>
        </div>

        <div v-for="message in messages" :key="message.name" class="conversation-item" :class="{ unread: message.unread > 0 }">
          <div class="avatar">{{ message.name.charAt(0) }}</div>
          <div>
            <strong>{{ message.name }}</strong>
            <small>{{ message.preview }}</small>
          </div>
          <div class="message-meta">
            <span>{{ message.time }}</span>
            <em v-if="message.unread > 0">{{ message.unread }}</em>
          </div>
        </div>
      </aside>

      <section class="card chat-panel">
        <div class="panel-header chat-header">
          <div>
            <h3>Lina J.</h3>
            <small>Online now</small>
          </div>
          <button type="button" class="small-link">View profile</button>
        </div>

        <div class="chat-thread">
          <div class="bubble incoming">
            <p>Hi! I saw your painting listing. Can you tell me about your turnaround time?</p>
            <time>9:18 AM</time>
          </div>
          <div class="bubble outgoing">
            <p>Absolutely. I can do a two-room refresh in about 3 days and keep the site spotless.</p>
            <time>9:20 AM</time>
          </div>
          <div class="bubble incoming">
            <p>Perfect. Could you send the full quote for my living room and kitchen?</p>
            <time>9:22 AM</time>
          </div>
        </div>

        <div class="composer">
          <input type="text" placeholder="Type a message" />
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

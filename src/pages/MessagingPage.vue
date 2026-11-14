<script setup lang="ts">
import { messages } from '../data/mockData'
</script>

<template>
  <div class="page-shell compact-page">
    <div class="container messaging-layout">
      <aside class="card conversation-list">
        <div class="panel-header">
          <h3>Messages</h3>
          <button type="button" class="small-link">New</button>
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

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { listings, messages, providers, type Conversation } from '../data/mockData'

const route = useRoute()
const router = useRouter()
const conversations = ref<Conversation[]>(
  messages.map((conversation) => ({ ...conversation, thread: conversation.thread.map((item) => ({ ...item })) })),
)
const selectedFilter = ref('All')
const draft = ref('')
const newChatDialog = ref<HTMLDialogElement>()
const selectedListingId = ref('')

const routeConversationId = computed(() => Number(route.query.conversation))
const routeListingId = computed(() => Number(route.query.listing))
const routeProviderId = computed(() => Number(route.query.provider))

const filteredConversations = computed(() => {
  if (selectedFilter.value === 'Unread') return conversations.value.filter((conversation) => conversation.unread > 0)
  if (selectedFilter.value === 'Services') return conversations.value.filter((conversation) => conversation.category === 'Services')
  if (selectedFilter.value === 'Jobs') return conversations.value.filter((conversation) => conversation.category === 'Jobs')
  return conversations.value
})

const selectedConversation = computed(() =>
  conversations.value.find((conversation) => conversation.id === routeConversationId.value)
    ?? conversations.value.find((conversation) => conversation.listingId === routeListingId.value)
    ?? conversations.value[0],
)

function ensureProviderConversation() {
  const provider = providers.find((item) => item.id === routeProviderId.value)
  if (!provider) return

  const existing = conversations.value.find((conversation) => conversation.providerId === provider.id)
  if (existing) {
    selectConversation(existing)
    return
  }

  const nextId = Math.max(...conversations.value.map((conversation) => conversation.id), 0) + 1
  const conversation: Conversation = {
    id: nextId,
    name: provider.name,
    role: provider.role,
    image: provider.image,
    preview: `Started a chat with ${provider.name}`,
    time: 'Now',
    unread: 0,
    category: 'Services',
    contextTitle: `${provider.role} consultation`,
    providerId: provider.id,
    online: true,
    thread: [
      {
        id: Date.now(),
        from: 'me',
        text: `Hi ${provider.name}, I would like to ask about your ${provider.role.toLowerCase()} services.`,
        time: 'Now',
      },
    ],
  }
  conversations.value.unshift(conversation)
  router.replace({ path: '/messaging', query: { conversation: String(conversation.id) } })
}

function selectConversation(conversation: Conversation) {
  conversation.unread = 0
  router.replace({ path: '/messaging', query: { conversation: String(conversation.id) } })
  draft.value = ''
}

function sendMessage() {
  const text = draft.value.trim()
  if (!text || !selectedConversation.value) return

  const now = new Intl.DateTimeFormat('en-PH', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date())

  selectedConversation.value.thread.push({
    id: Date.now(),
    from: 'me',
    text,
    time: now,
  })
  selectedConversation.value.preview = text
  selectedConversation.value.time = 'Now'
  draft.value = ''
}

function openNewChat() {
  selectedListingId.value = ''
  newChatDialog.value?.showModal()
}

function startChat() {
  const listingId = Number(selectedListingId.value)
  const listing = listings.find((item) => item.id === listingId)
  if (!listing) return

  const existing = conversations.value.find((conversation) => conversation.listingId === listing.id)
  if (existing) {
    selectConversation(existing)
  } else {
    const nextId = Math.max(...conversations.value.map((conversation) => conversation.id), 0) + 1
    const conversation: Conversation = {
      id: nextId,
      name: listing.category === 'Jobs' ? 'Hiring team' : 'Listing owner',
      role: listing.category === 'Jobs' ? 'Recruiter' : 'Seller',
      image: listing.image,
      preview: `Started a chat about ${listing.title}`,
      time: 'Now',
      unread: 0,
      category: listing.category as Conversation['category'],
      contextTitle: listing.title,
      listingId: listing.id,
      online: true,
      thread: [
        {
          id: Date.now(),
          from: 'me',
          text: `Hi, I am interested in "${listing.title}". Is this still available?`,
          time: 'Now',
        },
      ],
    }
    conversations.value.unshift(conversation)
    router.replace({ path: '/messaging', query: { conversation: String(conversation.id) } })
  }

  newChatDialog.value?.close()
}

watch(
  () => route.query,
  () => {
    if (routeProviderId.value) ensureProviderConversation()
    if (selectedConversation.value) selectedConversation.value.unread = 0
  },
  { immediate: true },
)
</script>

<template>
  <div class="page-shell page-shell--tight">
    <div class="grid grid-cols-1 lg:grid-cols-[22rem_minmax(0,1fr)] gap-6">
      <aside class="card bg-base-100 border border-base-300 shadow-sm">
        <div class="card-body p-4">
          <div class="flex items-center justify-between">
            <h2 class="card-title">My Inquiries</h2>
            <button type="button" class="btn btn-primary btn-sm" @click="openNewChat">
              <span class="material-symbols-outlined text-base">add</span>
              New
            </button>
          </div>

          <div class="filter mt-3 flex-wrap" aria-label="Conversation filters">
            <input
              v-model="selectedFilter"
              class="btn btn-sm"
              type="radio"
              name="message-filter"
              value="All"
              aria-label="All"
            />
            <input
              v-model="selectedFilter"
              class="btn btn-sm"
              type="radio"
              name="message-filter"
              value="Unread"
              aria-label="Unread"
            />
            <input
              v-model="selectedFilter"
              class="btn btn-sm"
              type="radio"
              name="message-filter"
              value="Services"
              aria-label="Services"
            />
            <input
              v-model="selectedFilter"
              class="btn btn-sm"
              type="radio"
              name="message-filter"
              value="Jobs"
              aria-label="Jobs"
            />
          </div>

          <ul class="list mt-2">
            <li
              v-for="conversation in filteredConversations"
              :key="conversation.id"
              class="list-row cursor-pointer"
              :class="{ 'bg-primary/5': selectedConversation?.id === conversation.id }"
              @click="selectConversation(conversation)"
            >
              <div class="avatar">
                <div class="w-10 rounded-full">
                  <img :src="conversation.image" :alt="conversation.name" />
                </div>
              </div>
              <div class="min-w-0">
                <strong>{{ conversation.name }}</strong>
                <div class="truncate text-sm text-base-content/60">{{ conversation.preview }}</div>
                <div class="mt-1 text-xs text-primary">{{ conversation.category }} · {{ conversation.contextTitle }}</div>
              </div>
              <div class="flex flex-col items-end gap-1 text-xs">
                <span>{{ conversation.time }}</span>
                <span v-if="conversation.unread > 0" class="badge badge-primary badge-xs">
                  {{ conversation.unread }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <section v-if="selectedConversation" class="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
        <div class="flex items-center justify-between border-b border-base-300 px-5 py-4">
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img :src="selectedConversation.image" :alt="selectedConversation.name" />
              </div>
            </div>
            <div>
              <h2 class="card-title text-base">{{ selectedConversation.name }}</h2>
              <div class="flex items-center gap-2 text-xs text-base-content/60">
                <span v-if="selectedConversation.online" class="status status-success"></span>
                {{ selectedConversation.online ? 'Online now' : selectedConversation.role }}
              </div>
            </div>
          </div>
          <RouterLink
            v-if="selectedConversation.listingId"
            :to="{ path: '/services', query: { q: selectedConversation.contextTitle } }"
            class="btn btn-ghost btn-sm"
          >
            View listing
          </RouterLink>
        </div>

        <div class="border-b border-base-300 px-5 py-3 bg-base-100">
          <div class="text-xs font-bold uppercase text-base-content/50">{{ selectedConversation.category }}</div>
          <div class="font-semibold">{{ selectedConversation.contextTitle }}</div>
        </div>

        <div class="flex min-h-[22.5rem] flex-col gap-3 overflow-y-auto bg-base-200/50 px-5 py-4">
          <div
            v-for="message in selectedConversation.thread"
            :key="message.id"
            class="chat"
            :class="message.from === 'me' ? 'chat-end' : 'chat-start'"
          >
            <div
              class="chat-bubble"
              :class="message.from === 'me' ? '' : 'chat-bubble-primary'"
            >
              {{ message.text }}
            </div>
            <time class="chat-footer opacity-60">{{ message.time }}</time>
          </div>
        </div>

        <form class="join w-full border-t border-base-300 p-4" @submit.prevent="sendMessage">
          <input
            v-model="draft"
            type="text"
            class="input input-bordered join-item flex-1"
            placeholder="Type a message"
          />
          <button type="submit" class="btn btn-primary join-item" :disabled="!draft.trim()">Send</button>
        </form>
      </section>
    </div>

    <dialog ref="newChatDialog" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Start a chat</h3>
        <p class="py-2 text-sm text-base-content/60">Choose an existing listing or job to contact the owner or hiring team.</p>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Listing or job</legend>
          <select v-model="selectedListingId" class="select select-bordered w-full">
            <option value="" disabled>Select a listing</option>
            <optgroup label="Jobs">
              <option v-for="listing in listings.filter((item) => item.category === 'Jobs')" :key="listing.id" :value="String(listing.id)">
                {{ listing.title }}
              </option>
            </optgroup>
            <optgroup label="Listings">
              <option v-for="listing in listings.filter((item) => item.category !== 'Jobs')" :key="listing.id" :value="String(listing.id)">
                {{ listing.title }}
              </option>
            </optgroup>
          </select>
        </fieldset>

        <div class="modal-action">
          <button type="button" class="btn" @click="newChatDialog?.close()">Cancel</button>
          <button type="button" class="btn btn-primary" :disabled="!selectedListingId" @click="startChat">
            Start chat
          </button>
        </div>
      </div>
      <button type="button" class="modal-backdrop" aria-label="Close" @click="newChatDialog?.close()">Close</button>
    </dialog>
  </div>
</template>

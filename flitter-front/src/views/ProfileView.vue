<script lang="ts" setup>
import { Flit } from "@/models/flit";
import { User } from "@/models/user";
import { ref, defineProps, onMounted, watch } from "vue";
import UserService from "@/services/UserService";
import FlitService from "@/services/FlitService";
import FlitFeed from "@/components/FlitFeed.vue";
import UserProfile from "@/components/UserProfile.vue";

const LIMIT = 8;

const props = defineProps({ username: { type: String, required: true } });

const flits = ref<Flit[]>([]);
const flitsLoading = ref(true);
const user = ref<User | null>(null);
const userLoading = ref(true);
const page = ref(1);

const fetchUser = () => {
  return UserService.getUser(props.username)
    .then((result) => {
      user.value = result;
      return result;
    })
    .finally(() => (userLoading.value = false));
};

const fetchFlits = (userId: string) => {
  FlitService.findFlits({
    skip: (page.value - 1) * LIMIT,
    limit: LIMIT,
    sort: "-date",
    author: userId,
  })
    .then((results) => (flits.value = results))
    .finally(() => (flitsLoading.value = false));
};

watch(page, () => {
  if (user.value?._id) {
    fetchFlits(user.value?._id);
  }
});

onMounted(async () => {
  const user = await fetchUser();
  await fetchFlits(user._id);
});
</script>

<template>
  <UserProfile v-if="user != null" :user="user" />
  <h2>Flits</h2>
  <FlitFeed :posts="flits" />
  <h2 v-if="!flitsLoading && flits.length === 0">
    No se encontraron flits para este usuario
  </h2>
  <div class="pagination">
    <button @click="page++">Siguiente</button>
    <button v-show="page > 1" @click="page--">Anterior</button>
  </div>
</template>

<style scoped>
h2 {
  color: #ec6324;
  font-size: 24px;
  display: flex;
  margin-left: 1rem;
}

.pagination {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
}
</style>

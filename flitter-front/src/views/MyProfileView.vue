<script lang="ts" setup>
import { Flit } from "@/models/flit";
import { User } from "@/models/user";
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import UserService from "@/services/UserService";
import FlitService from "@/services/FlitService";
import FlitFeed from "@/components/FlitFeed.vue";
import ProfileComp from "@/components/ProfileComp.vue";
import CreateFlit from "@/components/CreateFlit.vue";

const LIMIT = 8;

const store = useStore();

const flits = ref<Flit[]>([]);
const flitsLoading = ref(true);
const user = ref<User | null>(null);
const userLoading = ref(true);
const page = ref(1);

const fetchUser = () => {
  return UserService.getCurrentUser(store.getters["user/accessToken"])
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
  <ProfileComp v-if="user != null" :my-profile="true" :user="user" />
  <CreateFlit />
  <h2>Mis flits</h2>
  <FlitFeed :posts="flits" />
  <h2 v-if="!flitsLoading && flits.length === 0">No se encontraron flits</h2>
  <div class="pagination">
    <button @click="page++">Siguiente</button>
    <button v-show="page > 1" @click="page--">Anterior</button>
  </div>
</template>

<style scoped>
h2 {
  font-family: "Josefin Sans", sans-serif, cursive;
  font-size: 25px;
  color: #ec6324;
  padding-top: 2rem;
  padding-right: 2rem;
}

.pagination {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
}
</style>

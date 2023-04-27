<script>
import { RouterLink, RouterView } from 'vue-router'
import {Header, SideBar} from './components'
import {SignIn} from './components'

export default {
  components: {
    SignIn,
    Header,
    SideBar,
},
  data() { }
}
</script>

<template>
  <div v-if="this.$store.state.signin">
    <header class="float-right duration-1000" :class="{'w-[100%]':this.$store.state.header, 'w-[80%]': !this.$store.state.header}">
      <Header />
    </header>
    <aside class="float-left overflow-hidden duration-1000" :class="{'w-0':this.$store.state.header, 'w-[20%]': !this.$store.state.header}">
      <SideBar />
    </aside>
    <main class="float-right duration-1000" :class="{'w-[100%]':this.$store.state.header, 'w-[80%]': !this.$store.state.header}">
      <section>
        <router-view></router-view>
      </section>
    </main>
  </div>
  <div v-else class="bg-[#F8D402] flex items-middle min-h-screen justify-center">
    <SignIn />
  </div>
</template>
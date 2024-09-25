<template>
  <div class="main-menu">
    <v-list class="pa-0" v-model:opened="open">
      <v-list-item
          router
          active-class="style-active-menu-small"
          to="/dashboard"
          prepend-icon="mdi-home"
          title="Home"
      ></v-list-item>

      <v-list-group value="Admin">
        <template v-slot:activator="{ props }">
          <v-list-item
              router
              active-class="style-active-menu-small"
              prepend-icon="mdi-home"
              v-bind="props"
              title="Admin"
          ></v-list-item>
        </template>

        <v-list-item
            router
            active-class="style-active-menu-small"
            v-for="([title, icon], i) in admins"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :value="title"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: ['Users'],
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
  }),
}
</script>

<style scoped>

</style>
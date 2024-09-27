<template>
  <v-app>
    <v-main>
      <v-container class="fill-height align-center" fluid>
<!--                <client-only>-->
<!--                  <notifications-->
<!--                      group="main"-->
<!--                      :duration="7000"-->
<!--                      position="top right"-->
<!--                      :max="5"-->
<!--                  />-->
<!--                </client-only>-->
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>

</script>

<style scoped>
body {
  background: white;
}
</style>



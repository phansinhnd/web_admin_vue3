<template>
  <v-app>
    <v-main>
      <v-container class="fill-height align-center" fluid>
        <client-only>
          <!--          <notifications-->
          <!--              group="main"-->
          <!--              :duration="7000"-->
          <!--              position="top right"-->
          <!--              :max="5"-->
          <!--          />-->
          <v-btn @click="showToast">Hiển thị thông báo</v-btn>
        </client-only>
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {

  mounted() {
    // Set the current viewport (To check client device using viewport)
  },
  methods: {
    showToast() {
      this.$toast.success('Thông báo đã được hiển thị!', {
        position: 'top-right',
        timeout: 7000,  // Thời gian hiển thị toast
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  },
}
</script>

<style scoped>
body {
  background: blue;
}
</style>

<!-- /layouts/login123/index.vue -->
<!--<template>-->
<!--  <v-app>-->
<!--    <v-main>-->
<!--      <v-container>-->
<!--        &lt;!&ndash; Nội dung layout login123 &ndash;&gt;-->
<!--        <nuxt />-->
<!--      </v-container>-->
<!--    </v-main>-->
<!--  </v-app>-->
<!--</template>-->

<!--<script setup>-->
<!--// Không cần code trong script nếu không có logic gì thêm cho layout-->
<!--</script>-->

<!--<style scoped>-->
<!--/* Kiểu dáng riêng cho layout này */-->
<!--</style>-->


<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12 mt-8">
        <v-card-text>
          <v-row justify="center">
            <v-col cols="12" sm="6">
              <div style="background: red;">
                <v-img
                    src="/images/logo.png"
                    contain
                    max-width="250"
                    max-height="250"
                    background="red"
                ></v-img>
              </div>
            </v-col>
          </v-row>
          <v-divider class="mb-8 mt-6"></v-divider>
          <form @submit.prevent="submit">
            <v-text-field
                prepend-icon="mdi-account"
                outlined
                v-model="username"
                :error-messages="usernameErrors"
                label="Tên đăng nhập *"
            ></v-text-field>

            <v-text-field
                id="password"
                label="Mật khẩu *"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                name="password"
                v-model="password"
                prepend-icon="mdi-lock"
                :type="showPass ? 'text' : 'password'"
                :error-messages="passwordErrors"
                outlined
                @click:append="showPass = !showPass"
            ></v-text-field>
            <div class="d-flex">
              <div id="captchaInput" v-html="captchaCode"></div>
              <div id="resetCapcha">
                <v-btn icon @click="setupCaptcha"
                >
                  <v-icon dark> mdi-sync</v-icon>
                </v-btn
                >
              </div>
            </div>
            <v-text-field
                label="Mã Captcha *"
                v-model="captchaInput"
                outlined
                :error-messages="captchaErrors"
            ></v-text-field>
            <div class="d-flex justify-center">
              <v-btn
                  v-ripple
                  color="primary"
                  type="submit"
                  block
                  :loading="loaddingLogin">
                Đăng nhập
              </v-btn >
            </div>
          </form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
// import { useStore } from 'vuex'
import {useLoginStore} from '~/store/login123'

const showPass = ref(false)
const loaddingLogin = ref(false)
const captchaCode = ref('')
const captchaInput = ref('')
const captchaErrors = ref([])
const store = useLoginStore()

// Computed properties for username and password from Vuex
const username = computed(() => store.username.value)
const password = computed(() => store.password.value)

const usernameErrors = computed(() => store.username.errors)
const passwordErrors = computed(() => store.password.errors)

const setupCaptcha = () => {
  const arrayCaptchaCode = store.createCaptcha()
  let strCaptchaCode = ''
  arrayCaptchaCode.forEach((char) => {
    if (char != null) {
      strCaptchaCode += char
    }
  })
  // console.log(strCaptchaCode)
  captchaCode.value = strCaptchaCode
}

const submit = () => {
  if (captchaInput.value !== captchaCode.value) {
    captchaErrors.value = ['Mã Captcha không đúng!']
    return
  } else {
    captchaErrors.value = []
  }
  loaddingLogin.value = true
  setTimeout(() => {
    loaddingLogin.value = false
    store.submit(store.app.ip)
  }, 1000)
}

onMounted(() => {
  setupCaptcha()
})
</script>

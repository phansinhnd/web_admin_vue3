<template>
  <v-container class="pa-0 height-100vh container-login" fluid>
    <v-row
      align="center"
      justify="center"
      class="align-self-center pa-0 height-100vh container-login-row"
    >
      <v-col cols="12" class="col-login pa-0">
        <v-card class="bg-transparent card-login" flat>
          <h1 class="text-heading text-shadow-primary">SmartTravelAdmin</h1>
          <v-card-text class="bg-transparent card-login-text">
            <form @submit.prevent="submit">
              <v-text-field
                class="input-email"
                v-model="username"
                :error-messages="usernameErrors"
                label="Email"
              ></v-text-field>

              <v-text-field
                class="input-password"
                id="password"
                label="Password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                name="password"
                v-model="password"
                :type="showPass ? 'text' : 'password'"
                :error-messages="passwordErrors"
                @click:append="showPass = !showPass"
              ></v-text-field>

              <div class="d-flex justify-center">
                <v-btn
                  class="btn-submit"
                  v-ripple
                  type="submit"
                  block
                  :loading="loadingLogin"
                  >Đăng nhập
                </v-btn>
              </div>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useLoginStore } from "~/store/login";
import { useAppStore } from "~/store/app";

definePageMeta({
  layout: " login",
});
export default {
  setup() {
    // const username = ref("");
    // console.log("username", username);

    // const password = ref("");
    const store = useLoginStore();
    const appStore = useAppStore();
    const showPass = ref(false);
    const loadingLogin = ref(false);

    const usernameErrors = computed(() => store.username.errors);
    const passwordErrors = computed(() => store.password.errors);

    const username = computed({
      get: () => store.username.value,
      set: (value) => {
        store.setUsername(value);
      },
    });

    const password = computed({
      get: () => store.password.value,
      set: (value) => store.setPassword(value),
    });

    const submit = () => {
      loadingLogin.value = true;
      store
        .submit(username.value, password) // Gọi action Submit trong store
        .finally(() => {
          loadingLogin.value = false;
        });
    };

    onMounted(() => {
      if (store.isLogin) {
        // Hiển thị thông báo nếu cần
      }
    });

    return {
      username,
      password,
      usernameErrors,
      passwordErrors,
      loadingLogin,
      showPass,
      submit,
    };
  },
};
</script>
<style>
/*Begin: common*/
.height-100vh {
  height: 100vh;
}

.text-shadow-primary {
  text-shadow: 0px 1px 0 rgba(0, 0, 0, 1), 0px -1px 0 rgba(0, 0, 0, 1),
    1px 0px 0 rgba(0, 0, 0, 1), -1px 0px 0 rgba(0, 0, 0, 1);
}

.bg-transparent {
  background: transparent;
}

/*End: common*/

.container-login-row {
  margin: 0;
}

.col-login {
  display: flex;
  width: 100%;
  justify-content: center;
}

.card-login {
  width: 100%;
  max-width: 360px;
}

.card-login-text {
  padding-top: 10px;
}

.input-email .v-field__field,
.input-password .v-field__field {
  background: white;
  border-radius: 6px;
  border: 1px solid #ebebeb;
  box-shadow: 0px 4px 12px 0px #00000026;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}

.container-login {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.1)
    ),
    url("/images/bg-logo.jpg");
  background-size: cover;
}

.text-heading {
  /*margin-bottom: 10px;*/
  color: initial;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.5px;
  color: #ffffff;
}

.v-messages__message {
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
  line-height: 1.4;
  /*color: white;*/
  text-shadow: 0px 1px 0 #f05123, 0px -1px 0 #f05123, 1px 0px 0 #f05123,
    -1px 0px 0 #f05123;
}

.v-field__outline {
  display: none;
}

.input-password {
  position: relative;
}

.v-input__append {
  position: absolute;
  top: 50%;
  right: 10px;
  font-size: 14px;
  transform: translateY(-50%);
}

.btn-submit {
  padding: 12px 0;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
  color: white;
  background: #0078ff;
}
</style>

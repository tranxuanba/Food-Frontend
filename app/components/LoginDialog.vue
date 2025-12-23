<template>
  <v-dialog
    :model-value="modelValue"
    max-width="600"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title
        class="modal-title-custom text-white d-flex align-center justify-space-between"
      >
        {{ isLogin ? "ĐĂNG NHẬP TÀI KHOẢN" : "ĐĂNG KÝ TÀI KHOẢN" }}
        <v-btn icon @click="modelValue = false" variant="text">
          <v-icon class="text-white">mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <!-- Social -->
      <div class="d-flex justify-center gap-2 my-5">
        <v-btn color="#3b5998" variant="flat">
          <v-icon start>mdi-facebook</v-icon>
          Facebook
        </v-btn>

        <v-btn class="ml-3" color="#db4437" variant="flat">
          <v-icon start>mdi-google</v-icon>
          Google
        </v-btn>
      </div>

      <!-- Form -->
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-form>
            <v-row>
              <v-col>
                <label class="input-label text-common">Email</label>
                <v-text-field
                  v-model="email"
                  variant="outlined"
                  hide-details="auto"
                  class="custom-input"
                  placeholder="Vui lòng nhập email"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <label class="input-label text-common">Mật khẩu</label>
                <v-text-field
                  v-model="password"
                  variant="outlined"
                  hide-details="auto"
                  class="custom-input"
                  type="password"
                  placeholder="Vui lòng nhập mật khẩu"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col>
                <label v-if="!isLogin" class="input-label text-common"
                  >Nhập lại mật khẩu</label
                >
                <v-text-field
                  v-if="!isLogin"
                  v-model="confirmPassword"
                  variant="outlined"
                  hide-details="auto"
                  class="custom-input"
                  type="password"
                  placeholder="Vui lòng nhập lại mật khẩu"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Forgot -->
            <div v-if="isLogin" class="text-caption text-common mb-4">
              Bạn quên mật khẩu? Hãy bấm
              <a href="#" class="text-green">tại đây</a>
            </div>

            <!-- Submit -->
            <v-btn block color="#029d16" size="large">
              {{ isLogin ? "ĐĂNG NHẬP" : "ĐĂNG KÝ" }}
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>

      <!-- Switch -->
      <div class="text-center my-4 text-caption">
        <template v-if="isLogin">
          Chưa có tài khoản? Đăng ký
          <a
            href="#"
            class="text-green"
            @click.prevent="emit('switch', 'register')"
          >
            tại đây
          </a>
        </template>

        <template v-else>
          Đã có tài khoản?
          <a
            href="#"
            class="text-green"
            @click.prevent="emit('switch', 'login')"
          >
            đăng nhập tại đây
          </a>
        </template>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const modelValue = defineModel<boolean>({ required: true });
const props = defineProps<{
  modelValue: boolean;
  mode: "login" | "register";
}>();

const emit = defineEmits(["update:modelValue", "switch"]);

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const isLogin = computed(() => props.mode === "login");

const submitText = computed(() => (isLogin.value ? "Đăng nhập" : "Đăng ký"));

const close = () => emit("update:modelValue", false);
</script>

<style scoped>
.text-green {
  color: #7cb305;
  font-weight: 500;
  cursor: pointer;
}
</style>

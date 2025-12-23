<template>
  <v-dialog v-model="modelValue" max-width="900" persistent>
    <v-card>
      <!-- Close button -->
      <v-card-title
        class="modal-title-custom text-white d-flex align-center justify-space-between"
      >
        Chi tiết sản phẩm
        <v-btn icon @click="modelValue = false" variant="text">
          <v-icon class="text-white">mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-row class="mx-0 my-0">
        <!-- Image -->
        <v-col cols="12" md="6" class="pa-0">
          <v-img :src="Rau1" aspect-ratio="1" cover />
        </v-col>

        <!-- Content -->
        <v-col cols="12" md="6">
          <h2 class="mb-2 text-common">Nấm hương tươi Green Kingdom 250gr</h2>

          <div class="mb-3 text-common">
            Trạng thái:
            <v-chip color="green" size="small" class="ml-2" label>
              ✔ Còn hàng
            </v-chip>
          </div>

          <div class="price mb-4">69.000đ</div>

          <p class="text-body-2 text-common mb-4">
            👍 Vị ngọt tự nhiên, giàu dinh dưỡng – Nấm chứa đạm tốt. Thay thế
            đạm động vật được, tuy nhiên nấm là nguồn năng lượng thấp, nên ăn
            vừa phải. Nấm Green Kingdom đa dạng với các loại nấm ngon, được
            trồng và chăm sóc bởi các chuyên gia.
          </p>

          <div class="mb-4 text-common">
            <strong>Loại sản phẩm:</strong> Rau quả
          </div>

          <!-- Quantity + Button -->
          <div class="text-common d-flex align-center">
            <div class="d-flex align-center">
              <span class="mr-2">Số lượng</span>
              <v-number-input
                inset
                variant="solo-filled"
                v-model="quantity"
                control-variant="split"
                elevation="0"
                class="no-shadow-number"
                hide-details
              ></v-number-input>
            </div>

            <v-btn color="#029d16" class="ml-6" size="large"> MUA HÀNG </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Rau1 from "@/assets/images/rau1.jpg";

const modelValue = defineModel<boolean>({ required: true });

const quantity = ref(1);
</script>

<style scoped>
.price {
  font-size: 28px;
  font-weight: 700;
  color: #f57c00;
}

.no-shadow-number ::v-deep(.v-field) {
  box-shadow: none !important;
  background-color: #fff !important;
}
</style>

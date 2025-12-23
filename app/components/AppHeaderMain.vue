<template>
  <v-container>
        <div class="header-main">
          <div class="">
            <v-img :width="200" aspect-ratio="16/9" contain :src="LogoBaDung" />
          </div>
          <v-text-field
            color="green"
            v-model="keyword"
            density="compact"
            label="Tìm kiếm..."
            variant="outlined"
            style="max-width: 400px"
            append-inner-icon="mdi-magnify"
            hide-details
            single-line
            @click:append-inner="onSearch"
          ></v-text-field>
          <v-btn color="#029d16" variant="flat" @click="shoppingCart()">
            <v-icon start>mdi-cart-outline</v-icon>
            Giỏ hàng (0)
          </v-btn>
        </div>
  </v-container>
</template>

<script setup>
import LogoBaDung from "@/assets/images/logo-ba-dung.png";
import { ref } from "vue";

const shoppingCart = () => {
  navigateTo(`/shopping-cart`);
};
const keyword = ref("");

const onSearch = () => {
  console.log("Tìm kiếm:", keyword.value);
  // gọi API / filter / router push ở đây
};
</script>

<style scoped>
.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #7bbf00;
}

.cart {
  background: #7bbf00;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 20px;
}

.delivery-text {
  padding: 30px 30px;
  border-radius: 20px;
}
</style>

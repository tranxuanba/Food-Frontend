<template>
  <v-row>
    <v-col cols="2">
      <v-card elevation="0" class="product-filter" variant="outlined">
        <v-sheet color="#029d16" class="px-4 py-2 text-white font-weight-bold">
          Danh mục
        </v-sheet>
        <v-card-text>
          <v-radio-group v-model="selectedCategory">
            <v-radio
              v-for="item in categories"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </v-radio-group>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-row>
        <v-col
          v-for="item in products"
          :key="item.id"
          cols="2"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            class="product-card"
            elevation="0"
            variant="outlined"
            rounded="lg"
          >
            <v-img :src="item.image" aspect-ratio="1" cover />

            <v-card-text class="text-center pt-3">
              {{ item.name }}
            </v-card-text>

            <!-- Giá + Action -->
            <v-card-actions class="px-3 pb-3">
              <div class="text-green">
                {{ formatPrice(item.price) }}
              </div>

              <v-spacer />

              <!-- Xem chi tiết -->
              <v-btn icon variant="text" @click="showDialog = true">
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>

              <!-- Thêm giỏ -->
              <v-btn
                icon
                variant="text"
                color="success"
                @click="addToCart(item)"
              >
                <v-icon>mdi-cart-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <Pagination v-model="page" :items="users" :items-per-page="10" />
      </v-row>
    </v-col>
  </v-row>
  <div class="category-page"></div>
  <ProductDialog v-model="showDialog" />
</template>

<script setup lang="ts">
import Pagination from "../components/Pagination.vue";
import Rau1 from "@/assets/images/rau1.jpg";
import Rau2 from "@/assets/images/rau2.jpg";
import { ref, onMounted } from "vue";
import ProductDialog from "../components/ProductDialog.vue";

const showDialog = ref(false);

const page = ref(1);
const users = Array.from({ length: 37 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));

const goDetail = (id: number) => {
  navigateTo(`/product/${id}`);
};

const cart = ref<any[]>([]);

const addToCart = (product: Product) => {
  const found = cart.value.find((p) => p.id === product.id);

  if (found) {
    found.quantity += 1;
  } else {
    cart.value.push({
      ...product,
      quantity: 1,
    });
  }

  console.log("Cart:", cart.value);
};

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};
const products = ref<Product[]>([]);

onMounted(async () => {
  // GIẢ LẬP API
  products.value = [
    {
      id: 1,
      name: "Cải kale (Xoăn) Organic 300gr",
      price: 35000,
      image: Rau1,
    },
    {
      id: 2,
      name: "Cà chua bi Organic 500gr",
      price: 28000,
      image: Rau1,
    },
    {
      id: 1,
      name: "Cải kale (Xoăn) Organic 300gr",
      price: 35000,
      image: Rau2,
    },
    {
      id: 2,
      name: "Cà chua bi Organic 500gr",
      price: 28000,
      image: Rau1,
    },
    {
      id: 1,
      name: "Cải kale (Xoăn) Organic 300gr",
      price: 35000,
      image: Rau2,
    },
    {
      id: 2,
      name: "Cà chua bi Organic 500gr",
      price: 28000,
      image: Rau1,
    },
  ];
});

// format giá
const formatPrice = (price: any) => price.toLocaleString("vi-VN") + "đ";

const categories = [
  { id: 1, name: "Rau, củ, quả hữu cơ" },
  { id: 2, name: "Trái cây" },
  { id: 3, name: "Thịt, cá, hải sản" },
];

const selectedCategory = ref(null);
</script>

<style scoped>
.category-page {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.products {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.product-filter {
  max-width: 260px;
  border: 1px solid #eee;
  overflow: hidden !important;
}

.product-card {
  transition: 0.2s ease;
  border: 1px solid #eee;
}

.text-green {
  color: #029d16;
}
</style>

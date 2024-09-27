<template>
  <v-dialog v-model="localOpen" width="500" @click:outside="closeDialog">
    <v-card>
      <v-card-title class="headline primary lighten-2 title-confirm-dialog">{{ title }}</v-card-title>
      <p></p>
      <v-card-text class="title-confirm-text">
        {{ message }}
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1 action-display">
          <Button
                  class="ml-4"
                  backgroundColor="#F5F5F5"
                  textColor="#A3A3A3"
                  :disabled="false"
                  @click="cancel"
          >
            HỦY BỎ
          </Button>

          <Button
                  class="ml-4"
                  backgroundColor="#007bff"
                  textColor="#FFFFFF"
                  :disabled="false"
                  @click="confirmAction"
          >
            XÁC NHẬN
          </Button>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { defineProps, defineEmits, ref, watch } from 'vue';

  const props = defineProps({
    open: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: 'Xác nhận',
    },
    message: {
      type: String,
      default: 'Bạn có chắc chắn muốn thực hiện hành động này?',
    },
  });

  const emit = defineEmits(['update:open', 'confirm']);
  const localOpen = ref(props.open);

  watch(() => props.open, (newVal) => {
    localOpen.value = newVal;
  });

  const closeDialog = () => {
    emit('update:open', false);
  };

  const confirmAction = () => {
    emit('confirm');
    closeDialog();
  };

  const cancel = () => {
    closeDialog();
  };
</script>

<style scoped>
    .title-confirm-dialog {
      text-align: center;
      font-weight: 600;
      margin-top: 10px;
      color: #141414
    }
    .title-confirm-text {
      text-align: center;
      font-weight: 500;
      color: #5C5C5C;
    }
  .action-display {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
</style>

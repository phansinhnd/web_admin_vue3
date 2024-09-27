<template>
    <v-row
            align="center"
            class="mb-4"
            style="justify-content: space-between; margin-right: 0;"
    >
        <v-col cols="12" sm="6">
            <h1>{{ title }}</h1>
        </v-col>

        <div style="display: inline-flex;">
            <slot name="button">
                <Button
                        class="ml-4"
                        backgroundColor="#ffffff"
                        textColor="#333333"
                        :disabled="false"
                        @click="closeDialog"
                >
                    HỦY BỎ
                </Button>

                <Button
                        class="ml-4"
                        icon="icon-Check"
                        backgroundColor="#007bff"
                        textColor="#ffffff"
                        :disabled="false"
                        @click="applyDialog"
                >
                    ÁP DỤNG
                </Button>
            </slot>

        </div>
    </v-row>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: 'Tiêu đề',
        },
    });

    const emit = defineEmits(['close', 'apply']);

    const closeDialog = () => {
        emit('close');
    };

    const applyDialog = () => {
        emit('apply');
    };
</script>

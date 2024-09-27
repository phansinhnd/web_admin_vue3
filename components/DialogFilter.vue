<template>
    <div
            v-if="modelValue"
            class="dialog-overlay"
    >
        <div
                class="dialog-box"
                :class="{ 'dialog-enter-active': modelValue }"
                :style="{ maxWidth: maxWidth + 'px' }"
        >
            <header class="title-dialog">
                <h3>{{ title }}</h3>
            </header>
            <main class="dialog-content">
                <slot name="content"></slot>
            </main>
            <footer class="dialog-footer" style="justify-content: center;">
                <div class="dialog-footer-buttons">
                    <slot name="footer">
                        <Button
                                backgroundColor="#f0f0f0"
                                textColor="#333333"
                                :disabled="false"
                                @click="closeDialog"
                        >
                            HỦY BỎ
                        </Button>
                    </slot>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        title: {
            type: String,
            default: 'Dialog',
        },
        modelValue: {
            type: Boolean,
            required: true,
        },
        maxWidth: {
            type: Number,
            default: 800,
        },
    });

    const emit = defineEmits(['update:modelValue']);

    const closeDialog = () => {
        emit('update:modelValue', false);
    };
</script>

<style scoped>
    .dialog-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .dialog-box {
        background-color: white;
        border-radius: 8px;
        padding: 20px;
        width: 100%;
        transform: translateY(-20px);
        opacity: 0;
        transition: transform 0.6s ease, opacity 0.6s ease;
    }

    .dialog-enter-active {
        transform: translateY(0);
        opacity: 1;
    }

    .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .dialog-close {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5em;
    }

    .dialog-content {
        margin: 20px 0;
    }

    .dialog-footer {
        display: flex;
        justify-content: flex-end;
    }

    .title-dialog {
        margin: -20px;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
        background: #141414;
        color: #ffffff;
        text-align: center
    }

    .dialog-footer-buttons {
        display: flex;
        justify-content: center;
        gap: 15px;
    }
</style>

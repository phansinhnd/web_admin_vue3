<template>
    <button
            :class="buttonClasses"
            :style="buttonStyle"
            :disabled="disabled"
            @click="handleClick"
    >
    <span v-if="icon" class="button-icon">
      <i :class="icon" style="font-size: 20px"></i>
    </span>
        <span class="button-text">
      <slot></slot>
    </span>
    </button>
</template>

<script setup>

    const props = defineProps({
        icon: String,
        backgroundColor: String,
        textColor: String,
        disabled: Boolean,
    });

    const emit = defineEmits(['click']);

    const handleClick = (e) => {
        if (!props.disabled) {
            emit('click', e);
        }
    };

    const buttonClasses = ['my-button', { disabled: props.disabled }];
    const buttonStyle = {
        backgroundColor: props.backgroundColor || '#0078FF',
        color: props.textColor || '#ffffff',
    };
</script>

<style scoped>
    .my-button {
        display: flex;
        align-items: center;
        padding: 0.5em 1em;
        border: none;
        border-radius: 0.25em;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .my-button.disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .button-icon {
        margin-right: 0.5em;
    }

    .button-text {
        font-size: 1em;
    }
</style>

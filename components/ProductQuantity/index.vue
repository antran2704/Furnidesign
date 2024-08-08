<template>
    <div class="flex items-center w-full h-14">
        <button @click="handleDecreaseCount"
            class="flex items-center justify-center text-xl font-medium w-4/12 h-full border border-borderColor">
            -
        </button>
        <input ref="inputRef" @input="handleChangeCount($event.target.value)" :value="currentCount" type="text"
            class="flex items-center justify-center text-base text-center font-medium w-4/12 h-full border border-borderColor" />
        <button @click="handleAddCount"
            class="flex items-center justify-center text-xl font-medium w-4/12 h-full border border-borderColor">
            +
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    currentCount: {
        type: Number,
        default: 1
    },
    saveInLocal: {
        type: Boolean,
        default: false
    },
    handleSetCount: {
        type: Function
    },
    handleSaveCount: {
        type: Function
    },
    index: {
        type: Number
    }
})

const countItem = ref(props.currentCount);
const inputRef = ref(null);

const handleDecreaseCount = () => {
    if (countItem.value > 1) {
        countItem.value = countItem.value - 1;

        if (props.saveInLocal) {
            props.handleSaveCount(countItem.value, props.index);
        } else {
            props.handleSetCount(countItem.value);
        }
    }
};

const handleChangeCount = (value) => {
    const regexNumber = /^[0-9]+$/g;
    if (!regexNumber.test(value)) {
        inputRef.value.value = String(countItem.value);
        return;
    }

    const number = Number(value);
    if (number < 1) {
        countItem.value = 1;
    } else {
        countItem.value = number;
    }

    if (props.saveInLocal) {
        props.handleSaveCount(countItem.value, props.index);
    } else {
        props.handleSetCount(countItem.value);
    }

}

const handleAddCount = () => {
    countItem.value += 1

    if (props.saveInLocal) {
        props.handleSaveCount(countItem.value, props.index);
    } else {
        props.handleSetCount(countItem.value);

    }
}
</script>
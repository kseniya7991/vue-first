<template>
    <input type="text" class="input" :value="modelValue" @input="updateInput" />
</template>
<script>
export default {
    name: "MyInput",
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>
<style scoped>
.input-wrap {
    width: 100%;
}
.input {
    border: 1px solid skyblue;
    border-radius: 0;
    padding: 10px;
    font-size: 15px;
    margin-top: 15px;
    width: 100%;
}
</style>

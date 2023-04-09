<template>
    <div class="modal" v-if="show" @click.stop="handlePopup">
        <div @click.stop class="modal-content">
            <slot> </slot>
        </div>
    </div>
</template>
<script>
import toggleMixin from "@/components/mixins/toggleMixin.ts";

export default {
    name: "MyPopup",
    mixins: [toggleMixin],
};
</script>
<style scoped>
.modal {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.modal-content {
    margin: auto;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    min-width: 350px;
    min-height: 350px;
    padding: 30px;
}
</style>

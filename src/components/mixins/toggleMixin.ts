export default {
    props: {
        show: Boolean,
        default: false,
    },

    methods: {
        handlePopup(e: any) {
            //@ts-ignore
            this.$emit("update:show", false);
        },
    },
    mounted() {},
};

import { defineStore } from "pinia";
import { AnkiState } from "../components/data";

export const useAnkiState = defineStore("AnkiState", {
    state: (): AnkiState => ({
        input: "",
        output: "",
        op: "font",
        page: "",
        address: "http://localhost:8765",
        is_create_sub_deck: true,
        level: 2,
        parent_deckname: "",
        mode: ['hide_all_guess_one'],
        q_mask_color: "#ff5656",
        a_mask_color: "#ffeba2",
        dpi: 300,
        tags: [],
    }),
    getters: {

    },
    actions: {
        resetState() {
            this.$patch({
                input: "",
                output: "",
                op: "font",
                page: "",
                address: "http://localhost:8765",
                is_create_sub_deck: true,
                level: 2,
                parent_deckname: "",
                mode: ['hide_all_guess_one'],
                q_mask_color: "#ff5656",
                a_mask_color: "#ffeba2",
                dpi: 300,
                tags: [],
            })
        },
    }
})
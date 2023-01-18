import { create } from 'zustand'

export const useModalStore = create((set) => ({
    modal: false,
    changeModalState: () => set((state)=> ({modal: !state.modal}))
}));
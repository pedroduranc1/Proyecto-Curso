import {create} from 'zustand'
import { auth } from '../api/db';
import { userFindUser } from '../hooks/userFindUser';

export const useUserStore = create((set)=>({
    user:{},
    setUser: async () =>{
        const ID = auth.currentUser.uid;
        const user = await userFindUser({ID})
        set({ user: user })
    }
}))

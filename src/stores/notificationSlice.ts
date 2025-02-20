import { set } from "zod";
import { StateCreator } from "zustand";
import { FavoriteSliceType } from "./favoriteSlice";

export type Notification = {
    text : string,
    error : boolean,
    show : boolean
}

export type NotificationSliceType = {
    notification : Notification,
    showNotification : (payload : Omit<Notification, 'show'>) => void
}

export const createNotificationSlice : StateCreator<NotificationSliceType & FavoriteSliceType, [] , [], NotificationSliceType> = (set,get) => ({
    notification : {
        text : "",
        error : false,
        show : false,
    },

    showNotification : (payload) => {
        set({
            notification : {
                text : payload.text,
                error : payload.error,
                show : true
            }
        })
    }
})
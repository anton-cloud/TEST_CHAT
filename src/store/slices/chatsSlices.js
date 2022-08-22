import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';
import { initialState } from '../../data/initialState';
import requestApi from "../../services";

export const getNewMessage = createAsyncThunk(
    "chats/getNewMessage",
    async ({ from, to }) => {
        const data = await requestApi.getAnswer()
        return {
            from,
            to,
            value: data.value
        }
    }
)

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: [
        ...initialState
    ],
    reducers: {
        addNewMessage: {
            reducer: (state, action) => {
                const addresseeChat = state.filter(chat => chat.contactInfo.id === action.payload.to)
                addresseeChat[0].messages.push(action.payload);
            },
            prepare: (messageData) => {
                return {
                    payload: {
                        id: uuid(),
                        createdDate: Date(),
                        ...messageData
                    }
                }
            },
        },
        resetUnreadMessages: (state, action) => {
            const viewedChat = state.filter(chat => chat.id === action.payload.chatId)
            viewedChat[0].unreadMessages = 0;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNewMessage.fulfilled, (state, action) => {
            const senderChat = state.filter(chat => chat.contactInfo.id === action.payload.from)
            senderChat[0].messages.push({
                ...action.payload,
                id: uuid(),
                createdDate: Date(),
            });
            senderChat.unreadMessages += 1;
        })
    },
})


export const selectAllContacts = (state) => state.chats.map(chat => {
    return {
        id: chat.id,
        contactInfo: chat.contactInfo,
        unreadMessages: chat.unreadMessages,
        lastMessage: chat.messages.slice(-1)[0]
    }
}).sort((a, b) => {
    return b.unreadMessages - a.unreadMessages;
}).sort((a, b) => {
    const resultA = new Date(a.lastMessage?.createdDate).getTime();
    const resultB = new Date(b.lastMessage?.createdDate).getTime();
    return resultB - resultA;
});
export const selectChatById = (state, chatId) => state.chats.filter(chat => chat.id === chatId)[0];

export const addNewMessage = chatsSlice.actions.addNewMessage;
export const receiveMessage = chatsSlice.actions.receiveMessage;
export const resetUnreadMessages = chatsSlice.actions.resetUnreadMessages;

export default chatsSlice.reducer
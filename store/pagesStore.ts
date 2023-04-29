import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface userPagesI {
    pageName: string,
    pageId: string,
    pageOwner: any
}

// Define the pageStore function
const pageStore = (set: any) => ({
    userPages: {},
    setUserPages: (userPages: any) => {
        set({ userPages })
    }


})

// Create a Zustand store from the pageStore function and persist it to local storage
const usePageStore = create<{ userPages: any, setUserPages: any }>(
    // @ts-ignore
    persist(pageStore, {
        name: 'pagestore',
    })
)

// Export the pageStore function so that it can be used in React components
export default usePageStore;
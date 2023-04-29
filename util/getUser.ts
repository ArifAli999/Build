import { store } from '../store/pagesStore'

export default function getUser() {
    ++store.count
}
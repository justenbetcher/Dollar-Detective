import { reactive } from 'vue';
import type { Budget }  from './budget';
import type { Entry } from './entry';
import type { Stats } from './stats';

const session = reactive({
    user: null as User | null,
})

interface User  {
    userId: string;
    name: string;
    password?: string;
    budget?: Budget;
    entryHistory?: Entry[];
    stats?: Stats;
}

export function useSession() {
    return session;
}
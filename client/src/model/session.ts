import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { Budget }  from './budget';
import type { Entry } from './entry';
import type { Stats } from './stats';

const session = reactive({
    user: null as User | null,
})

interface User  {
    id?: string;
    name: string;
    email?: string;
    password?: string;
    budget?: Budget;
    entryHistory?: Entry[];
    stats?: Stats;
}

export function useSession() {
    return session;
}

export function useLogin() {
    session.user = {
        name: 'john doe',
        email: 'johndoe@email.com',
        id: 'johndoe0',
        password: 'password'
    }
}

export function useLogout() {
    session.user = null;
}

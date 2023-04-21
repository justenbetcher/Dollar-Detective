import { useSession } from './session';
    const session = useSession();
export interface Budget {
    isSalary?: boolean;
    salary?: number;
    otherIncome?: OtherIncome[];
    budgetPercentage?: number;
}

interface OtherIncome {
    date: number;
    income: number;
}

export function setBudget(budget : Budget) {
    if(session.user) {
        session.user.budget = budget;
    }
}

export function addOtherIncome(x: number) {
    let date = new Date().valueOf();
    if(session.user && session.user.budget) {
        session.user.budget.otherIncome = session.user.budget.otherIncome ?? [] as OtherIncome[];
        session.user.budget.otherIncome.push({
            date: date,
            income: x,
        })
    }
}

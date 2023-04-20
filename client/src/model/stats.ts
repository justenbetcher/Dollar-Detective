
export interface Stats {
    categorySpending?: CategorySpending;
    overUnderBudget?: number;
}

interface CategorySpending {
        Dining?: number;
        entertainmentShopping?: number;
        travel?: number;
        transpertaion?: number;
        groceries?: number;
        personalFamilyCare?: number;
        Health?: number;
        Finace?: number;
}
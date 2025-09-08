import { AccountType } from "./accout-type";

export class Account{

    id?: number;
    name?: string;
    description?: string;
    accountType?: AccountType;
    currency?: string;
    customerid?: number;
}
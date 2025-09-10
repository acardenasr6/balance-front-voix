import { Account } from "./account";
import { MovementType } from "./movement-type";

export class Movement{

    id?:number;
    movementType?:MovementType;
    account?: Account;
    debtAmount?: number;
    creditAmount?: number;
    balanceAmount?: number;
}
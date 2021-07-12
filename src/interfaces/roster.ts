import { Signup } from "./signup";
import { Role, Utility } from "./class";

export interface Roster {
    "signups": Signup[];
    "utilityCount": {utility: Utility, count: number}[];
    "roleCount": {role: Role, count: number}[];
}
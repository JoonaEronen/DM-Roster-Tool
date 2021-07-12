import { PlayerClass, Spec } from "./class";

export interface Signup {
    "name": string;
    "rank": string;
    "class": PlayerClass;
    "spec": Spec
    "dateAdded": Date;
    "dateModified": Date;
    "active": boolean;
}
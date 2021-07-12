export interface PlayerClass {
    "class": string;
    "spec": Spec[];
}

export enum Role {
    "melee" = "Melee DPS",
    "ranged" = "Ranged DPS",
    "healer" = "Healer",
    "tank" = "Tank"
}

export enum Utility {
    "ap" = "Battle Shout",
    "int" = "Arcane Intellect",
    "stam" = "Prayer Of Fortitude",
    "magic" = "5% Magic Damage",
    "phys" = "5% Physical Damage",
    "devo" = "Devotion Aura",
    "wf" = "Windfury",
    "rez" = "Combat Ress",
    "bl" = "Bloodlust",
    "hs" = "Healthstone",
    "imm" = "Immunity",
    "mvm" = "Movement CD",
    "rdcd" = "Raid defensive cooldown"
}

export interface Spec {
    "spec": string;
    "role": Role;
    "utility": Utility[];
}
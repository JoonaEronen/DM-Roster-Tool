import { PlayerClass, Role, Utility } from "../interfaces/class";

const DeathKnight: PlayerClass = {
    class: "Death Knight",
    spec: [
        {
            spec: "Blood",
            role: Role.tank,
            utility: [
                Utility.rez,
                Utility.imm,
                Utility.rdcd
            ] 
        },
        {
            spec: "Unholy",
            role: Role.melee,
            utility: [
                Utility.rez,
                Utility.imm,
                Utility.rdcd
            ] 
        },
        {
            spec: "Frost",
            role: Role.melee,
            utility: [
                Utility.rez,
                Utility.imm,
                Utility.rdcd
            ] 
        }
    ]
};

const DemonHunter: PlayerClass = {
    class: "Demon Hunter",
    spec: [
        {
            spec: "Vengeance",
            role: Role.tank,
            utility: [
                Utility.magic,
            ] 
        },
        {
            spec: "Havoc",
            role: Role.melee,
            utility: [
                Utility.imm,
                Utility.rdcd,
                Utility.magic,
            ] 
        },
    ]
};

const Druid: PlayerClass = {
    class: "Druid",
    spec: [
        {
            spec: "Guardian",
            role: Role.tank,
            utility: [
                Utility.rez,
                Utility.mvm
            ] 
        },
        {
            spec: "Restoration",
            role: Role.healer,
            utility: [
                Utility.rez,
                Utility.mvm
            ] 
        },
        {
            spec: "Feral",
            role: Role.melee,
            utility: [
                Utility.rez,
                Utility.mvm
            ] 
        },
        {
            spec: "Balance",
            role: Role.ranged,
            utility: [
                Utility.rez,
                Utility.mvm
            ] 
        },
    ]
};

const Hunter: PlayerClass = {
    class: "Hunter",
    spec: [
        {
            spec: "Beast Mastery",
            role: Role.ranged,
            utility: [
                Utility.imm,
                Utility.bl
            ] 
        },
        {
            spec: "Marksmanship",
            role: Role.ranged,
            utility: [
                Utility.imm,
                Utility.bl
            ] 
        },
        {
            spec: "Survival",
            role: Role.melee,
            utility: [
                Utility.imm,
                Utility.bl
            ] 
        },
    ]
};

const Mage: PlayerClass = {
    class: "Mage",
    spec: [
        {
            spec: "Arcane",
            role: Role.ranged,
            utility: [
                Utility.imm,
                Utility.bl,
                Utility.int
            ] 
        },
        {
            spec: "Frost",
            role: Role.ranged,
            utility: [
                Utility.imm,
                Utility.bl,
                Utility.int
            ] 
        },
        {
            spec: "Fire",
            role: Role.ranged,
            utility: [
                Utility.imm,
                Utility.bl,
                Utility.int
            ] 
        },
    ]
};

const Monk: PlayerClass = {
    class: "Monk",
    spec: [
        {
            spec: "Brewmaster",
            role: Role.tank,
            utility: [
                Utility.phys,
            ] 
        },
        {
            spec: "Mistviewer",
            role: Role.healer,
            utility: [
                Utility.phys,
            ] 
        },
        {
            spec: "Windwalker",
            role: Role.melee,
            utility: [
                Utility.phys,
            ] 
        },
    ]
};

const Paladin: PlayerClass = {
    class: "Paladin",
    spec: [
        {
            spec: "Holy",
            role: Role.healer,
            utility: [
                Utility.rdcd,
                Utility.devo,
                Utility.imm
            ] 
        },
        {
            spec: "Protection",
            role: Role.tank,
            utility: [
                Utility.devo,
                Utility.imm
            ] 
        },
        {
            spec: "Retribution",
            role: Role.melee,
            utility: [
                Utility.phys,
                Utility.imm
            ] 
        },
    ]
};

const Priest: PlayerClass = {
    class: "Priest",
    spec: [
        {
            spec: "Holy",
            role: Role.healer,
            utility: [
                Utility.stam,
            ] 
        },
        {
            spec: "Discipline",
            role: Role.healer,
            utility: [
                Utility.stam,
                Utility.rdcd
            ] 
        },
        {
            spec: "Shadow",
            role: Role.ranged,
            utility: [
                Utility.stam,
                Utility.rdcd
            ] 
        },
    ]
};

const Rogue: PlayerClass = {
    class: "Rogue",
    spec: [
        {
            spec: "Assassination",
            role: Role.melee,
            utility: [
                Utility.imm,
            ] 
        },
        {
            spec: "Outlaw",
            role: Role.melee,
            utility: [
                Utility.imm,
            ] 
        },
        {
            spec: "Subtlety",
            role: Role.melee,
            utility: [
                Utility.imm,
            ] 
        },
    ]
};

const Shaman: PlayerClass = {
    class: "Shaman",
    spec: [
        {
            spec: "Resto",
            role: Role.healer,
            utility: [
                Utility.rdcd,
                Utility.bl,
                Utility.mvm
            ] 
        },
        {
            spec: "Elemental",
            role: Role.ranged,
            utility: [
                Utility.bl,
                Utility.mvm
            ] 
        },
        {
            spec: "Enhancement",
            role: Role.melee,
            utility: [
                Utility.bl,
                Utility.mvm,
                Utility.wf
            ] 
        },
    ]
};

const Warlock: PlayerClass = {
    class: "Warlock",
    spec: [
        {
            spec: "Affliction",
            role: Role.ranged,
            utility: [
                Utility.hs,
                Utility.mvm,
                Utility.rez
            ] 
        },
        {
            spec: "Destruction",
            role: Role.ranged,
            utility: [
                Utility.hs,
                Utility.mvm,
                Utility.rez
            ] 
        },        {
            spec: "Demonology",
            role: Role.ranged,
            utility: [
                Utility.hs,
                Utility.mvm,
                Utility.rez
            ] 
        },
    ]
};

const Warrior: PlayerClass = {
    class: "Warrior",
    spec: [
        {
            spec: "Protection",
            role: Role.tank,
            utility: [
                Utility.ap,
                Utility.rdcd
            ] 
        },
        {
            spec: "Arms",
            role: Role.melee,
            utility: [
                Utility.ap,
                Utility.rdcd
            ] 
        },        {
            spec: "Fury",
            role: Role.melee,
            utility: [
                Utility.ap,
                Utility.rdcd
            ] 
        },
    ]
};

export default DeathKnight || DemonHunter || Druid || Hunter || Mage || Monk || Paladin || Priest || Rogue || Shaman || Warlock || Warrior;


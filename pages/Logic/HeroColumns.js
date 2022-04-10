export const columnDefs = {
    "Cost": {
        title: "Cost",
        data: (d) => {
            return d;
        },
        render: (data, mode) => {
            //if (data.privateAuctionProfile != null) {
            //    console.log(data.privateAuctionProfile);
            //    return "Private"
            //}
            if (mode == 'display') {
                if (data.salePrice == 'null') {
                    return null;
                }
                return FixSalePrice(data.salePrice) + `<img class="mb-1 ms-1" src="/Jewel.png" width="20" height="20"/>`;
            }
            return FixSalePrice(data.salePrice);
        }
    },
    "Id": {
        title: "Id",
        data: "numberId"
    },
    "Rarity": {
        title: "Rarity",
        data: (d) => {
            return d;
        },
        render: (data, mode) => {
            if (mode == 'display') {
                return heroRarity[data.rarity];
            }
            return data.rarity;
        }
    },
    "Class":{
        title: "Class",
        data: "mainClass",

    },
    "Class R1": {
        title: "ClassR1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.class;
        }
    },
    "Class Recessives": {
        title: "Class+",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.mainClass}<br>R1: ${hero.R1.class}<br>R2: ${hero.R2.class}<br>R3: ${hero.R3.class}`;
        }
    },
    "Subclass": {
        title: "Subclass",
        data: "subClass"
    },
    "Subclass R1": {
        title: "SubR1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.subClass;
        }
    },
    "Subclass Recessives": {
        title: "Subclass+",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.subClass}<br>R1: ${hero.R1.subClass}<br>R2: ${hero.R2.subClass}<br>R3: ${hero.R3.subClass}`;
        }
    },
    "Level": {
        title: "Lvl",
        data: "level",
    },
    "XP": {
        title: "XP",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            if (mode == 'display') {
                return `${hero.xp}/${maxXP[hero.level - 1] / 1000}k`;
            }
            return (hero.level * 100000000) + hero.xp
        }
    },
    "XP Current": {
        title: "XPC",
        data: "xp"
    },
    "XP Max": {
        title: "XPM",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return maxXP[hero.level - 1];
        }
    },
    "Shiny": {
        title: "Shiny",
        data: "shiny"
    },
    "Generation": {
        title: "Gen",
        data: "generation",
        render: (data, mode) => {
            if (mode == 'display') {

                return `${data}`;
            }
            return data;
        }
    },
    "Summons": {
        title: "Sum",
        data: (d) => {
            return d;
        },
        render: (data, mode) => {
            if (data.generation == 0) {
                if (mode == 'display') {
                    return `${data.summons}/∞`
                }
                if (data.summons < 11) {
                    return 11;
                }
                return data.summons;
            }
            if (mode == 'display') {
                return `${data.summonsRemaining}/${data.maxSummons}`
            }
            return data.summonsRemaining;
        }
    },
    "GenSum": {
        title: "Gen|Sum",
        data: (d) => {
            return d;
        },
        render: (data, mode) => {
            if (data.generation == 0) {
                if (mode == 'display') {
                    return `${data.generation} | ${data.summons}/∞`
                }
                if (data.summons < 11) {
                    return 11;
                }
                return data.summons;
            }
            if (mode == 'display') {
                return `${data.generation} | ${data.summonsRemaining}/${data.maxSummons}`
            }
            return data.summonsRemaining;
        }
    },
    "Health": {
        title: "HP",
        data: "hp"
    },
    "Mana": {
        title: "MP",
        data: "mp"
    },
    "Stat Boost 1(Green +2)": {
        title: "SB1",
        data: "statBoost1"
    },
    "Stat Boost 1 R1": {
        title: "SB1R1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.statBoost1;
        }
    },
    "Stat Boost 1 Recessives": {
        title: "SB1+",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.statBoost1}<br>R1: ${hero.R1.statBoost1}<br>R2: ${hero.R2.statBoost1}<br>R3: ${hero.R3.statBoost1}`;
        }
    },
    "Stat Boost 2(Blue Growth)": {
        title: "SB2",
        data: "statBoost2"
    },
    "Stat Boost 2 R1": {
        title: "SB2R1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.statBoost2;
        }
    },
    "Stat Boost 2 Recessives": {
        title: "SB2+",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.statBoost2}<br>R1: ${hero.R1.statBoost2}<br>R2: ${hero.R2.statBoost2}<br>R3: ${hero.R3.statBoost2}`;
        }
    },
    "Profession": {
        title: "Profession",
        data: "profession",
    },
    "Profession Recessives": {
        title: "Profession",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.profession}<br>R1: ${hero.R1.profession}<br>R2: ${hero.R2.profession}<br>R3: ${hero.R3.profession}`;
        }
    },
    "Profession R1": {
        title: "ProfR1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.profession;
        }
    },
    "PJ Survivor": {
        title: "PJ",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            if (hero.pjStatus == null) {
                return 'No';
            }
            else if (hero.pjStatus == 'SURVIVED') {
                return 'Yes';
            }
            return 'RIP';
        }
    },
    "Perilous Journey Survival Rate": {
        title: "Survival(Srv)",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            let rank = 0;
            switch (hero.mainClass) {
                case 'DarkKnight':
                case 'Ninja':
                case 'Paladin':
                case 'Summoner': rank = 1;
                    break;
                case 'Dragoon':
                case 'Sage': rank = 2;
                    break
                case 'DreadKnight': rank = 3;
                    break;
                default:
                    break;
            }
            if (mode == 'display') {
                if (hero.generation == 0) {
                    return 100 + "%";
                }
                return (34 + hero.level + hero.rarity * (2 + hero.rarity) + 2 * rank * (1 + rank)) + "%";
            }
            if (hero.generation == 0) {
                return 100;
            }
            return 34 + hero.level + hero.rarity * (2 + hero.rarity) + 2 * rank * (1 + rank);
        }
    },
    "Perilous Journey Average Crystals": {
        title: "Avg Crystals",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            if (hero.generation == 0) {
                return 0;
            }
            let rank = 0;
            switch (hero.mainClass) {
                case 'DarkKnight':
                case 'Ninja':
                case 'Paladin':
                case 'Summoner': rank = 1;
                    break;
                case 'Dragoon':
                case 'Sage': rank = 2;
                    break
                case 'DreadKnight': rank = 3;
                    break;
                default:
                    break;
            }
            let survivalRate = 34 + hero.level + hero.rarity * (2 + hero.rarity) + 2 * rank * (1 + rank);
            let deathRate = 100 - survivalRate;
            return ((survivalRate / 100) * rarityCrystalReward(hero)).toFixed(2);
        }
    },
    "Perilous Journey Death Rate": {
        title: "Death(Dth)",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            let rank = 0;
            switch (hero.mainClass) {
                case 'DarkKnight':
                case 'Ninja':
                case 'Paladin':
                case 'Summoner': rank = 1;
                    break;
                case 'Dragoon':
                case 'Sage': rank = 2;
                    break
                case 'DreadKnight': rank = 3;
                    break;
                default:
                    break;
            }
            if (mode == 'display') {
                if (hero.generation == 0) {
                    return 0 + "%";
                }
                return 100 - (34 + hero.level + hero.rarity * (2 + hero.rarity) + 2 * rank * (1 + rank));
            }
            if (hero.generation == 0) {
                return 0;
            }
            return 100 - 34 + hero.level + hero.rarity * (2 + hero.rarity) + 2 * rank * (1 + rank);
        }
    },
    "Perilous Journey Average Jewels": {
        title: "Avg Jewels",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            if (hero.generation == 0) {
                return 0;
            }
            let rank = 0;
            switch (hero.mainClass) {
                case 'DarkKnight':
                case 'Ninja':
                case 'Paladin':
                case 'Summoner': rank = 1;
                    break;
                case 'Dragoon':
                case 'Sage': rank = 2;
                    break
                case 'DreadKnight': rank = 3;
                    break;
                default:
                    break;
            }
            let survivalRate = 34 + hero.level + hero.rarity * (2 + hero.rarity) + 2 * rank * (1 + rank);
            let deathRate = 100 - survivalRate;
            return ((deathRate / 100) * rarityJewelReward(hero)).toFixed(2);
        }
    },
    "Perilous Journey Survival Crystals": {
        title: "Srv Crystals",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            if (hero.generation == 0) {
                return 0;
            }
            return rarityCrystalReward(hero);
        }
    },
    "Perilous Journey Survival Tickets": {
        title: "Srv Tickets",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            if (hero.generation == 0) {
                return 0;
            }
            let rank = 0;
            switch (hero.mainClass) {
                case 'DarkKnight':
                case 'Ninja':
                case 'Paladin':
                case 'Summoner': rank = 1;
                    break;
                case 'Dragoon':
                case 'Sage': rank = 2;
                    break
                case 'DreadKnight': rank = 3;
                    break;
                default:
                    break;
            }
            return hero.level + (2 * hero.rarity) + (2 * rank);
        }
    },
    "Perilous Journey Death Jewels": {
        title: "Dth Jewels",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            if (hero.generation == 0) {
                return 0;
            }
            return rarityJewelReward(hero);
        }
    },
    "Perilous Journey Death Runes": {
        title: "Dth Runes",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            if (hero.generation == 0) {
                return "None";
            }
            if (mode == "display") {
                switch (hero.level) {
                    case 1: return "None";
                    case 2: return "1x Shvas";
                    case 3: return "1x Shvas";
                    case 4: return "2x Shvas<br>1x Moksha";
                    case 5: return "2x Shvas<br>1x Moksha";
                    case 6: return "3x Shvas<br>1x Moksha";
                    case 7: return "3x Shvas<br>1x Moksha";
                    case 8: return "4x Shvas<br>2x Moksha";
                    case 9: return "4x Shvas<br>2x Moksha";
                    case 10: return "5x Shvas<br>2x Moksha";
                }
            }
            return hero.level;
        }
    },
    "Perilous Journey Death Stones": {
        title: "Dth Stones",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            if (hero.generation == 0) {
                return "None";
            }
            return rarityStonesReward(hero);
        }
    },
    "Perilous Journey Death Tickets": {
        title: "Dth Tickets",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            if (hero.generation == 0) {
                return 0;
            }
            let rank = 0;
            switch (hero.mainClass) {
                case 'DarkKnight':
                case 'Ninja':
                case 'Paladin':
                case 'Summoner': rank = 1;
                    break;
                case 'Dragoon':
                case 'Sage': rank = 2;
                    break
                case 'DreadKnight': rank = 3;
                    break;
                default:
                    break;
            }
            return hero.level + (2 * hero.rarity) + (2 * rank);
        }
    },
    "Total Stats": {
        title: "Totstat",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return parseInt(SumStats(hero)).toFixed(0);
        }
    },
    "Statgain": {
        title: "Statgain",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return parseInt(SumStats(RemoveBase(hero))).toFixed(0);
        }
    },
    "Statgain": {
        title: "Statgain",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return parseInt(SumStats(RemoveBase(hero))).toFixed(0);
        }
    },

    "Max Stamina": {
        title: "MStam",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            let currStam = CurrentStamina(hero);
            if (mode == 'display') {
                return parseInt(25 + parseInt(hero.level) / 2);
            }
            return parseInt(25 + parseInt(hero.level) / 2);
        }
    },
    "Current Stamina": {
        title: "Stam",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            let currStam = CurrentStamina(hero);
            if (mode == 'display') {
                return currStam;
            }
            return currStam;
        }
    },
    "Stamina": {
        title: "Stam",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            let currStam = CurrentStamina(hero);
            if (mode == 'display') {
                return `${currStam}/${parseInt(25 + parseInt(hero.level) / 2)}`;
            }
            return `${currStam}/${parseInt(25 + parseInt(hero.level) / 2)}`;
        }
    },
    "Stamina Full In": {
        title: "SMaxIn",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            let fullTime = FullTimeHours(hero);
            if (fullTime == 0) {
                return null;
            } else {
                if (mode == 'display') {
                    return fullTime + `H`
                }
                return fullTime;
            }
        }
    },
    "Stamina Full At": {
        title: "Stamina Full At",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            let fullTime = FullTime(hero);
            if (fullTime == 0) {
                return null;
            } else {
                return fullTime.toLocaleString();
            }
        }
    },
    "Profession Stats": {
        title: "ProfStat",
        data: (d) => {
            return d;
        },
        render: (data, mode) => {
            return data[professionStats[data.profession][0]] + data[professionStats[data.profession][1]];
        }
    },
    "Profession Skill*2 + Stat": {
        title: "SkillProfStat",
        data: (d) => {
            return d;
        },
        render: (data, mode) => {
            return (data[professionStats[data.profession][0]] + data[professionStats[data.profession][1]] + (data[data.profession] * 0.2)).toFixed(1);
        }
    },
    "Element": {
        title: "Element",
        data: "element"
    },
    "Element Recessive": {
        title: "Element+",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.element}<br>R1: ${hero.R1.element}<br>R2: ${hero.R2.element}<br>R3: ${hero.R3.element}`;
        }
    },
    "Element R1": {
        title: "ElementR1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.element;
        }
    },
    "Class Score": {
        title: "Class Score",
        data: "classScore"
    },
    "Class Score/Jewel": {
        title: "C Score/J",
        data: (d) => { return d; },
        render: (hero) => {
            if (hero.salePrice == null) {
                return hero.salePrice;
            }
            return (hero.classScore / FixSalePrice(hero.salePrice)).toFixed(5);
        }
    },
    "Growth Score":
    {
        title: "Growth Score",
        data: (d) => { return d; },
        render: (hero, mode) => {
            return hero.growthScore;
        }
    },
    "Growth Score/Jewel": {
        title: `G Score/J`,
        data: (d) => { return d; },
        render: (hero, mode) => {
            if (hero.salePrice == null) {
                return hero.salePrice;
            }
            return (hero.growthScore / FixSalePrice(hero.salePrice)).toFixed(5);
        }
    },
    "Active1": {
        title: "Active1",
        data: "active1"
    },
    "Active1 Recessive": {
        title: "Active1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.active1}<br>R1: ${hero.R1.active1}<br>R2: ${hero.R2.active1}<br>R3: ${hero.R3.active1}`;
        }
    },
    "Active1 R1": {
        title: "A1R1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.active1;
        }
    },
    "Active2": {
        title: "Active2",
        data: "active2"
    },
    "Active2 R1": {
        title: "A2R1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.active2;
        }
    },
    "Active2 Recessive": {
        title: "Active2",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.active2}<br>R1: ${hero.R1.active2}<br>R2: ${hero.R2.active2}<br>R3: ${hero.R3.active2}`;
        }
    },
    "Passive1": {
        title: "Passive1",
        data: "passive1"
    },
    "Passive1 R1": {
        title: "P1R1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.passive1;
        }
    },
    "Passive1 Recessive": {
        title: "Passive1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.passive1}<br>R1: ${hero.R1.passive1}<br>R2: ${hero.R2.passive1}<br>R3: ${hero.R3.passive1}`;
        }
    },
    "Passive2": {
        title: "Passive2",
        data: "passive2"
    },
    "Passive2 R1": {
        title: "P2R1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.passive2;
        }
    },
    "Passive2 Recessive": {
        title: "Passive2",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.passive2}<br>R1: ${hero.R1.passive2}<br>R2: ${hero.R2.passive2}<br>R3: ${hero.R3.passive1}`;
        }
    },
    "Stats Unknown 1": {
        title: "SU1",
        data: "statsUnknown1"
    },
    "Stats Unknown 1 R1": {
        title: "SU1R1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.statsUnknown1;
        }
    },
    "Stats Unknown 1 Recessive": {
        title: "SU1+",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.statsUnknown1}<br>R1: ${hero.R1.statsUnknown1}<br>R2: ${hero.R2.statsUnknown1}<br>R3: ${hero.R3.statsUnknown1}`;
        }
    },
    "Stats Unknown 2": {
        title: "SU2",
        data: "statsUnknown2"
    },
    "Stats Unknown 2 R1": {
        title: "SU2R1",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return hero.R1.statsUnknown2;
        }
    },
    "Stats Unknown 2 Recessive": {
        title: "SU2+",
        data: (d) => {
            return d;
        },
        render: (hero, mode) => {
            return `D: ${hero.statsUnknown2}<br>R1: ${hero.R1.statsUnknown2}<br>R2: ${hero.R2.statsUnknown2}<br>R3: ${hero.R3.statsUnknown2}`;
        }
    },
    "Mining Profession Skill": {
        title: "Min",
        data: (d) => {
            return d.mining / 10;
        }
    },
    "Foraging Profession Skill": {
        title: "For",
        data: (d) => {
            return d.foraging / 10;
        }
    },
    "Fishing Profession Skill": {
        title: "Fis",
        data: (d) => {
            return d.fishing / 10;
        }
    },
    "Gardening Profession Skill": {
        title: "Gar",
        data: (d) => {
            return d.gardening / 10;
        }
    },
    "Profession Skill": [{
        title: "Foraging",
        data: "foraging",
        render: (prof) => {
            return prof / 10;
        }
    },
    {
        title: "Fishing",
        data: "fishing",
        render: (prof) => {
            return prof / 10;
        }
    },
    {
        title: "Gardening",
        data: "gardening",
        render: (prof) => {
            return prof / 10;
        }
    },
    {
        title: "Mining",
        data: "mining",
        render: (prof) => {
            return prof / 10;
        }
    }],
    "Stats":
    [
        {
            title: "Str",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'STR' && d.statBoost2 == 'STR') {
                        return `<span style="color:${sb12}">${d.strength}</span>`;
                    }
                    if (d.statBoost1 == 'STR') {
                        return `<span style="color:${sb1}">${d.strength}</span>`;
                    }
                    else if (d.statBoost2 == 'STR') {
                        return `<span style="color:${sb2}">${d.strength}</span>`;
                    }
                }
                return d.strength;
            }
        },
        {
            title: "Dex",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'DEX' && d.statBoost2 == 'DEX') {
                        return `<span style="color:${sb12}">${d.dexterity}</span>`;
                    }
                    if (d.statBoost1 == 'DEX') {
                        return `<span style="color:${sb1}">${d.dexterity}</span>`;
                    }
                    else if (d.statBoost2 == 'DEX') {
                        return `<span style="color:${sb2}">${d.dexterity}</span>`;
                    }
                }
                return d.dexterity;
            }
        },
        {
            title: "Agi",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'AGI' && d.statBoost2 == 'AGI') {
                        return `<span style="color:${sb12}">${d.agility}</span>`;
                    }
                    if (d.statBoost1 == 'AGI') {
                        return `<span style="color:${sb1}">${d.agility}</span>`;
                    }
                    else if (d.statBoost2 == 'AGI') {
                        return `<span style="color:${sb2}">${d.agility}</span>`;
                    }
                }
                return d.agility;
            }
        },
        {
            title: "Vit",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'VIT' && d.statBoost2 == 'VIT') {
                        return `<span style="color:${sb12}">${d.vitality}</span>`;
                    }
                    if (d.statBoost1 == 'VIT') {
                        return `<span style="color:${sb1}">${d.vitality}</span>`;
                    }
                    else if (d.statBoost2 == 'VIT') {
                        return `<span style="color:${sb2}">${d.vitality}</span>`;
                    }
                }
                return d.vitality;
            }
        },
        {
            title: "End",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'END' && d.statBoost2 == 'END') {
                        return `<span style="color:${sb12}">${d.endurance}</span>`;
                    }
                    if (d.statBoost1 == 'END') {
                        return `<span style="color:${sb1}">${d.endurance}</span>`;
                    }
                    else if (d.statBoost2 == 'END') {
                        return `<span style="color:${sb2}">${d.endurance}</span>`;
                    }
                }
                return d.endurance;
            }
        },
        {
            title: "Int",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'INT' && d.statBoost2 == 'INT') {
                        return `<span style="color:${sb12}">${d.intelligence}</span>`;
                    }
                    if (d.statBoost1 == 'INT') {
                        return `<span style="color:${sb1}">${d.intelligence}</span>`;
                    }
                    else if (d.statBoost2 == 'INT') {
                        return `<span style="color:${sb2}">${d.intelligence}</span>`;
                    }
                }
                return d.intelligence;
            }
        },
        {
            title: "Wis",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'WIS' && d.statBoost2 == 'WIS') {
                        return `<span style="color:${sb12}">${d.wisdom}</span>`;
                    }
                    if (d.statBoost1 == 'WIS') {
                        return `<span style="color:${sb1}">${d.wisdom}</span>`;
                    }
                    else if (d.statBoost2 == 'WIS') {
                        return `<span style="color:${sb2}">${d.wisdom}</span>`;
                    }
                }
                return d.wisdom;
            }
        },
        {
            title: "lck",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'LCK' && d.statBoost2 == 'LCK') {
                        return `<span style="color:${sb12}">${d.luck}</span>`;
                    }
                    if (d.statBoost1 == 'LCK') {
                        return `<span style="color:${sb1}">${d.luck}</span>`;
                    }
                    else if (d.statBoost2 == 'LCK') {
                        return `<span style="color:${sb2}">${d.luck}</span>`;
                    }
                }
                return d.luck;
            }
        }
    ],
    "Primary Stat Growth":
    [
        {
            title: "StrG",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'STR') {
                        return `<span style="color:${sb2}">${(d.strengthGrowthP * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.strengthGrowthP * 100).toFixed(2)}%`;
                    }
                }
                return (d.strengthGrowthP * 100).toFixed(2);
            }
        },
        {
            title: "DexG",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'DEX') {
                        return `<span style="color:${sb2}">${(d.dexterityGrowthP * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.dexterityGrowthP * 100).toFixed(2)}%`;
                    }
                }
                return (d.dexterityGrowthP * 100).toFixed(2);
            }
        },
        {
            title: "AgiG",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'AGI') {
                        return `<span style="color:${sb2}">${(d.agilityGrowthP * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.agilityGrowthP * 100).toFixed(2)}%`;
                    }
                }
                return (d.agilityGrowthP * 100).toFixed(2);

            }
        },
        {
            title: "VitG",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'VIT') {
                        return `<span style="color:${sb2}">${(d.vitalityGrowthP * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.vitalityGrowthP * 100).toFixed(2)}%`;
                    }
                }
                return (d.vitalityGrowthP * 100).toFixed(2);

            }
        },
        {
            title: "EndG",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'END') {
                        return `<span style="color:${sb2}">${(d.enduranceGrowthP * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.enduranceGrowthP * 100).toFixed(2)}%`;
                    }
                }
                return (d.enduranceGrowthP * 100).toFixed(2);
            }
        },
        {
            title: "IntG",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'INT') {
                        return `<span style="color:${sb2}">${(d.intelligenceGrowthP * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.intelligenceGrowthP * 100).toFixed(2)}%`;
                    }
                }
                return (d.intelligenceGrowthP * 100).toFixed(2);
            }
        },
        {
            title: "WisG",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'WIS') {
                        return `<span style="color:${sb2}">${(d.wisdomGrowthP * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.wisdomGrowthP * 100).toFixed(2)}%`;
                    }
                }
                return (d.wisdomGrowthP * 100).toFixed(2);
            }
        },
        {
            title: "lckG",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'LCK') {
                        return `<span style="color:${sb2}">${(d.luckGrowthP * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.luckGrowthP * 100).toFixed(2)}%`;
                    }
                }
                return (d.luckGrowthP * 100).toFixed(2);
            }
        }
    ],
    "Secondary Stat Growth":
    [
        {
            title: "Strg",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'STR') {
                        return `<span style="color:${sb2}">${(d.strengthGrowthS * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.strengthGrowthS * 100).toFixed(2)}%`;
                    }
                }
                return (d.strengthGrowthS * 100).toFixed(2);
            }
        },
        {
            title: "Dexg",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'DEX') {
                        return `<span style="color:${sb2}">${(d.dexterityGrowthS * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.dexterityGrowthS * 100).toFixed(2)}%`;
                    }
                }
                return (d.dexterityGrowthS * 100).toFixed(2);
            }
        },
        {
            title: "Agig",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'AGI') {
                        return `<span style="color:${sb2}">${(d.agilityGrowthS * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.agilityGrowthS * 100).toFixed(2)}%`;
                    }
                }
                return (d.agilityGrowthS * 100).toFixed(2)
            }
        },
        {
            title: "Vitg",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'VIT') {
                        return `<span style="color:${sb2}">${(d.vitalityGrowthS * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.vitalityGrowthS * 100).toFixed(2)}%`;
                    }
                }
                return (d.vitalityGrowthS * 100).toFixed(2);
            }
        },
        {
            title: "Endg",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'END') {
                        return `<span style="color:${sb2}">${(d.enduranceGrowthS * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.enduranceGrowthS * 100).toFixed(2)}%`;
                    }
                }
                return (d.enduranceGrowthS * 100).toFixed(2);
            }
        },
        {
            title: "Intg",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'INT') {
                        return `<span style="color:${sb2}">${(d.intelligenceGrowthS * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.intelligenceGrowthS * 100).toFixed(2)}%`;
                    }
                }
                return (d.intelligenceGrowthS * 100).toFixed(2);
            }
        },
        {
            title: "Wisg",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'WIS') {
                        return `<span style="color:${sb2}">${(d.wisdomGrowthS * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.wisdomGrowthS * 100).toFixed(2)}%`;
                    }
                }
                return (d.wisdomGrowthS * 100).toFixed(2);
            }
        },
        {
            title: "lckg",
            data: (d) => {
                return d;
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost2 == 'LCK') {
                        return `<span style="color:${sb2}">${(d.luckGrowthS * 100).toFixed(2)}%</span>`;
                    }
                    else {
                        return `${(d.luckGrowthS * 100).toFixed(2)}%`;
                    }
                }
                return (d.luckGrowthS * 100).toFixed(2);
            }
        }
    ],
    "Statgain Split":
    [
        {
            title: "Str-",
            data: (d) => {
                return RemoveBase(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'STR' && d.statBoost2 == 'STR') {
                        return `<span style="color:${sb12}">${d.strength}</span>`;
                    }
                    if (d.statBoost1 == 'STR') {
                        return `<span style="color:${sb1}">${d.strength}</span>`;
                    }
                    else if (d.statBoost2 == 'STR') {
                        return `<span style="color:${sb2}">${d.strength}</span>`;
                    }
                }
                return d.strength;
            }
        },
        {
            title: "Dex-",
            data: (d) => {
                return RemoveBase(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'DEX' && d.statBoost2 == 'DEX') {
                        return `<span style="color:${sb12}">${d.dexterity}</span>`;
                    }
                    if (d.statBoost1 == 'DEX') {
                        return `<span style="color:${sb1}">${d.dexterity}</span>`;
                    }
                    else if (d.statBoost2 == 'DEX') {
                        return `<span style="color:${sb2}">${d.dexterity}</span>`;
                    }
                }
                return d.dexterity;
            }
        },
        {
            title: "Agi-",
            data: (d) => {
                return RemoveBase(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'AGI' && d.statBoost2 == 'AGI') {
                        return `<span style="color:${sb12}">${d.agility}</span>`;
                    }
                    if (d.statBoost1 == 'AGI') {
                        return `<span style="color:${sb1}">${d.agility}</span>`;
                    }
                    else if (d.statBoost2 == 'AGI') {
                        return `<span style="color:${sb2}">${d.agility}</span>`;
                    }
                }
                return d.agility;
            }
        },
        {
            title: "Vit-",
            data: (d) => {
                return RemoveBase(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'VIT' && d.statBoost2 == 'VIT') {
                        return `<span style="color:${sb12}">${d.vitality}</span>`;
                    }
                    if (d.statBoost1 == 'VIT') {
                        return `<span style="color:${sb1}">${d.vitality}</span>`;
                    }
                    else if (d.statBoost2 == 'VIT') {
                        return `<span style="color:${sb2}">${d.vitality}</span>`;
                    }
                }
                return d.vitality;
            }
        },
        {
            title: "End-",
            data: (d) => {
                return RemoveBase(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'END' && d.statBoost2 == 'END') {
                        return `<span style="color:${sb12}">${d.endurance}</span>`;
                    }
                    if (d.statBoost1 == 'END') {
                        return `<span style="color:${sb1}">${d.endurance}</span>`;
                    }
                    else if (d.statBoost2 == 'END') {
                        return `<span style="color:${sb2}">${d.endurance}</span>`;
                    }
                }
                    return d.endurance;
            }
        },
        {
            title: "Int-",
            data: (d) => {
                return RemoveBase(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'INT' && d.statBoost2 == 'INT') {
                        return `<span style="color:${sb12}">${d.intelligence}</span>`;
                    }
                    if (d.statBoost1 == 'INT') {
                        return `<span style="color:${sb1}">${d.intelligence}</span>`;
                    }
                    else if (d.statBoost2 == 'INT') {
                        return `<span style="color:${sb2}">${d.intelligence}</span>`;
                    }
                }
                    return d.intelligence;
            }
        },
        {
            title: "Wis-",
            data: (d) => {
                return RemoveBase(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'WIS' && d.statBoost2 == 'WIS') {
                        return `<span style="color:${sb12}">${d.wisdom}</span>`;
                    }
                    if (d.statBoost1 == 'WIS') {
                        return `<span style="color:${sb1}">${d.wisdom}</span>`;
                    }
                    else if (d.statBoost2 == 'WIS') {
                        return `<span style="color:${sb2}">${d.wisdom}</span>`;
                    }
                }
                return d.wisdom;
            }
        },
        {
            title: "lck-",
            data: (d) => {
                return RemoveBase(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'LCK' && d.statBoost2 == 'LCK') {
                        return `<span style="color:${sb12}">${d.luck}</span>`;
                    }
                    if (d.statBoost1 == 'LCK') {
                        return `<span style="color:${sb1}">${d.luck}</span>`;
                    }
                    else if (d.statBoost2 == 'LCK') {
                        return `<span style="color:${sb2}">${d.luck}</span>`;
                    }
                }
                return d.luck;
            }
        }
    ],
    "Statgain Split Weights":
    [
        {
            title: "Str%",
            data: (d) => {
                return MultiplyBaseByGrowth(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'STR' && d.statBoost2 == 'STR') {
                        return `<span style="color:${sb12}">${d.strength.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'STR') {
                        return `<span style="color:${sb1}">${d.strength.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'STR') {
                        return `<span style="color:${sb2}">${d.strength.toFixed(2)}</span>`;
                    }
                }
                    return d.strength.toFixed(2);
            }
        },
        {
            title: "Dex%",
            data: (d) => {
                return MultiplyBaseByGrowth(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'DEX' && d.statBoost2 == 'DEX') {
                        return `<span style="color:${sb12}">${d.dexterity.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'DEX') {
                        return `<span style="color:${sb1}">${d.dexterity.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'DEX') {
                        return `<span style="color:${sb2}">${d.dexterity.toFixed(2)}</span>`;
                    }
                }
                return d.dexterity.toFixed(2);
            }
        },
        {
            title: "Agi%",
            data: (d) => {
                return MultiplyBaseByGrowth(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'AGI' && d.statBoost2 == 'AGI') {
                        return `<span style="color:${sb12}">${d.agility.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'AGI') {
                        return `<span style="color:${sb1}">${d.agility.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'AGI') {
                        return `<span style="color:${sb2}">${d.agility.toFixed(2)}</span>`;
                    }
                }
                    return d.agility.toFixed(2);
            }
        },
        {
            title: "Vit%",
            data: (d) => {
                return MultiplyBaseByGrowth(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'VIT' && d.statBoost2 == 'VIT') {
                        return `<span style="color:${sb12}">${d.vitality.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'VIT') {
                        return `<span style="color:${sb1}">${d.vitality.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'VIT') {
                        return `<span style="color:${sb2}">${d.vitality.toFixed(2)}</span>`;
                    }
                }
                    return d.vitality.toFixed(2);
            }
        },
        {
            title: "End%",
            data: (d) => {
                return MultiplyBaseByGrowth(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'END' && d.statBoost2 == 'END') {
                        return `<span style="color:${sb12}">${d.endurance.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'END') {
                        return `<span style="color:${sb1}">${d.endurance.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'END') {
                        return `<span style="color:${sb2}">${d.endurance.toFixed(2)}</span>`;
                    }
                }
                    return d.endurance.toFixed(2);
            }
        },
        {
            title: "Int%",
            data: (d) => {
                return MultiplyBaseByGrowth(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'INT' && d.statBoost2 == 'INT') {
                        return `<span style="color:${sb12}">${d.intelligence.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'INT') {
                        return `<span style="color:${sb1}">${d.intelligence.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'INT') {
                        return `<span style="color:${sb2}">${d.intelligence.toFixed(2)}</span>`;
                    }
                }
                    return d.intelligence.toFixed(2);
            }
        },
        {
            title: "Wis%",
            data: (d) => {
                return MultiplyBaseByGrowth(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'WIS' && d.statBoost2 == 'WIS') {
                        return `<span style="color:${sb12}">${d.wisdom.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'WIS') {
                        return `<span style="color:${sb1}">${d.wisdom.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'WIS') {
                        return `<span style="color:${sb2}">${d.wisdom.toFixed(2)}</span>`;
                    }
                }
                return d.wisdom.toFixed(2);
            }
        },
        {
            title: "lck%",
            data: (d) => {
                return MultiplyBaseByGrowth(d);
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'LCK' && d.statBoost2 == 'LCK') {
                        return `<span style="color:${sb12}">${d.luck.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'LCK') {
                        return `<span style="color:${sb1}">${d.luck.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'LCK') {
                        return `<span style="color:${sb2}">${d.luck.toFixed(2)}</span>`;
                    }
                }
                return d.luck.toFixed(2);
            }
        }
    ],
    "Statgain Split Weights Remove Base":
    [
        {
            title: "Str-%",
            data: (d) => {
                return MultiplyBaseByGrowth(RemoveBase(d));
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'STR' && d.statBoost2 == 'STR') {
                        return `<span style="color:${sb12}">${d.strength.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'STR') {
                        return `<span style="color:${sb1}">${d.strength.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'STR') {
                        return `<span style="color:${sb2}">${d.strength.toFixed(2)}</span>`;
                    }
                }
                return d.strength.toFixed(2);
            }
        },
        {
            title: "Dex-%",
            data: (d) => {
                return MultiplyBaseByGrowth(RemoveBase(d));
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'DEX' && d.statBoost2 == 'DEX') {
                        return `<span style="color:${sb12}">${d.dexterity.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'DEX') {
                        return `<span style="color:${sb1}">${d.dexterity.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'DEX') {
                        return `<span style="color:${sb2}">${d.dexterity.toFixed(2)}</span>`;
                    }
                }
                return d.dexterity.toFixed(2);
            }
        },
        {
            title: "Agi-%",
            data: (d) => {
                return MultiplyBaseByGrowth(RemoveBase(d));
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'AGI' && d.statBoost2 == 'AGI') {
                        return `<span style="color:${sb12}">${d.agility.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'AGI') {
                        return `<span style="color:${sb1}">${d.agility.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'AGI') {
                        return `<span style="color:${sb2}">${d.agility.toFixed(2)}</span>`;
                    }
                }
                return d.agility.toFixed(2);
            }
        },
        {
            title: "Vit-%",
            data: (d) => {
                return MultiplyBaseByGrowth(RemoveBase(d));
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'VIT' && d.statBoost2 == 'VIT') {
                        return `<span style="color:${sb12}">${d.vitality.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'VIT') {
                        return `<span style="color:${sb1}">${d.vitality.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'VIT') {
                        return `<span style="color:${sb2}">${d.vitality.toFixed(2)}</span>`;
                    }
                }
                return d.vitality.toFixed(2);
            }
        },
        {
            title: "End-%",
            data: (d) => {
                return MultiplyBaseByGrowth(RemoveBase(d));
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'END' && d.statBoost2 == 'END') {
                        return `<span style="color:${sb12}">${d.endurance.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'END') {
                        return `<span style="color:${sb1}">${d.endurance.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'END') {
                        return `<span style="color:${sb2}">${d.endurance.toFixed(2)}</span>`;
                    }
                }
                return d.endurance.toFixed(2);
            }
        },
        {
            title: "Int-%",
            data: (d) => {
                return MultiplyBaseByGrowth(RemoveBase(d));
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'INT' && d.statBoost2 == 'INT') {
                        return `<span style="color:${sb12}">${d.intelligence.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'INT') {
                        return `<span style="color:${sb1}">${d.intelligence.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'INT') {
                        return `<span style="color:${sb2}">${d.intelligence.toFixed(2)}</span>`;
                    }
                }
                return d.intelligence.toFixed(2);
            }
        },
        {
            title: "Wis-%",
            data: (d) => {
                return MultiplyBaseByGrowth(RemoveBase(d));
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'WIS' && d.statBoost2 == 'WIS') {
                        return `<span style="color:${sb12}">${d.wisdom.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'WIS') {
                        return `<span style="color:${sb1}">${d.wisdom.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'WIS') {
                        return `<span style="color:${sb2}">${d.wisdom.toFixed(2)}</span>`;
                    }
                }
                return d.wisdom.toFixed(2);
            }
        },
        {
            title: "Lck-%",
            data: (d) => {
                return MultiplyBaseByGrowth(RemoveBase(d));
            },
            render: (d, mode) => {
                if (mode == 'display') {
                    if (d.statBoost1 == 'LCK' && d.statBoost2 == 'LCK') {
                        return `<span style="color:${sb12}">${d.luck.toFixed(2)}</span>`;
                    }
                    if (d.statBoost1 == 'LCK') {
                        return `<span style="color:${sb1}">${d.luck.toFixed(2)}</span>`;
                    }
                    else if (d.statBoost2 == 'LCK') {
                        return `<span style="color:${sb2}">${d.luck.toFixed(2)}</span>`;
                    }
                }
                return d.luck.toFixed(2);
            }
        }
    ],
    "Previous Owner": [{
        title: "POwner",
        data: "previousOwner",
        render: (pOwner) => {
            if (pOwner == null)
                return null;
            return pOwner.name;
        }
        },
        {
            title: "POwner Address",
            data: "previousOwner",
            render: (pOwner) => {
                if (pOwner == null)
                    return null;
                return pOwner.id;
            }
        }
    ],
    "Owner": [{
        title: "Owner",
        data: "owner",
        render: (owner) => {
            if (owner == null)
                return owner;
            if (owner.name == 'undefined')
                return null;
            return owner.name;
        }
    },
    {
        title: "Owner Address",
        data: "owner",
        render: (owner) => {
            if (owner == null)
                return owner;
            if (owner.id == 'undefined')
                return null;
            return owner.id;
        }
    }],
    "Name": {
        title: "Name",
        data: (d) => {
            return d;
        },
        render: (hero) => {
            return FullName(hero);
        }
    },
}

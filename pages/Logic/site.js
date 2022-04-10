let base =
  "https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql";
let address, loadedHeroTable;
let heroes = [];
let hideFilters, hideColumnFilters, hideColumns, fullscreen, tryClicked;
let latestTime = 0,
  earliestTime = 9999999999999999;
const heroData = `staminaFullAt stamina hp mp privateAuctionProfile { id } previousOwner { name id } pjStatus xp statGenes privateAuctionProfile {id} active1 active2 passive1 passive2 profession fishing mining gardening foraging firstName owner{name id} salePrice lastName rarity gender numberId shiny mainClass subClass summons maxSummons level xp strength dexterity agility vitality endurance intelligence wisdom statBoost1 statBoost2 luck strengthGrowthP strengthGrowthS dexterityGrowthP dexterityGrowthS agilityGrowthP agilityGrowthS vitalityGrowthP vitalityGrowthS enduranceGrowthP enduranceGrowthS intelligenceGrowthP intelligenceGrowthS wisdomGrowthP wisdomGrowthS luckGrowthP luckGrowthS summons summonsRemaining maxSummons generation element statsUnknown1 statsUnknown2`;
module.exports = {
  init: function init() {
    address = localStorage.getItem("0x");
    hideColumnFilters = JSON.parse(localStorage.getItem("hideColumnFilters"));
    hideFilters = JSON.parse(localStorage.getItem("hideFilters"));
    hideColumns = JSON.parse(localStorage.getItem("hideColumns"));
    fullscreen = JSON.parse(localStorage.getItem("fullscreen"));
    tryClicked = JSON.parse(localStorage.getItem(`tryClick`));
    if (tryClicked) {
      //   $("#tryClick").hide();
    }
    if (hideColumns) {
      //   $(`#columnConfig`).show();
      //   $("#ColumnsBtn").toggleClass("btn-secondary").toggleClass("btn-primary");
    }
    if (hideFilters) {
      //   $(`#filters`).show();
      //   $("#FilterBtn").toggleClass("btn-secondary").toggleClass("btn-primary");
    }
    if (fullscreen) {
      //   $("#SiteContainer")
      //     .toggleClass("container")
      //     .toggleClass("ms-1")
      //     .toggleClass("mx-1");
      //   $("#FullscreenBtn")
      //     .toggleClass("btn-secondary")
      //     .toggleClass("btn-primary");
    }
    console.log(hideColumnFilters);
    if (hideColumnFilters) {
      //   $(`#liveFiltersToggler`).show();
      //   $("#TableFilterBtn")
      //     .toggleClass("btn-secondary")
      //     .toggleClass("btn-primary");
    }
    console.log(address);
    if (address != null && address.length == 42) {
      //   $("#MyDFKNavigation").show();
      //   $("#Login0x").hide();
    } else {
      //   $("#Logout0x").hide();
    }
    // $(".updateColBtn").hide();
  },
  SetPreset: function SetPreset(preset) {
    console.log(preset);
    switch (preset) {
      case "perilous":
        columnSelect
          .val([
            "Cost",
            "Id",
            "Class",
            "Subclass",
            "Level",
            "XP",
            "Generation",
            "Summons",
            "PJ Survivor",
            "Perilous Journey Survival Rate",
            "Perilous Journey Survival Crystals",
            "Perilous Journey Survival Tickets",
            "Perilous Journey Death Jewels",
            "Perilous Journey Death Runes",
            "Perilous Journey Death Stones",
            "Perilous Journey Death Tickets",
            "Profession",
            "Active1",
            "Active2",
            "Passive1",
            "Passive2",
          ])
          .trigger("change");
        break;
      case "details":
        columnSelect
          .val([
            "Cost",
            "Id",
            "Class",
            "Subclass",
            "Level",
            "Shiny",
            "Generation",
            "Summons",
            "Health",
            "Mana",
            "Stamina",
            "Stat Boost 1(Green +2)",
            "Stat Boost 2(Blue Growth)",
            "Profession",
            "Class Score",
            "Growth Score",
            "Active1",
            "Active2",
            "Passive1",
            "Passive2",
          ])
          .trigger("change");
        break;
      case "summoningR1s":
        columnSelect
          .val([
            "Cost",
            "Id",
            "Class",
            "Class R1",
            "Subclass",
            "Subclass R1",
            "Shiny",
            "Growth Score",
            "Stat Boost 1(Green +2)",
            "Stat Boost 1 R1",
            "Stat Boost 2(Blue Growth)",
            "Stat Boost 2 R1",
            "Profession",
            "Profession R1",
            "Element",
            "Element R1",
            "Stats Unknown 1",
            "Stats Unknown 1 R1",
            "Stats Unknown 2",
            "Stats Unknown 2 R1",
            "Generation",
            "Summons",
            "Active1",
            "Active1 R1",
            "Active2",
            "Active2 R1",
            "Passive1",
            "Passive1 R1",
            "Passive2",
            "Passive2 R1",
          ])
          .trigger("change");
        break;
      case "summoning":
        columnSelect
          .val([
            "Cost",
            "Id",
            "Class Recessives",
            "Subclass Recessives",
            "Shiny",
            "Growth Score",
            "Stat Boost 1 Recessive",
            "Stat Boost 2 Recessive",
            "Profession Recessive",
            "Element Recessive",
            "Stats Unknown 1 Recessive",
            "Stats Unknown 2 Recessive",
            "Generation",
            "Summons",
            "Active1 Recessive",
            "Active2 Recessive",
            "Passive1 Recessive",
            "Passive2 Recessive",
          ])
          .trigger("change");
        break;
      case "profession":
        columnSelect
          .val([
            "Id",
            "Cost",
            "Class",
            "Subclass",
            "Level",
            "XP",
            "Profession",
            "Generation",
            "Summons",
            "Stat Boost 1(Green +2)",
            "Stat Boost 2(Blue Growth)",
            "Profession Stats",
            "Profession Skill*2 + Stat",
            "Profession Skill",
          ])
          .trigger("change");
        break;
      case "Stats Breakdown":
        columnSelect
          .val([
            "Id",
            "Cost",
            "Class",
            "Subclass",
            "Level",
            "XP",
            "Profession",
            "Generation",
            "Summons",
            "Stat Boost 1(Green +2)",
            "Stat Boost 2(Blue Growth)",
            "Class Score",
            "Growth Score",
            "Active1",
            "Active2",
            "Passive1",
            "Passive2",
            "Stats",
            "Statgain Split",
            "Profession Skill",
          ])
          .trigger("change");
        break;
      default:
        columnSelect
          .val([
            "Id",
            "Cost",
            "Class",
            "Subclass",
            "Level",
            "Profession",
            "Generation",
            "Summons",
            "Stat Boost 1(Green +2)",
            "Stat Boost 2(Blue Growth)",
            "PJ Survivor",
            "Class Score",
            "Growth Score",
            "Active1",
            "Active2",
            "Passive1",
            "Passive2",
          ])
          .trigger("change");
        break;
    }
  },
  UpdateTableColumns: async function UpdateTableColumns(id) {
    let cols = [];
    if (columnSelect.val().length == 0) {
      SetPreset();
    }
    $(`.updateColBtn`).hide();
    columnSelect.val().forEach((c) => {
      if (Array.isArray(columnDefs[c])) {
        columnDefs[c].forEach((column) => {
          cols.push(column);
        });
      } else {
        cols.push(columnDefs[c]);
      }
    });
    console.log(JSON.stringify(columnSelect.val()));
    localStorage.setItem("columns", JSON.stringify(columnSelect.val()));
    await HeroTable(id, heroes, cols);
  },
  OpenOptionsModal: function OpenOptionsModal() {
    let stamMode = localStorage.getItem("StamMode");
    $("#StaminaDisplayMode").val(stamMode);
    $("#optionsModal").modal("show");
  },

  StaminaFullMode: function StaminaFullMode(val) {
    console.log(val);
    if (val) {
      localStorage.setItem("StamMode", val);
      $("#StamDisplayMode").html(val);
    }
  },

  Fullscreen: function Fullscreen() {
    fullscreen = !fullscreen;
    localStorage.setItem("fullscreen", fullscreen);
    window
      .querySelector("#SiteContainer")
      .toggleClass("container")
      .toggleClass("ms-1")
      .toggleClass("mx-1");
    if (loadedHeroTable != undefined) {
      loadedHeroTable.draw();
    }
    window
      .querySelector("#FullscreenBtn")
      .toggleClass("btn-secondary")
      .toggleClass("btn-primary");
  },

  toggleColumns: function toggleColumns() {
    window.querySelector(`#columnConfig`).slideToggle(100);
    console.log(hideColumns);
    hideColumns = !hideColumns;
    console.log(hideColumns);
    localStorage.setItem("hideColumns", hideColumns);
    window
      .querySelector("#ColumnsBtn")
      .toggleClass("btn-secondary")
      .toggleClass("btn-primary");
  },

  ToggleColumnFilters: function ToggleColumnFilters() {
    window.querySelector(`#liveFiltersToggler`).slideToggle(100);
    hideColumnFilters = !hideColumnFilters;
    console.log(hideColumnFilters);
    localStorage.setItem("hideColumnFilters", hideColumnFilters);
    window
      .querySelector("#TableFilterBtn")
      .toggleClass("btn-secondary")
      .toggleClass("btn-primary");
  },

  toggleFilters: function toggleFilters() {
    window.querySelector(`#filters`).slideToggle(100);
    hideFilters = !hideFilters;
    localStorage.setItem("hideFilters", hideFilters);
    window
      .querySelector("#FilterBtn")
      .toggleClass("btn-secondary")
      .toggleClass("btn-primary");
  },

  ClearColumns: function ClearColumns() {
    columnSelect.val(null).trigger("change");
  },
  AddAllColumns: function AddAllColumns() {
    columnSelect.html("");
    for (const c in columnDefs) {
      columnSelect.append(new Option(c, c, false, true)).trigger("change");
    }
  },

  addColumns: function addColumns(columns) {
    let retCol = [];
    columns.forEach((c) => {
      if (Array.isArray(c)) {
        c.forEach((column) => {
          retCol.push(column);
        });
      } else {
        retCol.push(c);
      }
    });
    return retCol;
  },

  DFK: async function DFK(query) {
    console.log(query);
    return fetch(base, {
      method: "POST",
      body: { query: query },
    });
    // .then((req) => {
    //     return req;
    // }).catch((e) => {
    //     console.log(e);
    //     return e;
    // })
  },

  Login: function Login(submittedAddress) {
    if (typeof window !== "undefined") {
      localStorage.setItem("0x", submittedAddress);
      // location.href = "/MyDFK";
    }
    return false;
  },

  Logout: function Logout() {
    if (typeof window !== "undefined") {
      localStorage.setItem("0x", "");
    }
  },

  GetHero: async function GetHero(id) {
    return new Promise((res, rej) => {
      DFK(`{hero(id:${id}){${heroData}}}`)
        .then((hero) => {
          res(JSON.parse(hero).data.hero);
        })
        .catch((e) => {
          rej(e);
        });
    });
  },

  GetDeadHeroes: async function GetDeadHeroes(addr) {
    return new Promise((res, rej) => {
      console.log(addr);
      DFK(
        `{heroes(where:{previousOwner:"${addr}", pjStatus:"DIED"}, orderBy:id){${heroData}}}`
      )
        .then((hero) => {
          console.log(JSON.parse(hero).data.heroes);
          res(JSON.parse(hero).data.heroes);
        })
        .catch((e) => {
          rej(e);
        });
    });
  },

  GetHeroes: async function GetHeroes(addr) {
    return new Promise((res, rej) => {
      console.log(addr);
      DFK(`{heroes(where:{owner:"${addr}"}, orderBy:id){${heroData}}}`)
        .then((hero) => {
          res(JSON.parse(hero).data.heroes);
        })
        .catch((e) => {
          rej(e);
        });
    });
  },

  searchAddys: async function searchAddys(addys, skip, first) {
    return new Promise((res, rej) => {
      DFK(
        `{heroes(first:${first}, skip:${skip}, where:{owner_in: [${addys}]}, orderBy:id){${heroData}}}`
      )
        .then((hero) => {
          let retHeroes = JSON.parse(hero).data.heroes;
          res(retHeroes);
        })
        .catch((e) => {
          rej(e);
        });
    });
  },

  ToggleRawTxn: function ToggleRawTxn() {
    window.querySelector("#SearchButton").toggle();
    window.querySelector(`#RawTxnToggler`).slideToggle(100);
    window
      .querySelector("#TableRawQueryBtn")
      .toggleClass("btn-primary")
      .toggleClass("btn-secondary");
  },

  SearchIds: async function SearchIds(heroIds) {
    return new Promise((res, rej) => {
      DFK(
        `{heroes(first:1000, where:{numberId_in: [${heroIds}]}, orderBy:id){${heroData}}}`
      )
        .then((hero) => {
          let retHeroes = JSON.parse(hero).data.heroes;
          res(retHeroes);
        })
        .catch((e) => {
          rej(e);
        });
    });
  },

  GetTavernRawQuery: async function GetTavernRawQuery(query) {
    return new Promise((res, rej) => {
      DFK(`{heroes(${$(`#RawQueryInput`).val()}){${heroData}}}`)
        .then((hero) => {
          let retHeroes = JSON.parse(hero).data.heroes;
          res(retHeroes);
        })
        .catch((e) => {
          rej(e);
        });
    });
  },

  GetTavern: async function GetTavern(query) {
    return new Promise((res, rej) => {
      let classSearch = ``,
        subclassSearch = ``,
        professionSearch = ``,
        heroSearch = ``,
        blueStatSearch = ``,
        greenStatSearch = ``,
        searchTavernOnly = ``,
        orderValue = `id`,
        pjQuery = ``;
      let salePriceQuery = `, salePrice_gte:${query.minPrice}, salePrice_lte:${query.maxPrice}`;
      if (query.tavernOnly) {
        searchTavernOnly = `salePrice_not: null,`;
        orderValue = `salePrice`;
      } else {
        salePriceQuery = ``;
        searchTavernOnly = ``;
      }
      //Blue Stat Query
      if (query.blueStat.length == 0) {
        heroStatBoost.forEach((q, i) => {
          blueStatSearch += `"${q}",`;
        });
      } else {
        query.blueStat.forEach((q) => {
          blueStatSearch += `"${q}",`;
        });
      }
      //Green Stat Query
      if (query.greenStat.length == 0) {
        heroStatBoost.forEach((q, i) => {
          greenStatSearch += `"${q}",`;
        });
      } else {
        query.greenStat.forEach((q) => {
          greenStatSearch += `"${q}",`;
        });
      }
      //Rarity Query
      if (query.rarity.length == 0) {
        heroRarity.forEach((q, i) => {
          heroSearch += `${i},`;
        });
      } else {
        query.rarity.forEach((q) => {
          heroSearch += `${q},`;
        });
      }
      //MainClass Query
      if (query.mainClass.length == 0) {
        heroClasses.forEach((q) => {
          classSearch += `"${q}",`;
        });
      } else {
        query.mainClass.forEach((q) => {
          classSearch += `"${q}",`;
        });
      }
      //SubClass Query
      if (query.subClass.length == 0) {
        heroClasses.forEach((q) => {
          subclassSearch += `"${q}",`;
        });
      } else {
        query.subClass.forEach((q) => {
          subclassSearch += `"${q}",`;
        });
      }
      //Profession Query
      if (query.profession.length == 0) {
        professions.forEach((p) => {
          professionSearch += `"${p}",`;
        });
      } else {
        query.profession.forEach((p) => {
          professionSearch += `"${p}",`;
        });
      }
      if (query.maxSummons == 10) {
        query.maxSummons = 11;
      }
      if (query.pjStatus != undefined) {
        switch (query.pjStatus) {
          case "SURVIVED":
            pjQuery += `pjStatus:"${query.pjStatus}",`;
            break;
          case "DIED":
            pjQuery += `pjStatus:"${query.pjStatus}",`;
            break;
          case "null":
            pjQuery += "pjStatus:" + query.pjStatus + `,`;
            break;
          default:
            break;
        }
      }
      let skills = [active1, active2, passive1, passive2];
      let a1 = "",
        a2 = "",
        p1 = "",
        p2 = "";
      console.log(active1.val());
      if (active1.val().length) {
        a1 += "active1_in:[";
        active1.val().forEach((s) => {
          a1 += `"${s}",`;
        });
        a1 += "],";
      }
      if (active2.val().length) {
        a2 += "active2_in:[";
        active2.val().forEach((s) => {
          a2 += `"${s}",`;
        });
        a2 += "],";
      }
      if (passive1.val().length) {
        p1 += "passive1_in:[";
        passive1.val().forEach((s) => {
          p1 += `"${s}",`;
        });
        p1 += "],";
      }
      if (passive2.val().length) {
        p2 += "passive2_in:[";
        passive2.val().forEach((s) => {
          p2 += `"${s}",`;
        });
        p2 += "],";
      }
      console.log(skills);
      DFK(
        `{heroes(skip:${query.skip},first:${query.first},where:{${a1}${a2}${p1}${p2}${pjQuery}statBoost1_in: [${greenStatSearch}], statBoost2_in: [${blueStatSearch}], level_gte:${query.minLevel}, level_lte:${query.maxLevel}${salePriceQuery}, ${searchTavernOnly} mainClass_in:[${classSearch}], subClass_in: [${subclassSearch}], profession_in:[${professionSearch}], rarity_in:[${heroSearch}], summonsRemaining_lte: ${query.maxSummons}, summonsRemaining_gte: ${query.minSummons}, generation_gte: ${query.minGeneration}, generation_lte: ${query.maxGeneration}}, orderBy:${orderValue}){${heroData}}}`
      )
        .then((hero) => {
          let retHeroes = JSON.parse(hero).data.heroes;
          res(retHeroes);
        })
        .catch((e) => {
          rej(e);
        });
    });
  },

  GetEarlierHistory: async function GetEarlierHistory(query) {
    return new Promise((res, rej) => {
      DFK(
        `{saleAuctions(skip:${query.skip},first:${
          query.first
        }, where: {startedAt_lt: ${
          earliestTime / 1000
        }},orderDirection:desc,orderBy:id){id endedAt startedAt duration startingPrice purchasePrice tokenId {${heroData}}}}`
      )
        .then((hero) => {
          let data = JSON.parse(hero).data;
          let retHeroes = data.saleAuctions.map((s) => {
            let hero = s.tokenId;
            hero.saleAuction = {
              id: s.id,
              endedAt: new Date(s.endedAt * 1000),
              startedAt: new Date(s.startedAt * 1000),
              duration: s.duration,
              startingPrice: FixSalePrice(s.startingPrice),
              purchasePrice: FixSalePrice(s.purchasePrice),
            };
            if (hero.saleAuction.startedAt.getTime() > latestTime) {
              latestTime = hero.saleAuction.startedAt.getTime();
            }
            console.log(earliestTime, hero.saleAuction);
            if (hero.saleAuction.startedAt.getTime() < earliestTime) {
              earliestTime = hero.saleAuction.startedAt.getTime();
            }
            return hero;
          });
          console.log(new Date(earliestTime));
          //console.log(retHeroes);
          res(retHeroes);
        })
        .catch((e) => {
          rej(e);
        });
    });
  },

  GetHistory: async function GetHistory(query) {
    return new Promise((res, rej) => {
      DFK(
        `{saleAuctions(skip:${query.skip},first:${
          query.first
        }, where: {startedAt_gt: ${
          latestTime / 1000
        }},orderDirection:desc,orderBy:id){id endedAt startedAt duration startingPrice purchasePrice tokenId {${heroData}}}}`
      )
        .then((hero) => {
          let data = JSON.parse(hero).data;
          let retHeroes = data.saleAuctions.map((s) => {
            let hero = s.tokenId;
            hero.saleAuction = {
              id: s.id,
              endedAt: new Date(s.endedAt * 1000),
              startedAt: new Date(s.startedAt * 1000),
              duration: s.duration,
              startingPrice: FixSalePrice(s.startingPrice),
              purchasePrice: FixSalePrice(s.purchasePrice),
            };
            if (hero.saleAuction.startedAt.getTime() > latestTime) {
              latestTime = hero.saleAuction.startedAt.getTime();
            }
            if (hero.saleAuction.startedAt.getTime() < earliestTime) {
              earliestTime = hero.saleAuction.startedAt.getTime();
            }
            return hero;
          });
          console.log(new Date(latestTime));
          //console.log(retHeroes);
          res(retHeroes);
        })
        .catch((e) => {
          rej(e);
        });
    });
  },

  GetRawQueryHistory: async function GetRawQueryHistory(query) {
    return new Promise((res, rej) => {
      DFK(
        `{saleAuctions(${$(
          `#RawQueryInput`
        ).val()}){id endedAt startedAt duration startingPrice purchasePrice tokenId {${heroData}}}}`
      )
        .then((hero) => {
          let data = JSON.parse(hero).data;
          let retHeroes = data.saleAuctions.map((s) => {
            let hero = s.tokenId;
            hero.saleAuction = {
              id: s.id,
              endedAt: new Date(s.endedAt * 1000),
              startedAt: new Date(s.startedAt * 1000),
              duration: s.duration,
              startingPrice: FixSalePrice(s.startingPrice),
              purchasePrice: FixSalePrice(s.purchasePrice),
            };
            return hero;
          });
          console.log(new Date(latestTime));
          //console.log(retHeroes);
          res(retHeroes);
        })
        .catch((e) => {
          rej(e);
        });
    });
  },
};

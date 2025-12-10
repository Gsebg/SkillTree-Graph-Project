const AC_ORIGINS_DATA = {
    "eagle_tagging": {
        "id": "eagle_tagging",
        "title": "Eagle Tagging",
        "group": "Hunter",
        "description": "Use Senu in hover mode to tag enemies and various points of interest in activity locations.",
        "points": 0,
        "icon": "\ud80c\udc4c",
        "parents": [],
        "state": "selected",
        "x": 0,
        "y": 0
    },
    "assassination_xp": {
        "id": "assassination_xp",
        "title": "Assassination XP",
        "group": "Hunter",
        "description": "(Passive) Assassinating an enemy grants bonus XP.",
        "points": 1,
        "icon": "\ud80c\udda7",
        "parents": [
            "eagle_tagging"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "headshot_xp": {
        "id": "headshot_xp",
        "title": "Headshot XP",
        "group": "Hunter",
        "description": "(Passive) Killing an enemy with a headshot grants you bonus XP.",
        "points": 1,
        "icon": "\ud80c\udc43",
        "parents": [
            "eagle_tagging"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "arrow_retriever": {
        "id": "arrow_retriever",
        "title": "Arrow Retriever",
        "group": "Hunter",
        "description": "(Passive) Loot arrows stuck in your shield back into your inventory.",
        "points": 1,
        "icon": "\ud80c\udf01",
        "parents": [
            "eagle_tagging"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "bow_bearer": {
        "id": "bow_bearer",
        "title": "Bow Bearer",
        "group": "Hunter",
        "description": "You can equip a 2nd bow. Press \"\u2190\" to switch equipped bows.",
        "points": 1,
        "icon": "\ud80c\udc0a",
        "parents": [
            "arrow_retriever",
            "eagle_harass",
            "enhanced_warrior_bow",
            "enhanced_hunter_bow",
            "enhanced_predator_bow",
            "enhanced_light_bow",
            "charge_heavy_attack"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "assassination_loot": {
        "id": "assassination_loot",
        "title": "Assassination Loot",
        "group": "Hunter",
        "description": "(Passive) Automatically loot an enemy after assassinating them.",
        "points": 2,
        "icon": "\ud80c\uddac",
        "parents": [
            "assassination_xp",
            "tool_kill_xp"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "stealth_kill_streak": {
        "id": "stealth_kill_streak",
        "title": "Stealth Kill Streak",
        "group": "Hunter",
        "description": "(Passive) Successive assassinations grant you XP bonus if you are not detected.",
        "points": 2,
        "icon": "\ud80c\udc0b",
        "parents": [
            "assassination_loot",
            "chain_assassination"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "eagle_harass": {
        "id": "eagle_harass",
        "title": "Eagle Harass",
        "group": "Hunter",
        "description": "While in hover mode, look at an enemy and press Y / \u25b3 to have Senu stun them.\n\n(Passive) Senu will also help you harass enemies during combat.",
        "points": 2,
        "icon": "\ud80c\udc46",
        "parents": [
            "bow_bearer",
            "charge_heavy_attack"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "hunter_s_instinct": {
        "id": "hunter_s_instinct",
        "title": "Hunter's Instinct",
        "group": "Hunter",
        "description": "While in hover mode with Senu, press A / X to mark a civilian, enemy or animal to see the path they are currently taking.",
        "points": 2,
        "icon": "\ud80c\udc10",
        "parents": [
            "headshot_xp",
            "bow_fury"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "enhanced_warrior_bow": {
        "id": "enhanced_warrior_bow",
        "title": "Enhanced Warrior Bow",
        "group": "Hunter",
        "description": "Holding RT / R2 to charge your shot will reduce its dispersion zone.",
        "points": 2,
        "icon": "\ud80c\udda5",
        "parents": [
            "bow_bearer",
            "elite_ranger"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "enhanced_hunter_bow": {
        "id": "enhanced_hunter_bow",
        "title": "Enhanced Hunter Bow",
        "group": "Hunter",
        "description": "Holding RT / R2 to charge your shot will additionally break shield defense.",
        "points": 2,
        "icon": "\ud80c\udc0d",
        "parents": [
            "bow_bearer",
            "elite_ranger"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "enhanced_predator_bow": {
        "id": "enhanced_predator_bow",
        "title": "Enhanced Predator Bow",
        "group": "Hunter",
        "description": "Hold RT / R2 to control a predator arrow in the air.",
        "points": 2,
        "icon": "\ud80c\udc11",
        "parents": [
            "bow_bearer",
            "elite_ranger"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "enhanced_light_bow": {
        "id": "enhanced_light_bow",
        "title": "Enhanced Light Bow",
        "group": "Hunter",
        "description": "Fire more arrows before needing to reload.",
        "points": 2,
        "icon": "\ud80c\udc52",
        "parents": [
            "bow_bearer",
            "elite_ranger"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "elite_ranger": {
        "id": "elite_ranger",
        "title": "Elite Ranger",
        "group": "Hunter",
        "description": "Aiming with your bow while in\nthe air will trigger slow-mo.",
        "points": 3,
        "icon": "\ud80c\udc0c",
        "parents": [
            "enhanced_light_bow",
            "enhanced_predator_bow",
            "enhanced_hunter_bow",
            "enhanced_warrior_bow",
            "bow_fury",
            "master_hunter"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "bow_fury": {
        "id": "bow_fury",
        "title": "Bow Fury",
        "group": "Hunter",
        "description": "After getting a stealth kill with your bow, you have a 3 second window of slow-mo while still aiming with your bow.",
        "points": 3,
        "icon": "\ud80c\udf00",
        "parents": [
            "hunter_s_instinct",
            "chain_assassination",
            "elite_ranger",
            "master_hunter"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "chain_assassination": {
        "id": "chain_assassination",
        "title": "Chain Assassination",
        "group": "Hunter",
        "description": "After assassinating an enemy with the Hidden Blade, press Y / \u25b3 to assassinate another enemy in range.",
        "points": 3,
        "icon": "\ud80c\udc14",
        "parents": [
            "stealth_kill_streak",
            "bow_fury",
            "master_hunter"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "master_hunter": {
        "id": "master_hunter",
        "title": "Master Hunter",
        "group": "Hunter",
        "description": "(Passive) Increase the damage of all your bows by an additional +1%. This Ability can be acquired multiple times.",
        "points": 1,
        "icon": "\ud80c\udef9",
        "parents": [
            "elite_ranger",
            "bow_fury",
            "chain_assassination"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "overpower": {
        "id": "overpower",
        "title": "Overpower",
        "group": "Warrior",
        "description": "When your adrenaline bar is full you can unleash the power of your weapon by pressing RB + RT / R1 + R2. Every weapon class has its own unique ability.",
        "points": 0,
        "icon": "\ud80c\udc06",
        "parents": [],
        "state": "selected",
        "x": 0,
        "y": 0
    },
    "charge_heavy_attack": {
        "id": "charge_heavy_attack",
        "title": "Charge Heavy Attack",
        "group": "Warrior",
        "description": "Hold RT / R2 to charge your Heavy Attack. A fully charged Heavy Attack will shield break tower shields and knock enemies to the ground.",
        "points": 1,
        "icon": "\ud80c\udda4",
        "parents": [
            "overpower"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "regeneration": {
        "id": "regeneration",
        "title": "Regeneration",
        "group": "Warrior",
        "description": "(Passive) Your life can regenerate during combat.",
        "points": 1,
        "icon": "\ud80c\udc45",
        "parents": [
            "overpower"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "air_attack": {
        "id": "air_attack",
        "title": "Air Attack",
        "group": "Warrior",
        "description": "You can perform an attack while in the air.",
        "points": 1,
        "icon": "\ud80c\udc47",
        "parents": [
            "regeneration",
            "hijack"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "overpower_ultra": {
        "id": "overpower_ultra",
        "title": "Overpower Ultra",
        "group": "Warrior",
        "description": "(Passive) Double the damage of your Overpower ability.",
        "points": 1,
        "icon": "\ud80c\udc0e",
        "parents": [
            "weapon_bearer",
            "overpower_combo",
            "overpower_chain_throw"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "parry": {
        "id": "parry",
        "title": "Parry",
        "group": "Warrior",
        "description": "Deflect an incoming attack by tapping B / O while in Shield Mode to inflict critical damage and create an opening in the enemy's guard.",
        "points": 1,
        "icon": "\ud80c\udc15",
        "parents": [
            "regeneration",
            "weapon_bearer"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "hijack": {
        "id": "hijack",
        "title": "Hijack",
        "group": "Warrior",
        "description": "Pull enemy drivers off their mount and take control of it.",
        "points": 2,
        "icon": "\ud80c\udc03",
        "parents": [
            "air_attack",
            "smoke_screen"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "shield_charge": {
        "id": "shield_charge",
        "title": "Shield Charge",
        "group": "Warrior",
        "description": "When in Shield Mode, hold B / O to run faster and bash enemies in your way. This will consume adrenaline.",
        "points": 2,
        "icon": "\ud80c\udc4d",
        "parents": [
            "adrenaline_1",
            "adrenaline_2"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "adrenaline_1": {
        "id": "adrenaline_1",
        "title": "Adrenaline 1",
        "group": "Warrior",
        "description": "(Passive) You always start a conflict with a half-filled adrenaline bar.",
        "points": 1,
        "icon": "\ud80c\udda3",
        "parents": [
            "shield_charge",
            "weapon_bearer"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "weapon_bearer": {
        "id": "weapon_bearer",
        "title": "Weapon Bearer",
        "group": "Warrior",
        "description": "You can equip a 2nd melee weapon. Press \"\u2192\" to switch equipped melee weapons.",
        "points": 1,
        "icon": "\ud80c\uddad",
        "parents": [
            "adrenaline_1",
            "parry",
            "overpower_ultra",
            "overpower_combo",
            "overpower_xp",
            "attack_push"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "overpower_combo": {
        "id": "overpower_combo",
        "title": "Overpower Combo",
        "group": "Warrior",
        "description": "After an Overpower attack you can chain with a combo of light attacks.",
        "points": 2,
        "icon": "\ud80c\udc53",
        "parents": [
            "weapon_bearer",
            "overpower_ultra",
            "overpower_chain_throw",
            "overpower_xp"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "overpower_chain_throw": {
        "id": "overpower_chain_throw",
        "title": "Overpower Chain Throw",
        "group": "Warrior",
        "description": "After killing an enemy with an Overpower attack, press RB / R1 to throw that enemy's weapon at another target.",
        "points": 3,
        "icon": "\ud80c\udc0f",
        "parents": [
            "overpower_ultra",
            "overpower_combo",
            "overpower_xp",
            "master_warrior"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "overpower_xp": {
        "id": "overpower_xp",
        "title": "Overpower XP",
        "group": "Warrior",
        "description": "(Passive) Killing enemies with your Overpower active gives you XP.",
        "points": 1,
        "icon": "\ud80c\udc04",
        "parents": [
            "overpower_chain_throw",
            "overpower_combo",
            "weapon_bearer"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "attack_push": {
        "id": "attack_push",
        "title": "Attack & Push",
        "group": "Warrior",
        "description": "Hold \"R1\" after a light attack to perform a push attack combo.",
        "points": 1,
        "icon": "\ud80c\udc05",
        "parents": [
            "weapon_bearer"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "extended_combo": {
        "id": "extended_combo",
        "title": "Extended Combo",
        "group": "Warrior",
        "description": "You can deal 1 more melee attack to an enemy before they can recover.",
        "points": 2,
        "icon": "\ud80c\udc00",
        "parents": [
            "kill_loot",
            "adrenaline_1"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "kill_loot": {
        "id": "kill_loot",
        "title": "Kill Loot",
        "group": "Warrior",
        "description": "(Passive) Automatically loot an enemy after a melee kill.",
        "points": 3,
        "icon": "\ud80c\udc56",
        "parents": [
            "extended_combo",
            "master_warrior"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "adrenaline_2": {
        "id": "adrenaline_2",
        "title": "Adrenaline 2",
        "group": "Warrior",
        "description": "(Passive) You always start a conflict with a full adrenaline gauge.",
        "points": 3,
        "icon": "\ud80c\udc4a",
        "parents": [
            "shield_charge",
            "master_warrior"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "master_warrior": {
        "id": "master_warrior",
        "title": "Master Warrior",
        "group": "Warrior",
        "description": "(Passive) Increase the damage of all your melee attacks by an additional +1%. This Ability can be acquired multiple times.",
        "points": 1,
        "icon": "\ud80c\udefa",
        "parents": [
            "overpower_chain_throw",
            "kill_loot",
            "adrenaline_2"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "call_mount": {
        "id": "call_mount",
        "title": "Call Mount",
        "group": "Seer",
        "description": "Hold \"\u2193\" to call your mount.",
        "points": 0,
        "icon": "\ud80c\udc44",
        "parents": [],
        "state": "selected",
        "x": 0,
        "y": 0
    },
    "dawn_dusk": {
        "id": "dawn_dusk",
        "title": "Dawn & Dusk",
        "group": "Seer",
        "description": "Hold \"Touchpad\" to sit, contemplate and make time speed forward.",
        "points": 1,
        "icon": "\ud80c\udc55",
        "parents": [
            "call_mount"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "tool_kill_xp": {
        "id": "tool_kill_xp",
        "title": "Tool Kill XP",
        "group": "Seer",
        "description": "(Passive) Killing enemies with a tool grants XP. Tools: Flesh Decay, Poison Darts, Fire bombs, Fire",
        "points": 1,
        "icon": "\ud80c\udf03",
        "parents": [
            "salesman",
            "backstore",
            "assassination_loot"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "salesman": {
        "id": "salesman",
        "title": "Salesman",
        "group": "Seer",
        "description": "(Passive) Animal goods and trinkets can be sold at +25% price.",
        "points": 1,
        "icon": "\ud80c\udc13",
        "parents": [
            "dawn_dusk",
            "buy_materials",
            "tool_kill_xp"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "fire_bomb": {
        "id": "fire_bomb",
        "title": "Fire Bomb",
        "group": "Seer",
        "description": "Throw this bomb to set your enemies ablaze. When equipped, switch to them by pressing \"\u2190\".",
        "points": 1,
        "icon": "\ud80c\udc48",
        "parents": [
            "dawn_dusk",
            "smoke_screen"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "backstore": {
        "id": "backstore",
        "title": "Backstore",
        "group": "Seer",
        "description": "You can purchase rarer quality gear in shops.",
        "points": 2,
        "icon": "\ud80c\udc08",
        "parents": [
            "tool_kill_xp",
            "buy_materials",
            "chariot_owner"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "flesh_decay": {
        "id": "flesh_decay",
        "title": "Flesh Decay",
        "group": "Seer",
        "description": "Press \"L3\" to use this substance on a dead body to infect it and allow it to contaminate nearby enemies.",
        "points": 1,
        "icon": "\ud80c\udefe",
        "parents": [
            "berserk",
            "sleep_darts"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "sleep_darts": {
        "id": "sleep_darts",
        "title": "Sleep Darts",
        "group": "Seer",
        "description": "Throw this dart to put lower rank enemies or animals to sleep and sneak by without being detected. When equipped, switch to them by holding \"\u2190\".",
        "points": 1,
        "icon": "\ud80c\udc4e",
        "parents": [
            "dawn_dusk",
            "flesh_decay"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "smoke_screen": {
        "id": "smoke_screen",
        "title": "Smoke Screen",
        "group": "Seer",
        "description": "Press Y / \u25b3 after melee attacking or dodging to drop this powder. It stuns nearby enemies and creates a smoke screen. Smoke screens can break line of sight.",
        "points": 1,
        "icon": "\ud80c\udc57",
        "parents": [
            "fire_bomb",
            "smoke_screen_damage",
            "pyromaniac",
            "hijack"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "pyromaniac": {
        "id": "pyromaniac",
        "title": "Pyromaniac",
        "group": "Seer",
        "description": "(Passive) Your fire damage is increased by an additional +50%.",
        "points": 1,
        "icon": "\ud80c\uddab",
        "parents": [
            "smoke_screen",
            "animal_taming"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "smoke_screen_damage": {
        "id": "smoke_screen_damage",
        "title": "Smoke Screen Damage",
        "group": "Seer",
        "description": "(Passive) Enemies caught in the smoke screen will take damage and be knocked to the ground.",
        "points": 2,
        "icon": "\ud80c\uddaa",
        "parents": [
            "smoke_screen",
            "animal_taming"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "berserk": {
        "id": "berserk",
        "title": "Berserk",
        "group": "Seer",
        "description": "Press \"L3\" to use this substance on a lower level unaware enemy and turn him against his allies.",
        "points": 2,
        "icon": "\ud80c\udf02",
        "parents": [
            "flesh_decay",
            "poison_darts"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "buy_materials": {
        "id": "buy_materials",
        "title": "Buy Materials",
        "group": "Seer",
        "description": "You can purchase crating materials from shops. Blacksmith and Weaver ships sell different types of materials.",
        "points": 2,
        "icon": "\ud80c\udc54",
        "parents": [
            "backstore",
            "breath_holding_champion"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "animal_taming": {
        "id": "animal_taming",
        "title": "Animal Taming",
        "group": "Seer",
        "description": "After putting an animal to sleep with a sleep dart, tame it by pressing Y / \u25b3 to have it follow you. You need to acquire the Sleep Darts skill in order to use Animal Taming. Note that Alpha animals cannot be tamed.",
        "points": 3,
        "icon": "\ud80c\udc51",
        "parents": [
            "pyromaniac",
            "smoke_screen_damage",
            "poison_darts",
            "master_seer"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "poison_darts": {
        "id": "poison_darts",
        "title": "Poison Darts",
        "group": "Seer",
        "description": "Throw this dart to poison and contaminate nearby enemies. When equipped, switch to them by holding \"\u2190\".",
        "points": 2,
        "icon": "\ud80c\udda6",
        "parents": [
            "animal_taming",
            "berserk"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "breath_holding_champion": {
        "id": "breath_holding_champion",
        "title": "Breath Holding Champion",
        "group": "Seer",
        "description": "(Passive) You can stay underwater longer.",
        "points": 3,
        "icon": "\ud80c\udefd",
        "parents": [
            "buy_materials",
            "master_seer"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "chariot_owner": {
        "id": "chariot_owner",
        "title": "Chariot owner",
        "group": "Seer",
        "description": "You can purchase war chariots from stable shops.",
        "points": 3,
        "icon": "\ud80c\udda9",
        "parents": [
            "backstore",
            "master_seer"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    },
    "master_seer": {
        "id": "master_seer",
        "title": "Master Seer",
        "group": "Seer",
        "description": "(Passive) Increase the damage of all your tools by an additional +1% (Flesh Decay, Poison Darts, Fire Bombs, Fire) This Ability can be acquired multiple times.",
        "points": 1,
        "icon": "\ud80c\udc4b",
        "parents": [
            "animal_taming",
            "breath_holding_champion",
            "chariot_owner"
        ],
        "state": "locked",
        "x": 0,
        "y": 0
    }
};
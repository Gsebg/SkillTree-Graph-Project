const CYBERPUNK_DATA = {
    "Body": {
        "1": {
            "id": "1",
            "title": "Painkiller",
            "icon": "assets/Body/Painkiller.webp",
            "levelReq": 4,
            "parents": [],
            "children": [
                "2",
                "3",
                "4",
                "5",
                "23"
            ],
            "descriptions": [
                "Unlocks slow Health Regen in combat."
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "2": {
            "id": "2",
            "title": "Comeback Kid",
            "icon": "assets/Body/Comeback_Kid.webp",
            "levelReq": 4,
            "parents": [
                "1"
            ],
            "children": [],
            "descriptions": [
                "+1% Health Regen Rate for each percent of missing Health."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "3": {
            "id": "3",
            "title": "Speed Junkie",
            "icon": "assets/Body/Speed_Junkie.webp",
            "levelReq": 4,
            "parents": [
                "1"
            ],
            "children": [],
            "descriptions": [
                "+60% Health Regen Rate while sprinting."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "4": {
            "id": "4",
            "title": "Army Of One",
            "icon": "assets/Body/Army_Of_One.webp",
            "levelReq": 4,
            "parents": [
                "1"
            ],
            "children": [],
            "descriptions": [
                "+10% Health Regen Rate for each nearby enemy."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "5": {
            "id": "5",
            "title": "Dorph-Head",
            "icon": "assets/Body/Dorph-Head.webp",
            "levelReq": 4,
            "parents": [
                "1"
            ],
            "children": [],
            "descriptions": [
                "When using Blood Pump cyberware or a Health Item: +100% Mitigation Chance for 2 sec.Mitigation - grants a chance to reduce incoming damage by current Mitigation Strength (default 50%)."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "6": {
            "id": "6",
            "title": "Fury Road",
            "icon": "assets/Body/Fury_Road.webp",
            "levelReq": 4,
            "parents": [],
            "children": [],
            "descriptions": [
                "In vehicle collisions:\n+50% damage to enemy vehicles and their occupants\n\u221250% damage to your vehicles\n\nYou take no damage as a vehicle occupant in collisions."
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "7": {
            "id": "7",
            "title": "Die! Die! Die!",
            "icon": "assets/Body/Die!_Die!_Die!.webp",
            "levelReq": 9,
            "parents": [],
            "children": [
                "8",
                "9",
                "10",
                "16"
            ],
            "descriptions": [
                "+12.5% Crit Chance at low Stamina.",
                "Increased fire rate and improved weapon handling as Stamina decreases."
            ],
            "state": "state-available",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "8": {
            "id": "8",
            "title": "Like A Feather",
            "icon": "assets/Body/Like_A_Feather.webp",
            "levelReq": 9,
            "parents": [
                "7"
            ],
            "children": [],
            "descriptions": [
                "No movement speed penalty with Shotguns, Light Machine Gunes and Heavy Machine Guns."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "9": {
            "id": "9",
            "title": "Bullet Ballet",
            "icon": "assets/Body/Bullet_Ballet.webp",
            "levelReq": 9,
            "parents": [
                "7"
            ],
            "children": [],
            "descriptions": [
                "\u221225% bullet spread when moving."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "10": {
            "id": "10",
            "title": "Don't Stop Me Now",
            "icon": "assets/Body/Don't_Stop_Me_Now.webp",
            "levelReq": 9,
            "parents": [
                "7"
            ],
            "children": [],
            "descriptions": [
                "When below 33% Stamina:\n+15% Mitigation Chance,\n+5% Mitigation Strength."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "11": {
            "id": "11",
            "title": "Wrecking Ball",
            "icon": "assets/Body/Wrecking_Ball.webp",
            "levelReq": 9,
            "parents": [],
            "children": [
                "12",
                "13",
                "14",
                "15",
                "29"
            ],
            "descriptions": [
                "\u221215% Stamina cost for attacks with Blunt Weapons.",
                "Allows you to barrel into enemies while sprinting and blocking with Blunt Weapons, causing damage and a chance to knock them down."
            ],
            "state": "state-available",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "12": {
            "id": "12",
            "title": "Kinetic Absorption",
            "icon": "assets/Body/Kinetic_Absorption.webp",
            "levelReq": 9,
            "parents": [
                "11"
            ],
            "children": [],
            "descriptions": [
                "Blocking an attack gives +10% Stamina and +30% damage with Blunt Weapons for 5 sec."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "13": {
            "id": "13",
            "title": "Breakthrough",
            "icon": "assets/Body/Breakthrough.webp",
            "levelReq": 9,
            "parents": [
                "11"
            ],
            "children": [],
            "descriptions": [
                "\u221240% enemy Armor for 7 sec. after hitting them with a strong attack."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "14": {
            "id": "14",
            "title": "Fly Swatter",
            "icon": "assets/Body/Fly_Swatter.webp",
            "levelReq": 9,
            "parents": [
                "11"
            ],
            "children": [],
            "descriptions": [
                "\u221240% incoming ranged damage when blocking with Blunt Weapons."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "15": {
            "id": "15",
            "title": "Clapback",
            "icon": "assets/Body/Clapback.webp",
            "levelReq": 9,
            "parents": [
                "11"
            ],
            "children": [],
            "descriptions": [
                "+100% Knockdown chance with defensive attacks.\nCooldown: 10 sec.\n\n+100% Stun chance with counterattacks."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "16": {
            "id": "16",
            "title": "Spontaneous Obliteration",
            "icon": "assets/Body/Spontaneous_Obliteration.webp",
            "levelReq": 15,
            "parents": [
                "7"
            ],
            "children": [
                "17",
                "18",
                "19",
                "20",
                "30",
                "31"
            ],
            "descriptions": [
                "+12.5% Crit Chance at low Stamina.",
                "+10% damage against nearby enemies.",
                "Unlocks Obliterate \u2013 the ability to sometimes instantly kill and dismember enemies at low Health.\n\nThe chance increases as enemy Health decreases (max. 20% Obliterate chance)."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "17": {
            "id": "17",
            "title": "Skullcracker",
            "icon": "assets/Body/Skullcracker.webp",
            "levelReq": 15,
            "parents": [
                "16"
            ],
            "children": [],
            "descriptions": [
                "Increases damage of Quick Melee Attacks as Stamina decreases (max. +200% at 0 Stamina)"
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "18": {
            "id": "18",
            "title": "Close-Quarters Carnage",
            "icon": "assets/Body/Close-Quarters_Carnage.webp",
            "levelReq": 15,
            "parents": [
                "16"
            ],
            "children": [],
            "descriptions": [
                "Increases chance to Obliterate enemies with ranged attacks at close range (max. 10%)."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "19": {
            "id": "19",
            "title": "Rush Of Blood",
            "icon": "assets/Body/Rush_Of_Blood.webp",
            "levelReq": 15,
            "parents": [
                "16"
            ],
            "children": [
                "21"
            ],
            "descriptions": [
                "+20% reload speed for 8 sec. after dismembering an enemy."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "20": {
            "id": "20",
            "title": "Dread",
            "icon": "assets/Body/Dread.webp",
            "levelReq": 15,
            "parents": [
                "16"
            ],
            "children": [],
            "descriptions": [
                "\u221215% enemy Armor when using ranged attacks.\n\nDismembering spreads the effect to nearby enemies."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "21": {
            "id": "21",
            "title": "Bloodlust",
            "icon": "assets/Body/Bloodlust.webp",
            "levelReq": 15,
            "parents": [
                "19",
                "24"
            ],
            "children": [],
            "descriptions": [
                "When Adrenaline Rush is active:\n+50 Adrenaline on dismemberment of a nearby enemy."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "22": {
            "id": "22",
            "title": "Ripple Effect",
            "icon": "assets/Body/Ripple_Effect.webp",
            "levelReq": 15,
            "parents": [
                "26",
                "28"
            ],
            "children": [],
            "descriptions": [
                "+15% Health for each enemy hit by Quake."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "23": {
            "id": "23",
            "title": "Adrenaline Rush",
            "icon": "assets/Body/Adrenaline_Rush.webp",
            "levelReq": 15,
            "parents": [
                "1"
            ],
            "children": [
                "24",
                "25",
                "26",
                "32"
            ],
            "descriptions": [
                "+35 max Health",
                "+20% Health Regen bonus to all Health Regen effects from all sources.",
                "Unlocks Adrenaline Rush mode.\n\nIn addition to their base effects, Blood Pump cyberware and Health Items now also give Adrenaline equal to 30% of max Health (up to a max of 50% max Health).\n\nAdrenaline is indicated by a yellow bar and acts like extra Health by absorbing damage. It also decays over time.\n\nAdrenaline Rush remains active as long as you have Adrenaline available."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "24": {
            "id": "24",
            "title": "Juggernaut",
            "icon": "assets/Body/Juggernaut.webp",
            "levelReq": 15,
            "parents": [
                "23"
            ],
            "children": [
                "21"
            ],
            "descriptions": [
                "When Adrenaline Rush is active:\n+20% movement speed,\n+10% damage."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "25": {
            "id": "25",
            "title": "Unstoppable Force",
            "icon": "assets/Body/Unstoppable_Force.webp",
            "levelReq": 15,
            "parents": [
                "23"
            ],
            "children": [],
            "descriptions": [
                "When Adrenaline Rush is active:\nGain immunity to movement penalties and non-damaging Status Effects such as Knockdown, Blinding, etc."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "26": {
            "id": "26",
            "title": "Calm Mind",
            "icon": "assets/Body/Calm_Mind.webp",
            "levelReq": 15,
            "parents": [
                "23"
            ],
            "children": [
                "22"
            ],
            "descriptions": [
                "When Adrenaline Rush is active:\n+3 sec. delay before Adrenaline begins to decay."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "27": {
            "id": "27",
            "title": "Epicenter",
            "icon": "assets/Body/Epicenter.webp",
            "levelReq": 15,
            "parents": [
                "29"
            ],
            "children": [],
            "descriptions": [
                "When Quake is performed from the midair (a Superhero Landing), its area of effect and damage scale with your fall speed and fall distance."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "28": {
            "id": "28",
            "title": "Aftershock",
            "icon": "assets/Body/Aftershock.webp",
            "levelReq": 15,
            "parents": [
                "29"
            ],
            "children": [
                "22"
            ],
            "descriptions": [
                "+30 Stamina for each enemy hit with Quake."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "29": {
            "id": "29",
            "title": "Quake",
            "icon": "assets/Body/Quake.webp",
            "levelReq": 15,
            "parents": [
                "11"
            ],
            "children": [
                "27",
                "28",
                "33"
            ],
            "descriptions": [
                "\u221215% Stamina cost for attacks with Blunt Weapons.",
                "+20% attack speed with Blunt Weapons.",
                "Violently slam the ground, damaging and staggering nearby enemies with a chance of Knockdown.\n\nQuake can also be performed from midair (a Superhero Landing).\n\nCooldown: 10 sec."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "30": {
            "id": "30",
            "title": "Rip And Tear",
            "icon": "assets/Body/Rip_And_Tear.webp",
            "levelReq": 20,
            "parents": [
                "16"
            ],
            "children": [],
            "descriptions": [
                "+100% damage for the next Quick Melee Attack after shooting an enemy with a Shotgun.\n\n+100% damage for the next Shotgun shot after hitting an enemy with a Quick Melee Attack."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "31": {
            "id": "31",
            "title": "Onslaught",
            "icon": "assets/Body/Onslaught.webp",
            "levelReq": 20,
            "parents": [
                "16"
            ],
            "children": [],
            "descriptions": [
                "+20% ammo refill after neutralizing an enemy with a Light Machine Gun."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "32": {
            "id": "32",
            "title": "Pain To Gain",
            "icon": "assets/Body/Pain_To_Gain.webp",
            "levelReq": 20,
            "parents": [
                "23"
            ],
            "children": [],
            "descriptions": [
                "When Adrenaline Rush is active:\n+20% Health Item recharge after neutralizing an enemy."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "33": {
            "id": "33",
            "title": "Finisher: Savage Sling",
            "icon": "assets/Body/Finisher_Savage_Sling.webp",
            "levelReq": 20,
            "parents": [
                "29"
            ],
            "children": [],
            "descriptions": [
                "Unlocks a Blunt Weapon Finisher.\n\nCan be used when an enemy's Health is low. Enemies affected by Stun are more susceptible.\n\nRestores 20% Health.\n\nHolding down the button allows the enemy to be thrown instead, killing them and damaging other enemies where they land."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        }
    },
    "Reflexes": {
        "1": {
            "id": "1",
            "title": "Stuntjock",
            "icon": "assets/Reflexes/Stuntjock.webp",
            "levelReq": 4,
            "parents": [],
            "children": [],
            "descriptions": [
                "Unlocks preem new ways to exit vehicles:\n\nJump out\n\nSlide out\n\nYou can also draw and fire weapons during these stunts.\n\nWhile driving:\nNo bullet spread penalty from movement\n\u221250% bullet spread overall"
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "2": {
            "id": "2",
            "title": "Slippery",
            "icon": "assets/Reflexes/Slippery.webp",
            "levelReq": 4,
            "parents": [],
            "children": [
                "3",
                "4",
                "5",
                "6",
                "8",
                "9"
            ],
            "descriptions": [
                "The faster you move, the more difficult for enemies to shoot you.\n\nEffect increases when Dashing, dodging, sliding, sprinting and vaulting."
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "3": {
            "id": "3",
            "title": "Multitasker",
            "icon": "assets/Reflexes/Multitasker.webp",
            "levelReq": 4,
            "parents": [
                "2"
            ],
            "children": [],
            "descriptions": [
                "Allows you to shoot while sprinting, sliding and vaulting."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "4": {
            "id": "4",
            "title": "Muscle Memory",
            "icon": "assets/Reflexes/Muscle_Memory.webp",
            "levelReq": 4,
            "parents": [
                "2"
            ],
            "children": [],
            "descriptions": [
                "Allows you to reload weapons while sprinting, sliding and vaulting."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "5": {
            "id": "5",
            "title": "Power Slide",
            "icon": "assets/Reflexes/Power_Slide.webp",
            "levelReq": 4,
            "parents": [
                "2"
            ],
            "children": [],
            "descriptions": [
                "Increased slide distance."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "6": {
            "id": "6",
            "title": "Parkour!",
            "icon": "assets/Reflexes/Parkour!.webp",
            "levelReq": 4,
            "parents": [
                "2"
            ],
            "children": [],
            "descriptions": [
                "Increased vaulting and climbing speed."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "7": {
            "id": "7",
            "title": "Ready, Rested, Reloaded",
            "icon": "assets/Reflexes/Ready, Rested, Reloaded.webp",
            "levelReq": 9,
            "parents": [],
            "children": [
                "10",
                "11",
                "12",
                "22"
            ],
            "descriptions": [
                "\u221210% Stamina cost for shooting AR and SMGs.",
                "+30% reload speed when above 50% Stamina."
            ],
            "state": "state-available",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "8": {
            "id": "8",
            "title": "Dash",
            "icon": "assets/Reflexes/Dash.webp",
            "levelReq": 9,
            "parents": [
                "2"
            ],
            "children": [
                "13",
                "14",
                "15",
                "16",
                "23"
            ],
            "descriptions": [
                "\u221220% Stamina cost for dodging and dashing.",
                "Unlocks the ability to Dash.\n\nDashing replaces dodging, allowing you to cover more ground and automatically vault over low obstacles."
            ],
            "state": "state-blocked",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "9": {
            "id": "9",
            "title": "Lead And Steel",
            "icon": "assets/Reflexes/Lead_And_Steel.webp",
            "levelReq": 9,
            "parents": [
                "2"
            ],
            "children": [
                "18",
                "19",
                "21"
            ],
            "descriptions": [
                "\u221215% Stamina cost attacks with Blades.",
                "Unlocks ability to block incoming projectiles with Blades. This consumes Stamina."
            ],
            "state": "state-blocked",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "10": {
            "id": "10",
            "title": "Spice Of Life",
            "icon": "assets/Reflexes/Spice_Of_Life.webp",
            "levelReq": 9,
            "parents": [
                "7"
            ],
            "children": [],
            "descriptions": [
                "+15% weapon swap speed,\n\u221230% bullet spread briefly after swapping weapons."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "11": {
            "id": "11",
            "title": "Tunnel Vision",
            "icon": "assets/Reflexes/Tunnel_Vision.webp",
            "levelReq": 9,
            "parents": [
                "7"
            ],
            "children": [],
            "descriptions": [
                "+20% Effective range and accuracy."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "12": {
            "id": "12",
            "title": "Mind Over Matter",
            "icon": "assets/Reflexes/Mind_Over_Matter.webp",
            "levelReq": 9,
            "parents": [
                "7"
            ],
            "children": [],
            "descriptions": [
                "\u221225% Recoil when aiming."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "13": {
            "id": "13",
            "title": "Can't Touch This",
            "icon": "assets/Reflexes/Can't_Touch_This.webp",
            "levelReq": 9,
            "parents": [
                "8"
            ],
            "children": [],
            "descriptions": [
                "+100% Mitigation Chance when performing a Dash.\n\nMitigation grants a chance to reduce incoming damage by current Mitigation Strength (default 50%)."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "14": {
            "id": "14",
            "title": "Steady Grip",
            "icon": "assets/Reflexes/Steady_Grip.webp",
            "levelReq": 9,
            "parents": [
                "8"
            ],
            "children": [],
            "descriptions": [
                "Allows you to shoot while Dashing."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "15": {
            "id": "15",
            "title": "Mad Dash",
            "icon": "assets/Reflexes/Mad_Dash.webp",
            "levelReq": 9,
            "parents": [
                "8"
            ],
            "children": [
                "17"
            ],
            "descriptions": [
                "+100% Dash range toward enemies."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "16": {
            "id": "16",
            "title": "Mean Streak",
            "icon": "assets/Reflexes/Mean_Streak.webp",
            "levelReq": 9,
            "parents": [
                "8"
            ],
            "children": [],
            "descriptions": [
                "+40% Stamina after neutralizing an enemy while Dashing."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "17": {
            "id": "17",
            "title": "Flash And Thunderclap",
            "icon": "assets/Reflexes/Flash_And_Thunderclap.webp",
            "levelReq": 9,
            "parents": [
                "15",
                "18"
            ],
            "children": [],
            "descriptions": [
                "When performing Strong Attacks, you now automatically leap to enemies within range.\nThese Leap Attacks can be also performed from midair and deal additional damage that scales with the distance of the leap (max +50%)."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "18": {
            "id": "18",
            "title": "Seeing Double",
            "icon": "assets/Reflexes/Seeing_Double.webp",
            "levelReq": 9,
            "parents": [
                "9"
            ],
            "children": [
                "17"
            ],
            "descriptions": [
                "Increased damage and Stun chance with counterattacks."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "19": {
            "id": "19",
            "title": "Bullet Deflect",
            "icon": "assets/Reflexes/Bullet_Deflect.webp",
            "levelReq": 9,
            "parents": [
                "9"
            ],
            "children": [
                "20"
            ],
            "descriptions": [
                "When your Stamina is above 33%, blocking projectiles will Deflect them to wherever your reticle is aimed. Well-timed blocking just before being hit increases the damage you deal with deflected bullets."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "20": {
            "id": "20",
            "title": "Bullet Time",
            "icon": "assets/Reflexes/Bullet_Time.webp",
            "levelReq": 9,
            "parents": [
                "19"
            ],
            "children": [],
            "descriptions": [
                "Whenever time is slowed, Bullet Deflect does not consume Stamina and deflections automatically hit enemies for Crit Damage."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "21": {
            "id": "21",
            "title": "Finisher: Bladerunner",
            "icon": "assets/Reflexes/Finisher_-_Bladerunner.webp",
            "levelReq": 15,
            "parents": [
                "9"
            ],
            "children": [
                "29",
                "30",
                "31",
                "35"
            ],
            "descriptions": [
                "\u221215% Stamina cost attacks with Blades.",
                "+20% Attack Speed with Blades.",
                "Unlocks a Blade Finisher. Restores 25% Health."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "22": {
            "id": "22",
            "title": "Sharpshooter",
            "icon": "assets/Reflexes/Sharpshooter.webp",
            "levelReq": 15,
            "parents": [
                "7"
            ],
            "children": [
                "24",
                "25",
                "26",
                "27",
                "36",
                "37"
            ],
            "descriptions": [
                "+15% aim speed.",
                "Improved weapon control.",
                "Each successful shot grants a stack of Sharpshooter, +7% bonus to Stamina regen and Stamina cost for 2 sec. per stack. Stacks 7 times.\nNew stacks reset duration. All stacks are removed when the duration ends."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "23": {
            "id": "23",
            "title": "Air Dash",
            "icon": "assets/Reflexes/Air_Dash.webp",
            "levelReq": 15,
            "parents": [
                "8"
            ],
            "children": [
                "32",
                "33",
                "34"
            ],
            "descriptions": [
                "\u221220% Dash Stamina cost.",
                "+20% Dash speed.",
                "Unlocks the ability to Dash in mid-air."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "24": {
            "id": "24",
            "title": "Spray And Pray",
            "icon": "assets/Reflexes/Spray_And_Pray.webp",
            "levelReq": 15,
            "parents": [
                "22"
            ],
            "children": [],
            "descriptions": [
                "\u221210% Stamina cost for hip-firing."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "25": {
            "id": "25",
            "title": "Shoot To Chill",
            "icon": "assets/Reflexes/Shoot_To_Chill.webp",
            "levelReq": 15,
            "parents": [
                "22"
            ],
            "children": [],
            "descriptions": [
                "+4% Armor Penetration for automatic weapons per stack of Sharpshooter."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "26": {
            "id": "26",
            "title": "Gundancer",
            "icon": "assets/Reflexes/Gundancer.webp",
            "levelReq": 15,
            "parents": [
                "22"
            ],
            "children": [
                "28"
            ],
            "descriptions": [
                "Aiming no longer slows movement.\n\nAllows you to shoot while vaulting."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "27": {
            "id": "27",
            "title": "Practice Makes Perfect",
            "icon": "assets/Reflexes/Practice_Makes_Perfect.webp",
            "levelReq": 15,
            "parents": [
                "22"
            ],
            "children": [],
            "descriptions": [
                "+7% Crit Chance and Crit Damage per stack of Sharpshooter."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "28": {
            "id": "28",
            "title": "Air Kerenzikov",
            "icon": "assets/Reflexes/Air_Kerenzikov.webp",
            "levelReq": 15,
            "parents": [
                "26",
                "33"
            ],
            "children": [],
            "descriptions": [
                "Activating Kerenzikov in mid-air keeps you suspended in the air and extends its duration."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "29": {
            "id": "29",
            "title": "Flash Of Steel",
            "icon": "assets/Reflexes/Flash_Of_Steel.webp",
            "levelReq": 15,
            "parents": [
                "21"
            ],
            "children": [],
            "descriptions": [
                "+25% Movement Speed and Attack Speed for 6 sec. after performing a Finisher."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "30": {
            "id": "30",
            "title": "Opportunist",
            "icon": "assets/Reflexes/Opportunist.webp",
            "levelReq": 15,
            "parents": [
                "21"
            ],
            "children": [],
            "descriptions": [
                "Enemies affected by Stagger, Stun, Blinding and Bleeding are more susceptible to Finishers."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "31": {
            "id": "31",
            "title": "Going The Distance",
            "icon": "assets/Reflexes/Going_The_Distance.webp",
            "levelReq": 15,
            "parents": [
                "21"
            ],
            "children": [],
            "descriptions": [
                "+100% Finisher range."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "32": {
            "id": "32",
            "title": "Aerodynamic",
            "icon": "assets/Reflexes/Aerodynamic.webp",
            "levelReq": 15,
            "parents": [
                "23"
            ],
            "children": [],
            "descriptions": [
                "+30% Mitigation Strength while in midair."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "33": {
            "id": "33",
            "title": "Aerial Acrobat",
            "icon": "assets/Reflexes/Aerial_Acrobat.webp",
            "levelReq": 15,
            "parents": [
                "23"
            ],
            "children": [
                "28"
            ],
            "descriptions": [
                "Improves midair maneuverability."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "34": {
            "id": "34",
            "title": "Tailwind",
            "icon": "assets/Reflexes/Tailwind.webp",
            "levelReq": 20,
            "parents": [
                "23"
            ],
            "children": [],
            "descriptions": [
                "+25 Stamina from performing Air Dashes and Double Jumps."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "35": {
            "id": "35",
            "title": "Slaughterhouse",
            "icon": "assets/Reflexes/Slaughterhouse.webp",
            "levelReq": 20,
            "parents": [
                "21"
            ],
            "children": [],
            "descriptions": [
                "All attacks, counterattacks and deflected bullets apply Bleeding, which increases dismemberment chance.\nBleeding cannot kill enemies, but does make them more susceptible to Finishers. +25 Stamina from dismembering."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "36": {
            "id": "36",
            "title": "Salt In The Wound",
            "icon": "assets/Reflexes/Salt_In_The_Wound.webp",
            "levelReq": 20,
            "parents": [
                "22"
            ],
            "children": [],
            "descriptions": [
                "Shooting the same target 7 consecutive times deals bonus damage equal to 100% of the total damage from those shots."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "37": {
            "id": "37",
            "title": "Submachine Fun",
            "icon": "assets/Reflexes/Submachine_Fun.webp",
            "levelReq": 20,
            "parents": [
                "22"
            ],
            "children": [],
            "descriptions": [
                "Swapping Submachine Guns is faster and automatically reloads them, +22% fire rate after swapping to an SMG. Normal reloading ends the effect."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        }
    },
    "Technical Ability": {
        "1": {
            "id": "1",
            "title": "Glutton For War",
            "icon": "assets/Technical Ability/Glutton_For_War.webp",
            "levelReq": 4,
            "parents": [],
            "children": [
                "3",
                "4",
                "5"
            ],
            "descriptions": [
                "5% instant recharge of Health Items and Grenades after neutralizing an enemy."
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "2": {
            "id": "2",
            "title": "Gearhead",
            "icon": "assets/Technical Ability/Gearhead.webp",
            "levelReq": 4,
            "parents": [],
            "children": [],
            "descriptions": [
                "+33% Vehicle health\nVehicle mounted weapons receive:\n+25% damage\n\u22120.7 sec. lock-on time"
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "3": {
            "id": "3",
            "title": "First Aid",
            "icon": "assets/Technical Ability/First_Aid.webp",
            "levelReq": 4,
            "parents": [
                "1"
            ],
            "children": [],
            "descriptions": [
                "+15% recharge speed of Health Items when you've only used 1 charge."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "4": {
            "id": "4",
            "title": "Transfusion",
            "icon": "assets/Technical Ability/Transfusion.webp",
            "levelReq": 4,
            "parents": [
                "1"
            ],
            "children": [],
            "descriptions": [
                "+30% Health from the final charge of your equipped Health Item."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "5": {
            "id": "5",
            "title": "Health Freak",
            "icon": "assets/Technical Ability/Health_Freak.webp",
            "levelReq": 9,
            "parents": [
                "1"
            ],
            "children": [
                "6",
                "7",
                "8",
                "9",
                "16"
            ],
            "descriptions": [
                "+8% recharge speed for Health Items and grenades.",
                "+1 Health Item charge, +150% recharge speed for Health Items outside combat."
            ],
            "state": "state-blocked",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "6": {
            "id": "6",
            "title": "Field Medic",
            "icon": "assets/Technical Ability/Field_Medic.webp",
            "levelReq": 9,
            "parents": [
                "5"
            ],
            "children": [],
            "descriptions": [
                "15% faster use of Health Items in combat."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "7": {
            "id": "7",
            "title": "Demolitions Surplus",
            "icon": "assets/Technical Ability/Demolitions_Surplus.webp",
            "levelReq": 9,
            "parents": [
                "5"
            ],
            "children": [],
            "descriptions": [
                "+1 max grenade charge, +250% recharge speed for grenades outside of combat."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "8": {
            "id": "8",
            "title": "Coming In Hot",
            "icon": "assets/Technical Ability/Coming_In_Hot.webp",
            "levelReq": 9,
            "parents": [
                "5"
            ],
            "children": [],
            "descriptions": [
                "+50% recharge speed for grenades when you have none available."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "9": {
            "id": "9",
            "title": "Borrowed Time",
            "icon": "assets/Technical Ability/Borrowed_Time.webp",
            "levelReq": 9,
            "parents": [
                "5"
            ],
            "children": [],
            "descriptions": [
                "+100% instant recharge of a Health Item after neutralizing an enemy if you are below 25% Health and have no charges remaining."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "10": {
            "id": "10",
            "title": "All Things Cyber",
            "icon": "assets/Technical Ability/All_Things_Cyber.webp",
            "levelReq": 9,
            "parents": [],
            "children": [
                "11",
                "12",
                "13",
                "14",
                "22"
            ],
            "descriptions": [
                "+10% to all cyberware stat modifiers",
                "\u221220% Cyberware Capacity cost for cyberware in the Integumentary System and Skeleton"
            ],
            "state": "state-available",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "11": {
            "id": "11",
            "title": "Renaissance Punk",
            "icon": "assets/Technical Ability/Renaissance_Punk.webp",
            "levelReq": 9,
            "parents": [
                "10"
            ],
            "children": [],
            "descriptions": [
                "+4 Cyberware Capacity for each Attribute at 9 or higher"
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "12": {
            "id": "12",
            "title": "Chrome Constitution",
            "icon": "assets/Technical Ability/Chrome_Constitution.webp",
            "levelReq": 9,
            "parents": [
                "10"
            ],
            "children": [],
            "descriptions": [
                "\u22125% incoming damage if all Integumentary System and Skeleton cyberware slots are filled"
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "13": {
            "id": "13",
            "title": "Lucky Day",
            "icon": "assets/Technical Ability/Lucky_Day.webp",
            "levelReq": 9,
            "parents": [
                "10"
            ],
            "children": [],
            "descriptions": [
                "+25% crafting components from looting."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "14": {
            "id": "14",
            "title": "Driver Update",
            "icon": "assets/Technical Ability/Driver_Update.webp",
            "levelReq": 9,
            "parents": [
                "10"
            ],
            "children": [
                "15"
            ],
            "descriptions": [
                "All cyberware gain an additional stat modifier."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "15": {
            "id": "15",
            "title": "Chipware Connoisseur",
            "icon": "assets/Technical Ability/Chipware_Connoisseur.webp",
            "levelReq": 9,
            "parents": [
                "14"
            ],
            "children": [],
            "descriptions": [
                "When upgrading cyberware, you can choose from two stat modifier options:\n\nA third option is available at Tier 3 and higher."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "16": {
            "id": "16",
            "title": "Pyromania",
            "icon": "assets/Technical Ability/Pyromania.webp",
            "levelReq": 15,
            "parents": [
                "5"
            ],
            "children": [
                "17",
                "18",
                "19",
                "20",
                "32"
            ],
            "descriptions": [
                "+8% recharge speed for Health Items and grenades.",
                "+10% explosion radius for grenades and the Projectile Launch System.",
                "+5% Movement Speed and +10% explosion damage for 12 sec. after hitting an enemy with an explosion in combat. If you take damage from the explosion, the effects adds 2 stacks instead of 1. Effect and duration can stack 5 times."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "17": {
            "id": "17",
            "title": "Burn This City",
            "icon": "assets/Technical Ability/Burn_This_City.webp",
            "levelReq": 15,
            "parents": [
                "16"
            ],
            "children": [],
            "descriptions": [
                "When you accumulate 5 stacks of Pyromania, they will be consumed to instantly replenish a grenade charge, but all bonuses from those stacks will remain active for 6 sec."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "18": {
            "id": "18",
            "title": "Heat Shield",
            "icon": "assets/Technical Ability/Heat_Shield.webp",
            "levelReq": 15,
            "parents": [
                "16"
            ],
            "children": [],
            "descriptions": [
                "+10% Mitigation Chance per stack of Pyromania."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "19": {
            "id": "19",
            "title": "Friendlier Fire",
            "icon": "assets/Technical Ability/Friendlier_Fire.webp",
            "levelReq": 15,
            "parents": [
                "16"
            ],
            "children": [
                "21"
            ],
            "descriptions": [
                "+50% resistance to damage and effects from explosions you cause."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "20": {
            "id": "20",
            "title": "Flash Sale",
            "icon": "assets/Technical Ability/Flash_Sale.webp",
            "levelReq": 15,
            "parents": [
                "16"
            ],
            "children": [],
            "descriptions": [
                "For Flash, Smoke and Recon grenades:\nDouble grenade charges\nDouble recharge rate"
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "21": {
            "id": "21",
            "title": "Doomlauncher",
            "icon": "assets/Technical Ability/Doomlauncher.webp",
            "levelReq": 15,
            "parents": [
                "19",
                "23"
            ],
            "children": [],
            "descriptions": [
                "Projectile Launch System cyberware receives:\n+1 max charges\n+20% recharge speed\n+25% additional recharge speed when you have no charges available\n+200% additional recharge speed outside of combat\n+5% instant recharge after neutralizing an enemy.\n\nIt also receives the same bonus as grenades from Burn This City."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "22": {
            "id": "22",
            "title": "License To Chrome",
            "icon": "assets/Technical Ability/License_To_Chrome.webp",
            "levelReq": 15,
            "parents": [
                "10"
            ],
            "children": [
                "23",
                "24",
                "25",
                "26",
                "32",
                "33"
            ],
            "descriptions": [
                "+10% to all cyberware stat modifiers.",
                "+40 Armor",
                "Unlocks a new cyberware slot for the Skeleton.\nAll Skeleton cyberware have boosted stats."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "23": {
            "id": "23",
            "title": "Ambidextrous",
            "icon": "assets/Technical Ability/Ambidextrous.webp",
            "levelReq": 15,
            "parents": [
                "22"
            ],
            "children": [
                "21"
            ],
            "descriptions": [
                "Unlocks a new cyberware slot for your Hands."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "24": {
            "id": "24",
            "title": "Cyborg",
            "icon": "assets/Technical Ability/Cyborg.webp",
            "levelReq": 15,
            "parents": [
                "22"
            ],
            "children": [],
            "descriptions": [
                "15% reduced Cooldowns for all cyberware if all available slots are filled."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "25": {
            "id": "25",
            "title": "Extended Warranty",
            "icon": "assets/Technical Ability/Extended_Warranty.webp",
            "levelReq": 15,
            "parents": [
                "22"
            ],
            "children": [],
            "descriptions": [
                "+15% duration for all cyberware effects."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "26": {
            "id": "26",
            "title": "Built Different",
            "icon": "assets/Technical Ability/Built_Different.webp",
            "levelReq": 15,
            "parents": [
                "22"
            ],
            "children": [],
            "descriptions": [
                "Unlocks Cellular Adapter cyberware. It can be purchased and installed at ripperdoc clinics. This Perk is required to use it properly."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "27": {
            "id": "27",
            "title": "Bolt",
            "icon": "assets/Technical Ability/Bolt.webp",
            "levelReq": 15,
            "parents": [],
            "children": [
                "28",
                "29",
                "30",
                "31",
                "34"
            ],
            "descriptions": [
                "+20% charge speed for Tech Weapons.",
                "+15% damage for each charged shot with Tech Weapons",
                "Unlocks Bolt shots. To fire a Bolt, release the trigger for a charged shot right before it fully charges: counts as a fully charged shot, +30% damage, \u221250% penalty for penetrating cover.\n\nFully auto Tech weapons fire Bolts in a short burst. To continue firing Bolts in full-auto, press and hold the trigger again after firing the initial burst."
            ],
            "state": "state-available",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "28": {
            "id": "28",
            "title": "Internal Clock",
            "icon": "assets/Technical Ability/Internal_Clock.webp",
            "levelReq": 15,
            "parents": [
                "27"
            ],
            "children": [],
            "descriptions": [
                "Increased time window to fire a Bolt."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "29": {
            "id": "29",
            "title": "Lightning Storm",
            "icon": "assets/Technical Ability/Lightning_Storm.webp",
            "levelReq": 15,
            "parents": [
                "27"
            ],
            "children": [],
            "descriptions": [
                "+10% charge speed after firing a Bolt. Stacks 3 times. Swapping weapons or firing a non-Bolt shot resets the stack."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "30": {
            "id": "30",
            "title": "In Charge",
            "icon": "assets/Technical Ability/In_Charge.webp",
            "levelReq": 15,
            "parents": [
                "27"
            ],
            "children": [],
            "descriptions": [
                "Tech Weapons no longer fire automatically when reaching full charge."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "31": {
            "id": "31",
            "title": "Shock Value",
            "icon": "assets/Technical Ability/Shock_Value.webp",
            "levelReq": 15,
            "parents": [
                "27"
            ],
            "children": [],
            "descriptions": [
                "Bolts ignore enemy Armor"
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "32": {
            "id": "32",
            "title": "Ticking Time Bomb",
            "icon": "assets/Technical Ability/Ticking_Time_Bomb.webp",
            "levelReq": 20,
            "parents": [
                "16",
                "22"
            ],
            "children": [],
            "descriptions": [
                "Charged powerful EMP that hits nearby enemies after 3 sec. whenever you activate Operating System cyberware (Berserk, Sandevistan) or Overclock. Applies Stun and deal damage proportionate to the quantity and tier of cyberware implants you have installed.\n\u221250% incoming damage while charging EMP."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "33": {
            "id": "33",
            "title": "Edgerunner",
            "icon": "assets/Technical Ability/Edgerunner.webp",
            "levelReq": 20,
            "parents": [
                "22"
            ],
            "children": [],
            "descriptions": [
                "Allows you to exceed your Cyberware Capacity by up to 50 points, but at the cost of \u22120.5% max Health per point over capacity.\n\nWhen you neutralize an enemy during combat, there is a 0.1% chance for each point you are over capacity that you will break into a Fury.\nIn this state you gain:\n+10% damage,\n+30% Crit Chance\n+50% Crit Damage\n\nDuration: 12 sec."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "34": {
            "id": "34",
            "title": "Chain Lightning",
            "icon": "assets/Technical Ability/Chain_Lightning.webp",
            "levelReq": 20,
            "parents": [
                "27"
            ],
            "children": [],
            "descriptions": [
                "Bolt now deals Electrical damage and releases an electric arc that can electrocute up to 3 nearby enemies."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        }
    },
    "Intelligence": {
        "1": {
            "id": "1",
            "title": "Eye In The Sky",
            "icon": "assets/Intelligence/Eye_In_The_Sky.webp",
            "levelReq": 4,
            "parents": [],
            "children": [
                "4",
                "5",
                "9"
            ],
            "descriptions": [
                "Automatically highlight nearby Access Points and cameras.\n\nWhen uploaded through camera, Control quickhacks, Covert quickhacks and Distract Enemies have: \u22121 RAM cost, +50% duration."
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "2": {
            "id": "2",
            "title": "Optimization",
            "icon": "assets/Intelligence/Optimization.webp",
            "levelReq": 4,
            "parents": [],
            "children": [
                "6",
                "7",
                "8",
                "10"
            ],
            "descriptions": [
                "=+35% RAM recovery rate."
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "3": {
            "id": "3",
            "title": "Carhacker",
            "icon": "assets/Intelligence/Carhacker.webp",
            "levelReq": 4,
            "parents": [],
            "children": [],
            "descriptions": [
                "Unlocks Vehicle quickhacks, allowing you to remotely take control, set off alarms or even blow them up.\n\nThe availability of a given quickhack depends on the Tier of your installed cyberdeck."
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "4": {
            "id": "4",
            "title": "Forcekill Cypher",
            "icon": "assets/Intelligence/Forcekill_Cypher.webp",
            "levelReq": 4,
            "parents": [
                "1"
            ],
            "children": [],
            "descriptions": [
                "Reduces sequence length required to hack Access Points by 1.\n\nTotal sequence length cannot be reduced below 2 characters."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "5": {
            "id": "5",
            "title": "Warning: Explosion Hazard",
            "icon": "assets/Intelligence/Warning_-_Explosion_Hazard.webp",
            "levelReq": 4,
            "parents": [
                "1"
            ],
            "children": [],
            "descriptions": [
                "+40% explosion damage from hacked devices\n+80% additional explosion damage to enemies affected by quickhacks (including Distract Enemies)."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "6": {
            "id": "6",
            "title": "Proximate Propagation",
            "icon": "assets/Intelligence/Proximate_Propagation.webp",
            "levelReq": 4,
            "parents": [
                "2"
            ],
            "children": [],
            "descriptions": [
                "Reduces RAM cost the closer you are to the target (max \u221235%)."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "7": {
            "id": "7",
            "title": "Encryption",
            "icon": "assets/Intelligence/Encryption.webp",
            "levelReq": 4,
            "parents": [
                "2"
            ],
            "children": [],
            "descriptions": [
                "\u221230% traceability for all quickhacks."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "8": {
            "id": "8",
            "title": "Subordination",
            "icon": "assets/Intelligence/Subordination.webp",
            "levelReq": 4,
            "parents": [
                "2"
            ],
            "children": [],
            "descriptions": [
                "+100% duration for Control quickhacks used on full-Health enemies."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "9": {
            "id": "9",
            "title": "Hack Queue",
            "icon": "assets/Intelligence/Hack_Queue.webp",
            "levelReq": 9,
            "parents": [
                "1"
            ],
            "children": [
                "11",
                "12",
                "13",
                "23"
            ],
            "descriptions": [
                "+1 Max RAM.",
                "Unlocks quickhack queues, allowing 2 quickhacks on a single enemy. Queued quickhacks automatically upload in the order they are added, +30% upload speed for the second quickhack in a queue."
            ],
            "state": "state-blocked",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "10": {
            "id": "10",
            "title": "Embedded Exploit",
            "icon": "assets/Intelligence/Embedded_Exploit.webp",
            "levelReq": 9,
            "parents": [
                "2"
            ],
            "children": [
                "15",
                "17",
                "18",
                "19",
                "24"
            ],
            "descriptions": [
                "+10% RAM recovery rate.",
                "+60% quickhack damage against enemies affected by Control quickhacks, Covert quickhacks or the Distract Enemies quickhack."
            ],
            "state": "state-blocked",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "11": {
            "id": "11",
            "title": "Data Recycler",
            "icon": "assets/Intelligence/Data_Recycler.webp",
            "levelReq": 9,
            "parents": [
                "9"
            ],
            "children": [],
            "descriptions": [
                "After neutralizing an enemy, recover 80% of the RAM cost from all quickhacks remaining in their queue."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "12": {
            "id": "12",
            "title": "Feedback Loop",
            "icon": "assets/Intelligence/Feedback_Loop.webp",
            "levelReq": 9,
            "parents": [
                "9"
            ],
            "children": [],
            "descriptions": [
                "+25% RAM recovery rate for each quickhack currently in a queue."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "13": {
            "id": "13",
            "title": "Counter-A-Hack",
            "icon": "assets/Intelligence/Counter-A-Hack.webp",
            "levelReq": 9,
            "parents": [
                "9"
            ],
            "children": [
                "14"
            ],
            "descriptions": [
                "When you're the target of an enemy netrunner, you are now able to counter quickhack them through walls and obstacles.\n\n\u22121 RAM cost for such counter quickhacks."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "14": {
            "id": "14",
            "title": "Copy-Paste",
            "icon": "assets/Intelligence/Copy-Paste.webp",
            "levelReq": 9,
            "parents": [
                "13"
            ],
            "children": [],
            "descriptions": [
                "When you're the target of an enemy netrunner, using a quickhack against them will also spread the quickhack's effect to their allies."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "15": {
            "id": "15",
            "title": "Icepick",
            "icon": "assets/Intelligence/Icepick.webp",
            "levelReq": 9,
            "parents": [
                "10"
            ],
            "children": [
                "16"
            ],
            "descriptions": [
                "\u22121 RAM cost for Combat quickhacks used on enemies affected by or targeted by Control quickhacks, Covert quickhacks, or the Distract Enemies quickhack."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "16": {
            "id": "16",
            "title": "Siphon",
            "icon": "assets/Intelligence/Siphon.webp",
            "levelReq": 9,
            "parents": [
                "15"
            ],
            "children": [],
            "descriptions": [
                "Monowire attacks recover 0.5 RAM. Increases to 1 if the enemy is affected by or targeted by a quickhack."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "17": {
            "id": "17",
            "title": "Shadowrunner",
            "icon": "assets/Intelligence/Shadowrunner.webp",
            "levelReq": 9,
            "parents": [
                "10"
            ],
            "children": [],
            "descriptions": [
                "\u2212100% trace progress after performing a Takedown."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "18": {
            "id": "18",
            "title": "Speculation",
            "icon": "assets/Intelligence/Speculation.webp",
            "levelReq": 9,
            "parents": [
                "10"
            ],
            "children": [
                "20"
            ],
            "descriptions": [
                "Neutralizing an enemy with a Combat quickhack recovers RAM equal to 25% of the total cost all quickhacks affecting the target."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "19": {
            "id": "19",
            "title": "System Overwhelm",
            "icon": "assets/Intelligence/System_Overwhelm.webp",
            "levelReq": 9,
            "parents": [
                "10"
            ],
            "children": [],
            "descriptions": [
                "+7% Quickhack damage for each unique quickhack and DOT effect affecting the target."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "20": {
            "id": "20",
            "title": "Recirculation",
            "icon": "assets/Intelligence/Recirculation.webp",
            "levelReq": 9,
            "parents": [
                "18",
                "21"
            ],
            "children": [],
            "descriptions": [
                "+2 RAM after neutralizing an enemy with a Smart Weapon. If the enemy is affected by quickhacks, restores additional RAM equal to 50% of their total RAM cost."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "21": {
            "id": "21",
            "title": "Precision Subroutines",
            "icon": "assets/Intelligence/Precision_Subroutines.webp",
            "levelReq": 9,
            "parents": [
                "25"
            ],
            "children": [
                "20"
            ],
            "descriptions": [
                "+2% accuract with Smart Weapons for each unit in your cyberdeck's max RAM."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "22": {
            "id": "22",
            "title": "No Escape",
            "icon": "assets/Intelligence/No_Escape.webp",
            "levelReq": 9,
            "parents": [
                "25"
            ],
            "children": [],
            "descriptions": [
                "When using Smart Weapons, if the target lock on an enemy is about to end, shooting them resets it."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "23": {
            "id": "23",
            "title": "Queue Acceleration",
            "icon": "assets/Intelligence/Queue_Acceleration.webp",
            "levelReq": 15,
            "parents": [
                "9"
            ],
            "children": [
                "27",
                "28",
                "29",
                "36"
            ],
            "descriptions": [
                "+1 Max RAM.",
                "\u22121 RAM cost to quickhack devices and vehicles",
                "+1 quickhack queue size, +60 upload speed for quickhack third or later in the queue."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "24": {
            "id": "24",
            "title": "Overclock",
            "icon": "assets/Intelligence/Overclock.webp",
            "levelReq": 15,
            "parents": [
                "10"
            ],
            "children": [
                "30",
                "32",
                "33",
                "37",
                "38"
            ],
            "descriptions": [
                "+10% RAM recovery rate.",
                "+10% quickhack damage.",
                "Unlocks Overclock mode.\n\nIf you have a cyberdeck, this can be activated.\nIn this mode, you can use quickhacks even with insufficient RAM, but each RAM unit over your max costs 10 Health instead.\n\nDuration: 14 sec.\nCooldown: 30 sec."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "25": {
            "id": "25",
            "title": "Acquisition Specialist",
            "icon": "assets/Intelligence/Acquisition_Specialist.webp",
            "levelReq": 15,
            "parents": [],
            "children": [
                "21",
                "22",
                "26"
            ],
            "descriptions": [
                "+10% larger target reticle for Smart Weapons.",
                "Reloading Smart Weapons no longer interrupts target lock.\n+15% lock-on speed when hip-firing.\n+20% lock-on speed when aiming."
            ],
            "state": "state-available",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "26": {
            "id": "26",
            "title": "Target Lock Transfer",
            "icon": "assets/Intelligence/Target_Lock_Transfer.webp",
            "levelReq": 15,
            "parents": [
                "25"
            ],
            "children": [
                "34",
                "35",
                "38"
            ],
            "descriptions": [
                "+10% larger target reticle for Smart Weapons.",
                "Switching from aiming to hip-fire does not disengage target-lock on Headshots and Weakspots.",
                "Switching from one Smart Weapon to another no longer interrupts target lock."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "27": {
            "id": "27",
            "title": "Queue Prioritization",
            "icon": "assets/Intelligence/Queue_Prioritization.webp",
            "levelReq": 15,
            "parents": [
                "23"
            ],
            "children": [],
            "descriptions": [
                "+50% upload speed for the first quickhack when you have at least 2 quickhacks queued on an enemy."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "28": {
            "id": "28",
            "title": "Finisher: Live Wire",
            "icon": "assets/Intelligence/Finisher_-_Live_Wire.webp",
            "levelReq": 15,
            "parents": [
                "23"
            ],
            "children": [],
            "descriptions": [
                "Unlocks a Monowire finisher.\n\nCan be used when an enemy's Health is low.\n\nThe more quickhacks you have queued on an enemy, the more susceptible they are.\n\nRestores 15% Health and 5 RAM."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "29": {
            "id": "29",
            "title": "Queue Hack_Root",
            "icon": "assets/Intelligence/Queue_Hack_Root.webp",
            "levelReq": 15,
            "parents": [
                "23"
            ],
            "children": [
                "31"
            ],
            "descriptions": [
                "\u22121 RAM cost for the first quickhack of each unique category (Covert, Combat, Control) second or later in the queue."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "30": {
            "id": "30",
            "title": "Sublimation",
            "icon": "assets/Intelligence/Sublimation.webp",
            "levelReq": 15,
            "parents": [
                "24"
            ],
            "children": [
                "31"
            ],
            "descriptions": [
                "While Overclock is active, all RAM recovery effects also regenerate Health."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "31": {
            "id": "31",
            "title": "Blood Daemon",
            "icon": "assets/Intelligence/Blood_Daemon.webp",
            "levelReq": 15,
            "parents": [
                "29",
                "30"
            ],
            "children": [],
            "descriptions": [
                "While Overclock is active:\n+40 Health for each quickhack queued on an enemy at the time you neutralize them."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "32": {
            "id": "32",
            "title": "Race Against Mind",
            "icon": "assets/Intelligence/Race_Against_Mind.webp",
            "levelReq": 15,
            "parents": [
                "24"
            ],
            "children": [],
            "descriptions": [
                "While Overclock is active:\nIncreases quickhack damage as Health decreases (max. +50%).\nHealth is measured when you begin upload."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "33": {
            "id": "33",
            "title": "Power Surge",
            "icon": "assets/Intelligence/Power_Surge.webp",
            "levelReq": 15,
            "parents": [
                "24"
            ],
            "children": [],
            "descriptions": [
                "Activating Overclock instantly restores Health equal to 5 times your max RAM."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "34": {
            "id": "34",
            "title": "Terminal Velocity",
            "icon": "assets/Intelligence/Terminal_Velocity.webp",
            "levelReq": 15,
            "parents": [
                "26"
            ],
            "children": [],
            "descriptions": [
                "Increased projectile velocity and lock-on range for 10 sec. after neutralizing an enemy with smart weapon. Stacks 3 times. New stacks reset duration. All stacks are removed when duration ends."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "35": {
            "id": "35",
            "title": "Targeting Prism",
            "icon": "assets/Intelligence/Targeting_Prism.webp",
            "levelReq": 15,
            "parents": [
                "26"
            ],
            "children": [],
            "descriptions": [
                "Enables multiple target locks when aiming and increases the number of simultaneous targets for all Smart Weapons by 1."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "36": {
            "id": "36",
            "title": "Queue Mastery",
            "icon": "assets/Intelligence/Queue_Mastery.webp",
            "levelReq": 20,
            "parents": [
                "23"
            ],
            "children": [],
            "descriptions": [
                "+1 quickhack queue size. The last quickhack to fill a queue has \u221250% RAM cost and locks the queue until all quickhack have uploaded., +15% damage against enemies with a locked queue."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "37": {
            "id": "37",
            "title": "Spillover",
            "icon": "assets/Intelligence/Spillover.webp",
            "levelReq": 20,
            "parents": [
                "24"
            ],
            "children": [],
            "descriptions": [
                "When Overclock is active: +50% chance for quickhacks to spread to an additional target."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "38": {
            "id": "38",
            "title": "Smart Synergy",
            "icon": "assets/Intelligence/Smart_Synergy.webp",
            "levelReq": 20,
            "parents": [
                "24",
                "26"
            ],
            "children": [],
            "descriptions": [
                "When Overclock is active, Smart Weapons gain instant target lock, and +25% damage if the enemy is affected by a quickhack."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        }
    },
    "Cool": {
        "1": {
            "id": "1",
            "title": "Road Warrior",
            "icon": "assets/Cool/Road_Warrior.webp",
            "levelReq": 4,
            "parents": [],
            "children": [],
            "descriptions": [
                "Allows you to use Sandevistan to slow time while driving.\n\nAllows Kerenzikov to be activated when aiming and handbraking simultaneously.\n\n+25% weapon damage when your vehicle is drifting or airborne."
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "2": {
            "id": "2",
            "title": "Feline Footwork",
            "icon": "assets/Cool/Feline_Footwork.webp",
            "levelReq": 4,
            "parents": [],
            "children": [
                "3",
                "4",
                "5",
                "20"
            ],
            "descriptions": [
                "When crouched:\n+15% Movement Speed\n+15% Mitigation Chance\n\nMitigation grants a chance to reduce incoming damage by current Mitigation Strength (default 50%.)"
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "3": {
            "id": "3",
            "title": "Small Target",
            "icon": "assets/Cool/Small_Target.webp",
            "levelReq": 4,
            "parents": [
                "2"
            ],
            "children": [],
            "descriptions": [
                "+20% Mitigation Chance when crouched and not moving."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "4": {
            "id": "4",
            "title": "Blind Spot",
            "icon": "assets/Cool/Blind_Spot.webp",
            "levelReq": 4,
            "parents": [
                "2"
            ],
            "children": [],
            "descriptions": [
                "When crouched, the higher your Mitigation Chance, the longer it takes for enemies to detect you."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "5": {
            "id": "5",
            "title": "Unexposed",
            "icon": "assets/Cool/Unexposed.webp",
            "levelReq": 4,
            "parents": [
                "2"
            ],
            "children": [],
            "descriptions": [
                "+20% Mitigation Chance when aiming from cover."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "6": {
            "id": "6",
            "title": "Killer Instinct",
            "icon": "assets/Cool/Killer_Instinct.webp",
            "levelReq": 4,
            "parents": [],
            "children": [
                "7",
                "8"
            ],
            "descriptions": [
                "+25% damage with knives, axes and silenced guns outside of combat. They also provide a preview of the estimated damage."
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "7": {
            "id": "7",
            "title": "Quick Getaway",
            "icon": "assets/Cool/Quick_Getaway.webp",
            "levelReq": 4,
            "parents": [
                "6"
            ],
            "children": [],
            "descriptions": [
                "+10% Movement Speed after neutralizing an enemy while undetected.\nDuration: 30 sec. or until detected. Stacks 2 times.\nNew stacks reset duration. All stacks removed when duration ends."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "8": {
            "id": "8",
            "title": "Gag Order",
            "icon": "assets/Cool/Gag_Order.webp",
            "levelReq": 4,
            "parents": [
                "6"
            ],
            "children": [],
            "descriptions": [
                "Landing an attack on an enemy right after they detect you will delay detection from other nearby enemies."
            ],
            "state": "state-available",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "9": {
            "id": "9",
            "title": "Focus",
            "icon": "assets/Cool/Focus.webp",
            "levelReq": 9,
            "parents": [],
            "children": [
                "10",
                "11",
                "12",
                "14",
                "25"
            ],
            "descriptions": [
                "+10% Headshot and Weakspot damage",
                "Unlocks Focus mode.\nThis mode automatically activates when you aim while at full Stamina.\n\nWhile active:\nNo Stamina cost for shooting, allowing for more accurate shots.\n\nWhen it ends:\n\u221240 Stamina\n\nDuration: 2.5 sec."
            ],
            "state": "state-available",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "10": {
            "id": "10",
            "title": "Rinse And Reload",
            "icon": "assets/Cool/Rinse_And_Reload.webp",
            "levelReq": 9,
            "parents": [
                "9"
            ],
            "children": [],
            "descriptions": [
                "+10% Reload speed for your next reload after neutralizing an enemy while aiming. Stacks 2 times. The stack resets to 0 whenever you start aiming."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "11": {
            "id": "11",
            "title": "No Sweat",
            "icon": "assets/Cool/No_Sweat.webp",
            "levelReq": 9,
            "parents": [
                "9"
            ],
            "children": [],
            "descriptions": [
                "\u221250% Stamina cost from Focus for each enemy neutralized while it was active."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "12": {
            "id": "12",
            "title": "Head To Head",
            "icon": "assets/Cool/Head_To_Head.webp",
            "levelReq": 9,
            "parents": [
                "9"
            ],
            "children": [
                "13"
            ],
            "descriptions": [
                "While Focus is active, neutralizing an enemy with a ranged attack resets its duration."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "13": {
            "id": "13",
            "title": "Deep Breath",
            "icon": "assets/Cool/Deep_Breath.webp",
            "levelReq": 9,
            "parents": [
                "12"
            ],
            "children": [],
            "descriptions": [
                "Time slows by 25% for you and enemies when Focus is active."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "14": {
            "id": "14",
            "title": "Pull!",
            "icon": "assets/Cool/Pull!.webp",
            "levelReq": 9,
            "parents": [
                "9"
            ],
            "children": [],
            "descriptions": [
                "When Focus is active, shooting grenades out of the air is easier and the blast is more powerful."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "15": {
            "id": "15",
            "title": "Scorpion Sting",
            "icon": "assets/Cool/Scorpion_Sting.webp",
            "levelReq": 9,
            "parents": [],
            "children": [
                "16",
                "17",
                "18",
                "19",
                "30"
            ],
            "descriptions": [
                "\u221215% recovery time for throwable weapons.",
                "Critical hits, headshots and hits to weak spots with throwable weapons apply Poison for 5 sec."
            ],
            "state": "state-available",
            "maxLevel": 2,
            "currentLevel": 0
        },
        "16": {
            "id": "16",
            "title": "Neurotoxin",
            "icon": "assets/Cool/Neurotoxin.webp",
            "levelReq": 9,
            "parents": [
                "15"
            ],
            "children": [],
            "descriptions": [
                "Applying Poison to an enemy via Scorpion Sting now also applies Blinding and disables sprinting for 6 sec."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "17": {
            "id": "17",
            "title": "Parasite",
            "icon": "assets/Cool/Parasite.webp",
            "levelReq": 9,
            "parents": [
                "15"
            ],
            "children": [],
            "descriptions": [
                "+15 Health on Crit Hit and headshots with thrown weapons."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "18": {
            "id": "18",
            "title": "Corrosion",
            "icon": "assets/Cool/Corrosion.webp",
            "levelReq": 9,
            "parents": [
                "15"
            ],
            "children": [],
            "descriptions": [
                "Allows you to apply Poison to mechs, robots, drones and turrets."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "19": {
            "id": "19",
            "title": "Accelerated Toxin Absorption",
            "icon": "assets/Cool/Accelerated_Toxin_Absorption.webp",
            "levelReq": 9,
            "parents": [
                "15"
            ],
            "children": [],
            "descriptions": [
                "Strong Attacks and thrown weapons used against Poisoned enemies instantly deal substantial Poison damage then remove all Poison effects."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "20": {
            "id": "20",
            "title": "Ninjutsu",
            "icon": "assets/Cool/Ninjutsu.webp",
            "levelReq": 15,
            "parents": [
                "2"
            ],
            "children": [
                "21",
                "22",
                "24",
                "35"
            ],
            "descriptions": [
                "+15% Movement Speed.",
                "+15% Mitigation Chance when crouched.",
                "Unlocks the ability to sprint while crouching.\n\nCrouch-sprinting allows you to move more quickly while staying silent, but consumes Stamina."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "21": {
            "id": "21",
            "title": "Shinobi Sprint",
            "icon": "assets/Cool/Shinobi_Sprint.webp",
            "levelReq": 15,
            "parents": [
                "20"
            ],
            "children": [],
            "descriptions": [
                "\u221275% Stamina cost for crouch-sprinting during combat."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "22": {
            "id": "22",
            "title": "Serpentine",
            "icon": "assets/Cool/Serpentine.webp",
            "levelReq": 15,
            "parents": [
                "20"
            ],
            "children": [],
            "descriptions": [
                "+30% Mitigation Chance when crouch-sprinting."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "23": {
            "id": "23",
            "title": "Vanishing Act",
            "icon": "assets/Cool/Vanishing_Act.webp",
            "levelReq": 15,
            "parents": [
                "24"
            ],
            "children": [],
            "descriptions": [
                "Optical Camo activates automatically and consumes its charge gradually while crouch-sprinting or sliding."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "24": {
            "id": "24",
            "title": "Creeping Death",
            "icon": "assets/Cool/Creeping_Death.webp",
            "levelReq": 15,
            "parents": [
                "20"
            ],
            "children": [
                "23"
            ],
            "descriptions": [
                "While Optical Camo is active or you are undetected, neutralizing an enemy grants: +15% Health, +15% Stamina, and +10% Movement Speed for 6 sec."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "25": {
            "id": "25",
            "title": "Deadeye",
            "icon": "assets/Cool/Deadeye.webp",
            "levelReq": 15,
            "parents": [
                "9"
            ],
            "children": [
                "26",
                "27",
                "28",
                "29",
                "36",
                "37"
            ],
            "descriptions": [
                "+10% headshot and weak spot damage.",
                "\u221225% Stamina cost for shooting.",
                "Unlocks Deadeye mode, which is active above 85% Stamina. When active: +25% headshot damage, +25% weak spot damage, no bullet spread."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "26": {
            "id": "26",
            "title": "High Noon",
            "icon": "assets/Cool/High_Noon.webp",
            "levelReq": 15,
            "parents": [
                "25"
            ],
            "children": [],
            "descriptions": [
                "When Deadeye is active:\n+35% reload speed for your next reload after neutralizing an enemy via headshot or weak spot. Effect available for 3 sec.\nSlows time by 50% during reload."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "27": {
            "id": "27",
            "title": "California Reaper",
            "icon": "assets/Cool/California_Reaper.webp",
            "levelReq": 15,
            "parents": [
                "25"
            ],
            "children": [],
            "descriptions": [
                "+30% Stamina after neutralizing an enemy via headshot or weak spot."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "28": {
            "id": "28",
            "title": "Long Shot",
            "icon": "assets/Cool/Long_Shot.webp",
            "levelReq": 15,
            "parents": [
                "25"
            ],
            "children": [],
            "descriptions": [
                "When Deadeye is active, your shots always deal full damage regardless of distance."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "29": {
            "id": "29",
            "title": "Quick Draw",
            "icon": "assets/Cool/Quick_Draw.webp",
            "levelReq": 15,
            "parents": [
                "25"
            ],
            "children": [],
            "descriptions": [
                "+30% weapon swap speed when swapping to pistols, revolvers, precision rifles, and sniper rifles, +30% Stamina when swapping during combat."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "30": {
            "id": "30",
            "title": "Juggler",
            "icon": "assets/Cool/Juggler.webp",
            "levelReq": 15,
            "parents": [
                "15"
            ],
            "children": [
                "31",
                "33",
                "34",
                "35"
            ],
            "descriptions": [
                "\u221215% recovery time for throwable weapons.",
                "+20% headshot and weak spot damage with throwable weapons.",
                "Instant cooldown reset for all throwable weapons after neutralizing an enemy with a throwable weapon via headshot, Crit Hit, or Poison."
            ],
            "state": "state-blocked",
            "maxLevel": 3,
            "currentLevel": 0
        },
        "31": {
            "id": "31",
            "title": "Finisher: Act Of Mercy",
            "icon": "assets/Cool/Finisher_-_Act_Of_Mercy.webp",
            "levelReq": 15,
            "parents": [
                "30"
            ],
            "children": [
                "32"
            ],
            "descriptions": [
                "Unlocks a Throwable Weapon Finisher.\n\nCan be used on low enemy Health.\n\nAutomatically activates Juggler.\n\nRestores 25% Health."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "32": {
            "id": "32",
            "title": "Pounce",
            "icon": "assets/Cool/Pounce.webp",
            "levelReq": 15,
            "parents": [
                "31"
            ],
            "children": [],
            "descriptions": [
                "Allows you to perform Finishers from a greater distance if you've hit the enemy with a throwable weapon.\n\nEach successful throw also makes them more susceptible to Finishers.\n\nFinishers can be performed when an enemy's Health is low."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "33": {
            "id": "33",
            "title": "Sleight Of Hand",
            "icon": "assets/Cool/Sleight_Of_Hand.webp",
            "levelReq": 15,
            "parents": [
                "30"
            ],
            "children": [],
            "descriptions": [
                "+20% Crit Damage for 8 sec. whenever Juggler is activated. Stacks 5 times. New stacks reset duration. All stacks are removed when duration ends."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "34": {
            "id": "34",
            "title": "Pay It Forward",
            "icon": "assets/Cool/Pay_It_Forward.webp",
            "levelReq": 15,
            "parents": [
                "30"
            ],
            "children": [],
            "descriptions": [
                "After retrieving a thrown knife or axe from an enemy, your first melee attack with a throwable weapon gains +200% damage."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "35": {
            "id": "35",
            "title": "Style Over Substance",
            "icon": "assets/Cool/Style_Over_Substance.webp",
            "levelReq": 20,
            "parents": [
                "20",
                "30"
            ],
            "children": [],
            "descriptions": [
                "Guaranteed Crit Hits with throwable weapons when crouch-sprinting, sliding, dodging or Dashing.\n\nNo movement speed penalty when aiming a throwable weapon."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "36": {
            "id": "36",
            "title": "Nerves Of Tungsten-Steel",
            "icon": "assets/Cool/Nerves_Of_Tungsten-Steel.webp",
            "levelReq": 20,
            "parents": [
                "25"
            ],
            "children": [],
            "descriptions": [
                "When Deadeye is active: guaranteed critical hits for headshots and weak spots, increased damage as distance increases (max +25%)."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        },
        "37": {
            "id": "37",
            "title": "Run 'N' Gun",
            "icon": "assets/Cool/Run 'N' Gun.webp",
            "levelReq": 20,
            "parents": [
                "25"
            ],
            "children": [],
            "descriptions": [
                "Hip-firing does not consume Stamina. When Focus is active +25% Movement Speed."
            ],
            "state": "state-blocked",
            "maxLevel": 1,
            "currentLevel": 0
        }
    }
};
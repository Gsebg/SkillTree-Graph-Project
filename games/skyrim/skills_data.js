const SKYRIM_DATA = {
    "illusion": {
        "Novice Illusion": {
            "id": "Novice Illusion",
            "title": "Novice Illusion",
            "description": "Cast Novice level Illusion spells for half magicka.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Illusion Dual Casting": {
            "id": "Illusion Dual Casting",
            "title": "Illusion Dual Casting",
            "description": "Dual casting an Illusion spell overcharges the effects into an even more powerful version.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Illusion"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Animage": {
            "id": "Animage",
            "title": "Animage",
            "description": "Illusion spells now work on higher level animals (+8 levels).",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Illusion"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Apprentice Illusion": {
            "id": "Apprentice Illusion",
            "title": "Apprentice Illusion",
            "description": "Cast Apprentice level Illusion spells for half magicka.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Illusion"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Hypnotic Gaze": {
            "id": "Hypnotic Gaze",
            "title": "Hypnotic Gaze",
            "description": "Calm spells now work on higher level opponents (+8 levels).",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Illusion"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Kindred Mage": {
            "id": "Kindred Mage",
            "title": "Kindred Mage",
            "description": "All Illusion spells work on higher level people (+10 levels).",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Animage"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Adept Illusion": {
            "id": "Adept Illusion",
            "title": "Adept Illusion",
            "description": "Cast Adept level Illusion spells for half magicka.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Apprentice Illusion"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Aspect of Terror": {
            "id": "Aspect of Terror",
            "title": "Aspect of Terror",
            "description": "Fear spells work on higher level opponents (+10 levels).",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Hypnotic Gaze"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Quiet Casting": {
            "id": "Quiet Casting",
            "title": "Quiet Casting",
            "description": "All spells cast from any school of magic are silent to others.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Kindred Mage"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Rage": {
            "id": "Rage",
            "title": "Rage",
            "description": "Frenzy spells work on higher level opponents (+12 levels).",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Aspect of Terror"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Expert Illusion": {
            "id": "Expert Illusion",
            "title": "Expert Illusion",
            "description": "Cast Expert level Illusion spells for half magicka.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Adept Illusion"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Master of the Mind": {
            "id": "Master of the Mind",
            "title": "Master of the Mind",
            "description": "Illusion spells work on undead, daedra and automatons.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Rage",
                "Quiet Casting"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Master Illusion": {
            "id": "Master Illusion",
            "title": "Master Illusion",
            "description": "Cast Master level Illusion spells for half magicka.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Expert Illusion"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "conjuration": {
        "Novice Conjuration": {
            "id": "Novice Conjuration",
            "title": "Novice Conjuration",
            "description": "Cast Novice level Conjuration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Conjuration Dual Casting": {
            "id": "Conjuration Dual Casting",
            "title": "Conjuration Dual Casting",
            "description": "Dual casting a Conjuration spell overcharges the effects into a longer lasting version",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Conjuration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Mystic Binding": {
            "id": "Mystic Binding",
            "title": "Mystic Binding",
            "description": "Bound weapons do more damage",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Conjuration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Apprentice Conjuration": {
            "id": "Apprentice Conjuration",
            "title": "Apprentice Conjuration",
            "description": "Cast Apprentice level Conjuration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Conjuration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Summoner": {
            "id": "Summoner",
            "title": "Summoner",
            "description": "Can summon Atronachs, raise undead or Dremora Lords twice as far away (three times as far for the second rank at Conjuration 70)",
            "maxRank": 2,
            "currentRank": 0,
            "parents": [
                "Novice Conjuration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Soul Stealer": {
            "id": "Soul Stealer",
            "title": "Soul Stealer",
            "description": "Bound weapons cast Soul Trap on targets",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Conjuration 30",
                "Mystic Binding"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Necromancy": {
            "id": "Necromancy",
            "title": "Necromancy",
            "description": "Greater duration for reanimated undead",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Conjuration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Atromancy": {
            "id": "Atromancy",
            "title": "Atromancy",
            "description": "Double duration for conjured Atronachs and Dremora Lords",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Summoner"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Oblivion Binding": {
            "id": "Oblivion Binding",
            "title": "Oblivion Binding",
            "description": "Bound weapons will banish summoned creatures and turn raised ones",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Soul Stealer"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Adept Conjuration": {
            "id": "Adept Conjuration",
            "title": "Adept Conjuration",
            "description": "Cast Adept level Conjuration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Apprentice Conjuration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Dark Souls": {
            "id": "Dark Souls",
            "title": "Dark Souls",
            "description": "Reanimated undead have 100 points more health",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Necromancy"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Expert Conjuration": {
            "id": "Expert Conjuration",
            "title": "Expert Conjuration",
            "description": "Cast Expert level Conjuration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Adept Conjuration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Elemental Potency": {
            "id": "Elemental Potency",
            "title": "Elemental Potency",
            "description": "Conjured Atronachs are 50% more powerful",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Atromancy"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Twin Souls": {
            "id": "Twin Souls",
            "title": "Twin Souls",
            "description": "The player can have two conjured creatures",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Elemental Potency",
                "Dark Souls"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Master Conjuration": {
            "id": "Master Conjuration",
            "title": "Master Conjuration",
            "description": "Cast Master level Conjuration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Expert Conjuration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "destruction": {
        "Novice Destruction": {
            "id": "Novice Destruction",
            "title": "Novice Destruction",
            "description": "Cast Novice level Destruction spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Destruction Dual Casting": {
            "id": "Destruction Dual Casting",
            "title": "Destruction Dual Casting",
            "description": "Dual casting a Destruction spell overcharges the effects into an even more powerful version",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Destruction"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Apprentice Destruction": {
            "id": "Apprentice Destruction",
            "title": "Apprentice Destruction",
            "description": "Cast Apprentice level Destruction spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Destruction"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Augmented Flames": {
            "id": "Augmented Flames",
            "title": "Augmented Flames",
            "description": "Fire spells do 25% more damage (50% for second rank) (Affects all fire weapon enchantments, not just self-enchanted ones.)",
            "maxRank": 2,
            "currentRank": 0,
            "parents": [
                "Novice Destruction"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Augmented Frost": {
            "id": "Augmented Frost",
            "title": "Augmented Frost",
            "description": "Frost spells do 25% more damage (50% for second rank) (Affects all frost weapon enchantments, not just self-enchanted ones.)",
            "maxRank": 2,
            "currentRank": 0,
            "parents": [
                "Novice Destruction"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Augmented Shock": {
            "id": "Augmented Shock",
            "title": "Augmented Shock",
            "description": "Shock spells do 25% more damage (50% for second rank) (Affects all shock weapon enchantments, not just self-enchanted ones.)",
            "maxRank": 2,
            "currentRank": 0,
            "parents": [
                "Novice Destruction"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Impact": {
            "id": "Impact",
            "title": "Impact",
            "description": "Most destruction spells will stagger an opponent when dual cast",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Destruction Dual Casting"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Rune Master": {
            "id": "Rune Master",
            "title": "Rune Master",
            "description": "Can place runes five times farther away",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Apprentice Destruction"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Adept Destruction": {
            "id": "Adept Destruction",
            "title": "Adept Destruction",
            "description": "Cast Adept level Destruction spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Apprentice Destruction"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Intense Flames": {
            "id": "Intense Flames",
            "title": "Intense Flames",
            "description": "Fire damage causes targets to flee if their health is low",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Augmented Flames"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Deep Freeze": {
            "id": "Deep Freeze",
            "title": "Deep Freeze",
            "description": "Frost damage paralyzes targets if their health is low",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Augmented Frost"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Disintegrate": {
            "id": "Disintegrate",
            "title": "Disintegrate",
            "description": "Shock damage disintegrates targets if their health is low",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Augmented Shock"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Expert Destruction": {
            "id": "Expert Destruction",
            "title": "Expert Destruction",
            "description": "Cast Expert level Destruction spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Adept Destruction"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Master Destruction": {
            "id": "Master Destruction",
            "title": "Master Destruction",
            "description": "Cast Master level Destruction spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Expert Destruction"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "restoration": {
        "Novice Restoration": {
            "id": "Novice Restoration",
            "title": "Novice Restoration",
            "description": "Cast Novice level Restoration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Restoration Dual Casting": {
            "id": "Restoration Dual Casting",
            "title": "Restoration Dual Casting",
            "description": "Dual casting a Restoration spell overcharges the effects into an even more powerful version",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Restoration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Regeneration": {
            "id": "Regeneration",
            "title": "Regeneration",
            "description": "Healing spells cure 50% more",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Restoration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Apprentice Restoration": {
            "id": "Apprentice Restoration",
            "title": "Apprentice Restoration",
            "description": "Cast Apprentice level Restoration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Restoration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Recovery": {
            "id": "Recovery",
            "title": "Recovery",
            "description": "Magicka regenerates 25% faster (50% for second rank)(Counteracts the -50% magicka regeneration of the Atronach Stone.)",
            "maxRank": 2,
            "currentRank": 0,
            "parents": [
                "Novice Restoration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Respite": {
            "id": "Respite",
            "title": "Respite",
            "description": "Healing spells also restore stamina",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Restoration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Adept Restoration": {
            "id": "Adept Restoration",
            "title": "Adept Restoration",
            "description": "Cast Adept level Restoration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Apprentice Restoration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Ward Absorb": {
            "id": "Ward Absorb",
            "title": "Ward Absorb",
            "description": "Wards that are cast absorb 25% of magicka that hits them.See also: The Atronach Stone or Dragonskin and Atronach perk, as they combine with this for easily reaching 100% spell absorption.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Restoration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Necromage": {
            "id": "Necromage",
            "title": "Necromage",
            "description": "All spells are more effective against undead",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Regeneration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Expert Restoration": {
            "id": "Expert Restoration",
            "title": "Expert Restoration",
            "description": "Cast Expert level Restoration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Adept Restoration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Avoid Death": {
            "id": "Avoid Death",
            "title": "Avoid Death",
            "description": "Once a day, heals 250 points automatically if the caster falls below 10% health (possible to get 400 heath regenerated when stacked with Sailor's Repose and the Regeneration perk)",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Recovery"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Master Restoration": {
            "id": "Master Restoration",
            "title": "Master Restoration",
            "description": "Cast Master level Restoration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Expert Restoration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "alteration": {
        "Novice Alteration": {
            "id": "Novice Alteration",
            "title": "Novice Alteration",
            "description": "Cast Novice level Alteration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Alteration Dual Casting": {
            "id": "Alteration Dual Casting",
            "title": "Alteration Dual Casting",
            "description": "Dual casting an Alteration spell overcharges the effects into an even more powerful version",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Alteration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Apprentice Alteration": {
            "id": "Apprentice Alteration",
            "title": "Apprentice Alteration",
            "description": "Cast Apprentice level Alteration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Alteration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Mage Armor": {
            "id": "Mage Armor",
            "title": "Mage Armor",
            "description": "Protection spells like Stoneflesh are twice as strong if not wearing armor (+0.5 per additional rank)",
            "maxRank": 3,
            "currentRank": 0,
            "parents": [
                "Apprentice Alteration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Magic Resistance": {
            "id": "Magic Resistance",
            "title": "Magic Resistance",
            "description": "Blocks 10%/20%/30% of a spells effect.Magic resistance does not stop friendly spells from affecting the caster. See also: Breton, Agent of Mara and The Lord Stone for a method of achieving 85% resistance without requiring any gear.",
            "maxRank": 3,
            "currentRank": 0,
            "parents": [
                "Apprentice Alteration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Adept Alteration": {
            "id": "Adept Alteration",
            "title": "Adept Alteration",
            "description": "Cast Adept level Alteration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Apprentice Alteration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Stability": {
            "id": "Stability",
            "title": "Stability",
            "description": "Alteration spells have greater duration (+50%)",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Adept Alteration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Expert Alteration": {
            "id": "Expert Alteration",
            "title": "Expert Alteration",
            "description": "Cast Expert level Alteration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Adept Alteration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Atronach": {
            "id": "Atronach",
            "title": "Atronach",
            "description": "Grants 30% Spell AbsorptionSpell absorption will block friendly spells as well as hostile ones.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Expert Alteration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Master Alteration": {
            "id": "Master Alteration",
            "title": "Master Alteration",
            "description": "Cast Master level Alteration spells for half magicka",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Expert Alteration"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "enchanting": {
        "Enchanter": {
            "id": "Enchanter",
            "title": "Enchanter",
            "description": "New enchantments are 20/40/60/80/100% stronger (+20% per rank)",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Soul Squeezer": {
            "id": "Soul Squeezer",
            "title": "Soul Squeezer",
            "description": "Soul gems provide extra magicka for recharging",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Enchanter"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Fire Enchanter": {
            "id": "Fire Enchanter",
            "title": "Fire Enchanter",
            "description": "Fire enchantments on weapons and armor are 25% stronger",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Enchanter"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Soul Siphon": {
            "id": "Soul Siphon",
            "title": "Soul Siphon",
            "description": "Death blows to creatures, but not people, trap 5% of the victim's soul, recharging the weapon",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Soul Squeezer"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Frost Enchanter": {
            "id": "Frost Enchanter",
            "title": "Frost Enchanter",
            "description": "Frost enchantments on weapons and armor are 25% stronger",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Fire Enchanter"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Insightful Enchanter": {
            "id": "Insightful Enchanter",
            "title": "Insightful Enchanter",
            "description": "Skill enchantments on armor are 25% stronger",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Enchanter"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Storm Enchanter": {
            "id": "Storm Enchanter",
            "title": "Storm Enchanter",
            "description": "Shock enchantments on weapons and armor are 25% stronger",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Frost Enchanter"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Corpus Enchanter": {
            "id": "Corpus Enchanter",
            "title": "Corpus Enchanter",
            "description": "Health, magicka and stamina enchantments on armor are 25% stronger",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Insightful Enchanter"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Extra Effect": {
            "id": "Extra Effect",
            "title": "Extra Effect",
            "description": "Can put two enchantments on the same item",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Storm Enchanter",
                "Corpus Enchanter"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "smithing": {
        "Steel Smithing": {
            "id": "Steel Smithing",
            "title": "Steel Smithing",
            "description": "Can create steel armor and weapons at forges, and improve them twice as much.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Arcane Blacksmith": {
            "id": "Arcane Blacksmith",
            "title": "Arcane Blacksmith",
            "description": "Magical weapons and armor can now be improved.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Steel Smithing"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Elven Smithing": {
            "id": "Elven Smithing",
            "title": "Elven Smithing",
            "description": "Can create Elven armor and weapons at forges, and improve them twice as much.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Steel Smithing"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Advanced Armors": {
            "id": "Advanced Armors",
            "title": "Advanced Armors",
            "description": "Can create scaled and steel plate armor at forges, and improve them twice as much.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Elven Smithing"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Glass Smithing": {
            "id": "Glass Smithing",
            "title": "Glass Smithing",
            "description": "Can create glass armor and weapons at forges, and improve them twice as much.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Advanced Armors"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Dwarven Smithing": {
            "id": "Dwarven Smithing",
            "title": "Dwarven Smithing",
            "description": "Can create Dwarven armor and weapons at forges, and improve them twice as much.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Steel Smithing"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Orcish Smithing": {
            "id": "Orcish Smithing",
            "title": "Orcish Smithing",
            "description": "Can create Orcish armor and weapons at forges, and improve them twice as much.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Dwarven Smithing"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Ebony Smithing": {
            "id": "Ebony Smithing",
            "title": "Ebony Smithing",
            "description": "Can create ebony armor and weapons at forges, and improve them twice as much.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Orcish Smithing"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Daedric Smithing": {
            "id": "Daedric Smithing",
            "title": "Daedric Smithing",
            "description": "Can create daedric armor and weapons at forges, and improve them twice as much.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Ebony Smithing"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Dragon Armor": {
            "id": "Dragon Armor",
            "title": "Dragon Armor",
            "description": "Can create dragon armor and weapons* at forges, and improve them twice as much.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Glass",
                "Daedric Smithing"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "heavy armor": {
        "Juggernaut": {
            "id": "Juggernaut",
            "title": "Juggernaut",
            "description": "Increases armor rating for Heavy Armor by 20%/ 40%/ 60%/ 80%/ 100%.",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Fists of Steel": {
            "id": "Fists of Steel",
            "title": "Fists of Steel",
            "description": "Unarmed attacks with Heavy Armor gauntlets do their armor rating in extra damage.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Juggernaut"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Well Fitted": {
            "id": "Well Fitted",
            "title": "Well Fitted",
            "description": "25% Armor bonus if wearing all Heavy Armor: head, chest, hands, feet.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Juggernaut"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Cushioned": {
            "id": "Cushioned",
            "title": "Cushioned",
            "description": "Half damage from falling if wearing all Heavy Armor: head, chest, hands, feet.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Fists of Steel"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Tower of Strength": {
            "id": "Tower of Strength",
            "title": "Tower of Strength",
            "description": "50% less stagger when wearing only Heavy Armor.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Well Fitted"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Conditioning": {
            "id": "Conditioning",
            "title": "Conditioning",
            "description": "Heavy Armor weighs nothing and doesn't slow you down when worn.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Cushioned"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Matching Set": {
            "id": "Matching Set",
            "title": "Matching Set",
            "description": "Additional 25% Armor bonus if wearing a matched set of Heavy Armor.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Tower of Strength"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Reflect Blows": {
            "id": "Reflect Blows",
            "title": "Reflect Blows",
            "description": "10% chance to reflect melee damage back to the enemy while wearing all Heavy Armor: head, chest, hands, feet.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Matching Set"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "block": {
        "Shield Wall": {
            "id": "Shield Wall",
            "title": "Shield Wall",
            "description": "Blocking is 20% more effective (+5% per additional rank)",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Deflect Arrows": {
            "id": "Deflect Arrows",
            "title": "Deflect Arrows",
            "description": "Arrows that hit the shield do no damage",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Shield Wall"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Quick Reflexes": {
            "id": "Quick Reflexes",
            "title": "Quick Reflexes",
            "description": "Time slows down if you are blocking during an enemy's power attack",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Shield Wall"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Power Bash": {
            "id": "Power Bash",
            "title": "Power Bash",
            "description": "Able to do a power bash",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Shield Wall"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Elemental Protection": {
            "id": "Elemental Protection",
            "title": "Elemental Protection",
            "description": "Blocking with a shield reduces incoming fire, frost and shock damage by 50%",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Deflect Arrows"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Deadly Bash": {
            "id": "Deadly Bash",
            "title": "Deadly Bash",
            "description": "Bashing does five times more damage",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Power Bash"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Block Runner": {
            "id": "Block Runner",
            "title": "Block Runner",
            "description": "Able to move faster with a shield or weapon raised",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Elemental Protection"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Disarming Bash": {
            "id": "Disarming Bash",
            "title": "Disarming Bash",
            "description": "Chance to disarm when power bashing (50% chance)",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Deadly Bash"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Shield Charge": {
            "id": "Shield Charge",
            "title": "Shield Charge",
            "description": "Sprinting with a shield raised knocks down most targets",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Block Runner",
                "Disarming Bash"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "two handed": {
        "Barbarian": {
            "id": "Barbarian",
            "title": "Barbarian",
            "description": "Two-Handed weapons do 20% more damage (+20% per additional rank)",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Champion's Stance": {
            "id": "Champion's Stance",
            "title": "Champion's Stance",
            "description": "Power attacks with two-handed weapons cost 25% less stamina",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Barbarian"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Limbsplitter": {
            "id": "Limbsplitter",
            "title": "Limbsplitter",
            "description": "Attacks with battle axes cause extra bleeding damage (Additional ranks raise the bleeding damage)",
            "maxRank": 3,
            "currentRank": 0,
            "parents": [
                "Barbarian"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Deep Wounds": {
            "id": "Deep Wounds",
            "title": "Deep Wounds",
            "description": "Attacks with greatswords have a 10% chance of doing critical damage (+5% per additional rank)",
            "maxRank": 3,
            "currentRank": 0,
            "parents": [
                "Barbarian"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Skull Crusher": {
            "id": "Skull Crusher",
            "title": "Skull Crusher",
            "description": "Attacks with warhammers ignore 25% of armor (+25% per additional rank)",
            "maxRank": 3,
            "currentRank": 0,
            "parents": [
                "Barbarian"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Devastating Blow": {
            "id": "Devastating Blow",
            "title": "Devastating Blow",
            "description": "Standing power attacks do 25% bonus damage with a chance to decapitate your enemies",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Champion's Stance"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Great Critical Charge": {
            "id": "Great Critical Charge",
            "title": "Great Critical Charge",
            "description": "Can do a two-handed power attack while sprinting that does double critical damage",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Champion's Stance"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Sweep": {
            "id": "Sweep",
            "title": "Sweep",
            "description": "Sideways power attacks with two-handed weapons hit all targets in front of you",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Devastating Blow",
                "Great Critical Charge"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Warmaster": {
            "id": "Warmaster",
            "title": "Warmaster",
            "description": "Backwards power attack has a 25% chance to paralyze the target",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Sweep"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "one handed": {
        "Armsman": {
            "id": "Armsman",
            "title": "Armsman",
            "description": "One-handed weapons do 20% more damage (+20% per additional rank)",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Fighting Stance": {
            "id": "Fighting Stance",
            "title": "Fighting Stance",
            "description": "Power attacks with one-handed weapons cost 25% less stamina",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Armsman"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Hack and Slash": {
            "id": "Hack and Slash",
            "title": "Hack and Slash",
            "description": "Attacks with war axes cause extra bleeding damage (additional ranks raise the bleeding damage)",
            "maxRank": 3,
            "currentRank": 0,
            "parents": [
                "Armsman"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Bone Breaker": {
            "id": "Bone Breaker",
            "title": "Bone Breaker",
            "description": "Attacks with maces ignore 25% of armor (+25% per additional rank), this includes the armor provided by flesh spells and wards.",
            "maxRank": 3,
            "currentRank": 0,
            "parents": [
                "Armsman"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Bladesman": {
            "id": "Bladesman",
            "title": "Bladesman",
            "description": "Attacks with swords have a 10% chance of doing critical damage (+5% per additional rank, does not apply to daggers)",
            "maxRank": 3,
            "currentRank": 0,
            "parents": [
                "Armsman"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Dual Flurry": {
            "id": "Dual Flurry",
            "title": "Dual Flurry",
            "description": "Dual wielding attacks are 20% faster (35% for second rank)",
            "maxRank": 2,
            "currentRank": 0,
            "parents": [
                "Armsman"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Savage Strike": {
            "id": "Savage Strike",
            "title": "Savage Strike",
            "description": "Standing power attacks do 25% bonus damage with a chance to decapitate your enemies",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Fighting Stance"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Critical Charge": {
            "id": "Critical Charge",
            "title": "Critical Charge",
            "description": "Can do a one-handed power attack while sprinting that does double critical damage",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Fighting Stance"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Dual Savagery": {
            "id": "Dual Savagery",
            "title": "Dual Savagery",
            "description": "Dual wielding power attacks do 50% bonus damage",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Dual Flurry"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Paralyzing Strike": {
            "id": "Paralyzing Strike",
            "title": "Paralyzing Strike",
            "description": "Backwards power attack has a 25% chance to paralyze the target",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Savage Strike",
                "Critical Charge"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "archery": {
        "Overdraw": {
            "id": "Overdraw",
            "title": "Overdraw",
            "description": "Bows do 20% more damage (+20% per additional rank)",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Eagle Eye": {
            "id": "Eagle Eye",
            "title": "Eagle Eye",
            "description": "Pressing Block while aiming will zoom in your view",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Overdraw"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Critical Shot": {
            "id": "Critical Shot",
            "title": "Critical Shot",
            "description": "10% chance of a critical hit that does extra damage (+5% chance and +25% critical damage per additional rank)",
            "maxRank": 3,
            "currentRank": 0,
            "parents": [
                "Overdraw"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Steady Hand": {
            "id": "Steady Hand",
            "title": "Steady Hand",
            "description": "Zooming in with a bow slows time by 25% (50% for second rank)",
            "maxRank": 2,
            "currentRank": 0,
            "parents": [
                "Eagle Eye"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Power Shot": {
            "id": "Power Shot",
            "title": "Power Shot",
            "description": "Arrows stagger all but the largest opponents 50% of the time",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Eagle Eye"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Hunter's Discipline": {
            "id": "Hunter's Discipline",
            "title": "Hunter's Discipline",
            "description": "Recover twice as many arrows from dead bodies",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Critical Shot"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Ranger": {
            "id": "Ranger",
            "title": "Ranger",
            "description": "Able to move faster with a drawn bow",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Hunter's Discipline"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Quick Shot": {
            "id": "Quick Shot",
            "title": "Quick Shot",
            "description": "Can draw a bow 30% faster",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Power Shot"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Bullseye": {
            "id": "Bullseye",
            "title": "Bullseye",
            "description": "15% chance of paralyzing the target for a few seconds",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Quick Shot",
                "Ranger"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "light armor": {
        "Agile Defender": {
            "id": "Agile Defender",
            "title": "Agile Defender",
            "description": "Increase armor rating for Light Armor by 20% (+20% per additional rank)",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Custom Fit": {
            "id": "Custom Fit",
            "title": "Custom Fit",
            "description": "25% armor bonus if wearing all Light Armor: head, chest, hands, feet",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Agile Defender"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Unhindered": {
            "id": "Unhindered",
            "title": "Unhindered",
            "description": "Light Armor weighs nothing and doesn't slow you down when worn",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Custom Fit"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Wind Walker": {
            "id": "Wind Walker",
            "title": "Wind Walker",
            "description": "Stamina regenerates 50% faster in all Light Armor: head, chest, hands, feet",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Unhindered"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Matching Set": {
            "id": "Matching Set",
            "title": "Matching Set",
            "description": "Additional 25% Armor bonus if wearing a matched set of Light Armor.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Custom Fit"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Deft Movement": {
            "id": "Deft Movement",
            "title": "Deft Movement",
            "description": "10% chance of avoiding all damage from a melee attack while wearing all Light Armor: head, chest, hands, feet",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Wind Walker",
                "Matching Set"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "sneak": {
        "Stealth": {
            "id": "Stealth",
            "title": "Stealth",
            "description": "You are 20% harder to detect when sneaking (+5% per additional rank, max 40% with 5/5)",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Muffled Movement": {
            "id": "Muffled Movement",
            "title": "Muffled Movement",
            "description": "Noise from armor is reduced by 50%",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Stealth"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Backstab": {
            "id": "Backstab",
            "title": "Backstab",
            "description": "Sneak attacks with one-handed weapons now do six times damage. This bonus stacks with the Shrouded Gloves enchantment, giving 12 times normal damage. It can also apply to the Berserker Rage power, offering 12 times normal damage, or 24 times normal damage with both Shrouded Gloves and the race power active.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Stealth"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Light Foot": {
            "id": "Light Foot",
            "title": "Light Foot",
            "description": "You won't trigger pressure plates",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Muffled Movement"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Deadly Aim": {
            "id": "Deadly Aim",
            "title": "Deadly Aim",
            "description": "Sneak attacks with bows now do three times damage. Can apply to the Berserker Rage power, offering 6 times normal damage.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Backstab"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Silent Roll": {
            "id": "Silent Roll",
            "title": "Silent Roll",
            "description": "Sprinting while sneaking executes a silent forward roll",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Light Foot"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Assassin's Blade": {
            "id": "Assassin's Blade",
            "title": "Assassin's Blade",
            "description": "Sneak attacks with daggers now do a total of fifteen times normal damage. This bonus stacks with Shrouded Gloves enchantment, giving 30 times normal damage. It can also apply to the Berserker Rage power, offering 30 times normal damage, or 60 times normal damage with both Shrouded Gloves and the race power active.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Deadly Aim"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Silence": {
            "id": "Silence",
            "title": "Silence",
            "description": "Walking and running does not affect detection",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Silent Roll"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Shadow Warrior": {
            "id": "Shadow Warrior",
            "title": "Shadow Warrior",
            "description": "Crouching stops combat for a moment and forces distant opponents to search for a target",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Silence"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "lockpicking": {
        "Novice Locks": {
            "id": "Novice Locks",
            "title": "Novice Locks",
            "description": "Novice locks are much easier to pick",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Apprentice Locks": {
            "id": "Apprentice Locks",
            "title": "Apprentice Locks",
            "description": "Apprentice locks are much easier to pick",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Novice Locks"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Quick Hands": {
            "id": "Quick Hands",
            "title": "Quick Hands",
            "description": "Able to pick locks without being noticed",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Apprentice Locks"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Wax Key": {
            "id": "Wax Key",
            "title": "Wax Key",
            "description": "Automatically gives you a copy of a picked lock's key if it has one",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Quick Hands"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Adept Locks": {
            "id": "Adept Locks",
            "title": "Adept Locks",
            "description": "Adept locks are much easier to pick",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Apprentice Locks"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Golden Touch": {
            "id": "Golden Touch",
            "title": "Golden Touch",
            "description": "Find more gold in chests",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Adept Locks"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Treasure Hunter": {
            "id": "Treasure Hunter",
            "title": "Treasure Hunter",
            "description": "50% greater chance of finding special treasure",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Golden Touch"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Expert Locks": {
            "id": "Expert Locks",
            "title": "Expert Locks",
            "description": "Expert locks are much easier to pick",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Adept Locks"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Locksmith": {
            "id": "Locksmith",
            "title": "Locksmith",
            "description": "Pick starts close to the lock opening position",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Expert Locks"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Unbreakable": {
            "id": "Unbreakable",
            "title": "Unbreakable",
            "description": "Lockpicks never break",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Locksmith"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Master Locks": {
            "id": "Master Locks",
            "title": "Master Locks",
            "description": "Master locks are much easier to pick",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Expert Locks"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "pickpocket": {
        "Light Fingers": {
            "id": "Light Fingers",
            "title": "Light Fingers",
            "description": "Pickpocketing bonus of 20%. Item weight and value reduce pickpocketing odds (+20% per additional rank)",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Night Thief": {
            "id": "Night Thief",
            "title": "Night Thief",
            "description": "+25% chance to pickpocket if the target is asleep",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Light Fingers"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Poisoned": {
            "id": "Poisoned",
            "title": "Poisoned",
            "description": "Silently harm enemies by placing poisons in their pockets",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Night Thief"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Cutpurse": {
            "id": "Cutpurse",
            "title": "Cutpurse",
            "description": "Pickpocketing gold becomes 50% easier",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Night Thief"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Extra Pockets": {
            "id": "Extra Pockets",
            "title": "Extra Pockets",
            "description": "Carrying capacity is increased by 100.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Night Thief"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Keymaster": {
            "id": "Keymaster",
            "title": "Keymaster",
            "description": "Pickpocketing keys almost always works",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Cutpurse"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Misdirection": {
            "id": "Misdirection",
            "title": "Misdirection",
            "description": "Can pickpocket equipped weapons (when hidden)",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Cutpurse"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Perfect Touch": {
            "id": "Perfect Touch",
            "title": "Perfect Touch",
            "description": "Can pickpocket equipped items, clothes and armor (when hidden)",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Misdirection"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "speech": {
        "Haggling": {
            "id": "Haggling",
            "title": "Haggling",
            "description": "Buying and selling prices are 10% better (+5% per additional rank)",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Allure": {
            "id": "Allure",
            "title": "Allure",
            "description": "10% better prices with the opposite sex",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Haggling"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Bribery": {
            "id": "Bribery",
            "title": "Bribery",
            "description": "Can bribe guards to ignore crimes",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Haggling"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Merchant": {
            "id": "Merchant",
            "title": "Merchant",
            "description": "Can sell any type of item to any kind of merchant",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Allure"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Persuasion": {
            "id": "Persuasion",
            "title": "Persuasion",
            "description": "Persuasion attempts are 30% easier",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Bribery"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Investor": {
            "id": "Investor",
            "title": "Investor",
            "description": "Can invest 500 gold with a shopkeeper to increase their available gold permanently \u2020",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Merchant"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Intimidation": {
            "id": "Intimidation",
            "title": "Intimidation",
            "description": "Intimidation is twice as successful",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Persuasion"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Fence": {
            "id": "Fence",
            "title": "Fence",
            "description": "Can barter stolen goods with any merchant the Dragonborn has invested in",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Investor"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Master Trader": {
            "id": "Master Trader",
            "title": "Master Trader",
            "description": "Every merchant in the world gains 1000 gold for bartering",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Fence"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    },
    "alchemy": {
        "Alchemist": {
            "id": "Alchemist",
            "title": "Alchemist",
            "description": "Potions and poisons are 20% / 40% / 60% / 80% / 100% stronger.",
            "maxRank": 5,
            "currentRank": 0,
            "parents": [],
            "state": "available",
            "x": 0,
            "y": 0
        },
        "Physician": {
            "id": "Physician",
            "title": "Physician",
            "description": "Potions you mix that restore health or stamina are 25% more powerful.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Alchemist"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Poisoner": {
            "id": "Poisoner",
            "title": "Poisoner",
            "description": "Poisons you mix are 25% more effective.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Physician"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Benefactor": {
            "id": "Benefactor",
            "title": "Benefactor",
            "description": "Potions you mix with beneficial effects have an additional 25% greater magnitude.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Physician"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Experimenter": {
            "id": "Experimenter",
            "title": "Experimenter",
            "description": "Eating an ingredient reveals the first two / three / four effects.",
            "maxRank": 3,
            "currentRank": 0,
            "parents": [
                "Benefactor"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Concentrated Poison": {
            "id": "Concentrated Poison",
            "title": "Concentrated Poison",
            "description": "Poisons applied to weapons last for twice as many hits.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Poisoner"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Green Thumb": {
            "id": "Green Thumb",
            "title": "Green Thumb",
            "description": "Two ingredients are gathered from plants (description is misleading - two ingredients or food items are gathered from any static harvest-able object - be it plant, fungi, hanging fish or meat, egg clusters, etc.) Known exception: Nirnroot (has only 1 root).",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Concentrated Poison"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Snakeblood": {
            "id": "Snakeblood",
            "title": "Snakeblood",
            "description": "50% resistance to all poisons.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Concentrated Poison",
                "Experimenter"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        },
        "Purity": {
            "id": "Purity",
            "title": "Purity",
            "description": "All negative effects are removed from created potions while all positive effects are removed from created poisons.",
            "maxRank": 1,
            "currentRank": 0,
            "parents": [
                "Snakeblood"
            ],
            "state": "locked",
            "x": 0,
            "y": 0
        }
    }
};
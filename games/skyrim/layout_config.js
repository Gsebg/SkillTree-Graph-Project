// Coordenadas guardadas por el Modo Edición
const SKYRIM_LAYOUTS = {
    "illusion": {
        "Novice Illusion": {
            "x": 534,
            "y": 638
        },
        "Illusion Dual Casting": {
            "x": 343,
            "y": 542
        },
        "Animage": {
            "x": 547,
            "y": 506
        },
        "Apprentice Illusion": {
            "x": 416,
            "y": 517
        },
        "Hypnotic Gaze": {
            "x": 640,
            "y": 590
        },
        "Kindred Mage": {
            "x": 591,
            "y": 463
        },
        "Adept Illusion": {
            "x": 378,
            "y": 342
        },
        "Aspect of Terror": {
            "x": 617,
            "y": 285
        },
        "Quiet Casting": {
            "x": 559,
            "y": 315
        },
        "Rage": {
            "x": 505,
            "y": 193
        },
        "Expert Illusion": {
            "x": 492,
            "y": 388
        },
        "Master of the Mind": {
            "x": 439,
            "y": 299
        },
        "Master Illusion": {
            "x": 475,
            "y": 477
        }
    },
    "conjuration": {
        "Novice Conjuration": {
            "x": 551,
            "y": 598
        },
        "Conjuration Dual Casting": {
            "x": 580,
            "y": 459
        },
        "Mystic Binding": {
            "x": 644,
            "y": 430
        },
        "Apprentice Conjuration": {
            "x": 399,
            "y": 503
        },
        "Summoner": {
            "x": 519,
            "y": 476
        },
        "Soul Stealer": {
            "x": 606,
            "y": 355
        },
        "Necromancy": {
            "x": 486,
            "y": 518
        },
        "Atromancy": {
            "x": 546,
            "y": 379
        },
        "Oblivion Binding": {
            "x": 525,
            "y": 231
        },
        "Adept Conjuration": {
            "x": 421,
            "y": 380
        },
        "Dark Souls": {
            "x": 476,
            "y": 435
        },
        "Expert Conjuration": {
            "x": 370,
            "y": 317
        },
        "Elemental Potency": {
            "x": 479,
            "y": 285
        },
        "Twin Souls": {
            "x": 490,
            "y": 363
        },
        "Master Conjuration": {
            "x": 446,
            "y": 241
        }
    },
    "destruction": {
        "Novice Destruction": {
            "x": 523,
            "y": 622
        },
        "Destruction Dual Casting": {
            "x": 481,
            "y": 353
        },
        "Apprentice Destruction": {
            "x": 510,
            "y": 314
        },
        "Augmented Flames": {
            "x": 632,
            "y": 442
        },
        "Augmented Frost": {
            "x": 566,
            "y": 338
        },
        "Augmented Shock": {
            "x": 448,
            "y": 447
        },
        "Impact": {
            "x": 393,
            "y": 306
        },
        "Rune Master": {
            "x": 449,
            "y": 262
        },
        "Adept Destruction": {
            "x": 571,
            "y": 245
        },
        "Intense Flames": {
            "x": 644,
            "y": 386
        },
        "Deep Freeze": {
            "x": 660,
            "y": 258
        },
        "Disintegrate": {
            "x": 378,
            "y": 381
        },
        "Expert Destruction": {
            "x": 639,
            "y": 197
        },
        "Master Destruction": {
            "x": 476,
            "y": 197
        }
    },
    "restoration": {
        "Novice Restoration": {
            "x": 494,
            "y": 625
        },
        "Restoration Dual Casting": {
            "x": 500,
            "y": 367
        },
        "Regeneration": {
            "x": 426,
            "y": 351
        },
        "Apprentice Restoration": {
            "x": 620,
            "y": 431
        },
        "Recovery": {
            "x": 382,
            "y": 465
        },
        "Respite": {
            "x": 600,
            "y": 520
        },
        "Adept Restoration": {
            "x": 599,
            "y": 309
        },
        "Ward Absorb": {
            "x": 572,
            "y": 373
        },
        "Necromage": {
            "x": 477,
            "y": 208
        },
        "Expert Restoration": {
            "x": 554,
            "y": 206
        },
        "Avoid Death": {
            "x": 390,
            "y": 280
        },
        "Master Restoration": {
            "x": 516,
            "y": 310
        }
    },
    "alteration": {
        "Novice Alteration": {
            "x": 492,
            "y": 636
        },
        "Alteration Dual Casting": {
            "x": 625,
            "y": 323
        },
        "Apprentice Alteration": {
            "x": 474,
            "y": 516
        },
        "Mage Armor": {
            "x": 378,
            "y": 532
        },
        "Magic Resistance": {
            "x": 383,
            "y": 361
        },
        "Adept Alteration": {
            "x": 548,
            "y": 335
        },
        "Stability": {
            "x": 547,
            "y": 218
        },
        "Expert Alteration": {
            "x": 474,
            "y": 308
        },
        "Atronach": {
            "x": 459,
            "y": 375
        },
        "Master Alteration": {
            "x": 422,
            "y": 238
        }
    },
    "enchanting": {
        "Enchanter": {
            "x": 505,
            "y": 614
        },
        "Soul Squeezer": {
            "x": 401,
            "y": 465
        },
        "Fire Enchanter": {
            "x": 490,
            "y": 332
        },
        "Soul Siphon": {
            "x": 567,
            "y": 368
        },
        "Frost Enchanter": {
            "x": 365,
            "y": 370
        },
        "Insightful Enchanter": {
            "x": 599,
            "y": 463
        },
        "Storm Enchanter": {
            "x": 399,
            "y": 300
        },
        "Corpus Enchanter": {
            "x": 640,
            "y": 291
        },
        "Extra Effect": {
            "x": 461,
            "y": 260
        }
    },
    "smithing": {
        "Steel Smithing": {
            "x": 475,
            "y": 629
        },
        "Arcane Blacksmith": {
            "x": 412,
            "y": 445
        },
        "Elven Smithing": {
            "x": 465,
            "y": 336
        },
        "Advanced Armors": {
            "x": 363,
            "y": 233
        },
        "Glass Smithing": {
            "x": 351,
            "y": 510
        },
        "Dwarven Smithing": {
            "x": 574,
            "y": 527
        },
        "Orcish Smithing": {
            "x": 641,
            "y": 454
        },
        "Ebony Smithing": {
            "x": 519,
            "y": 492
        },
        "Daedric Smithing": {
            "x": 479,
            "y": 187
        },
        "Dragon Armor": {
            "x": 583,
            "y": 331
        }
    },
    "heavy armor": {
        "Juggernaut": {
            "x": 518,
            "y": 609
        },
        "Fists of Steel": {
            "x": 465,
            "y": 208
        },
        "Well Fitted": {
            "x": 566,
            "y": 252
        },
        "Cushioned": {
            "x": 436,
            "y": 419
        },
        "Tower of Strength": {
            "x": 625,
            "y": 406
        },
        "Conditioning": {
            "x": 380,
            "y": 314
        },
        "Matching Set": {
            "x": 615,
            "y": 566
        },
        "Reflect Blows": {
            "x": 378,
            "y": 469
        }
    },
    "block": {
        "Shield Wall": {
            "x": 529,
            "y": 601
        },
        "Deflect Arrows": {
            "x": 383,
            "y": 323
        },
        "Quick Reflexes": {
            "x": 415,
            "y": 488
        },
        "Power Bash": {
            "x": 496,
            "y": 402
        },
        "Elemental Protection": {
            "x": 461,
            "y": 197
        },
        "Deadly Bash": {
            "x": 619,
            "y": 287
        },
        "Block Runner": {
            "x": 498,
            "y": 316
        },
        "Disarming Bash": {
            "x": 584,
            "y": 449
        },
        "Shield Charge": {
            "x": 533,
            "y": 225
        }
    },
    "two handed": {
        "Barbarian": {
            "x": 494,
            "y": 627
        },
        "Champion's Stance": {
            "x": 351,
            "y": 379
        },
        "Limbsplitter": {
            "x": 594,
            "y": 279
        },
        "Deep Wounds": {
            "x": 478,
            "y": 382
        },
        "Skull Crusher": {
            "x": 333,
            "y": 521
        },
        "Devastating Blow": {
            "x": 414,
            "y": 359
        },
        "Great Critical Charge": {
            "x": 350,
            "y": 232
        },
        "Sweep": {
            "x": 508,
            "y": 296
        },
        "Warmaster": {
            "x": 492,
            "y": 222
        }
    },
    "one handed": {
        "Armsman": {
            "x": 510,
            "y": 638
        },
        "Fighting Stance": {
            "x": 469,
            "y": 221
        },
        "Hack and Slash": {
            "x": 363,
            "y": 389
        },
        "Bone Breaker": {
            "x": 355,
            "y": 473
        },
        "Bladesman": {
            "x": 441,
            "y": 422
        },
        "Dual Flurry": {
            "x": 564,
            "y": 485
        },
        "Savage Strike": {
            "x": 606,
            "y": 197
        },
        "Critical Charge": {
            "x": 365,
            "y": 300
        },
        "Dual Savagery": {
            "x": 543,
            "y": 332
        },
        "Paralyzing Strike": {
            "x": 572,
            "y": 261
        }
    },
    "archery": {
        "Overdraw": {
            "x": 503,
            "y": 622
        },
        "Eagle Eye": {
            "x": 413,
            "y": 301
        },
        "Critical Shot": {
            "x": 335,
            "y": 464
        },
        "Steady Hand": {
            "x": 516,
            "y": 350
        },
        "Power Shot": {
            "x": 535,
            "y": 235
        },
        "Hunter's Discipline": {
            "x": 325,
            "y": 230
        },
        "Ranger": {
            "x": 431,
            "y": 457
        },
        "Quick Shot": {
            "x": 600,
            "y": 272
        },
        "Bullseye": {
            "x": 600,
            "y": 406
        }
    },
    "light armor": {
        "Agile Defender": {
            "x": 503,
            "y": 611
        },
        "Custom Fit": {
            "x": 623,
            "y": 292
        },
        "Unhindered": {
            "x": 487,
            "y": 229
        },
        "Wind Walker": {
            "x": 495,
            "y": 313
        },
        "Matching Set": {
            "x": 435,
            "y": 460
        },
        "Deft Movement": {
            "x": 415,
            "y": 343
        }
    },
    "sneak": {
        "Stealth": {
            "x": 554,
            "y": 613
        },
        "Muffled Movement": {
            "x": 528,
            "y": 424
        },
        "Backstab": {
            "x": 574,
            "y": 365
        },
        "Light Foot": {
            "x": 455,
            "y": 392
        },
        "Deadly Aim": {
            "x": 409,
            "y": 222
        },
        "Silent Roll": {
            "x": 382,
            "y": 494
        },
        "Assassin's Blade": {
            "x": 447,
            "y": 310
        },
        "Silence": {
            "x": 367,
            "y": 582
        },
        "Shadow Warrior": {
            "x": 449,
            "y": 509
        }
    },
    "lockpicking": {
        "Novice Locks": {
            "x": 503,
            "y": 622
        },
        "Apprentice Locks": {
            "x": 472,
            "y": 369
        },
        "Quick Hands": {
            "x": 589,
            "y": 492
        },
        "Wax Key": {
            "x": 621,
            "y": 373
        },
        "Adept Locks": {
            "x": 449,
            "y": 263
        },
        "Golden Touch": {
            "x": 597,
            "y": 302
        },
        "Treasure Hunter": {
            "x": 524,
            "y": 210
        },
        "Expert Locks": {
            "x": 316,
            "y": 289
        },
        "Locksmith": {
            "x": 451,
            "y": 487
        },
        "Unbreakable": {
            "x": 316,
            "y": 472
        },
        "Master Locks": {
            "x": 371,
            "y": 209
        }
    },
    "pickpocket": {
        "Light Fingers": {
            "x": 521,
            "y": 645
        },
        "Night Thief": {
            "x": 383,
            "y": 480
        },
        "Poisoned": {
            "x": 488,
            "y": 322
        },
        "Cutpurse": {
            "x": 622,
            "y": 347
        },
        "Extra Pockets": {
            "x": 411,
            "y": 254
        },
        "Keymaster": {
            "x": 539,
            "y": 213
        },
        "Misdirection": {
            "x": 621,
            "y": 454
        },
        "Perfect Touch": {
            "x": 562,
            "y": 538
        }
    },
    "speech": {
        "Haggling": {
            "x": 507,
            "y": 624
        },
        "Allure": {
            "x": 436,
            "y": 392
        },
        "Bribery": {
            "x": 552,
            "y": 510
        },
        "Merchant": {
            "x": 503,
            "y": 405
        },
        "Persuasion": {
            "x": 566,
            "y": 235
        },
        "Investor": {
            "x": 517,
            "y": 333
        },
        "Intimidation": {
            "x": 599,
            "y": 347
        },
        "Fence": {
            "x": 491,
            "y": 271
        },
        "Master Trader": {
            "x": 424,
            "y": 209
        }
    },
    "alchemy": {
        "Alchemist": {
            "x": 489,
            "y": 614
        },
        "Physician": {
            "x": 506,
            "y": 466
        },
        "Poisoner": {
            "x": 596,
            "y": 396
        },
        "Benefactor": {
            "x": 473,
            "y": 377
        },
        "Experimenter": {
            "x": 371,
            "y": 378
        },
        "Concentrated Poison": {
            "x": 548,
            "y": 279
        },
        "Green Thumb": {
            "x": 450,
            "y": 206
        },
        "Snakeblood": {
            "x": 501,
            "y": 342
        },
        "Purity": {
            "x": 380,
            "y": 316
        }
    }
};
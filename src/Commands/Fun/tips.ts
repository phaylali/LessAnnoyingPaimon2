
import { Command } from "../../Interfaces";
import {
	ColorResolvable,
	EmbedBuilder
} from "discord.js";

export const command: Command = {
	name: "tips",
	description: "Get A Random Genshin Impact Loading Screen Tip",
	options: [
		{
			name: "choice",
			description: "Your selection",
			choices: [
				{ name: "All", value: "all" },
				{ name: "Mondstadt", value: "mondstadt" },
				{ name: "Liyue", value: "liyue" },
				{ name: "Inazuma", value: "inazuma" },
				{ name: "Domains", value: "domains" },
				{ name: "Spiral Abyss", value: "abyss" },
				{ name: "Serenitea Pot", value: "teapot" },
				{ name: "Golden Apple Archipelago", value: "apple" },
				{ name: "Enkanomiya", value: "enkanomiya" },
				{ name: "General", value: "general" },
			],

			type: 3,
			required: true
		}
	],
	run: async (client, interaction) => {
		const choice = interaction.options.getString("choice");
		const embed = new TipEmbedBuilder(
			topicChoice(choice),
			choice,
			choices,
			client.env.BOT_COLOR
		);


		return await interaction.reply({
			embeds: [embed],

		});
	}
};


export const choices = ["all", "mondstadt", "liyue", "inazuma", "domains", "abyss", "teapot", "apple", "enkanomiya", "general"];

export const topicChoice = (choice: string) => {
	if (choice === 'all')
		return all[Math.floor(Math.random() * all.length)].toString();
	if (choice === 'mondstadt')
		return mondstadt[Math.floor(Math.random() * mondstadt.length)].toString();
	if (choice === 'liyue')
		return liyue[Math.floor(Math.random() * liyue.length)].toString();
	if (choice === 'inazuma')
		return inazuma[Math.floor(Math.random() * inazuma.length)].toString();
	if (choice === 'domains')
		return domains[Math.floor(Math.random() * domains.length)].toString();
	if (choice === 'abyss')
		return abyss[Math.floor(Math.random() * abyss.length)].toString();
	if (choice === 'teapot')
		return teapot[Math.floor(Math.random() * teapot.length)].toString();
	if (choice === 'apple')
		return apple[Math.floor(Math.random() * apple.length)].toString();
	if (choice === 'enkanomiya')
		return enkanomiya[Math.floor(Math.random() * enkanomiya.length)].toString();
	if (choice === 'general')
		return general[Math.floor(Math.random() * general.length)].toString();
};

export class TipEmbedBuilder {
	constructor(
		winner: string,
		choice: string,
		choices: string[],
		embedColor: ColorResolvable
	) {
		return new EmbedBuilder()
			.setDescription(`${winner}`)
			.setColor(embedColor)
			.setTitle(
				`Loading Screen Tip ${choice.toUpperCase()}`
			)
	}
}

const mondstadt = [
	"Adventurers' Guild: The Adventurers' Guild is active all across Teyvat, exploring new lands filled with mystery and secrets. Even when faced with climates as extreme and dangerous as that of Dragonspine, its members remain all the more steadfast.",
	"Ancient Rime: Ice composed of unknown energy that cannot be melted by conventional means. Only the energy released from Scarlet Quartz can melt this type of ice.",
	"Anemograna: Sometimes in the wild you may see a mysterious kind of life form called an Anemogranum. These curious beings will follow travelers around. Gather several Anemograna together to form a wind current.",
	"Anemograna: The Anemograna normally found scattered about Mondstadt appear to have also mutated in response to Dragonspine's environment...",
	"City Reputation: Once you have gained enough Reputation and won the trust of Mondstadt's people, some merchants may be willing to give you discounts.",
	"City Reputation: Once you have gained enough Reputation, Hertha will be willing to share rare recipes with you that cannot be acquired anywhere else.",
	"City Reputation: Bounties: Dangerous monsters will sometimes appear on the outskirts of Mondstadt. Despite the lack of able hands, the Knights still collect information on such creatures. Once your Reputation reaches a certain level, you can view the list of monster bounties.",
	"City Reputation: Requests: Despite a manpower shortage, Hertha of the Knights of Favonius will still actively keep her ear to the ground, listening to the trouble of the people of Mondstadt and filing them away for resolution at a later date. Once your Reputation reaches a certain level, you can view Mondstadt's requests. Resolve the troubles of the people proactively, and you will surely win Hertha's respect.",
	"Cooking: Good Hunter offers a take-away service for adventurers who often have to eat on the go. They also sell cooking ingredients.",
	"Dandelions: Dandelions are native to Mondstadt, the land blessed by the winds. Dandelions were brought here on the wind, and their seeds can be gathered using the power of Anemo.",
	"Dragonspine: A bright blue grass known as Starglow can be found growing from some special power in certain areas. Correspondingly, dark red growths can also be found in other areas...",
	"Dragonspine: A civilization once flourished in the lands of Dragonspine, only to be destroyed by a turbulent change in climate.",
	"Dragonspine: Frescoes were by no means a common method of recording events in ancient times. These portraits of an ancient civilization left behind in the snow and ice may be an invaluable legacy for scholars.",
	"Dragonspine: It seems that Mondstadt aristocrats had once dispatched an investigation team to Dragonspine long ago. However, the story and discoveries of the team were never documented in any historical records.",
	"Dragonspine: Skyfrost Nail refers to the mysterious structure suspended above Dragonspine with its energy now restored.",
	"Dragonspine: The black dragon fell upon Dragonspine long ago. Its blood seems to have seeped into the ground...",
	"Dragonspine: The ecological environment here had been devastated by drastic climate changes in the past. For this very reason, some things that are all but extinct in other regions still thrive in Dragonspine to this day...",
	"Dvalin: The true name of the noble being known as Stormterror. It is the 'Dragon of the East' of the Four Winds. Once defended Mondstadt from a great catastrophe.",
	"Elemental Sigils: Anemo Sigils are found throughout Mondstadt. They are often obtained by completing challenges and discovering treasure. You might find someone in the city who offers rare treasures in return for them.",
	"Exploration and Adventure: Some caves may freeze over in the extreme conditions of Dragonspine, resulting in hanging icicles. Be sure to keep an eye on the cavern ceilings when exploring caves...",
	"Exploration and Adventure: The heavy snow banks sometimes conceal unexpected treasure...",
	"Fishing: Nantuck can often be found fishing by Cider Lake. Although his thoughts are currently fixated on spinning a tale about a giant whale, he will be happy to serve those who share his passion for fishing.",
	"Forging: Wagner might have a bad temper, but he's a master of his craft. Any billets or ore you find on your travels will be safe in his hands.",
	"Frostbearing Tree: An ancient tree that seems to possess a will of its own. Its power is continually replenished by Crimson Agates. Once it has replenished a set amount of power, it will reveal Crimson Wish to anyone who chooses to listen...",
	"Frostbearing Tree: Fragmented debris of the Skyfrost Nail, which fell from the sky and caused drastic climatic changes. Scarlet sprouts can be seen growing from it now.",
	"Frostbearing Tree: It desires reddish crystals known as Crimson Agates. Collecting and offering Crimson Agates to the Frostbearing Tree may result in rich rewards...",
	"Lupical: In some special circles, this word means 'a fated family.'",
	"Mondstadt: A city of freedom that lies in the northest. From the mountains to the wide-open plains, the carefree breeze carries the scent of dandelions — a gift from the Anemo God — to an island in the middle of Cider Lake, on which sits the city of Mondstadt.",
	"Mondstadt: A free and joyous city under the jurisdiction of the Knights of Favonius. The city is famed for its wine and songs, which here go hand in hand.",
	"Mondstadt: This land was once home to a god named Decarabian.",
	"Scarlet Quartz: A type of crystal that feels like blood to the touch, almost as if it would attach to a certain person's body... Performing an attack with Scarlet Quartz releases its energy, destroying enemies in its path...",
	"Scarlet Quartz: A type of crystal that feels like blood to the touch, almost as if it would attach to a certain person's body... The effects of being imbued with Scarlet Quartz can help one completely withstand the icy clenches of the bitter cold.",
	"Scarlet Quartz: Peculiar to the touch, this type of crystal seems as if it has a will of its own... Performing an attack with Scarlet Quartz releases its energy, which is capable of even melting Ancient Rime formed by unknown energy.",
	"Seelie: Dragonspine's unique climate has caused even the Seelie to mutate. The gentle warmth of a Warming Seelie can help alleviate effects of the bitter cold. Perhaps its warmth can also be used to trigger mechanisms...",
	"Subzero Climate: Certain environments and activities will increase the accumulation of Sheer Cold. When adventuring in frigid environments, it's vital you monitor your body temperature...",
	"Subzero Climate: Having reliable heat sources is the key to surviving the Subzero Climate. Burning braziers and bonfires are essential to keeping yourself warm.",
	"Subzero Climate: In such extreme cold, even the grass on the ground cannot be ignited.",
	"Subzero Climate: Sheer Cold will quickly accumulate in the Subzero Climate, eventually dealing DMG to characters. Perhaps the ruins scattered across Dragonspine are remnants of a civilization destroyed in the bitter cold...",
	"Subzero Climate: Teleport Waypoints and Statues of The Seven seem to somehow keep the cold at bay. They serve as a source of comfort to adventurers in frigid conditions.",
	"The Fatui: A Snezhnayan organization that seeks only power. They are all the more active in regions full of mystery and ruins such as Dragonspine.",
	"Wolvendom: A revered and ancient spirit holds court in this land. It is the realm of the wolves, and thus was its name derived.",

]
const general = [
	"Abyss Order: An organization made out of non-human monsters. They are the enemies of surface civilization, and thrive in many corners of the world.",
	"Abyss Order: Driven on by the Abyss, they covet the lives of those who live on the surface, and dream of overturning the rule of the gods.",
	"Abyss Order: The Abyss Mages that run amok in many places are skilled in the language of the hilichurls, and are able to take control of them for their own uses. This makes them very dangerous indeed.",
	"Adventure Rank: After you reach the maximum Adventure Rank, all Adventure EXP received will be converted to Mora. They say that 'experience is the greatest wealth.'",
	"Adventurers' Guild: An exceptional adventurer will use the Guild-issued Adventurer Handbook to track the monsters and enemies they are hunting. As such, some hunters and warriors also join the Adventurers' Guild in order to obtain Adventurer Handbooks with the latest and greatest information inscribed...",
	"Adventurers' Guild: The Adventurers' Guild exists to distribute commissions and recruit adventurers, and it has branches all over Teyvat. Their motto is 'Ad astra abyssosque!'",
	"Adventurers' Guild: The Adventurers' Guild has a public booth in every city. Becoming a legendary adventurer starts with understanding the ins and outs of the services they offer.",
	"Adventurers' Guild: Traces of the Adventurers' Guild can be found across all Teyvat, even amidst the most dangerous places...",
	"An Ancient Tree: Legend tells of an ancient tree whose roots reach every corner of the world...",
	"A Reach Too Far: When opponents are defeated too far away, they might not produce any drops. By this same logic, this may sometimes happen when opponents fall down a bottomless pit as well.",
	"Artifacts: Artifacts derive power from their original bearers' ambitions and memories. It follows that they must consume other artifacts to increase their power.",
	"Artifacts: Five categories of artifacts exist. Each set includes an item of headwear, a flower, a goblet or similar, a timepiece, and a bird's feather.",
	"Artifacts: Treasures endowed with great power. Equipping several connected artifacts simultaneously increases their power even further.",
	"Books: When you come across tomes worth keeping, they will automatically enter your archive. Through this archive, you can read through the collection of books you've obtained throughout your journey at your leisure - the activity of choice for literary connoisseurs.",
	"Combat: A skilled warrior will use the terrain and vantage points against their enemy, plummeting down from the sky to ambush their foes.",
	"Combat: Apart from absorbing damage, shields can also increase a character's resistance to interruption.",
	"Combat: Effects that 'increase Attack Speed' can increase the speed of Normal Attacks. Unless it is also stated elsewhere that they can increase Charged ATK SPD, these effects usually only affect Normal Attacks.",
	"Combat: Some characters' Elemental Skills and Bursts apply the element in question to themselves. Be mindful of your surroundings when using these attacks, lest they cause an unwanted elemental reaction...",
	"Combat: Unless otherwise stated, effects that affect Sprints will not affect abilities that are named 'Alternate Sprint.'",
	"Combat: When an effect confers one attribute as a certain percentage of another attribute, this effect will not then factor into calculations of other similar percentage-based effects.",
	"Combat Talent: Certain materials can be used to level up a character's Elemental Skill, Elemental Burst, and even Normal Attack.",
	"Constellations: Wherever you go, whatever life throws at you... In Teyvat, the stars in the sky will always have a place for you.",
	"Cooking: Cooking is a key survival skill. Naturally, it must be done with care to obtain the most delicious dishes. But a little dexterity and a keen eye go a long way, too.",
	"Cooking: Different dishes have different effects, including healing, boosting strength, and replenishing stamina. Food connoisseurs know how to exploit the properties of what they eat.",
	"Cooking: Each region of Teyvat has its own cuisine. All you need to sample them is the recipe, the right ingredients, and a little skill.",
	"Cooking: Restaurants sell recipes — it's one way to keep their cuisine alive. Learn to cook new dishes by reading recipes in your inventory.",
	"Cooking: You may discover some rare recipes during your adventures. Learn to cook new dishes by reading recipes in your inventory.",
	"Co-Op Mode: Be welcoming to Travelers from other worlds, you might make yourself some new friends.",
	"Co-Op Mode: When challenging a Domain, try using Co-Op Mode to find Travelers to fight alongside. Perhaps strength in numbers may help you conquer even the most unconquerable domains.",
	"Co-Op Mode: When you get stuck on a difficult Daily Commission that you just can't handle alone, try calling in reinforcements in Co-Op Mode.",
	"Character Archive: You can use the Character Archive to view information on characters who have yet to join your team, yet are brimming with potential all the same...",
	"Character Archive: You can view information on characters who have already joined the Traveler's party in the Character Archive.",
	"Crafting: A mysterious ancient craft that harnesses the physical properties and fundamental principles of matter. Odds and ends you pick up on journey can be transformed into more precious substances.",
	"Crafting: As well as making Potions, you can also turn some materials into more precious ones through crafting.",
	"Crafting: With crafting, many materials can be used to create elemental Potions. Potions increase your elemental RES or increase Elemental DMG. A potion here and there might take the edge off when the going gets tough.",
	"Daily Commissions: After you complete the 4 Daily Commissions of the day, don't forget to go to the Adventurers' Guild to claim an extra reward.",
	"Dangerous Flora: There are mutated plants in this world that have intelligence and can manipulate the elements. A Cryo Regisvine has been known to keep meat fresh for several centuries, so its strength should not be underestimated...",
	"Dangerous Flora: There are mutated plants in this world that have intelligence and can manipulate the elements. Whopperflowers are able to use their mimetic flowers to trick their prey...",
	"Destroying Items: A traveler's bag can only fit so much. If you have too many of any item, you can destroy items to make room. But once something is destroyed, you can't get it back...",
	"Domains and Elements: Sometimes, Domains fill with harmful elemental energy that can only be dispelled with elemental reactions. For example, characters afflicted with Condensed Ice deplete stamina more quickly.",
	"Domains and Elements: Sometimes, Domains fill with harmful elemental energy that can only be dispelled with elemental reactions. For example, characters assailed by Engulfing Storm continuously lose elemental energy.",
	"Domains and Elements: Sometimes, Domains fill with harmful elemental energy that can only be dispelled with elemental reactions. For example, Smoldering Flames deals continuous DMG through Burning.",
	"Domains and Elements: Sometimes, Domains fill with harmful elemental energy that can only be dispelled with elemental reactions. For example, the Hydro effect Slowing Water increases the CD of characters' skills.",
	"Elemental Mastery: Once you can harness the power of the elements, you may find yourself looking to increase the effectiveness of Elemental Reactions. Elemental Mastery increases the effects of Elemental Reactions triggered by your characters.",
	"Elemental Monuments: Devices that respond to elemental energy. Some must be activated in a specific order, some may reset after a given time. If you can solve the puzzle, perhaps you will be rewarded...",
	"Elemental Monuments: Strange devices left by a lost civilization. Anything could happen when you activate them with the right elemental energy.",
	"Elemental Reaction: Considering how Electro-Charged works, it's important to be careful when using Electro attacks near bodies of water. That said, this same scenario offers great potential for defeating enemies with ease...",
	"Elemental Reaction: Considering how Frozen works, it's important to be aware when you get Wet while adventuring or during combat. Getting Frozen is the last thing you want!",
	"Elemental Reaction: Even the seemingly inert Geo has its elemental reaction. When it comes into contact with Hydro, Pyro, Cryo, or Electro, Crystallize occurs, producing DMG-absorbing elemental shards.",
	"Elemental Reaction: Heavy attacks can break the Frozen effect and unfreeze the affected being. The shattering ice deals DMG in the process, however.",
	"Elemental Reaction: Melt amplifies the DMG of the attack that produces it. Pyro attacks receive a greater DMG boost than Cryo attacks.",
	"Elemental Reaction: When Electro meets Hydro, the elemental reaction is Electro-Charged. This somewhat stupefying state deals continuous Electro DMG.",
	"Elemental Reaction: Using Swirl increases the range of other elements' effects, maximizing the effectiveness of adventurers' and warriors' attacks.",
	"Elemental Reaction: Vaporize amplifies the DMG of the attack that produces it. Hydro attacks receive a greater DMG boost than Pyro attacks.",
	"Elemental Reaction: When Anemo meets Hydro, Pyro, Electro, or Cryo, it causes Swirl and spreads its effects over an increased area.",
	"Elemental Reaction: When Cryo meets Hydro, the elemental reaction is Frozen. Frozen beings cannot move. Make effective use of this fact to conquer the most formidable of opponents with ease.",
	"Elemental Reaction: When Electro meets Cold, Superconduct occurs. This elemental reaction deals AoE Cryo DMG and decreases Physical RES.",
	"Elemental Reaction: When Electro meets Pyro, Overloaded occurs. The result is a powerful explosion.",
	"Elemental Reaction: When Hydro meets Pyro, Vaporize occurs. When a Pyro or Hydro attack causes this reaction, it deals increased DMG.",
	"Elemental Reaction: When Pyro meets Cryo, Melt occurs. When a Pyro or Cryo attack causes this reaction, it deals increased DMG.",
	"Elemental Reaction: When Pyro meets Dendro, Burning occurs. Burning deals continuous Pyro DMG.",
	"Elemental Sigils: Elemental Sigils of every kind can be found all over Teyvat, where the seven elements flow and converge. They are said to be a sign of the gods' favor.",
	"Elements: Certain Talents and Constellations can give some characters' weapons elemental infusions. Such infusions can cause the elemental attributes of attacks to be changed for a period of time...",
	"Elements: Dealing elemental DMG generates energy-rich Elemental Particles and Orbs. Collect them to restore energy for characters in your Party.",
	"Elements: Seven elements are found in Teyvat: Hydro, Pyro, Cryo, Geo, Anemo, Electro, and Dendro. The interaction between elements produces some weird and wonderful results.",
	"Elements: The building blocks of this world ans the source of many miraculous things. All sort of things happen when elements interact. Adventurers, travelers, and warriors all use elemental reactions to get things done at a fraction of the effort it might otherwise take.",
	"Energy: Hitting an enemy with a Normal or Charged Attack may replenish your character's Energy.",
	"Equipment Enhancement: Higher level weapons and artifacts can provide a lot of experience when used to enhance weapons.",
	"Expeditions: At the Adventurers' Guild, you can dispatch characters on expeditions to earn extra materials while you're off on adventures.",
	"Exploration and Adventure: Adventurers are explorers at heart. If you spot a fragile-looking rock pile on your adventure, try breaking it open to see what treasure it might contain.",
	"Exploration and Adventure: Butterflies are drawn to flowers, and fireflies are more easily visible at night. To catch insects, learn their habits. It is said there are even crystalflies attracted to elemental energy.",
	"Exploration and Adventure: Countless treasures are scattered across the land, just waiting to see the light of day once more...",
	"Exploration and Adventure: Elemental Sight reveals the elemental composition of the things around you. Sometimes, it can even help you solve puzzles.",
	"Exploration and Adventure: Experienced adventurers plan their route before scaling a mountain or cliff face. Stopping at suitable points along the way lets you gather your wits and recover stamina.",
	"Exploration and Adventure: Exploration is the bread and butter of an adventurer. Solving unknown mysteries, discovering hidden treasures and collecting lost divine Oculi can increase a region's Exploration Progress.",
	"Exploration and Adventure: Occasionally, you might find shrubs contain items dropped by a monster or traveler.",
	"Exploration and Adventure: The mini-map shows your current position and things in the surrounding area. Anemoculi and other elemental oculi will show up here.",
	"Exploration and Adventure: The whole world brims with elemental energy, including many plants and ore deposits. Perhaps you can gather them by using the right element.",
	"Fatui: A Snezhnayan organization. They seem to possess an incredible level of technology, and are even able to take apart and analyze Ruin Guards.",
	"Fatui: A Snezhnayan organization that has spread out all over the continent. They seem to be actively plotting something...",
	"Fatui: A Snezhnayan organization. Though they often prefer using forceful diplomacy to get their way, they will not hesitate to use force itself either...",
	"Fatui: An organization from Snezhnaya that is loyal to the Tsaritsa. Its Harbingers are on the hunt for Gnoses.",
	"Fatui: The Northland Bank hails from Snezhnaya, and has branches in many places. When the Fatui operate outside Snezhnaya, they will use funds provided by the Bank, and even use it as their base of operations...",
	"Fatui: They use Delusions that granted them power similar to that of Visions in combat. But as they say, everything has its price.",
	"Fishing: Grasping the living habits of different species of fish is a necessary skill for an angler. There may even be some fish in Teyvat that do not show up until night time...",
	"Fishing: Many members of the Fishing Association consider fish more attractive than Mora. You can trade Fish with them for valuable rewards.",
	"Forging: Look after your weapon, and it will look after you. Blacksmiths can make new weapons, turn prototype weapons into battle-ready ones, and make refinement materials from raw ore.",
	"Gliding License: One actually has to go through a strict examination and obtain the relevant license before they can use a wind glider.",
	"If at First You Don't Succeed...: If you fall in battle, get up and keep fighting. If you run out of energy, find ways to strengthen yourself. And when you fail, learn from the experience. Onwards and upwards — never give up.",
	"If at First You Don't Succeed...: No matter what happens: never give up hope, and never lose courage.",
	"Inazuma: Inazuma is presently closed to the outside world and cannot be accessed by normal methods. However, the Crux Fleet seems to have a unique way to get in and out...",
	"Inazuma: The Raiden Shogun is the deity who rules over Inazuma. She possesses power sufficient to call down the thunderstorm that has sealed Inazuma off...",
	"Leveling Up: Elemental Skills, Elemental Bursts, and Normal Attacks can all be boosted with specific consumables.",
	"Leveling Up: When a character reaches a certain level, they must Ascend before they can level up further. Sometimes, Ascension confers new Talents.",
	"Ley Line Disorder: All Domains are said to be constructed on ley lines. The energy surging through them can affect the Domains in unpredictable ways. These effects are known as ley line disorders.",
	"Ley Line Disorder: Assembling your Party strategically based on the effects of the ley line disorder makes tackling Domains much quicker and easier.",
	"Ley Lines: A mysterious network that links the whole world together, within which flow the elements. It's said the Ley Lines remember all things that happen in this world, from the surface down to the deepest depths...",
	"Ley Line Blossom: Blossoms formed from ley line deposits generated from the impeded flow of elemental energy. They appear when adventurers complete certain arduous challenges to rid the area of the source of the elemental malady. Use Original Resin to claim their hidden treasures.",
	"Ley Line Blossom: Flowers that bloom at Ley Line openings. Defeat all opponents in the Ley Line opening challenge and consume Original Resin to obtain a rich bounty.",
	"Mare Jivari: An endless plain of ash where the wind does not blow. The dreams of many an experienced adventurer has ended there, and many a traveler has ceased their sojourn on its account.",
	"Mora: It is a catalyst of sorts, in that it is a medium for physical transformation. That is why so many things can only be accomplished through the use of Mora.",
	"Mora: The currency accepted worldwide in Teyvat. None dispute its value and status.",
	"Omni-Ubiquity Net: A handy gadget made using knowledge of ancient onmyoudou. It has the ability to recreate the essences of a large number of small creatures. Its designer's eventual stated goal is to create a net that can even recreate a human.",
	"Omni-Ubiquity Net: This net is effective on a large number of small animals. You can keep animals whose essences you have recreated in your Serenitea Pot.",
	"Omni-Ubiquity Net: Though it is a device created using ancient onmyoudou as its base, it can be used by ordinary people. Just aim it at a small animal you'd like to 'capture,' and toss it right out there!",
	"Onikabuto: Even the gentlest Onikabuto won't let anything get in their way once they start fighting!",
	"Original Resin: Original Resin gradually replenishes by absorbing elemental energy from the natural environment. Alternatively, you can replenish it more quickly using a certain variety of highly precious gem.",
	"Original Resin: Revitalizes Petrified Trees (Domains) and Ley Line Blossoms (open world).",
	"Paimon: The best travel companion ever!",
	"Petrified Trees: It is said that the roots of all the Petrified Trees in the world are intertwined at the deepest, most hidden place in the earth, and that the pattern the root system makes defines the ley lines of the world.",
	"Quest: Sometimes, there are other things happening in places where you need to go to progress quests... You can view the positions of these occurrences through the Quest Menu.",
	"Quests: In the Quest Menu, press the small button on the right side of a quest entry to toggle its pin on the map.",
	"Quests: Sometimes in quests, characters will be busy with other matters. In the Quest Menu, you can view which characters are occupied during each quest.",
	"Quests: Use Navigate in the Quest Menu to help get your bearings and find your way to objectives.",
	"Quests: When you are navigating to a quest objective, you can press the indicator below the mini-map to show a path that guides the way.",
	"Riding the Wind: Upcurrents can help you reach high-up places.",
	"Ruins Torches: They say the insignia on the platform sealing the chest hints at the direction of the ruins torch. Some adventurers utilize this clue when hunting for treasure.",
	"Seelie: Now you see them, now you don't. Once a mighty race that lived to guide mankind, now the most Seelie offer is a little treasure to willing followers.",
	"Seelie: Seelie all want to return to their Seelie Courts. If you see the remains of a small statue like this, you can use Elemental Sight to find traces of the Seelie...",
	"Settings: You can adjust the camera sensitivity in Settings.",
	"Shields: Shield Strength is required to make your shields more durable. Depending on characters' Shield Strength, the same shield may have different levels of durability when protecting different characters.",
	"Shields: Some shields have an Elemental Type. Most Elemental Shields can absorb more DMG from attacks of the same elemental type. However, Geo Shields are unique in that they have increased absorption against all Elemental and Physical DMG.",
	"Shrines of Depths: Precious offerings are sealed within these ancient shrines erected on Teyvat's surface. Keys to the Shrines of Depths can be found in some Domains.",
	"Slimes: Lowly life forms of minimal intelligence, made from condensed elemental energy. But ignore them for too long, and they just might become a bigger problem.",
	"Sourcing Items: You can read up on an item's source so you know how to find more of it in the future. Knowledge is power!",
	"Stamina: Prudent adventurers know to keep an eye on their stamina level.",
	"Stamina: Stamina is crucial during combat, not just while exploring. Dodging and using Charged Attacks (melee/catalyst) both deplete stamina.",
	"Stamina: Swimming and climbing deplete stamina. What happens when stamina runs out at the wrong time? Only one way to find out...",
	"Statues' Lost Oculi: Statues of The Seven once watched over the land with elemental oculi. They have since been pecked out and carried to far-flung corners of the world. Only the intrepid adventurer may retrieve them.",
	"Statues' Lost Oculi: The statues will bless those who return elemental oculi of the right type to them.",
	"Taking Photos: Keep mementos of the sights and experiences of your adventure. When taking a photo, you can change your character's pose.",
	"Teleport Waypoints: Places you can teleport to. The easiest way to get around in Teyvat.",
	"Time: Just as the elements of the world count seven, so do the days of the week. Some large creatures of Teyvat will regain their strength every Monday at (Player's Time), including the legendary guardian of Wolvendom...",
	"Time: Time flies by when contemplating life, the universe, and everything...",
	"Treasure Hoarders: An infamous transnational organization identifiable by their Ravenwing motif. Their members are a rag-tag bunch of ruffians with precious little in their hands beyond an obsession with treasure.",
	"Vision: Rumor has it that when someone's wishes are extremely powerful, the gods will peer down upon him, and a Vision will appear...",
	"Vision Hunt Decree: An [sic] major policy being pursued in Inazuma. Its final objective is to collect all the Visions within the nation. The Raiden Shogun seems to believe that this method will allow the nation to attain 'eternity...'",
	"Weapons: For adventurers and warriors, a weapon is one's most trusted companion. Enhance your weapon with refinement ore and it, like you, will go from strength to strength.",
	"Weapons: It is said that some weapons will even change shape after reaching certain developmental milestones...",
	"Weapons: Some weapons in this world have turned back into billets over the course of their long existence. Only a skilled smith can restore them to their former glory.",
	"Weapons: Weapons of the same type can be combined using the Refine function. Refinement increases your weapon's strength.",
	"Weapons: When a weapon reaches a certain level, it must Ascend before it can be enhanced further. Ascension makes your weapon more powerful.",
	"Weather: Experienced travelers know to prepare for any weather conditions. Weather conditions may impact your travel plans and combat strategy. An outstanding adventurer knows how to exploit or defy the weather conditions at every turn.",
	"Wind Gliders: There are all sorts of wind gliders in the world. Try putting on a new pair of wings to take to the skies and soar across mountains, plains, and rivers — you might find the experience quite refreshing.",
	"World: Teyvat has its own 'laws.'",
	"World Quests: On your adventure, you will encounter people who seem to be in dire need of help. Talk to these people, and they'll often have something for you to assist with.",
	"World Quests: The world is full of all sorts of big opportunities and daunting challenges, as well as small errands... Travelers eager to lend a helping hand to others may come across valuable rewards for their troubles.",
]
const enkanomiya = [
	"Bokuso Box: 'Draw near to good and shun evil.'This is a secret treasure of Byakuyakoku, able to store light and disperse darkness.",
	"Corrupted Waypoints: Waypoints shrouded in darkness lose their original functionality.You can consume specialized materials to use secret arts that can push the darkness back and restore their functions",
	"Gateway Offering: Byakuyakoku once made offerings at the three corners of their realm in an effort to hold all things in balance and stave off misfortune and calamity.",
	"Light Realm: Also known as the realm of the elements.Though, much like mother nature, this realm has fallen under the dominion of humanity, it will still lend humans its aid against the encroaching void",
	"Reptilians: This was once a common folk legend in Teyvat.'The ancient dragons did not go extinct — they merely hid under the earth and have evolved to look like humans. They've even infiltrated various organizations throughout the world!'",
	"Statue of the Vassals: A statue of the Vassals of Watatsumi at the Daninichi Mikoshi [sic].Rest at the statue to clear the Corrosion caused by the darkness and replenish the energy within the Bokuso Box.",
	"The Encroaching Dark: During the 'Three Realms Gateway Offering' event, Enkanomiya will be covered in darkness.This darkness has a corrupting influence, and if allowed to build up, it will cause battles to be abnormally difficult.Upgrade your Bokuso Box to increase your resistance to darkness.",
	"Tokoyo Legume: A plant that appears within Enkanomiya during the 'Three Realms Gateway Offering' event. It was originally only to be used as fertilizer.It will only appear when you approach it with a Bokuso Box containing energy.",
	"Vassals of Watatsumi: They were once Watatsumi Omikami's servants, and are said to have had half-human, half-snake appearances.",
]
const apple = [
	"Dodo-King: A mysterious figure who has sent Klee a letter. It claims to be the overlord of the Golden Apple Archipelago, and seems to have wild and marvelous modes of mechanism manipulation...",
	"Golden Apple Archipelago: Dangerous whirlpools can appear near monster encampments. Waveriders that are sucked into these whirlpools will take continuous damage...",
	"Golden Apple Archipelago: The Dodo-King has left puzzles composed of various Rings and Elemental Targets behind. Use Wind-Blessed Harpasta to crack them one by one...",
	"Golden Apple Archipelago: The Dodo-King's Painted Walls depict the artworks of the Dodo-King and have the power to reflect Wind-Blessed Harpasta. Use Wind-Blessed Harpasta to destroy the walls and obtain the corresponding rewards...",
	"Golden Apple Archipelago: The Echoing Conches scattered throughout the Golden Apple Archipelago seal voices of the past within them. Collect these Echoing Conches to listen to all manner of unknown tales...",
	"Golden Apple Archipelago: The Golden Apple Archipelago is home to an upside-down mountain. The ruins there are incredibly similar to those that may be found in Mondstadt. One wonders what the connection between the two might be...",
	"Golden Apple Archipelago: The Golden Apple Archipelago is situated within an unknown, fog-shrouded region of the ocean that cannot be accessed under normal circumstances...",
	"Map Tabs: This world contains mysterious areas like adeptal abodes and the Golden Apple Archipelago, whose location relative to known regions is unclear. Use the Map Tabs to switch between these regions and known ones quickly.",
	"Waverider: The Waverider is a mysterious waterborne vehicle that can continuously travel across the ocean's surface. It is armed with two weapons, the Swiftstrike Cannon and the Heavy Cannon. Use Waverider Waypoints to summon the Waverider to its owner's side.",
	"Wind-Blessed Harpasta: Harpasta carry Mondstadt's traditions and with them, the wishes of the people. It is said that they can bring the Anemo Archon's protection...",
]
const teapot = [
	"Furnishings: Placing furnishings within the Serenitea Pot will affect the adeptal energy of the realm. Abundant adeptal energy may also lead to an increase in the various products within the realm.",
	"Realm Layout: The realms within a Serenitea Pot can come in all shapes and forms. But no matter how they change, they can never exceed the size of this teapot.",
	"Serenitea Pot: Companions invited to the Serenitea Pot will deepen their bonds with the Traveler. They will continuously gain Companionship EXP.",
	"Serenitea Pot: Companions who remain in the Serenitea Pot for a long time may take a liking to certain furnishings and prepare gifts for the Traveler in return...",
	"Teapot Traveling Salesman: A Teapot Traveling Salesman will sometimes drop by the Serenitea Pot with rare goods in tow. If these wares are to your liking, purchase them decisively — spare no time second-guessing yourself.",
	"Wood: Wood can be obtained from cutting various trees throughout Teyvat.",
]
const domains = [
	"Domain: It is said that glorious civilizations once covered every corner of the land, above and below ground, in days of yore. Those once-glorious civilizations have long perished, and all that remains of them today is the cities and altars they built deep underground.",
	"Doors of Resurrection: Gateways to life found in Domains. Said to be formed from the root tips of a tree that permeates the entire world. By touching them, those blessed by the world will receive the gift of life anew should they stumble and fall.",
]
const abyss = [
	"Elemental Nodes: A trial item that can be found in domains. It provides nearby monsters with Elemental affixes. If you do not adeptly counter these Elemental affixes with Elemental attacks of your own, it can turn a once-easy battle quite a thorny challenge.",
	"Spiral Abyss: Benediction of the Abyss is a wise choice. The Spiral Abyss contains two kinds of blessings, this one belonging to the ancient will carried within it.",
	"Spiral Abyss: Blessing of the Abyssal Moon changes with the phases of the moon. The Spiral Abyss contains two kinds of blessings, one of which belongs to the night sky of an unknown land.",
	"Spiral Abyss: Elemental Nodes may appear during challenges and make monsters stronger. If you really want to conquer this dark inverted tower, you must be able to conquer the elements.",
	"Spiral Abyss: Food and potions cannot be consumed within the Spiral Abyss. Those seeking to conquer the immense Abyssal Moon Spire and Abyss Corridor must rely on their strength and courage alone.",
	"Spiral Abyss: It's divided into the Abyss Corridor and the Abyssal Moon Spire. They say that the former connects to a crumbled palace of an ancient world, while the latter leads to a spiraling tower in the dark unknown, though no one can claim they've seen the end of either.",
	"Spiral Abyss: New treasures appear in the Abyssal Moon Spire twice each month. They say this cycle is eerily similar to that of a moon in some distant universe.",
	"Spiral Abyss: The one constant in the world is that nothing is constant. The Abyssal Moon Spire may change its shape over time, revealing new challenges and treasure.",
	"Spiral Abyss: To conquer Divergence challenges, you must split your party into two groups. Legends say that ancient kings and priests worked together to climb a tower touching the sky. What could they have been seeking...?",
	"Spiral Abyss: When you don't have enough Abyssal Stars, the deeper floors of the abyss will not open their doors for you. Some people believe these dim 'stars' are eerily similar to a common symbol seen around Teyvat.",
	"Spiral Abyss: While you consecutively challenge three chambers on each floor, you cannot change your party configuration. As you venture deeper, the path gets more narrow and is filled with thorns.",
]
const inazuma = [
	"Adventure: While travelling with Electrograna, you can use the Thunder Sphere to pass through dimensions in a flash.",

]
const liyue = [
	"Adobe: A realm created by the adepti. Abodes have their own rules and logic, and are in some ways no different from pocket dimensions."
]


const all = [...abyss, ...apple, ...domains, ...enkanomiya, ...general, ...mondstadt, ...teapot, ...inazuma, ...liyue]

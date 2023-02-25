import { Command } from "../../Interfaces";
import { EmbedBuilder } from "discord.js";
import genshindb from "genshin-db";

export const command: Command = {
	name: "genshin",
	description: "Get info about character / weapon / artifacts set",
	options: [
		{
			name: "type",
			description: "character / weapon / artifact",
			choices: [
				{ name: "character", value: "character" },
				{ name: "weapon", value: "weapon" },
				{ name: "artifact", value: "artifact" }
			],
			type: 3,
			required: true
		},
		{
			name: "name",
			description: "Name of target",
			type: 3,
			required: true
		}
	],
	run: async (client, interaction) => {
		const requestType: string = interaction.options.getString("type");
		const request: string = encodeURI(
			interaction.options
				.getString("name")
				.split(" ")
				.join("")
				.toLocaleLowerCase()
		);

		if (requestType == "character") {
			const character = genshindb.characters(request);

			if (!character)
				return await interaction.reply({
					content: `${request} is not a valid character!`,
					ephemeral: true
				});

			const Embed = new EmbedBuilder()
				.setColor(client.env.BOT_COLOR)
				.setTitle(character.name)
				.setDescription(character.description)
				//.setThumbnail(`https://api.genshin.dev/characters/${request}/icon.png`)
				.setThumbnail(`${character.images ? character.images.icon : "https://api.genshin.dev/characters/${request}/icon.png"}`)
				.addFields([
					{
						name: "Title",
						value: character.title? character.title : character.name,

					},
					{
						name: "Rarity",
						value: ":star:".repeat(Number(character.rarity)),

					},
					{
						name: "Nation",
						value: character.region,
						inline: true
					},
					{
						name: "Affiliation",
						value: character.affiliation,
						inline: true
					},
					{
						name: "Association",
						value: character.association,
						inline: true
					},
					{
						name: "Birthday",
						value: character.birthday,
						inline: true
					},
					{
						name: "Constellation",
						value: character.constellation,
						inline: true
					},
					{
						name: "Element",
						value: character.element,
						inline: true
					},
					{
						name: "Weapon type",
						value: character.weapontype,
						inline: true
					},
					{
						name: "Sub stat",
						value: character.substat,
						inline: true
					},
					{
						name: "Appearance",
						value: character.version,
						inline: true
					}

				])
				.setImage(character.images.cover1? `${character.images.cover1}`:`https://api.genshin.dev/characters/${character.name}/gacha-splash.png`);
			/*.setImage(
				`https://api.genshin.dev/characters/${request}/gacha-splash.png`
			);*/

			if (character.url?.fandom) Embed.setURL(character.url.fandom);

			return await interaction.reply({ embeds: [Embed] });
		}

		if (requestType == "weapon") {
			const weapon = genshindb.weapons(request);

			if (!weapon)
				return await interaction.reply({
					content: `${request} is not a valid weapon!`,
					ephemeral: true
				});

			const Embed = new EmbedBuilder()
				.setColor(client.env.BOT_COLOR)
				.setTitle(weapon.name)
				.setDescription(weapon.description)
				.setThumbnail(
					`${weapon.images.icon}`
				)
				.addFields([
					{
						name: "Rarity",
						value: ":star:".repeat(Number(weapon.rarity)),

					},
					{
						name: "Base attack",
						value: weapon.baseatk.toString(),
						inline: true
					},
					{
						name: weapon.substat,
						value: weapon.subvalue,
						inline: true
					},
					{
						name: weapon.effectname,
						value: weapon.effect,
						inline: true
					},
					{
						name: "R1",
						value: `${weapon.r1[0]} | ${weapon.r1[1]}`,
						inline: true
					},
					{
						name: "R2",
						value: `${weapon.r2[0]} | ${weapon.r2[1]}`,
						inline: true
					},
					{
						name: "R3",
						value: `${weapon.r3[0]} | ${weapon.r3[1]}`,
						inline: true
					},
					{
						name: "R4",
						value: `${weapon.r4[0]} | ${weapon.r4[1]}`,
						inline: true
					},
					{
						name: "R5",
						value: `${weapon.r5[0]} | ${weapon.r5[1]}`,
						inline: true
					},
					{
						name: "Type",
						value: weapon.weapontype,
						inline: true
					},

					{
						name: "Appearance",
						value: weapon.version,
						inline: true
					}
				])
				.setImage(
					`https://res.cloudinary.com/genshin/image/upload/sprites/${weapon.images.namegacha}.png`
				);

			if (weapon.url?.fandom) Embed.setURL(weapon.url.fandom);

			return await interaction.reply({ embeds: [Embed] });
		}

		if (requestType == "artifact") {
			const artifact = genshindb.artifacts(request);

			if (!artifact)
				return await interaction.reply({
					content: `${request} is not a valid artifact!`,
					ephemeral: true
				});

			const Embed = new EmbedBuilder()
				.setColor(client.env.BOT_COLOR)
				.setTitle(artifact.name)
				.setDescription(`Rarity: ${":star:".repeat(Number(artifact.rarity[0]))} | ${":star:".repeat(Number(artifact.rarity[1] ? artifact.rarity[1] : "0"))}`)
				.setThumbnail(
					artifact.flower
						? `${artifact.images.flower}`
						//: `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${artifact.images.circlet}.png`
						: `${artifact.images.circlet}`
				)

			//.setThumbnail(`https://api.genshin.dev/artifacts/${artifact.images.flower}/icon.png`)

				.addFields([
					{ name: "\u200B", value: "\u200B" },
					{
						name: "2 piece bonus",
						value: artifact["2pc"] ? artifact["2pc"] : "None",
						inline: true
					},
					{
						name: "4 piece bonus",
						value: artifact["4pc"] ? artifact["4pc"] : "None",
						inline: true
					},
					{ name: "\u200B", value: "\u200B" },
					{
						name: "Flower",
						value: artifact.flower.name ? `${artifact.flower.name} : ${artifact.flower.description}` : "None",
						inline: true
					},
					{
						name: "Circlet",
						value: artifact.circlet.name ? `${artifact.circlet.name} : ${artifact.circlet.description}` : "None",
						inline: true
					}
					,
					{
						name: "Goblet",
						value: artifact.goblet.name ? `${artifact.goblet.name} : ${artifact.goblet.description}` : "None",
						inline: true
					},
					{
						name: "Plume",
						value: artifact.plume.name ? `${artifact.plume.name} : ${artifact.plume.description}` : "None",
						inline: true
					},
					{
						name: "Sands",
						value: artifact.sands.name ? `${artifact.sands.name} : ${artifact.sands.description}` : "None",
						inline: true
					},


				]).setImage(`${artifact.images.circlet}`);


			if (artifact.url?.fandom) Embed.setURL(artifact.url.fandom);

			return await interaction.reply({ embeds: [Embed] });
		}
	}
};

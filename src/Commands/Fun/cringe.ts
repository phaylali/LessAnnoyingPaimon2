import { Command } from "../../Interfaces";
import { EmbedBuilder } from "discord.js";

export const command: Command = {
	name: "cringe",
	description: "react with a cringe video ",
	options: [
		{
			name: "version",
			description: "add your cringe version",
			type: 3,
			required: false
		}
	],
	run: async (client, interaction) => {
		const text = interaction.options.getString("version");

		const Embed = new EmbedBuilder()
			.setColor(client.env.BOT_COLOR)
			.setTitle("Cringe Help")
			.setDescription("leave blank for the mexican version");
		for (const cringe of all) {

			Embed.addFields({
				name: `${cringe.name}`,
				value: `Link: ${cringe.link}`
			});
		}

		const result = all.map((a) => a.name);
		if (result.includes(text)) {
			const vid = all.find((element) => element.name === text);

			return await interaction.reply(
				`${vid.link}`
			);
		} else if (text === "help") {
			return await interaction.reply({ embeds: [Embed] });
		} else return await interaction.reply(mexico.link);
	}
};

const australia = {
	name: "australia",
	link: "https://files.catbox.moe/ag6ocf.webm"
};
const china = {
	name: "china",
	link: "https://files.catbox.moe/50n50g.webm"
};
const egypt = {
	name: "egypt",
	link: "https://files.catbox.moe/jgxbcl.webm"
};
const england = {
	name: "england",
	link: "https://files.catbox.moe/nw2a5n.webm"
};
const france = {
	name: "france",
	link: "https://files.catbox.moe/onseu0.webm"
};
const india = {
	name: "india",
	link: "https://files.catbox.moe/n6zdbx.webm"
};
const italia = {
	name: "italia",
	link: "https://files.catbox.moe/9hhe04.webm"
};
const japan = {
	name: "japan",
	link: "https://files.catbox.moe/gs6zgo.webm"
};
const marrakesh = {
	name: "marrakesh",
	link: "https://files.catbox.moe/7xu0rz.webm"
};

const mexico = {
	name: "mexico",
	link: "https://files.catbox.moe/w1y7pm.webm"
};

const rabat = {
	name: "rabat",
	link: "https://files.catbox.moe/nkhj01.webm"
};

const russia = {
	name: "russia",
	link: "https://files.catbox.moe/sa937j.webm"
};

const saudia = {
	name: "saudia",
	link: "https://files.catbox.moe/y94hsx.webm"
};
const silent = {
	name: "silent",
	link: "https://files.catbox.moe/ia3nrw.webm"
};

const sous = {
	name: "sous",
	link: "https://files.catbox.moe/acrywq.webm"
};

const sweden = {
	name: "sweden",
	link: "https://files.catbox.moe/z3f2qc.webm"
};

const tangier = {
	name: "marrakesh",
	link: "https://files.catbox.moe/d07nao.webm"
};

const all = [
	australia,
	china,
	egypt,
	england,
	france,
	india,
	italia,
	japan,
	marrakesh,
	mexico,
	rabat,
	russia,
	saudia,
	silent,
	sous,
	sweden,
	tangier
];

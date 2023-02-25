import { Command } from "../../Interfaces";
import {
	//ColorResolvable,
	EmbedBuilder
} from "discord.js";
/*import {
	//existsSync,
	readdirSync
} from "fs";*/
//import { join } from "path";
//const dir = join(__dirname, "/../../../Media/Cringe");
//const files = readdirSync(dir);

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

		/*if (existsSync(`${dir}/${text}.webm`)) {
			return await interaction.reply({files: [`${dir}/${text}.webm`,] });
		} else if (text === "help") {
			return await interaction.reply({ embeds:[Embed] });
		}*/
		/*if (text === "help") {
			return await interaction.reply(text);
		} else return await interaction.reply({ files: [`${dir}/mexico.webm`] });*/
		/*for (const file of files) {
			Embed.addFields({
				name: `${file.replace(".webm", "")}`,
				value: `Oh No Cringe ${file} Version`
			});
		} */
		const result = all.map(a => a.name);
		if (result.includes(text)){
			all.find(element => element.name = text).link;
			return await interaction.reply(`${all.find(element => element.name = text).link}`);
		}else if (text === "help"){
			return await interaction.reply({ embeds:[Embed] });
		}else return await interaction.reply(mexico.link);




	}
};

const australia = {
	name: "australia",
	link: "https://i.imgur.com/wAGA2zA.mp4"
};
const china = {
	name: "china",
	link: "https://i.imgur.com/MjBmJQD.mp4"
};
const egypt = {
	name: "egypt",
	link: "https://i.imgur.com/1zQ1bIv.mp4"
};
const england = {
	name: "england",
	link: "https://i.imgur.com/yHE9D4n.mp4"
};
const france = {
	name: "france",
	link: "https://i.imgur.com/2v9LBYh.mp4"
};
const india = {
	name: "india",
	link: "https://i.imgur.com/O1KKsCe.mp4"
};
const italia = {
	name: "italia",
	link: "https://i.imgur.com/sfVn60n.mp4"
};
const japan = {
	name: "japan",
	link: "https://i.imgur.com/iDjOMmi.mp4"
};
const marrakesh = {
	name: "marrakesh",
	link: "https://i.imgur.com/6oolZAj.mp4"
};

const mexico = {
	name: "mexico",
	link: "https://i.imgur.com/31H2I0a.mp4"
};

const rabat = {
	name: "rabat",
	link: "https://i.imgur.com/4mbmx3N.mp4"
};

const russia = {
	name: "russia",
	link: "https://i.imgur.com/4BZ87af.mp4"
};

const saudia = {
	name: "saudia",
	link: "https://i.imgur.com/jrvXSTL.mp4"
};
const silent = {
	name: "silent",
	link: "https://i.imgur.com/wljid2Q.mp4"
};

const sous = {
	name: "sous",
	link: "https://i.imgur.com/qlTGSrp.mp4"
};

const sweden = {
	name: "sweden",
	link: "https://i.imgur.com/H15d7kk.mp4"
};

const tangier = {
	name: "marrakesh",
	link: "https://i.imgur.com/nqSbykW.mp4"
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


import { Command } from "../../Interfaces";
import {
	//ColorResolvable,
	EmbedBuilder
} from "discord.js";
import { existsSync , readdirSync } from "fs";
import { join } from "path";
const dir = join(__dirname, "/../../../Media/Cringe");
const files = readdirSync(dir);



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
			.setTitle("Cringe Help").setDescription("leave blank for the mexican version ");
		for (const file of files) {
			Embed.addFields({name:`${file.replace(".webm","")}`, value:`Oh No Cringe ${file} Version`});
		}



		if (existsSync(`${dir}/${text}.webm`)) {
			return await interaction.reply({ files: [`${dir}/${text}.webm`] });
		} else if (text === "help") {
			return await interaction.reply({ embeds:[Embed] });
		}

		else return await interaction.reply({ files: [`${dir}/mexico.webm`] });
	}
};

import { CatResponse } from "../../Interfaces/Nekoslife";
import { Command } from "../../Interfaces";
import { EmbedBuilder } from "discord.js";
import axios from "axios";

interface CatApiResponse {
	breeds: unknown[];
	id: string;
	url: string;
	width: number;
	height: number;
}
const catNames = ["يعقوب قمر الدين دبيازة","خالد كشميري","خضر كرويتا","اسماعيل أحمد كنباوي","عثمان عبد الجليل ششة","محمد سنبل",];

export const command: Command = {
	name: "cat",
	description: "Get cat text and photo",
	run: async (client, interaction) => {
		const nekosResponse: CatResponse = (
			await axios.get("https://nekos.life/api/v2/cat")
		).data;
		const catApiResponse: CatApiResponse = (
			await axios.get("https://api.thecatapi.com/v1/images/search")
		).data;
		const randomCat = catNames[Math.floor(Math.random() * catNames.length)];
		const Embed = new EmbedBuilder()
			.setColor(client.env.BOT_COLOR)
			.setTitle(randomCat).setDescription(nekosResponse.cat)
			.setImage(catApiResponse[0].url);

		return await interaction.reply({ embeds: [Embed] });
	}
};

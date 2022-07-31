import { Command } from "../../Interfaces";
import { EmbedBuilder } from "discord.js";
import axios from "axios";

interface DogApiResponse {
	breeds: unknown[];
	id: string;
	url: string;
	width: number;
	height: number;
}
const dogNames = ['يعقوب قمر الدين دبيازة','خالد كشميري','خضر كرويتا','اسماعيل أحمد كنباوي','عثمان عبد الجليل ششة','محمد سنبل',];

export const command: Command = {
	name: "dog",
	description: "Get dog photo",
	run: async (client, interaction) => {
		
		const dogApiResponse: DogApiResponse = (
			await axios.get("https://api.thedogapi.com/v1/images/search")
		).data;
		const randomDog = dogNames[Math.floor(Math.random() * dogNames.length)];
		const Embed = new EmbedBuilder()
			.setColor(client.env.BOT_COLOR)
			.setTitle(randomDog)
			.setImage(dogApiResponse[0].url);

		return await interaction.reply({ embeds: [Embed] });
	}
};
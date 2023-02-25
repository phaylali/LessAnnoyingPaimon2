import {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder
} from "discord.js";

export const choices = ["head", "tail"];

export const flipCoin = (choices: string[]) => {
	return choices[Math.floor(Math.random() * choices.length)];
};

export class CoinEmbedBuilder {
	constructor(
		winner: string,
		choice: string,
		choices: string[]	) {
		return new EmbedBuilder()
			.setDescription(`${winner == choices[0] ? choices[0] : choices[1]} won!, you chose ${choice}`)
			.setColor(winner.toLocaleLowerCase() == choice? "Green":"Red")
			.setTitle(
				`${winner.toLocaleLowerCase() == choice ? "GG Copium" : "You Fucking Loser!"}`
			).setImage(winner.toLocaleLowerCase() === "head" ? "https://i.imgur.com/onRIi79.jpeg":"https://i.imgur.com/4PPZu9Z.jpeg");
	}
}

export class CoinButtonsRowBuilder extends ActionRowBuilder<ButtonBuilder> {
	constructor(choices: string[]) {
		super();

		this.addComponents([
			new ButtonBuilder()
				.setCustomId(`flip_coin_${choices[0]}`)
				.setLabel(`Select ${choices[0]}`)
				.setStyle(ButtonStyle.Primary),
			new ButtonBuilder()
				.setCustomId(`flip_coin_${choices[1]}`)
				.setLabel(`Select ${choices[1]}`)
				.setStyle(ButtonStyle.Primary)
		]);
	}
}

import { ApplicationCommandDataResolvable, TextChannel } from "discord.js";
import { Event } from "../Interfaces";
import { registerFont } from "canvas";
import { join } from "path";



export const event: Event = {
	name: "ready",
	run:  (client) => {
		client.user.setActivity("Genshin Impact on Crack");

		const commands = client.application?.commands;

		client.commands.forEach((command) => {
			commands?.create(command as ApplicationCommandDataResolvable);
		});

		console.log(`${client.user.tag} is up!`);


		const channelId = process.env.ONLINE;

		function fontFile(name: string) {
			return join(__dirname, "/../../fonts/", name);
		}

		registerFont(fontFile("OmniversifyGenshin.ttf"), { family: "OmniversifyGenshinImpact" });
		const channel = client.channels.cache.get(channelId);
		(channel as TextChannel).send({ content: "I'M BACK",
		});

	}
};

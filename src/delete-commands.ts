import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();
const tokenz=process.env.TOKEN;
const clientId = process.env.CLIENT;
const rest = new REST({ version: "10" }).setToken(tokenz as string);

// delete everything
rest.put(Routes.applicationCommands(clientId as string), { body: [] })
	.then(() => console.log("Successfully deleted all application commands."))
	.catch(console.error);
// edit the name and delete 1 command
/*rest.delete(Routes.applicationCommand(clientId, 'commandId'))
	.then(() => console.log('Successfully deleted application command'))
	.catch(console.error);*/

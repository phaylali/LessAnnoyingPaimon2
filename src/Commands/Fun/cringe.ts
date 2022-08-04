
import { Command } from "../../Interfaces";
import {
    ColorResolvable,
    EmbedBuilder
} from "discord.js";
import { existsSync , readdirSync } from 'fs';

const dir = '../../Media/Cringe'
const files = readdirSync(dir)

for (const file of files) {
  console.log(file)
}

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
        .setTitle("Cringe Help").setDescription("leave blank for the mexican version")
        for (const file of files) {
            Embed.addFields({name:`${file.replace('.webm','')}`, value:`Oh No Cringe ${file} Version`})
          }

        

        if (existsSync(`../../Media/Cringe/${text}.webm`)) {
            return await interaction.reply({ files: [`../../Media/Cringe/${text}.webm`] });
        }

        else return await interaction.reply({ files: [`../../Media/Cringe/mexico.webm`] });
    }
};
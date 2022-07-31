import { Event } from "../Interfaces";
import { GuildMember, AttachmentBuilder, TextChannel } from "discord.js";
import { createCanvas, loadImage } from 'canvas'

const achievement = "https://i.imgur.com/ddv7j8o.png"
const dim = {
    height: 348,
    width: 1472,
    margin: 20
    }
const generateImage = async (member: GuildMember) => {
    let username = member.user.username
    const canvas = createCanvas(dim.width,dim.height)
    const ctx = canvas.getContext("2d")
    const backimg = await loadImage(achievement)
    ctx.drawImage(backimg,0,0)
    const avimg = await loadImage(member.user.displayAvatarURL({ size: 512, extension:'png'}))
    ctx.drawImage(avimg, 195, 130,100,100)
    ctx.fillStyle = "black"
    ctx.font = '46pt OmniversifyFonts'
    ctx.fillText(username, 890, 255);
    const attachment  = new AttachmentBuilder(canvas.toBuffer(),)
return attachment

}
const channelId= process.env.WELCOME;
const rolesChannel=process.env.ROLES;
const rulesChannel=process.env.RULES;

export const event: Event = {
	name: "guildMemberAdd",
	run: async (client, member: GuildMember) => {
		console.log("someone has entered the shit");
		const img = await generateImage(member);
		const message = `Welcome Noob <@${member.id}> to The Cursed Lands of Teyvat, Pick Your ${member.guild.channels.cache.get(rolesChannel).toString()}, Remember to Read The ${member.guild.channels.cache.get(rulesChannel).toString()}`;
		const channel = member.guild.channels.cache.get(channelId);
		(channel as TextChannel).send({content: message, files: [img]});
	
	}
};
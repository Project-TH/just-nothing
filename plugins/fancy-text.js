const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const got = require("got");
const need = "*Enter Words!*"
const DC = "It generates fancy texts."

// Config
const Config = require('../config');

//Language
const Language = require('../language');
const Lang = Language.getString('AsenaPlug');

if (Config.WORKTYPE == 'private') {
    
	Asena.addCommand({pattern: 'fancy ?(.*)', fromMe: true, desc: DC,  deleteCommand: false}, async (message, match) => {
	if (match[1] === '') return await message.sendMessage(need);
        const url = `https://${Config.HLOCK}.herokuapp.com/api/font?teks=${match[1]}`;
        const url1 = `https://${Config.HLOCK}.herokuapp.com/api/font2?teks=${match[1]}`;
        try {
            const response = await got(url);
            const response1 = await got(url1);

            const json = JSON.parse(response.body);
            const json1 = JSON.parse(response1.body);

            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, json.result + '\n\n' + json1.result , MessageType.text, {quoted:message.data});
        } catch {
            return await message.sendMessage(need);
        }
    });
}

else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'fancy ?(.*)', fromMe: false, desc: DC}, async (message, match) => {
        if (match[1] === '') return await message.sendMessage(need);
        const url = `https://${Config.HLOCK}.herokuapp.com/api/font?teks=${match[1]}`;
        const url1 = `https://${Config.HLOCK}.herokuapp.com/api/font2?teks=${match[1]}`;
        try {
            const response = await got(url);
            const response1 = await got(url1);

            const json = JSON.parse(response.body);
            const json1 = JSON.parse(response1.body);

            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, json.result + '\n\n' + json1.result , MessageType.text, {quoted:message.data});
        } catch {
            return await message.sendMessage(need);
        }
    });
}

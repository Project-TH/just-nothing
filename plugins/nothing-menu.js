const Amazon = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })
const Language = require('../language');
const Lang = Language.getString('amazone');
const tk = Config.WORKTYPE == 'public' ? false : true

Amazon.addCommand({pattern: 'jarvis', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    var respoimage = await axios.get(`${Config.MENU_LOGO}`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `        

╭─「 *Command Panel* 」
│
│ 🌼 *Hey,* `+wish+`
│ 👤 *Name:* `+Config.BOT_NAME+`
│ ⌚ *Time:* `+time+`
╰ 🛡️ *Work Type:* `+Config.WORKTYPE+`

╭─「 *Bot Commands* 」
│
│ .alive
│ .bot
│ .admin
│ .version
│ .update
│ .update now
╰ .restart

╭─「 *Sticker Commands* 」
│
│ .attp [TEXT]
│ .sticker
│ .photo
╰ .listp

 ╭────────────●●►
 *│🧞‍♀️TEXT TO IMG*
 │   ───────
 │► .textimg 
 │► .prologo (unlimited logos)
 │► .prologo your Text
 │► .moretext 
 │► .ffpack [Free fire Logo pack]
 │► .ttp [ text ]
 │► .dttp [ text ]
 │► .trumpsay [ text ]
 │► .changesay [ text ]
 │► .animesay [ text ]
 │► .meme 
 │► .listp
 │► .mmpack
 ╰────────────●●►

 ╭────────────●●►
 *│💰DOWNLOAD COMMANDS*
 │      ────────
 │► .video [ Yt Link]
 │►.mp4    [Name]
 │►.audio  [yt link ]
 │► .download  [status download]
 │►.song  [ song name ]
 │►.dcsong [ song name ]
 │►.img [ name ]
 │►.fb  link ]
 │►.tiktok [ link ]
 │►.igv  [ Insta Video ]
 │►.igp [ Insta Photo ]
 │►.twt [twitter video Link]
 │►.mediafire
 ╰────────────●●►

 ╭────────────●●►
 *│🔍SEARCH COMMANDS*
 │     ──────────
 │► .yt [ topic ]
 │► .wiki [text ]
 │► .movie [ movie name ]
 │► .github [ name ]
 │► .show [tv series ]
 │► .weather [ city ]
 │
 ╰────────────●●►

 ╭────────────●●►
 *│🛸GROUP COMMANDS*
 │  ─────────
 │► .rename [change Group name]
 │► .rules    [check rules]
 │► .info [check details]
 │► .tagadmin 
 │►.antispm
 │►.clear
 │► .report
 │► .tagall  
 │► .ban [ for owner ]
 │► .add [ for owner ]
 │► .promote [ for owner ]
 │► .demote [ for owner ]
 │► .invite [ for owner ]
 │► .leave [ for owner ]
 │►.welcome 
 │►.goodbye
 ╰───────────●●►

 ╭───────────●●►
 *│🎨MEDIA TOOLS*
 │      ───────
 │► .axmedia [25+ tools]
 │► .tblend
 │►.ocr [Read Text]
 │►.mp3 [Video To mp3]
 │► .ffmpeg [fade in:0:30 ]
 │► .removebg
 │► .spdf [convent site to pdf]
 │► .voicy
 │► .unvoice [mp3 to voice]
 ╰───────────●●►

 ╭───────────●●►
 *│⚡MORE COMMAND*
 │  ────────
 │►.scan
 │►.brdmore
 │►.rdmore
 │►.tts
 │►.gm
 │►.gn
 │►.ftext
 │► .wallpaper
 │► .anime
 │► .listanim
 │► .device
 │► .currency
 │► .ss [link ]
 │► .afk [ bot is online ]
 │► .short { link ]
 │► .wame [ get user link ]
 │► .currency
 │► .trt { en si }
 │► .notes
 │► .save
 │► .deleteNotes
 │► .covid  [ covid LK]
 ╰────────────●●►
 
`}) 

 }));

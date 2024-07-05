const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254702713600";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_20_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc3LFxuICAgICAgICA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPUVQwMmV6SGdPVTdTMDM1U3A4YVRIdUZFWGZzMW55OWczTGxUTFFEUnpvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0REtDMU9tYlRwU1VGblV3ZHI3RzhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjczODc2MWZjLTc0NTgtNDU4Yy1iNmYwLWRjM2VmNzQwMTZhNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAyMDMsXG4gICAgICA3LFxuICAgICAgMzQsXG4gICAgICAxMCxcbiAgICAgIDE4MyxcbiAgICAgIDE5NixcbiAgICAgIDE1NCxcbiAgICAgIDgyLFxuICAgICAgMjQ5LFxuICAgICAgMjExLFxuICAgICAgNDEsXG4gICAgICAxNDgsXG4gICAgICAxNjksXG4gICAgICA3MCxcbiAgICAgIDE5NSxcbiAgICAgIDQ5LFxuICAgICAgMTg3LFxuICAgICAgMjEwLFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDE3NixcbiAgICAgIDEzLFxuICAgICAgMjksXG4gICAgICAyMSxcbiAgICAgIDIyNyxcbiAgICAgIDM2LFxuICAgICAgMTE0LFxuICAgICAgMTg3LFxuICAgICAgNTgsXG4gICAgICAxMDYsXG4gICAgICAxMjksXG4gICAgICAyMTksXG4gICAgICAxNDYsXG4gICAgICAxMzEsXG4gICAgICAyNDcsXG4gICAgICA3OSxcbiAgICAgIDQ1LFxuICAgICAgMTUwLFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkEyR0xRQjhKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTM4OTQ0NTY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxvdmVseW5lXCIsXG4gICAgXCJsaWRcIjogXCIxNzUwNjcyNzk0NDYwMzg6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZlhrY2NFRUtxNm9MUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldreFI0R0RiQjFTNml0dXh0RzRmWkx3aTRLa0NNTDRibFg3czJuUVBjM2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT3VHV3hpTTNMUk1Ddi9iTE1qSG5hcGNDb1ZuSEphdW1FNFBocmxNbUZRSVlKMUk2TzhEQzBRMGtoV1gyN0E5OFlMMm1LbSswY0kwQXBXT042ZVlNQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYlpWVFpXMmh6S0lZYVp1bUZtUXFhcHBoaDhjRk1ETEtPUS8yUExiaW11TmZ2a0UzOXRubW9LdTBGKy9kSlhQVnFjN1dJbHcySDd2eU02V3JlZTUyZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzkzODk0NDU2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTk2Mzk5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

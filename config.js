const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "video" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="hitdeveloper2023@gmail.com"
global.location="Port-au-Prince, Haiti."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github=process.env.GITHUB|| "https://github.com/Atiqkhan332211/HITDEV-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDAkV9FHWqAMMHvb40b";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDAkV9FHWqAMMHvb40b" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/09bb04e12ce3828e9cd2e.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "+923409068757" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "+923409068757";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923409068757";

 


//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50944727644,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://hitdev-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0d4ZitGSUMvSjRRZERBMnFHVnllbDJBdE01K0ZjdkFRZXUyb05HRDIzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDY1MEdRbjBUZG9COWVpeGFHVmpoVmY1OEZ3dUlwVk1oUlh3YTlkcHJCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SGVqbjluVkJHUnU3V2lvVHdtUzhsTzFIVEMwWkVnVDhKRkswTkJWRTJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTW9rTDFmNE9yaDVIN0cycmZ5TlhqV0lJTTIrTU41dGt4ZTdPQ0FvclhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1LU2pvblhhMnR2OHcxMUhJQUhLUmtEaDNPaVBwUFNzb1NWSFNOSnV1RnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ6cnlvSCsyNS9reE9OSzlhc3Job0dXWXM4UHUxbE5XaHpvVVFnQzRaU1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0svdllwckJjRGQ3R2duNHpqK3Z2T0RRaktyaWFhMklaZG5lK0VRTmNGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTJKQm1IRXRMZW1kZ2ptaGlrNExqbHNBU0FnbHROT3RqNmZIOEVYOXZEZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRoeGludGRWbFNvQUpWU3dTK1h2c3JQT21sOEY3bk1STzhlaERDeTJPSnJSM3czWHN0dy9LY3pYc1RXc212R3Q5eEZFLzZTZ0pBMzlsMWJodVk4YmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJhUXU4RlNVN1orM2hsZ2xUVTUrSVRZQ1JFeHozbGpCMzNNNEh5Q1cwRjBNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHOTdBc000bVJUcXNKalJUdE0tdG5RIiwicGhvbmVJZCI6IjUzYmZlODhlLWM1ODktNDdlNy1hM2RlLTU0YzkzNjZhYzQ1ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2K1pWZGZkQkdxcHdOUXUvdGpuTnVNSU5tTFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3VjY0pSMW1neVQ0ZGVZWUpZekk0bDl2Ykk0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNMSkpaWjM2IiwibWUiOnsiaWQiOiI5MjMwMzA2NzMzMzY6NTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xiZXpva0NFSTYwZ2JrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxEVnB6TDhwd2JnVFlSQ3pPLzR0bkJkOE9UVlN4YlJhM1RjRDViK0doa289IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhsNmZVd0FBcHdKUnFncXAyTFh2enZIdnAvUFBwNDRJNTlpZmVjYjlTWFZRN2oxMGdJTk1Ca3VsSGZpR2ZFb1UwUlR0cWplaUlza3ZuNWI0MktaK0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkejZwZlZkbWU5KzBkYzhEZUJ2QW5aTWwvaE9ic2xSSVpuV0E0UEtVTE5XSTRoMnRNU2luOVVyUlRsRXpPczNnTDVLWXR1akV6Q1IweUdMcGJIQmlpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAzMDY3MzMzNjo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTdzFhY3kvS2NHNEUyRVFzenYrTFp3WGZEazFVc1cwV3QwM0ErVy9ob1pLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwMTczNDY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU03USJ9"
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "Atiqkhan332211-patch-1",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『© IBNSWATI 𝐈𝐓 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜɪᴛᴅᴇᴠ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "khanswati-MD",
  ownername:process.env.OWNER_NAME|| "It'x swati",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-90b3f81f-ad23-4861-8f87-e0edf3479972",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "malakkhan121",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "IBN-SWATI"  ).toUpperCase(),



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

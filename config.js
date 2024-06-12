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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349023040446";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_07_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAzLFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgODEsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICA1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg5LFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk2LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxLFxuICAgICAgICA1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBZTNoYlJSWVlra09Vak1heTZza29nVGNoOSs5Y09vVUI2UCt5ZmNxeGlNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpVmNvX2xPNVNsLWZBY1J3QjgxSUJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1ZGZkY2ExLTgyY2MtNGZmNS05ZGU0LWYzZDNlNzgwN2Q3ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDEwMCxcbiAgICAgIDIzNyxcbiAgICAgIDIzOCxcbiAgICAgIDIxMCxcbiAgICAgIDgyLFxuICAgICAgNDAsXG4gICAgICAyMDYsXG4gICAgICAxNTcsXG4gICAgICAyMTMsXG4gICAgICAxNTQsXG4gICAgICAxNTUsXG4gICAgICAxNDIsXG4gICAgICAxNTYsXG4gICAgICAxMTgsXG4gICAgICAyNTEsXG4gICAgICAyMzAsXG4gICAgICA0NyxcbiAgICAgIDgsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDk4LFxuICAgICAgMzksXG4gICAgICA2OCxcbiAgICAgIDYyLFxuICAgICAgNjksXG4gICAgICAzLFxuICAgICAgMTUwLFxuICAgICAgMTMxLFxuICAgICAgMjU0LFxuICAgICAgMjQ4LFxuICAgICAgMjAxLFxuICAgICAgMTcwLFxuICAgICAgMzQsXG4gICAgICAyMDAsXG4gICAgICA5MCxcbiAgICAgIDE4MCxcbiAgICAgIDgxLFxuICAgICAgNDAsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjlWSjZXQldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjMwNDA0NDY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIyMDQ2MzI3NjA3NTI3OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTURHN0tRSEVQRGpwN01HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSTm1WcHlDendVMVhwRVZvT3ZITDhpbWJoYXorOWVlM3JYWXM5aW9JRjFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjc4TlVpTGFxbktrZ3RMSEZ0VHRWREh4S3IybFY3NE0zcWFYTGJmdzMxbnFPaXJVN3N5eUJvQ0RPK0w4ZHVEdEEvRHFNSEtTb1ZsWnV5dzJmb2N2V0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlsWTR1eHBuQXNxZkg0bnpTUEYzZlpaUDFiV09BQ3hLTkYyTzNKQk8vL0c2MlJPUVlKZWxEWlhhS292V0NOb1lleERPREJvd21kVU5oN2YyUURvb2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjMwNDA0NDY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjE5MjUyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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

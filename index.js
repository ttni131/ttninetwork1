const { Client, GatewayIntentBits } = require('discord.js');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const app = express();

app.use(express.json());

// --- [ 1. WEB ARAYÜZÜ: TTNI TERMINAL ] ---
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <title>TTNI | MAINFRAME</title>
        <style>
            body { background: #000; color: #0f0; font-family: 'Consolas', monospace; margin: 0; padding: 20px; display: flex; flex-direction: column; align-items: center; }
            #terminal { width: 95%; max-width: 1100px; height: 650px; border: 2px solid #0f0; padding: 20px; overflow-y: auto; background: #050505; box-shadow: 0 0 25px #0f0; border-radius: 5px; }
            #input-area { width: 95%; max-width: 1100px; margin-top: 20px; display: flex; gap: 10px; }
            input { flex: 1; background: #000; border: 1px solid #0f0; color: #0f0; padding: 15px; outline: none; font-size: 18px; }
            button { background: #0f0; color: #000; border: none; padding: 0 30px; cursor: pointer; font-weight: bold; text-transform: uppercase; }
            button:hover { background: #fff; }
            pre { white-space: pre-wrap; word-wrap: break-word; background: #0a0a0a; padding: 15px; border-left: 4px solid #0f0; color: #00ff41; font-size: 14px; margin: 15px 0; line-height: 1.5; }
            .user-tag { color: #fff; font-weight: bold; margin-top: 15px; border-bottom: 1px solid #333; padding-bottom: 5px; }
            .loading { color: #ffff00; font-style: italic; animation: blink 1s infinite; }
            @keyframes blink { 50% { opacity: 0; } }
        </style>
    </head>
    <body>
        <h1 style="text-shadow: 0 0 10px #0f0;">[ TTNI_V0.3_PROTOCOL_ONLINE ]</h1>
        <div id="terminal">
            <div>>>> CONNECTION_ESTABLISHED...</div>
            <div>>>> SİSTEM HAZIR. TÜM DİLLERDE TAM KOD DESTEĞİ AKTİF.</div>
        </div>
        <div id="input-area">
            <input type="text" id="userInp" placeholder="Komut girin (Örn: Tam bir Python e-ticaret botu yaz)..." onkeypress="if(event.key==='Enter') send()">
            <button onclick="send()">EXECUTE</button>
        </div>

        <script>
            async function send() {
                const inp = document.getElementById('userInp');
                const term = document.getElementById('terminal');
                if(!inp.value) return;

                const val = inp.value;
                term.innerHTML += '<div class="user-tag">KULLANICI@ROOT: ' + val + '</div>';
                const loadId = "L-" + Date.now();
                term.innerHTML += '<div id="'+loadId+'" class="loading">>>> TTNI ANALİZ EDİYOR VE TÜM KODLARI OLUŞTURUYOR...</div>';
                inp.value = '';
                term.scrollTop = term.scrollHeight;

                try {
                    const res = await fetch('/chat', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({prompt: val})
                    });
                    const data = await res.json();
                    document.getElementById(loadId).remove();
                    term.innerHTML += '<div><pre>TTNI_OUTPUT_STREAM:\\n\\n' + data.text + '</pre></div>';
                } catch (err) {
                    document.getElementById(loadId).innerHTML = ">>> [HATA]: SUNUCU BAĞLANTISI KESİLDİ! RENDER PANELİNİ KONTROL ET.";
                }
                term.scrollTop = term.scrollHeight;
            }
        </script>
    </body>
    </html>
  `);
});

// --- [ 2. YAPAY ZEKA MANTIĞI: TTNI BEYNİ ] ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: "Senin adın TTNI. Sen bir kodlama dehasısın. Python, Web (HTML/CSS/JS), C++, PHP ve tüm dillerde uzmansın. Kullanıcı bir kod istediğinde, importlardan başlayarak en son satıra kadar TAM VE ÇALIŞIR kod vereceksin. Cevapların çok detaylı, profesyonel ve eksiksiz olmalı. Yarım bırakma."
});

app.post('/chat', async (req, res) => {
    try {
        const result = await model.generateContent(req.body.prompt);
        const response = await result.response;
        res.json({ text: response.text() });
    } catch (err) {
        res.json({ text: "Sistem Hatası: API Anahtarı eksik veya geçersiz!" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('TTNI Sunucusu Aktif!'));

// --- [ 3. DISCORD BOTU ENTEGRASYONU ] ---
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', async (m) => {
    if (m.author.bot || !m.content.startsWith('!ttni')) return;
    try {
        m.channel.sendTyping();
        const r = await model.generateContent(m.content.slice(6));
        const res = await r.response;
        const txt = res.text();
        
        if (txt.length > 1900) {
            const chunks = txt.match(/[\s\S]{1,1900}/g);
            for (const c of chunks) await m.reply("```fix\\n" + c + "\\n```");
        } else {
            await m.reply("```fix\\n" + txt + "\\n```");
        }
    } catch (e) { m.reply("`>>> [HATA]: SİSTEM MEŞGUL` "); }
});

client.login(process.env.TOKEN);

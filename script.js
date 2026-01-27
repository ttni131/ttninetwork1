html { scroll-behavior: smooth; } /* Sayfa içi kaymayı yumuşatır */

body {
    background: url('https://wallpaperaccess.com/full/1163458.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0; color: white; font-family: 'Trebuchet MS', sans-serif;
}

#snow { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
.snowflake { position: fixed; top: -10px; color: white; z-index: 1; animation: fall linear forwards; }

@keyframes fall { to { transform: translateY(105vh); } }

.portal-container { position: relative; z-index: 10; max-width: 900px; margin: 50px auto; padding: 0 20px; }
.header-logo { text-align: center; margin-bottom: 30px; }
.server-name { font-size: 4rem; text-shadow: 4px 4px #000; margin: 0; }
.server-name span { color: #f1c40f; }

.portal-menu {
    display: flex; justify-content: space-around; background: rgba(0, 0, 0, 0.9);
    border: 3px solid #f1c40f; border-radius: 12px; padding: 15px;
    position: sticky; top: 20px; z-index: 100; margin-bottom: 25px;
}

.menu-item { color: white; text-decoration: none; font-weight: bold; transition: 0.3s; }
.menu-item:hover { color: #f1c40f; }

.vote-btn { color: #2ecc71 !important; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }

.content-box { background: rgba(0, 0, 0, 0.85); border-radius: 15px; padding: 20px; text-align: center; }
.section-padding { padding: 60px 20px; }
.divider { border: 0; height: 1px; background: rgba(255,255,255,0.1); margin: 0 50px; }

.ip-box { background: #f1c40f; color: #000; padding: 15px 30px; font-size: 1.8rem; font-weight: 900; border-radius: 8px; cursor: pointer; margin: 20px 0; }

.game-grid, .staff-grid { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 30px; }
.game-card, .staff-card { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; width: 200px; border-bottom: 4px solid #f1c40f; }

.rank { font-size: 0.7rem; font-weight: bold; padding: 4px; border-radius: 4px; margin-bottom: 10px; }
.red { background: #e74c3c; } .orange { background: #e67e22; } .blue { background: #3498db; }

#toast { visibility: hidden; position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: #27ae60; padding: 12px 25px; border-radius: 5px; z-index: 1000; }
#toast.show { visibility: visible; animation: fadeInUp 0.5s; }
@keyframes fadeInUp { from { opacity: 0; } to { opacity: 1; } }

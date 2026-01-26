function copyIp() {
    const ip = "play.mardiummc.com";
    navigator.clipboard.writeText(ip).then(() => {
        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    });
}
export function shareGif(gifUrl) {
    // Verifica si el navegador es compatible con la API Web Share
    if (navigator.share) {
        navigator.share({
            title: "Compartir GIF",
            text: "¡Mira este GIF!",
            url: "https://media1.giphy.com/media/qjLvEolT7z3Gg/giphy.gif?cid=5f4a6604s6lsxu3jb4a9b2ohu9ge6a3nqltb5hvivdrtc20w&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        })
        .then(() => console.log('Compartido exitosamente.'))
        .catch((error) => console.error('Error al compartir:', error));
    } else {
        alert("Tu navegador no admite la función de compartir.");
    }
}
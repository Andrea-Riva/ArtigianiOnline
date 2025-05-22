// Gestisce la registrazione dell'utente in auth.html

const checkButton = document.getElementById("checkButtonArtigiano") // Checkbox per ruolo utente
const buttonRegistrazione = document.getElementById("buttonRegistrazione")  // Bottone di registrazione

// Verifica se l'utente in registrazione è un artigiano o un cliente
function isArtigiano() {
    if(checkButton.checked) {
        return "artigiano"; // Se il checkbox è selezionato, l'utente è un artigiano
    } else {
        return "cliente";   // Se il checkbox non è selezionato, l'utente è un cliente
    }
}

// Quando il bottone di registrazione viene premuto
buttonRegistrazione.addEventListener('click', async (e) => {
    e.preventDefault(); // Previene il comportamento di default del form

    // Recupera i dati dell'utente dal form
    const nome = document.getElementById('nome').value
    const cognome = document.getElementById('cognome').value
    const mail = document.getElementById('mail_registrazione').value
    const pwdInChiaro = document.getElementById('pwd_registrazione').value;
    // Critta la password client-side
    const password = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pwdInChiaro))
        .then(hash => Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join(''))

    // Crea l'oggetto utente
    console.log(isArtigiano())
    const utente = {
        nome: nome,
        cognome: cognome,
        mail: mail,
        pwd: password,
        ruolo_utente: isArtigiano()
    }

    console.log(JSON.stringify(utente))

    try {
        // Invia i dati al server
        const response = await fetch('http://localhost:3000/api/utenti', {  // Chiamata all'API
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(utente)
        });

        if (response.ok) {
            alert('Registrazione completata con successo!')
            window.location.href = 'index.html' // Reindirizza alla home
            // Memorizza l'utente usando localStorage e JWT
        } else {
            alert('Errore durante la registrazione')
        }
    } catch (error) {
        console.error('Errore:', error);
        alert('Errore di connessione al server')
    }
})
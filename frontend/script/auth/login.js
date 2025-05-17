// Gestisce il login dell'utente in auth.html

const buttonLogin = document.getElementById("buttonLogin")  // Bottone di login

// Quando il bottone di login viene premuto
buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault(); // Previene il comportamento di default del form

    // Recupera i dati di login dell'utente dal form
    const mail = document.getElementById('mail_login').value
    const pwdInChiaro = document.getElementById('pwd_login').value;
    // Critta la password per il confronto con il server
    const pwd = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pwdInChiaro))
        .then(hash => Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join(''))

    // Crea l'oggetto utente da mandare al body della request
    const utente_form = {
        pwd: pwd
    }

    try {
        // Invia la richiesta di login al server presso /api/utenti/login/:mail
        console.log('http://localhost:3000/api/utenti/login/' + mail)
        console.log(JSON.stringify(utente_form))
        const response = await fetch('http://localhost:3000/api/utenti/login/' + mail, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(utente_form)
        })
        if (response.ok) {
            alert('Login effettuato con successo!')
            window.location.href = 'index.html' // Reindirizza alla home
        } else if (response.status === 404) {
            // Pulisce i campi di input
            const mail = document.getElementById('mail_login')
            const pwd = document.getElementById('pwd_login')
            mail.value = ''
            pwd.value = ''
            alert('Login errato!')
        }

    } catch (error) {
        console.error('Errore:', error);
        alert('Errore di connessione al server')
    }
})
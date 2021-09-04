# Pokemon Trainer API

## Open Endpoints
Open endpoints do not require authentication.

### Pokemon Trainer Users `GET /trainers`
#### Sample Response
```json
[
  {
    "id": 1,
    "username": "dewaldels",
    "pokemon": []
  }
]
```

## Protected Endpoints

Protected endpoints require the Bearer Token Authorization header with the API key as value.

### Lost in Translation Users `POST /trainers`

#### Sample Code
```javascript
const apiURL = 'your-api-url-goes-here'
const apiKey = 'your-public-api-key-goes-here'

fetch(`${apiURL}/trainers`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: 'victor',
            pokemon: [] 
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not create new Trainer')
      }
      return response.json()
    })
    .then(newUser => {
      // newUser is the new trainer user with an id
    })
    .catch(error => {
    })
```

#### Sample response
```json
{
    "id": 2,
    "username": "victor",
    "pokemon": []
}
```
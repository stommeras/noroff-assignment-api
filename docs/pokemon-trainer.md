# Pokémon Trainer API

## Open Endpoints
Open endpoints do not require authentication.

### Pokémon Trainer Users `GET /trainers`
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

### Pokémon Trainer Users `POST /trainers`

Use the `POST` method to create a new Pokémon trainer in the API database.

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

### Pokémon Trainer Users `PATCH /trainers`
The `PATCH` method is used to update a single record

#### Sample Code
```javascript
const apiURL = 'your-api-url-goes-here'
const apiKey = 'your-public-api-key-goes-here'
const userId = 1 // Update user with id 1

fetch(`${apiURL}/trainers/${userId}`, {
        method: 'PATCH', // NB: Set method to PATCH
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Provide new Pokémon to add trainer with id 1
            pokemon: ['charizard', 'squirtle'] 
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not update trainer')
      }
      return response.json()
    })
    .then(updatedTrainer => {
      // updatedTrainer is the trainer user the Patched data
    })
    .catch(error => {
    })
```
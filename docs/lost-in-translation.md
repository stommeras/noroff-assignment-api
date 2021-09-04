# Lost In Translation

## Open Endpoints
Open endpoints do not require authentication.

### Lost In Translation Users `GET /translations`
#### Sample Response
```json
[
  {
    "id": 1,
    "username": "dewaldels",
    "translations": []
  }
]
```

## Protected Endpoints

Protected endpoints require the Bearer Token Authorization header with the API key as value.

### Trivia Users `POST /translations`

#### Sample Code
```javascript
const apiURL = 'your-api-url-goes-here'
const apiKey = 'your-public-api-key-goes-here'

fetch(`${apiURL}/trivia`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: 'mega-mind', 
            translations: [] 
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not create new Trivia user')
      }
      return response.json()
    })
    .then(newUser => {
      // newUser is the new trivia user with an id
    })
    .catch(error => {
    })
```

#### Sample response
```json
{
    "id": 2,
    "username": "mega-mind",
    "translations": []
}
```
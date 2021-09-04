# Noroff Assignment API

## Instructions
Follow the below instructions to get your API setup and ready for use.

1. Clone the repository
2. Run `npm install` in the root of the cloned repository
3. Ensure you have heroku installed [Heroku CLI Install Guide](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
4. Run the following commands:
   1. Remove the cloned repository: `git remote remove origin`
   2. Create a new Heroku App: `heroku create <choose-a-name-for-your-app>`
      1. e.g. `heroku create noroff-assignment-api`
      2. **Please note:** The name chosen must be unique on the `.herokuapp.com` domain
   3. Ensure all files are added to git `git add .`
   4. Commit all the files: `git commit -m "FEAT: Heroku"`
   5. Push the files to your heroku app: `git push heroku master`
5. The app will be automatically deployed and started.
6. Check the terminal for your API's Url.
7. Lastly, On the Heroku Dashboard, go to your application, find the settings tab and look for the Config Vars section
   1. Locate the "Reveal Config Vars" button and click it 
   ![img.png](./docs/assets/config-vars.png)
   2. Enter TWO config vars:
   3. NODE_ENV - production
   4. API_KEY - any randomly generated string (64 characters)
   ![img.png](./docs/assets/config-vars-values.png)


## Accessing Endpoints

Each API endpoint contains both open and protected endpoints. All `GET` endpoints are open. Any other method `POST`, `PUT`, `PATCH` and `DELETE` are protected with a Bearer Token Authorization header.

### Trivia Game API
[Trivia API Docs](./docs/trivia.md)

### Lost in Translation API
[Lost In Translation](./docs/lost-in-translation.md)

### Pokemon Trainer API
[Pokemon Trainer](./docs/lost-in-translation.md)


## Special thanks to Typicode for json-server

[Github: json-server](https://github.com/typicode/json-server)
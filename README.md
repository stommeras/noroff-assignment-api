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

## Accessing Endpoints

### Trivia Game API
[Trivia API Docs](./docs/trivia.md)

### Lost in Translation API
[Trivia API Docs](./docs/lost-in-translation.md)

### Pokemon Trainer API
[Trivia API Docs](./docs/lost-in-translation.md)


## Special thanks to Typicode for json-server

[Github: json-server](https://github.com/typicode/json-server)
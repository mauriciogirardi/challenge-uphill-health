<div align="center">
  <img src=".github/logo.svg">
</div>

### About Project

Develop a web-based GitHub dashboard to show the most popular GitHub users, the most active GitHub users and their popular repositories.

##### Project link in production

[Dash Github](https://challenge-uphill-health.vercel.app/)

##### To Do

- [x] I should show the 3 most popular github users - the ones created in the last month and have the most followers.
- [x] I should show each github user's image, id, total followers, and most starred project.
- [x] I Should redirect the user to the user's github page when clicking on **"Open Profile"**·
- [x] Devo mostrar os 3 usuários mais ativos - os criados no mês passado e ter mais repositórios.
- [x] I should show the most starred repositories created in the last year, sorted by total stars.
- [x] I should show the name, description, and total stars for each repository.
- [x] It should be possible to search users and repositories for a specific term.

##### Bonus Task

- [x] Deploy the application
- [x] Write a test for the 3 most popular github user resources.
- [x] Instead of redirecting the user to the github.com page, after clicking on "Open profile", it opens a new page with the user's details and his top 3 repositories.

##### Design

<div align="center">
  <img src=".github/Homepage.png" width="400px">
</div>

##### How to run this project

- how to generate a token on github

  - Login to your github account.
  - Access **Profile** > **Settings**
  - Access **Developer settings**
  - <img src=".github/pass1.png" width="500px">
  - add repo and user

    - <img src=".github/pass2.png" width="300px">
    - <img src=".github/pass3.png" width="300px">

  - click on the **Generate Token** button
  - copy token and add .env file

```bash
  # clone the project
  git clone https://github.com/mauriciogirardi/challenge-uphill-health.git
  # In the .env file add the value of the token generated on Github
  VITE_GITHUB_ACCESS_TOKEN=.....
  # Open the project
  cd challenge-uphill-health
  # Install
  npm i
  # Run
  npm run dev
  # Opens in browser
  http://localhost:5174/
```

---

Made with :heart: by [Mauricio Girardi](https://www.linkedin.com/in/mauricio-girardi)

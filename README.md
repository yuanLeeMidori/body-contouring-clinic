# Body-Contouring-Clinic

### Modify the repo

1. File an issue
2. Create a new branch `git checkout -b <branch name>`
3. Work on that new branch with your feature/bug fixing
4. Submit a pull request (please see the below PR rules)
5. Request for reviewers
6. Merge the pull request once there are 2 approvals

### PR rules

1. Naming convention, please put your issue number on the PR title.
(e.g. for a PR fixing issue #111, use "Fix: #111 <content of your title>" as your title name.)
2. If the PR is going to close the issue after merger, please use "Fixes: #111" in your description. This will automatically close your issue once the PR is merged. If the PR will not fix the issue and you don't want to close the issue, please don't use the `Fixes` keyword. However, please still mention the issue number in your description.

### Run the app on your machine:

#### required installation:
- nodejs
- npm

#### steps:
- `git clone`
- `cd` to `Body-Contouring-Clinic/body-contouring-clinic` directory
- `npm install`
- Front-end (port 3000) : `npm start` 
- Back-end  (port 3001) : `node ./servers/server`

Feel free to update any useful information on this readme!


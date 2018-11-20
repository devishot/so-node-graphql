## How to run

1. Run Watchman which build files after changes
2. Execute `npm start` for run server
3. Use GraphiQL Chrome extension for explore graphql endpoints

### Scripts:
1. `npm run-script logs`
    Display watchman logs where babel's compiling errors
2. `npm build` 
    Create production ready build


## GraphiQL

Examples:
1. query for client with client projects pagination
    > http://localhost:4000/graphql?query=query%20ClientProjects(%24id%3A%20ID!)%20%7B%0A%20%20client(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20timestamp%0A%20%20%20%20firstName%0A%20%20%20%20lastName%0A%20%20%20%20companyName%0A%20%20%20%20projects(first%3A%2010%2C%20after%3A%20%22%22)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20cursor%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20timestamp%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20pageInfo%20%7B%0A%20%20%20%20%20%20%20%20hasNextPage%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=ClientProjects&variables=%7B%0A%20%20%22id%22%3A%20%2200c3c715-9c9f-49be-b336-6d661f2bf561%22%0A%7D
2. mutate by adding ClientProjectType via ClientProjectInput
    > http://localhost:4000/graphql?query=mutation%20CreateProject(%24clientID%3A%20ID!%2C%20%24input%3A%20ProjectInput)%20%7B%0A%20%20addProject(clientID%3A%20%24clientID%2C%20input%3A%20%24input)%20%7B%0A%20%20%20%20id%0A%20%20%20%20timestamp%0A%20%20%20%20title%0A%20%20%20%20description%0A%20%20%7D%0A%7D%0A&operationName=CreateProject&variables=%7B%0A%20%20%22clientID%22%3A%20%2200c3c715-9c9f-49be-b336-6d661f2bf561%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22MAGA%22%2C%0A%20%20%20%20%22description%22%3A%20%22Make%20America%20Great%20Again%22%0A%20%20%7D%0A%7D


## Watchman

Watchman run triggers on changed files based on their file types.

Triggers:
1. Babel js and jsx files using `npm run-script build` command;
2. Copy css and sass files into dist without any change.

Install:
> $ brew update
> $ brew install watchman

Run:
> watchman watch-project .

Manually add every trigger:
> watchman -j < babelTrigger.json

> watchman -j < copyTrigger.json

Logs:
> cat /usr/local/var/run/watchman/`whoami`-state/log | tail -40

Instruction:
https://medium.com/@aoc/simple-watchman-setup-ab006e97fb1d
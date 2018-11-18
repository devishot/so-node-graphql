## How to run

1. Run Watchman which build files after changes
2. Execute `npm start` for run server
3. Use GraphiQL Chrome extension for explore graphql endpoints


## GraphiQL

Examples:
1. query for client with client projects pagination
> http://localhost:4000/graphql?query=query%20ClientProjects(%24id%3A%20ID!)%20%7B%0A%20%20client(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20timestamp%0A%20%20%20%20firstName%0A%20%20%20%20lastName%0A%20%20%20%20companyName%0A%20%20%20%20projects(first%3A%2010%2C%20after%3A%20%22%22)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20cursor%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20timestamp%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20pageInfo%20%7B%0A%20%20%20%20%20%20%20%20hasNextPage%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=ClientProjects&variables=%7B%0A%20%20%22id%22%3A%20%22B58CC80A-1BF5-4652-9559-97AC6C6545AD%22%0A%7D


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

(Check logs for compiling errors)

Instruction:
https://medium.com/@aoc/simple-watchman-setup-ab006e97fb1d
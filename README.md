## How to run

1. Run Watchman which build files after changes
2. Execute `npm start` for run server
3. Use GraphiQL Chrome extension for explore graphql endpoints


## GraphiQL

1. query for TimeRecord by ID
> http://localhost:4000/graphql?query=query%20TimeRecord(%24id%3A%20ID!)%20%7B%0A%20%20timeRecord(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20amount%0A%20%20%20%20timestamp%0A%20%20%20%20description%0A%20%20%7D%0A%7D%0A&operationName=TimeRecord&variables=%7B%0A%20%20%22id%22%3A%20%22B58CC80A-1BF5-4652-9559-97AC6C6545AD%22%0A%7D


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
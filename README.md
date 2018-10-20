## GraphiQL

query for TimeRecord by ID
> http://localhost:4000/graphql?query=query%20TimeRecord(%24id%3A%20String!)%20%7B%0A%20%20timeRecord(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20amount%0A%20%20%20%20timestamp%0A%20%20%20%20description%0A%20%20%7D%0A%7D%0A&operationName=TimeRecord&variables=%7B%0A%20%20%22id%22%3A%20%22B58CC80A-1BF5-4652-9559-97AC6C6545AD%22%0A%7D


## Watchman

Watchman run triggers on changed files based on their file types.

Triggers:
1. Babel js and jsx files into dist directory;
2. Copy css and sass files into dist without any change.


For run watchman:
> watchman watch-project .

Then manually add every trigger:
> watchman -j < babelTrigger.json

> watchman -j < copyTrigger.json


Logs:
> cat /usr/local/var/run/watchman/macbookpro-state/log | tail -40


Instruction:
https://medium.com/@aoc/simple-watchman-setup-ab006e97fb1d
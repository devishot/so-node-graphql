## Watchman

I need to do on file change based on file type:

1. Transpile js and jsx files into dist with babel.
2. Copy css and sass files into dist without change.

for Watchman is watching your project:
> watchman watch-project .

to create the triggers:
> watchman -j < babelTrigger.json
> watchman -j < copyTrigger.json

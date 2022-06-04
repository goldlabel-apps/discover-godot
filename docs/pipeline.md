> [Home](../README.md) 

# Pipeline
This is all about structuring the project to make it easy to implement tests or Continuous Integration with Bitbucket pipelines, circle CI or Github Actions. Prefereable GitHub actions because I already pay github.

## Git Strategy
branches: master, develop, epic/, feature/, fix/

## Web App
The distribution runs on node. Or anywhere. It's a web app; really just a chunk of HTML and some static assets (javascript & css)

## Firebase
functions are used to create a mock API endpoint responding with JSON. It's also used to host the `./dist` directory

_vs 1.0.8_

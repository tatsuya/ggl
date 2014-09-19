# ggl

> A command-line based google search client.

**ggl** is a simple command-line web search client for [Google Custom Search](https://developers.google.com/custom-search/json-api/v1/overview), written with [node.js](http://nodejs.org/).

## Installation

Install from [NPM](https://www.npmjs.org/), the Node.js package manager:

```sh
npm install -g ggl
```

## Usage

```
  ggl: A command-line based google search client.

  Usage:

     ggl help                  Print help
     ggl search [keywords..]   Search on google

  Examples:

     ggl search iphone 6

  Environment variables:

    GOOGLE_API_KEY                   Specify your API key
    GOOGLE_CUSTOM_SEARCH_ENGINE_ID   Specify your custom search engine ID
```

## Configuration

It is strongly recommended to use your own [Goole API Key](https://console.developers.google.com) and [Google Custom Search Engine ID](https://www.google.com/cse/create/new) because default key and id are open for everyone and these key have certain limitation of number of request allowed in one day.

To set your own keys use the following environment variables.

```
$ export GOOGLE_API_KEY="INSERT YOUR API KEY HERE"
$ export GOOGLE_CUSTOM_SEARCH_ENGINE_ID="INSERT YOUR CUSTOM SEARCH ENGINE ID HERE"
```

## License

MIT


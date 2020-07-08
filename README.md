# web-scraper

Node.js web scraper for last 12 ads from imoti.bg

## Author

| [<img src="https://avatars1.githubusercontent.com/u/31741368?s=460&u=f4836b9d862e76e52d9e9be14668d293e3b7d84e&v=4" alt="Zarko Boyadzhiev Image" width="120" height="120">](https://avatars1.githubusercontent.com/u/31741368?s=460&u=f4836b9d862e76e52d9e9be14668d293e3b7d84e&v=4) |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zarko Boyadzhiev                                                                                                                                                                                                                                                                   |

## Available Scripts

### npm install

Install all necessary dependencies

### node server

Runs file server.js and starts local server on localhost:8080.<br />
Make post request to localhost:8080 and you will get last 12 ads as the interface:<br />

&nbsp;{<br />
&nbsp;&nbsp;&nbsp;name: string,<br />
&nbsp;&nbsp;&nbsp;squareMeters: string,<br />
&nbsp;&nbsp;&nbsp;price: string,<br />
&nbsp;&nbsp;&nbsp;location: string<br />
&nbsp;}[]<br />

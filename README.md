# Planetarium (NASA API)

![screenshothome](https://raw.githubusercontent.com/Patrick564/static-files/main/screenshots/home.png)
![screenshotapod](https://raw.githubusercontent.com/Patrick564/static-files/main/screenshots/apod.png)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

### Clone the repository

```bash
# Using git
$ git clone https://github.com/Patrick564/planetarium-nasa-api.git

# Using GitHub CLI
$ gh repo clone Patrick564/planetarium-nasa-api
```

### Install dependences

```bash
# Go into the repository
$ cd planetarium-nasa-api

# Install dependencies with npm
$ npm install

# Or use Pnpm
$ pnpm install
```

### Create a .env file

Create the file with a REACT_APP_NASA_API_KEY='put_here_your_key'

### Run the app

```bash
# With npm
$ npm start

# Or pnpm
$ pnpm start
```

## Or use Docker

### Pull the image

```bash
$ docker pull patrick794/planetarium-nasa-api
```

### And run it

```bash
# Use -e to set your key and use the image name and tag of docker images
$ docker run -e REACT_APP_NASA_API_KEY='your_key' --name planetarium -d -p 3000:3000 image_name:tag
```

Then go to localhost:3000 in your browser.

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Vercel](https://vercel.com/)

## Related

[Planetarium](planetarium-nasa-api.vercel.app) - Vercel upload

## License

MIT


# unicorn-rentals-mfe-homepage

## Getting Started
To get you started you can simply clone the `unicorn-rentals-mfe-homepage` repository and install the dependencies:

### Prerequisites
You need git to clone the `unicorn-rentals-mfe-homepage` repository. You can get git from [here](https://github.com/tim0git/unicorn-rentals-mfe-homepage).

We also use a number of Node.js tools to initialize and test `unicorn-rentals-mfe-homepage` application.

You must have Node.js v16.x or higher and its package manager (npm) installed. You can get them from [here](https://nodejs.org/en/).

### Clone Repo
Clone the `unicorn-rentals-mfe-homepage` repository using git:

```bash
git clone https://github.com/tim0git/unicorn-rentals-mfe-homepage.git
cd unicorn-rentals-mfe-homepage
```

If you just want to start a new project without the `unicorn-rentals-mfe-homepage` commit history then you can do:

```bash
git clone --depth=1 https://github.com/tim0git/unicorn-rentals-mfe-homepage.git
cd unicorn-rentals-mfe-homepage
```
*The `depth=1` tells git to only pull down one commit worth of historical data.*

Those who use nvm (node version manager) can use the following command to install the correct version of Node.js and npm:

```bash
nvm install
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm dev
```

Now browse to the app at `http://localhost:3000`.

## Directory Layout

``` bash
├── Dockerfile
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx
│   ├── api
│   │  └── health.ts
│   └── index.tsx
├── public
│   ├── amazon-web-services-logo.svg
│   ├── favicon.ico
│   └── unicorn-rentals.svg
├── styles
│   ├── Home.module.css
│   └── globals.css
└── tsconfig.json
```





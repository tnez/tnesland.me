# My Personal Website

This is my personal website which serves as access point for:

- my blog posts
- my resume
- a basic about me
- projects page

## Development

### Install Dependencies

`npm ci`

### Run Development Server

`npm run dev`

### Test Production Build

Site is built on deploy and exists in a fundamentally different manner than when running in development mode. When deploying substantial changes it is a good idea to build and serve locally to make sure everything is still functioning as expected.

Build with:

`npm run build`

Then serve with:

`npm run start`

### Deploy

Site is built and deployed on every commit to master via netlify: https://www.netlify.com/

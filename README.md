# Dream Renewables Frontend

## Contents

- [About This Project](#about-this-project)
- [Setup](#setup)
  - [Requirements](#requirements)
    - [Installing project dependencies](#installing-project-dependencies)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
- [Continuous Integration, Development and Deployment](#continuous-integration-development-and-deployment)
  - [CI/CD](#cicd)
- [Further documentation](#further-documentation)
  - [Related Repositories](#related-repositories)

## About This Project

This is the Repo/Code for the [Dream Renewables Frontend](https://dream-renewables-frontend-87a62514598b.herokuapp.com/). This application primarily utilises the following technologies:

- [React](https://react.dev/)
- [Github Action](https://docs.github.com/en/actions)
- [Heroku Deploy with Git](https://devcenter.heroku.com/articles/git)

## Setup

### Requirements

This project requires the following pre-requisites:

1. [NodeJs](https://nodejs.org/en)

#### Installing project dependencies

1. Clone the repo to your chosen directory
2. Install dependencies `npm i`

## Usage

### Running the application

To run the application you must ensure you've followed the setup steps

- To run the app via Node:
  - Ensure you're in the root directory
  - spin up the application: `npm run dev`
  - To run tests `npm run test`

## Continuous Integration, Development and Deployment

### CI/CD

This project uses a combination of technologies for Ci/Cd currently these are [Github Actions](https://docs.github.com/en/actions) and [Heroku Deploy with Git](https://devcenter.heroku.com/articles/git). In order to merge a branch to main The Github action Build and Test must pass. Once merged to main a hook in Heroku will catch and deploy the application.

## Further documentation

### Related Repositories

| Name                                                                                      | Description                                                   |
| :---------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| [Dream Renewables Cms](https://github.com/OAMPC/DreamRenewablesCms)                       | The Content Management System for this web application        |
| [Dream Renewables Infrastructure](https://github.com/OAMPC/DreamRenewablesInfrastructure) | The Terraform for this web applications required architecture |

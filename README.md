# React Test Task

## Introduction
This simple UI is just for testing the Students' section's CRUD operations.


## Installing and Running the app

### Steps to clone the repository

```
git clone https://github.com/devstackr55/React-UI-Task.git
cd React-UI-Task

```

### Steps to install packages
In the project directory's terminal run below command to install all the required packages
```
yarn
```
### Step to setup env variables

```
Create a .env file in the project directory. In this file copy over the contents as is from the .env.example file to have the necessary environment variables set
```

### Step to start the app

In the project directory terminal run the below command
```
yarn run start
```

## Assumptions and Considerations

* I did not use any libraries like react-virtualized, for the list instead tried to implement my own version to fetch data on the fly.

* Also since the API provided was paginated with fixed number of items per request I made list to have a max-height which is equal to the page size returned by the API. To have everything responsive would've meant to add calculation of the height of individual list item and the total available area to identify how many items can be displayed and then fetch as many pages from the API. This would have two issues:
    * We would be fetching more no. of records (due to page size being fixed) than required.
    * Frequent resizing of the window would've led to too much calculation and way too many API calls, which would not have been ideal.

* Also the use case did not exactly warrant the use of a redux-saga implementation. Or else I would have added the necessary actions and reducers for redux and workers and watcher for saga for API calls. Instead I put in it using React Hooks.

* Another improvement could've been to add UI libraries like Material-UI or Semantic-UI for more versatile components and look and feel.
# Getting started with Search Flights from Origin

## Introduction 
This repository contains code to search flights from the Origin via Amadeus Self-Service flight Inspiration API.

![image](https://github.com/Poonam-Vijaywargiya/Inspiration-search-API/blob/main/Assets/HomeScreen.png)
## Features: 
1) Home screen to enter Origin and Max Price and click button to Search Destinations.
2) All the destinations will be listed in the search page which are expendable and collapsible list items.
3) Upon expanding the list item, will show further information about the destination duration and pricing. 
4) The Auth token is maintained till expiry(30 mins) and once expired will only be fetched in the respective call. 
5) Error will be displayed in the page if we get any error from the API(for now the msg is same as provide by API).
6) Check Country code button opens a dialog which shows the list of countries and their codes based on the current Origin.
7) Currency will also be displayed once the Search is done. 

**Live** : https://angular-ivy-bzw31p.stackblitz.io

#### `npm i`

This command will install all the dependencies in local.

#### `npm start`

Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

### __TODO:__
- Pagination in search page.
- Fetch code for countries on page load to help user with the search, currenty it shows only the countries based on the search.
- UI: Creating new page with for each list item instead of expandable list item if need to check indepth details.

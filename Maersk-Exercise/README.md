# Getting started with Search Flights from Origin

## Introduction 
This repository contains code to search flights from the origin via amadeus Self-Service flight Inspiration API.

## Features: 
Home screen to enter Origin and Max Price and click button to Search Destinations.
All the destinations will be listed in the search page which are expendable and collapsible list items.
Upon expanding the list item, will show further information about the destination duration and pricing. 
The Auth token is maintained till expiry(30 mins) and once expired will only be fetched in the respective call. 
Error will be displayed in the page if we get any error from the API(for now the msg is same as provide by API).
Check Country code button opens a dialog which shows the list of countries and their codes based on the current Origin.
Currency will also be displayed once the Search is done. 

**Live** : https://angular-ivy-bzw31p.stackblitz.io

#### `npm i`

This command will install all the dependencies in local.

#### `npm start`

Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

### __TODO:__
- Pagination in search page.
- Fetch code for countries on page load to help user with the search, currenty it shows only the countries based on the search.
- UI: Creating new page with for each list item instead of expandable list item if need to check indepth details.
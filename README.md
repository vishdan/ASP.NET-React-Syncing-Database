# ASP.NET React Syncing Databases
 
**Build**  ``dotnet build``

**Run**    ``dotnet run``


## Problem Description

### Introduction
We have our online environment, from now on referred to as “the platform”, which displays data that is captured and processed (a “capture”) by a local machine, from now on referred to as “the scanner”. Both the platform and the scanner run the exact same code, and are only separable by the hostname (scanner.sewermapper.eu and sewermapper.eu). Both have to be in sync for the best user experience. 
### Detailed description 
 For visuals, see sewermapper.eu with demo credentials The problem we face now is that, when a capture is taken and later on gets processed (automatically), we need to manually transfer all files to the platform (which is a problem for later on), but also our data, stored in a MySQL database, needs to be transferred. Now it’s a simple API endpoint that loops through the uploaded files, and tries to get the right info out of it. The biggest problem with this approach is that sometimes the file is altered, or the data is altered, and then the local data is not the same as the data online. The database stores capture data, such as the name, date, location, user, …  
### Challenge 
 Your job is to find a performant yet creative and especially secure way to get the MySQL data from the scanner (in this case your very own local machine, running the codebase) to the development server. You can do this by implementing a button “sync” on the homescreen. An example of a nice extra could be automating this syncing, but do keep in mind that the scanner doesn’t have Internet access all the time (consider the scanner to be like a laptop, running Ubuntu). 

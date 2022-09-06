# FiresideChat

## Project Description

Firechat is a peer-to-peer social-media app where you can add friends and talk with them over the XMTP protocol. The user logs in with their metamask account and is able to communicate with any other user using the app as long as they know their public address. In addition, users can browse different servers as long as they have the poap that states they are part of that community.

## How it's Made
This project uses the XMTP protocol for one on one messaging. The protocol was useful for this project because it enables native encryption and data storage for all the messages. In addition, it is completely gasses because the messaging is done off-chain, which saves on costs.

However, in order to do group chats in servers, Tableland was used to store all the server data. There will be a main table for the entire app that stores all the accounts that were created. When a user first logs into the app, they will initialize an empty table that will store all the servers they are part of. The reference to this table will be added to the main table, which stores all the user dat for the app. Once a user creates a server, a brand new table is created and its reference is added to the users personal table. The server also has separate channels, each of which is its own table. Within those table channels, we store the individual messages. Since tableland has a 1kb limit on data storage, ipfs is used for storage.

The owner of a server can create a poap collection. This poap can be distributed to users that went to a certain event. Users that own the poap would unlock write permissions to the tableland table for that server.

<img width="1680" alt="Screen Shot 2022-07-23 at 6 05 36 PM" src="https://user-images.githubusercontent.com/102403069/188552625-0253b53b-b27d-40cc-a6e6-df07a3507504.png">

<img width="1680" alt="Screen Shot 2022-07-23 at 6 06 49 PM" src="https://user-images.githubusercontent.com/102403069/188552616-faab5c73-75c8-49af-a41f-5cb3f1c506fd.png">

# Data Structure per table:
Dynamic -> changes frequently
Static -> rarely changes
## Competitions: (Static -> Postgre)
  - Competition ID = Competition Code

  - Name
  - Type
  - Sub-Type

  - Country ID
  - Country Name

  - Domestic league code

  - Confederation (i.e. Europe)
  - Url (Transfermarkt website)

## Clubs: (Static -> Postgre)
  - Club Id
  - Club Code

  - Name

  - Domestic Competition Id

  - Total Market Value (empty)
  - Squad Size
  - Average Age
  - Foreigners Number
  - Foreigners Percentage
  - National team players
  - Stadium name
  - Stadium seats
  - Net transfer record ???
  - Coach name (empty)
  - Last season (year)
  - Url (Transfermarkt website)

## Players: (Static -> Postgre)
  - Player Id

  - First name
  - Last name
  - Name
  - Last season (year)

  - Current club id

  - Player code
  - Country of birth
  - City of birth
  - Date of birth
  - Position
  - Sub Position
  - Foot (some empty)
  - Height in cm (some empty)
  - Market value in eur (Some empty)
  - Highest market value in eur (some empty)
  - Contract expiration date (some empty)
  - Agent name (some empty)
  - Image url
  - URL

  - Current Club domestic competition ID
  - Current Club name

## Player Valuation: (Static -> Postgre)
  - Player Id

  - Last season
  - Datetime
  - Date
  - Dateweek (Ignore)
  - Market value in eur
  - n ??? (always 1)

  - Current club id (Never changes for same player)
  - Player club domestic competition id

## appearances: (Dynamic -> Mongo)
  - appearance id
  - game id
  - player id
  - player name
  - player club id
  - competition id

  - date
  - yellow cards
  - red cards
  - goals
  - assists
  - minutes played

## Games: (Dynamic -> Mongo)
  - Game id
  - Competition Id

  - season
  - round
  - date

  - home club id
  - away club id
  - home club name
  - away club name

  - home club goals
  - away club goals
  - home club position
  - home club position (league position)
  - away club position (league position)
  - home club manager name
  - away club manager name
  - stadium
  - attendance
  - referee
  - URL
  - home club formation (empty)
  - away club formation (empty)
  - aggregate
  - Competition type (domestic/international league)

## Club games: (Dynamic -> mongoDB)
  - game id
  - club id

  - own goal
  - own position (sometimes empty)
  - own manager name

  - opponent id
  - opponent goals
  - opponent position (sometimes empty)
  - opponent manager
  - hosting (Home/Away)
  - is win (0/1)

## Game events: (Dynamic -> mongoDB)
  - game event id
  - date

  - game id
  - minute
  - type

  - club id
  - player id
  - description

  - player in id
  - player assist id

## Game lineups: (Dynamic -> Mongodb)
  - game lineups id
  - game id
  - club id
  - type
  - number (player number)
  - player id
  - player name
  - team captain (0/1)
  - position

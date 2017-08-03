const User = require ('./server/db/models/index').User;
const Group = require ('./server/db/models/index').Group;
const db = require('./server/db');

const users = [
  {id: 1, firstName: 'Anne Marie', lastName: 'King', imageUrl: 'http://i.imgur.com/lj8qTP5.jpg', email: 'a@a.a', description: 'Hey Im Anne Marie', password: '123'},
  {id: 2, firstName: 'Eric', lastName: 'King', imageUrl: 'http://i.imgur.com/zpP309d.jpg', email: 'b@a.a', description: 'YOOO', password: '123'},
  {id: 3, firstName: 'Andy', lastName: 'King', imageUrl: 'http://i.imgur.com/daxT1SV.jpg', email: 'c@a.a', description: 'Just Keep Swimming', password: '123'},
  {id: 4, firstName: 'Chris', lastName: 'King', imageUrl: 'http://i.imgur.com/CZPKX7D.png', email: 'd@a.a', description: 'I like to be called Emerol', password: '123'},
  {id: 5, firstName: 'Amy', lastName: 'King', imageUrl: 'http://i.imgur.com/5WRjs59.jpg', email: 'e@a.a', description: 'Amy is my name', password: '123'},
  {id: 6, firstName: 'Katherine', lastName: 'Pierce', imageUrl: 'http://i.imgur.com/p4it4jj.jpg', email: 'f@a.a', description: 'I love Stefan!', password: '123'},
  {id: 7, firstName: 'Hester', lastName: 'Notenboom', imageUrl: 'http://i.imgur.com/YYwtTpT.jpg', email: 'g@a.a', description: 'hey pppl', password: '123'},
  {id: 8, firstName: 'PJ', lastName: 'Strobel', imageUrl: 'http://i.imgur.com/npQdPlV.png', email: 'h@a.a', description: 'hey im peeeej', password: '123'},
  {id: 9, firstName: 'Darren', lastName: 'Spensieren', imageUrl: 'http://i.imgur.com/m5bWqNg.jpg', email: 'i@a.a', description: 'darren here', password: '123'},
  {id: 10, firstName: 'Tim', lastName: 'Riggins', imageUrl: 'http://i.imgur.com/eZEzs9i.jpg', email: 'j@a.a', description: 'texas forever, clear eyes, full hearts!', password: '123'},
  {id: 11, firstName: 'Megan', lastName: 'Kasarda', imageUrl: 'http://i.imgur.com/MyzC5Dk.jpg', email: 'k@a.a', description: 'hey', password: '123'},
  {id: 12, firstName: 'Cameron', lastName: 'Saum', imageUrl: 'http://i.imgur.com/b4gL9XC.jpg', email: 'l@a.a', description: 'I like math', password: '123'},
  {id: 13, firstName: 'Chandler', lastName: 'Bing', imageUrl: 'http://i.imgur.com/LuKLDKF.png', email: 'm@a.a', description: 'Could I BE wearing any more clothes?', password: '123'},
  {id: 14, firstName: 'Bobby', lastName: 'Kelly', imageUrl: 'http://i.imgur.com/mWUN7w1.png', email: 'n@a.a', description: 'hey gurrrlll', password: '123'},
  {id: 15, firstName: 'Jarett', lastName: 'Brunner', imageUrl: 'http://i.imgur.com/zTyY8Rn.jpg', email: 'o@a.a', description: 'JB HERE', password: '123'},
  {id: 16, firstName: 'Doug', lastName: 'Stockton', imageUrl: 'http://i.imgur.com/cp1fERX.jpg', email: 'p@a.a', description: 'Im Doug', password: '123'},
  {id: 17, firstName: 'Emily', lastName: 'Krutz', imageUrl: 'http://i.imgur.com/9cKGcu4.png', email: 'q@a.a', description: 'hey im emily', password: '123'},
];

const groups = [
  {id: 1, name: 'Wine & Settlers', description: 'Looking for a fourth to play Settlers of Catan and drink some wine with! Every Wednesday!'},
  {id: 2, name: 'Frisbee Golf on the Oval', description: 'Need one more to make teams even!'},
  {id: 3, name: 'Road Trip', description: 'Were going on a road trip to Cali and are looking for one more person to split gas with and fill up the car!'},
  {id: 4, name: 'Del Taco is so good', description: 'We really like Del Taco and were looking for cool ppl who like Del Taco too'},
  {id: 5, name: 'Secor Lanes - Bowling every Sunday evening', description: 'We go bowling every Sunday - like if you want to join!'},
  {id: 6, name: 'Vampire Diaries <3', description: 'Swipe right for the raddest Vampire Diaries watch party youve ever been to'},
  {id: 7, name: 'Work Out buddies', description: 'We usually work out in the evenings - looking for others who like running and lifting'},
  {id: 8, name: 'Dollar Beer Night', description: 'Do you like cheap beer? Do you like cool people? SWIPE RIGHT!'},
  {id: 9, name: 'LZR TAG', description: 'We just really like to play lazer tag. Probably too much.'},
  {id: 10, name: 'Looking for a roommate', description: 'Need someone to move in September 30!'},
  {id: 11, name: 'Making an app', description: 'Hey were a group of JavaScript programmers making this sweet app thats gonna make bank. Looking for business partners'},
  {id: 12, name: 'Weekend Camping Trips', description: 'We like getting out of the city for camping trips and were looking to meet people whod be interested in tagging along. We wont murder you we swear!'},
  {id: 13, name: 'Hachi Night', description: 'So we made up this REALLY awesome game. called Hachi. And we play a lot and you should play too.'},
  {id: 14, name: 'AMSTERDAM', description: 'Taking a weekend trip to Amsterdam - we got one extra seat whos in?'},
  {id: 15, name: 'Were super famous', description: 'Want to meet us?'},
];

const groupAssociations = [
  {groupId: 1, userId: 1}, {groupId: 1, userId: 3}, {groupId: 1, userId: 12}, {groupId: 1, userId: 15}, {groupId: 1, userId: 16},
  {groupId: 2, userId: 1}, {groupId: 2, userId: 11}, {groupId: 2, userId: 14}, {groupId: 2, userId: 17}, {groupId: 2, userId: 9},
  {groupId: 3, userId: 1}, {groupId: 3, userId: 3}, {groupId: 3, userId: 12}, {groupId: 3, userId: 15},
  {groupId: 4, userId: 1}, {groupId: 4, userId: 3}, {groupId: 4, userId: 12}, {groupId: 4, userId: 15}, {groupId: 4, userId: 16},
  {groupId: 5, userId: 1}, {groupId: 5, userId: 3}, {groupId: 5, userId: 4},  {groupId: 5, userId: 12},{groupId: 5, userId: 15}, {groupId: 5, userId: 16},
  {groupId: 6, userId: 1}, {groupId: 6, userId: 5}, {groupId: 6, userId: 6}, {groupId: 6, userId: 11}, {groupId: 6, userId: 15},
  {groupId: 7, userId: 1}, {groupId: 7, userId: 16}, {groupId: 7, userId: 3},
  {groupId: 8, userId: 1}, {groupId: 8, userId: 3}, {groupId: 8, userId: 12}, {groupId: 8, userId: 15}, {groupId: 8, userId: 16},
  {groupId: 9, userId: 1}, {groupId: 9, userId: 2}, {groupId: 9, userId: 3}, {groupId: 9, userId: 4}, {groupId: 9, userId: 5},
  {groupId: 10, userId: 11}, {groupId: 10, userId: 17},
  {groupId: 11, userId: 1}, {groupId: 11, userId: 2}, {groupId: 11, userId: 3}, {groupId: 11, userId: 4}, {groupId: 11, userId: 5},
  {groupId: 12, userId: 10}, {groupId: 11, userId: 12},
  {groupId: 13, userId: 1}, {groupId: 13, userId: 8}, {groupId: 13, userId: 9}, {groupId: 13, userId: 11}, {groupId: 13, userId: 14}, {groupId: 13, userId: 15},
  {groupId: 14, userId: 1}, {groupId: 14, userId: 7},
  {groupId: 15, userId: 6}, {groupId: 15, userId: 10}, {groupId: 15, userId: 13},
];

const friendAssociations = [
  {userId: 1, friendId: 2}, {userId: 1, friendId: 3}, {userId: 1, friendId: 4}, {userId: 1, friendId: 5}, {userId: 1, friendId: 7}, {userId: 1, friendId: 8}, {userId: 1, friendId: 9}, {userId: 1, friendId: 11}, {userId: 1, friendId: 12}, {userId: 1, friendId: 14}, {userId: 1, friendId: 15}, {userId: 1, friendId: 16}, {userId: 1, friendId: 17},
  {userId: 2, friendId: 1}, {userId: 2, friendId: 3}, {userId: 2, friendId: 4}, {userId: 2, friendId: 5}, {userId: 2, friendId: 15}, {userId: 2, friendId: 16},
  {userId: 3, friendId: 1}, {userId: 3, friendId: 2}, {userId: 3, friendId: 4}, {userId: 3, friendId: 5}, {userId: 3, friendId: 12}, {userId: 3, friendId: 15}, {userId: 3, friendId: 16},
  {userId: 4, friendId: 1}, {userId: 4, friendId: 2}, {userId: 4, friendId: 3}, {userId: 4, friendId: 5}, {userId: 4, friendId: 15}, {userId: 4, friendId: 16},
  {userId: 5, friendId: 1}, {userId: 5, friendId: 2}, {userId: 5, friendId: 3}, {userId: 5, friendId: 4}, {userId: 5, friendId: 12}, {userId: 5, friendId: 15},
  {userId: 7, friendId: 1},
  {userId: 8, friendId: 1}, {userId: 8, friendId: 9}, {userId: 8, friendId: 11}, {userId: 8, friendId: 14}, {userId: 8, friendId: 17},
  {userId: 9, friendId: 1}, {userId: 9, friendId: 8}, {userId: 9, friendId: 11}, {userId: 9, friendId: 14}, {userId: 9, friendId: 17},
  {userId: 11, friendId: 1}, {userId: 11, friendId: 8}, {userId: 11, friendId: 9}, {userId: 11, friendId: 14}, {userId: 11, friendId: 17},
  {userId: 12, friendId: 1}, {userId: 12, friendId: 3}, {userId: 12, friendId: 15}, {userId: 12, friendId: 16},
  {userId: 14, friendId: 1}, {userId: 14, friendId: 8}, {userId: 14, friendId: 9}, {userId: 14, friendId: 11}, {userId: 14, friendId: 16}, {userId: 14, friendId: 17},
  {userId: 15, friendId: 1}, {userId: 15, friendId: 3}, {userId: 15, friendId: 5}, {userId: 15, friendId: 12}, {userId: 15, friendId: 16},
  {userId: 16, friendId: 1}, {userId: 16, friendId: 3}, {userId: 16, friendId: 12}, {userId: 16, friendId: 15},
  {userId: 17, friendId: 1}, {userId: 17, friendId: 8}, {userId: 17, friendId: 9}, {userId: 17, friendId: 11}, {userId: 17, friendId: 14}
];



const seed = () => {
  console.log('in seed')
  Promise.all(users.map(user =>
    User.findOrCreate({where: user})
  ))
  Promise.all(groups.map(group =>
    Group.findOrCreate({where: group})
  ))
}

const seedAssociations = () => {
  console.log('in seed associations');
  Promise.all(groupAssociations.map(groupAssociation => {
    let GroupAssociations = db.models.groupAssociations;
    GroupAssociations.findOrCreate({where: groupAssociation})
  }))
  Promise.all(friendAssociations.map(friendAssociation => {
    let FriendAssociations = db.models.friendAssociations;
    FriendAssociations.findOrCreate({where: friendAssociation})
  }))
}

module.exports = seed;


const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed()
    })
    .then(() => {
      console.log('Seeding associations...');
      return seedAssociations()
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();

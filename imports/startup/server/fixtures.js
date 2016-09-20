import { Accounts } from 'meteor/accounts-base';

import { News } from '../../api/News.js';

Meteor.startup(() => {
  if(Meteor.users.find().count() === 0){
    Accounts.createUser({
        username: "test_user",
        email : "test@test.com",
        password : "qwerty"
    });
  }  
  if (News.find().count() === 0) {
    const data = [
      {
        title: 'test 1',
        text: "<p>test text 1</p>",
        date: new Date(),
        username: "test_user"
       },
       {
        title: 'test 2',
        text: "<p>test text 2</p>",
        date: new Date(),
        username: "test_user"
       },
       {
        title: 'test 3',
        text: "<p>test text 3</p>",
        date: new Date(),
        username: "test_user"
       },
    ];
    
    data.forEach((n) => {
      const nid = News.insert({
        title: n.title,
        text: n.text,
        date: n.date,
        username: n.username
      });
    });
  }
});  
    
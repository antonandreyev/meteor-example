import { Template } from 'meteor/templating';

import { News } from '../api/News.js';

import './post.js';
import './news.html'; 

Template.news.helpers({
  posts: News.find({}, {sort: { date: -1 }})
});


Template.news.events({
  'submit .add-news'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const title = target.title.value;
    const text = target.text.value;

    // Insert a task into the collection
    News.insert({
        title: title,
      text: text,
      date: new Date(), 
      username: Meteor.user().username
    }); 

    // Clear form
    target.text.value = '';
  }
});
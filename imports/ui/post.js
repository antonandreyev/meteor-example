import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { News } from '../api/News.js';

import './post.html';

// global helper
Template.registerHelper('formatDate', function(date) {
    return date.getMonth() + "." + date.getDate() + "." + date.getFullYear();
}); 

Template.post.events({
  'click .delete'() {
    News.remove(this._id);
    FlowRouter.go('main.show');
  },
});

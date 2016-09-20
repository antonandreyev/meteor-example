import { Meteor } from 'meteor/meteor';
import { News } from '../api/News.js';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './post.js';
import './full_post.html';

Template.full_post.helpers({
  currentPost: function() {
      return News.findOne(FlowRouter.getParam('_id'));
  }
});
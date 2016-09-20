import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layout.js';
import '../../ui/news.js';
import '../../ui/full_post.js';
import '../../ui/post.js';

FlowRouter.route('/post/:_id', {
  name: 'Post.show',
  action() {  
    BlazeLayout.render('layout', { main: 'full_post' });
  },
});

FlowRouter.route('/', {
  name: 'main.show',
  action() {  
    BlazeLayout.render('layout', { main: 'news' });
  },
});
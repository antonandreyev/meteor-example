import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const News = new Mongo.Collection('News');

News.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  title: { type: String },
  text: { type: String },
  date: { type: Date },
  username : { type: String }
});

News.attachSchema(News.schema);

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
  //rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('services');
  this.route('contact');
  this.route('post');

  /*
    this.resource('posts', {patch: '/posts'},function(){
      this.route('new');
      this.route('post',{path: '/:post_id'});
    })
  */


  this.route('cars', function() {
    this.route('index', { path: '/' });
    this.route('new');
    this.route('edit',{path: '/edit/:car_id'});
  });

  this.route('users');
  this.route('componentgit');
});

export default Router;

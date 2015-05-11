/**
 * Author: Diego Castillo
 * Company: Workouter
 * Description: Tests for the profile user view.
 */

/*global define, describe, it, afterEach, beforeEach*/
define([
  'views/profile/profile_user_view',
  'models/user_model'
],function(ProfileUserView, UserModel) {

  'use strict';

  describe('Profile User View', function() {

    beforeEach(function() {
      this.router = new Backbone.Router();
      this.userModel = UserModel.getInstance();
      this.profileUserView = new ProfileUserView({
        router: this.router
      });
      this.profileUserView.render();
    });

    afterEach(function() {
      this.userModel = null;
      this.router = null;
      this.profileUserView = null;
    });

    describe('Profile User View Initialization', function() {

      it('is defined', function() {
        expect(this.profileUserView).to.be.ok;
      });

      it('knows about the app router', function() {
        expect(this.profileUserView.router).to.be.instanceOf(Backbone.Router);
      });

      it('has correct id', function() {
        expect(this.profileUserView.attributes.class).to.equal('profile-user-view');
      });

    });

    describe('Profile User View DOM', function() {

      it('has a user "avatar" element', function() {
        var logoutText = this.profileUserView.$el.find('.user-avatar');
        expect(logoutText.length).to.be.equal(1);
      });

      it('has a user "displayName" element', function() {
        var logoutText = this.profileUserView.$el.find('.user-display-name');
        expect(logoutText.length).to.be.equal(1);
      });

      it('has a user "userLocation" element', function() {
        var logoutText = this.profileUserView.$el.find('.user-location');
        expect(logoutText.length).to.be.equal(1);
      });
    });

  });
});
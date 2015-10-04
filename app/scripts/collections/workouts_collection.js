// A collection of workouts.

/*global define, Firebase*/
define([
  'jquery',
  'underscore',
  'backbone',
  'models/workout_model',
  'models/user_model',
  'services/firebase_service',
  'firebase',
  'backbonefire'
], function($, _, Backbone, WorkoutModel, UserModel, FirebaseService) {

  'use strict';

  var WorkoutsCollection = Backbone.Firebase.Collection.extend({

    model: WorkoutModel,

    // Order by descending date
    comparator: function(a, b) {
      return b.get('date') - a.get('date');
    },

    // URL where this resource is going to be stored
    // for this specific user
    url: function() {
      var userModel = UserModel.getInstance(),
          url = FirebaseService.url + 'workouts/' +
                userModel.getUniqueIdentifier();
      return new Firebase(url);
    },

    // Adds a workout to the collection
    addWorkout: function(workout) {
      this.add(workout.toJSON());
    },

    // Fetch all workouts and trigger success if successful,
    // trigger error otherwise
    getWorkouts: function() {
      var that = this;
      this.fetch({
        success: function() {
          that.trigger('success');
        },
        error: function() {
          that.trigger('error');
        }
      });
    },

    // Get specific collection workout
    // returns workout if found, false otherwise
    getWorkout: function(workoutId) {
      return this.get(workoutId) ? this.get(workoutId) : false;
    },

    // Removes a workout from collection
    removeWorkout: function(workout) {
      this.remove(workout);
    },

    // Returns true if collection has workouts,
    // false otherwise
    hasWorkouts: function() {
      return this.length > 0;
    }

  });

  return WorkoutsCollection;

});

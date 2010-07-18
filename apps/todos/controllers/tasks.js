// ==========================================================================
// Project:   Todos.tasksController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Todos.tasksController = SC.ArrayController.create(
/** @scope Todos.tasksController.prototype */ {

  summary: function() {
    var len = this.get('length');
 
    if (len && len > 0) {
      return len === 1 ? "1 task" : "%@ tasks".fmt(len);
    } else return "No tasks";
  }.property('length').cacheable()  

}) ;

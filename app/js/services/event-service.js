/**
 * Created by fahrankamili on 11/27/16.
 */
app.factory('eventService',function(){
    var _events = []
    var factory = {}
    factory.addEvent = function(event){
        _events.push(event)
    }
    factory.setEvents = function(events){
        console.log('In event-service, setEvents is called')
        console.log('Events passed: ' + events)
        _events = events
    }
    factory.getEvents = function(){
        return _events
    }
    return factory
});


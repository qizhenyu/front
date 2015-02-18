//36Kr Next
qwest.get('http://node-read.avosapps.com/next').then(function(res){
  next.lists = JSON.parse(res);
})
var next = new Vue({
  el: '#next',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//Hacker News
qwest.get('http://pipes.yahoo.com/pipes/pipe.run?_id=2FV68p9G3BGVbc7IdLq02Q&_render=json&feedcount=10&feedurl=http%3A%2F%2Fqiwen.lu%2Ffeed').then(function(res){
  hackernews.lists = JSON.parse(res);
})
var hackernews = new Vue({
  el: '#hackernews',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//V2EX
qwest.get('http://node-read.avosapps.com/v2ex').then(function(res){
  v2ex.lists = JSON.parse(res);
})
var v2ex = new Vue({
  el: '#v2ex',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//toutiao
qwest.get('http://node-read.avosapps.com/toutiao').then(function(res){
  toutiao.lists = JSON.parse(res);
})
var toutiao = new Vue({
  el: '#toutiao',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//xitugold
qwest.get('http://node-read.avosapps.com/xitugold').then(function(res){
  xitugold.lists = JSON.parse(res);
  console.log(JSON.parse(res))
})
var xitugold = new Vue({
  el: '#xitugold',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})
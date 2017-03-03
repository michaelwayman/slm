# Software Licenses Manager


There are 2 servers running for this app to work.

 1. webpack-dev-server serves our frontend files at localhost:8080
 2. django development server serves out backend api at localhost:8000


webpack-dev-server is configured to route 'localhost:8080/api/*' requests to localhost:8000

*for example*

```
$.ajax({
    type: "POST",
    url: '/api/users/'
})
```

will get routed to our django backend running on localhost:8000
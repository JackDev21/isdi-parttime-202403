curl -X PATCH http://localhost:7070/customers/66c493099afef54e8b0112e1/update -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmM0NGU5YjIyMDM3M2MzMzA5Y2ZhNDMiLCJpYXQiOjE3MjQyMjUxOTUsImV4cCI6MTcyNDgyOTk5NX0.mZw6BK03Apj6s3CINp-XfUibGeS5piP5votauoIme2A" -H "Content-type: application/json" -d '{"username":"Pepe"}' -v
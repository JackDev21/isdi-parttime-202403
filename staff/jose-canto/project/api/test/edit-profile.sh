# curl -X PATCH http://localhost:7070/users/66ab9387e2e5e2ef52b61603/edit -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmFiOTM4N2UyZTVlMmVmNTJiNjE2MDMiLCJpYXQiOjE3MjI3MTA0MzgsImV4cCI6MTcyMzMxNTIzOH0.Fmlag4anIl0HjyQXwCuxuFhW04D7fZNlpYNdrLF9RXs" -H "Content-type: application/json" -d '{"username":"Jacky","email":"jacky@email.es","fullName":"Jacky Sparrow","companyName":"Jacky Enterprise, S.L.","address":"Calle Jacky 123 Madrid 03660","phone":"655555123","bankAccount":"ES61 1234 3456 42 0456323539","companyLogo":"https://media.giphy.com/media/SvFocn0wNMx0iv2rYz/giphy.gif?cid=ecf05e4754stf3bh4aak1rx98onmuiuder1iacipdfrq7jpb&ep=v1_gifs_search&rid=giphy.gif&ct=g"}' -v

curl -X PATCH http://localhost:7070/users/66ab9387e2e5e2ef52b61603/edit -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmFiOTM4N2UyZTVlMmVmNTJiNjE2MDMiLCJpYXQiOjE3MjI3MTA0MzgsImV4cCI6MTcyMzMxNTIzOH0.Fmlag4anIl0HjyQXwCuxuFhW04D7fZNlpYNdrLF9RXs" -H "Content-type: application/json" -d '{"username":"Jack","companyLogo":"https://seeklogo.com/images/W/wayne-enterprises-logo-27B6BAEE5F-seeklogo.com.png"}' -v
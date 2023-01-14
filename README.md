
# Squeezr

Squeezr is a URL shortener to reduce a long link.


## Authors

- [@taylankalkan01](https://www.github.com/taylankalkan01)


## Tech Stack

**Client:** React, @chakra-ui/react

**Server:** Node, Express, Typescript


## Screenshots





## Run Locally

Clone the project

```bash
  git clone https://github.com/taylankalkan01/Squeezr.git
```

Go to the backend project directory

```bash
  cd backend
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  backend: npm run dev 
  frontend: npm start 
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`APP_PORT` = `3001`

`MONGO_URL`= `mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]`

`CORS_ORIGIN`=  ```"http://localhost:3000"```

## API Reference

#### Create ShortUrl

```http
  POST /api/url
```

| Body          | Type   
| :--------     | :------- 
| `destination` | `string`

#### Get ShortUrl

```http
  GET /api/url/:shortId
```

| Params    | Type     
| :-------- | :------- 
| `shortId` | `string` 

#### Handle Redirect
```http
  GET /:shortId
```

| Params    | Type     
| :-------- | :------- 
| `shortId` | `string` 






## Appendix

Background image will be generated randomly every single time.


## Feedback

If you have any feedback, please reach out to me at e.taylankalkan@hotmail.com

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/taylankalkan01/)


## License

[MIT](https://choosealicense.com/licenses/mit/)


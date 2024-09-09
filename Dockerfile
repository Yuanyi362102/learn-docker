FROM  node:11
ADD . /app
WORKDIR /app
RUN npm install && npm install -g nodemon
CMD nodemon app.js  

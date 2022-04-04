FROM node:16
# ENV NODE_ENV=production

# RUN mkdir -p /app
WORKDIR /app
COPY ./package*.json ./
RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080 

CMD node [ "node", "app.js"]

# FROM node:12.13.0-alpine
# RUN mkdir -p /opt/app
# WORKDIR /app
# RUN adduser -S app
# COPY addressbook/ .
# RUN npm install
# RUN chown -R app /opt/app
# USER app
# EXPOSE 3000
# CMD [ "npm", "run", "pm2" ]
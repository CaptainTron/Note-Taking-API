FROM node:20-alpine
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]

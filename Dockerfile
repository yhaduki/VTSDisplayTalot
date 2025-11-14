FROM node:21
WORKDIR /app
COPY package*.json ./
COPY webpack.config.js ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
RUN npm install
COPY . .
CMD ["npm", "start"]

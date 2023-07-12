# Stage 0 - Build Frontend Assets
FROM node

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 443

RUN npm run dev

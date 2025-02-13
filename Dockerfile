FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

FROM nginx:alpine
COPY --from=builder /app/dist/san-valentin/browser /usr/share/nginx/html
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
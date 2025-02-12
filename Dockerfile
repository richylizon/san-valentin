FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

FROM nginx:1.25
COPY --from=builder /app/dist/san-valentin/browser /usr/share/nginx/html
COPY nginx-custom.conf /etc/nginx/nginx.conf
RUN echo "fs.file-max = 65535" >> /etc/sysctl.conf
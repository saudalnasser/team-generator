
FROM node:alpine AS Build
WORKDIR /app
COPY . .
RUN npm ci && npm run build:prod

FROM nginx:alpine
COPY --from=Build /app/dist/team-generator /usr/share/nginx/html
EXPOSE 80

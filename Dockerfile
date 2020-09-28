FROM node:12

WORKDIR /anam-food-backend/

ARG CACHEBUST=1

COPY . /anam-food-backend/
RUN yarn --network-timeout 1000000
RUN yarn build
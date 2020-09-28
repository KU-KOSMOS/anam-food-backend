FROM node:12

WORKDIR /anam-food-backend/

ARG CACHEBUST=1

COPY . /anam-food-backend/
RUN yarn
RUN yarn build


CMD yarn prod
FROM node:12

WORKDIR /anam-food-bakcend/
RUN yarn
RUN yarn build

COPY . /anam-food-backend/

CMD yarn prod
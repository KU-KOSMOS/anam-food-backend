FROM node:12

WORKDIR /anam-food-bakcend/
RUN yarn
RUN yarn build

CMD yarn prod
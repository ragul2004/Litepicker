FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm i

# CMD ["npm", "run", "watch"]

# docker build -t ragul2004/litepicker .                                    
# docker run -it -v /app/node_modules -v ${PWD}:/app ragul2004/litepicker sh  

# npm run watch
# 


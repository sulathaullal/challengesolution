This application is build using Angular Framework 

Github Url:
https://github.com/sulathaullal/challengesolution

Steps to run the application 
--------------------------------

1. Download Code editor like Visusal Studio code, NPM, Node.js 
2. git clone the code in VSC using above Github url
3. Right click on the folder amd open terminal 
4. Install npm and angular CLI i.e. type following commands

	npm install
	npm install -g @angular/cli
  
5. To run the application , type 

	npm start
  
5. After successful compilation, check output on the browser by hitting 

	http://localhost:4200/
	
Steps to run application using docker 
--------------------------------------

I have also Dockerized the solution using Docker container 
The compiled files are in dist older

1. Download Docker Desktop
2. In Visusal Studio code Editor , open terminal and run following command to create Docker image

	docker build -t challengesolution-image .
  
3. Make sure the docker is running at the background
4. To check if docker image (challengesolution-image) is created, type following command

	docker images
  
5. To run the container from the image we created, run command 

	docker run --name challengesolution -dp 8010:80 challengesolution-image
  
6. Test the angular application on the browser by hitting 

	http://localhost:8010/




	

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'docker build -t backendforjenkins backend/.'
                sh 'docker build -t frontendforjenkins frontend/.'
                
            }
        }
        stage('Unit Tests') {
            steps {
                echo 'Unit Testing..'
                sh 'docker run --rm -e "CI=true" --entrypoint "npm" backendforjenkins test'
                sh 'docker run --rm -e "CI=true" --entrypoint "npm" frontendforjenkins test'
            }
        }
        stage('E2E Tests') {
             steps {
                echo 'E2E Testing..'
                sh 'docker stop e2efrontend || true'
                sh 'docker stop e2ebackend || true'
                sh 'docker run --rm -p 4001:4001 -e "PORT=4001" -d --name e2ebackend backendforjenkins'
                sh 'docker run --rm -p 4000:4000 -e "PORT=4000" -d --name e2efrontend -e "REACT_APP_BACKEND_PORT=4001" frontendforjenkins'
                echo 'Postman/newman tests...'
                //sh 'docker run --network="host" -v $PWD/backend/apiTestsPostmanCollections:/etc/newman  postman/newman run ValidationTests.postman_collection.json'
                echo 'Cypress tests...'
                sh 'docker run --network="host"  -v $PWD/e2etests:/e2e -w /e2e cypress/included:3.6.0 --env NO_COLOR=1 --env BASE_URL=http://localhost:4000/ ' 
                sh 'docker stop e2ebackend'
                sh 'docker stop e2efrontend'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh "heroku container:login"
                dir("backend") {
                    sh "heroku container:push --app my-sudoku-backend web"
                    sh "heroku container:release --app my-sudoku-backend web"
                }
                dir("frontend") {
                    sh "heroku container:push --app sudoku-react-frontend web"
                    sh "heroku container:release --app sudoku-react-frontend web"
                }
            }
        }
    }
}
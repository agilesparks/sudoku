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
                echo 'E2E Testing.. (Cypress)'
                sh 'docker stop e2efrontend || true'
                sh 'docker stop e2ebackend || true'
                sh 'docker run --rm -p 4001:4001 -e "PORT=4001" -d --name e2ebackend backendforjenkins'
                sh 'docker run --rm -p 4000:4000 -e "PORT=4000" -d --name e2efrontend -e "BACKEND_PORT=4001" frontendforjenkins'
                sh 'docker run --network="host" -e "CYPRESS_baseUrl=http://localhost:4000/" -v $PWD/frontend:/e2e -w /e2e cypress/included:3.2.0'
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
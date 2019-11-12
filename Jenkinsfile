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
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'docker run --rm -e "CI=true" --entrypoint "npm" backendforjenkins test'
                sh 'docker run --rm -e "CI=true" --entrypoint "npm" frontendforjenkins test'           }
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
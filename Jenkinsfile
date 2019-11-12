pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                dir("folder") {
                    sh "pwd"
                }
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
            }
        }
    }
}
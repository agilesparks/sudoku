pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                docker build -t backendforjenkins backend/.
                docker build -t frontendforjenkins frontend/.
                
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                docker run --rm -e "CI=true" --entrypoint "npm" backendforjenkins test
                docker run --rm -e "CI=true" --entrypoint "npm" frontendforjenkins test            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
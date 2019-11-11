pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                docker build -t backendforjenkins backend/.
                
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                docker run --rm -e "CI=true" --entrypoint "npm" backendforjenkins test
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
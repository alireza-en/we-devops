pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                echo 'Getting code from GitHub'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image'
                sh 'docker build -t we-devops-web .'
            }
        }

        stage('Run Web Server') {
            steps {
                echo 'Running website container'
                sh 'docker rm -f we-devops-container || true'
                sh 'docker run -d -p 8081:80 --name we-devops-container we-devops-web'
            }
        }
    }

    post {
        success {
            echo 'we-devops website deployed successfully!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}

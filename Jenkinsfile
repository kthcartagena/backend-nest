pipeline{
    agent any                   // tipo de nodo donde se ejecuta el pipeline
    
    //escenarios -> escenario -> pasos
    environment {
        // Variables de entorno
        npm_config_cache = "${WORKSPACE}/.npm" // cache de npm
        NODE_ENV = 'production'
        APP_NAME = 'my-node-app'
    }
    stages {
        stage('saludo a usuario') {           
            steps {
                sh '"echo Hola, saludo!"'
            }
        }  
        stage('Build docker'){
            agent {
                docker {
                    image 'node:22'  // imagen de docker que se usara
                    reuseNode true // reutiliza el nodo de docker
                }
            }
            stages('Install Dependencies') {
                steps {
                    echo 'Instalando dependencias...'
                    sh 'npm ci'
                }           
            }        
        }
    
        // stage('Test') {
        //     steps {
        //         echo 'Running tests...'
        //         sh 'npm test'
        //     }
        // }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying the application...'
        //         sh 'npm run deploy'
        //     }
        // }
}    
pipeline{
    agent any                   // tipo de nodo donde se ejecuta el pipeline
    
    //escenarios -> escenario -> pasos
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
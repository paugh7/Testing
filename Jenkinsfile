pipeline {

  agent none

  stages{
      stage("build"){
        when{
            changeset "**/jenkins/**"
          }

        agent{
          docker{
            image 'node:current-alpine3.16'
            args '-p 3000:3000'
          }
        }

        steps{
          echo 'Compiling sample react app..'
          dir('.'){
            sh 'npm install'
          }
        }
      }
      stage("test"){
        when{
          changeset "**/jenkins/**"
        }
        agent{
          docker{
            image 'maven:3.6.1-jdk-8-slim'
            args '-v $HOME/.m2:/root/.m2'
          }
        }
        steps{
          echo 'Running Unit Tets on worker app..'
          dir('worker'){
            sh 'npm test'
           }

          }      

  post{
    always{
        echo 'Building pipeline for react is completed..'
    }
  }
}
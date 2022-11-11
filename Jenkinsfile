pipeline {

  agent none

  stages{
      stage("Build"){
        agent{
          docker{
            image 'node:current-alpine3.16'
            args '-p 3000:3000'
          }
        }
        steps{
          echo 'Compiling sample react app..'
            sh 'npm install'
        }
      }
      stage("test"){
        agent{
          docker{
            image 'node:current-alpine3.16'
          }
        }
        steps{
          echo 'Running Unit Tets on worker app..'
            sh 'npm test'
        }     
      }
    }  
  post{
    always{
        echo 'Building pipeline for react is completed..'
    }
  }
}
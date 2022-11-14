pipeline {

  agent none

  stages{
      stage("build"){
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
          echo 'Running Unit Tets on Node.js app..'
            sh 'npm install --save-dev @testing-library/react'
            sh 'npm test'
        }     
      stage('docker-package'){
          agent any
            steps{
            echo 'Packaging sample app with docker'
            script{
              docker.withRegistry('https://index.docker.io/v1/', 'dockerlogin') {
                  def workerImage = docker.build("herepiggy2/sample:v${env.BUILD_ID}")
                  workerImage.push()
                  workerImage.push("${env.BRANCH_NAME}")
                  workerImage.push("latest")
              }
            }
          }
      }
    }  
  post{
    always{
        echo 'Building pipeline for react is completed..'
    }
  }
}